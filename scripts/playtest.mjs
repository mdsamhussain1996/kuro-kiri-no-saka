// Part F Deterministic Playtest Harness (CDP + manual onFixedUpdate(1/60) stepping)
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const CDP_PORT = 9222;
const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('media/review');
fs.mkdirSync(OUT_DIR, { recursive: true });

function assert(cond, msg) {
  if (!cond) throw new Error(`ASSERTION FAILED: ${msg}`);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function openNewTab(url) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: '127.0.0.1',
      port: CDP_PORT,
      path: `/json/new?${encodeURI(url)}`,
      method: 'PUT'
    }, (res) => {
      let body = '';
      res.on('data', c => { body += c; });
      res.on('end', () => resolve(JSON.parse(body)));
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  const target = await openNewTab(`${BASE_URL}/?chapter=1&skipIntro`);
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let nextId = 1;
  const pending = new Map();
  const consoleErrors = [];
  const consoleWarnings = [];
  const exceptions = [];

  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve: res, reject: rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(JSON.stringify(msg.error)));
        else res(msg.result);
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        const type = msg.params?.type;
        const text = (msg.params.args || []).map(a => a.value ?? a.description ?? '').join(' ');
        if (type === 'error') consoleErrors.push(text);
        else if (type === 'warning') consoleWarnings.push(text);
      } else if (msg.method === 'Runtime.exceptionThrown') {
        exceptions.push(JSON.stringify(msg.params.exceptionDetails));
      }
    });
  });

  const send = (method, params = {}) => {
    const id = nextId++;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  const evaluate = async (expression) => {
    const res = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result?.value;
  };

  const waitForGame = async () => {
    for (let i = 0; i < 60; i++) {
      const ok = await evaluate('Boolean(window.__game && window.__game.player && window.__game.level)').catch(() => false);
      if (ok) return;
      await sleep(100);
    }
    throw new Error(`Timed out waiting for window.__game. Errors: ${consoleErrors.join('; ')} Exc: ${exceptions.join('; ')}`);
  };

  await send('Page.enable');
  await send('Runtime.enable');

  // 1. Check 960x540, 1280x720, 1920x1080 HUD layout (zero overlap)
  for (const [w, h] of [[960, 540], [1280, 720], [1920, 1080]]) {
    await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false });
    await send('Page.navigate', { url: `${BASE_URL}/?chapter=4&skipIntro` });
    await waitForGame();
    await sleep(150);
    const overlapCheck = await evaluate(`(() => {
      const g = window.__game;
      if (!g) return { ok: false, reason: 'window.__game missing in dev' };
      const hint = g.hud.controlsHint?.getBoundingClientRect();
      const pbar = g.hud.powerBar?.getBoundingClientRect();
      const boss = g.hud.bossBarContainer?.getBoundingClientRect();
      const hintPbarOverlap = hint && pbar && !(hint.right <= pbar.left + 2 || pbar.right <= hint.left + 2);
      return { ok: !hintPbarOverlap, w: window.innerWidth, h: window.innerHeight, hintRight: hint?.right, pbarLeft: pbar?.left };
    })()`);
    assert(overlapCheck.ok, `HUD overlap at ${w}x${h}: ${JSON.stringify(overlapCheck)}`);
    console.log(`✓ HUD zero-overlap verified at ${w}x${h}`);
  }

  // Restore 1280x720
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });

  // 2. A2 Campaign Flow: Chapter 4 -> kill Kurogane -> no EndCard, Ippitsu unlocked, can walk to Ch 5
  await send('Page.navigate', { url: `${BASE_URL}/?chapter=4&skipIntro` });
  await waitForGame();
  const a2 = await evaluate(`(() => {
    const g = window.__game;
    g.loop.stop();
    if (g.level.boss.fsm.isInState('Intro')) {
      g.level.boss.fsm.changeState('Decide');
    }
    g.level.boss.isVulnerable = true;
    g.level.boss.takeDamage(999, true, g.player.aabb.x);
    for (let i = 0; i < 30; i++) g.loop.onFixedUpdate(1 / 60);
    const endCardOpacity = getComputedStyle(document.getElementById('end-card')).opacity;
    return {
      bossDead: g.level.boss.isDead,
      ippitsuUnlocked: g.player.hasIppitsuUnlocked,
      endCardOpacity
    };
  })()`);
  assert(a2.bossDead && a2.ippitsuUnlocked && a2.endCardOpacity === '0', `A2 failed: ${JSON.stringify(a2)}`);
  console.log('✓ A2 Campaign continuity verified: Kurogane defeat unlocks Ippitsu without ending campaign');

  // 3. A4 Mash-Bot vs All 3 Bosses (must lose or take > 60s = 3600 steps)
  for (const [ch, bossAccessor] of [[4, 'g.level.boss'], [6, 'g.level.bossShirayuki'], [8, 'g.level.bossSumiOu']]) {
    await send('Page.navigate', { url: `${BASE_URL}/?chapter=${ch}&skipIntro` });
    await waitForGame();
    const botRes = await evaluate(`(() => {
      const g = window.__game;
      g.loop.stop();
      let playerDeaths = 0;
      const boss = ${bossAccessor};
      for (let step = 0; step < 3600; step++) {
        if (boss.isDead) {
          return { killedInSec: step / 60, playerDeaths, bossHp: boss.hp };
        }
        if (g.player.fsm.currentStateName === 'Dead') {
          playerDeaths++;
          break;
        }
        const dir = boss.aabb.x >= g.player.aabb.x ? 'KeyD' : 'KeyA';
        g.input.keysDown.clear();
        g.input.keysDown.add(dir);
        if (step % 8 === 0) g.input.onKeyDown({ code: 'KeyJ', repeat: false, preventDefault: () => {} });
        if (step % 50 === 0) g.input.onKeyDown({ code: 'KeyK', repeat: false, preventDefault: () => {} });
        g.loop.onInputUpdate(1 / 60);
        g.loop.onFixedUpdate(1 / 60);
        if (!Number.isFinite(g.player.aabb.x) || !Number.isFinite(g.player.aabb.y)) {
          throw new Error('Non-finite player position during mash-bot!');
        }
      }
      return { killedInSec: null, playerDeaths, bossHp: boss.hp, maxHp: boss.maxHp };
    })()`);
    assert(botRes.playerDeaths > 0 || botRes.killedInSec === null, `Mash-bot beat Ch${ch} boss too fast: ${JSON.stringify(botRes)}`);
    console.log(`✓ A4 Mash-Bot check passed for Ch${ch} boss:`, JSON.stringify(botRes));
  }

  // 3b. Chapter 1 Lost Brushstrokes (3/3) + Bell (F) + Reload Persistence + Audio Unlock
  await send('Page.navigate', { url: `${BASE_URL}/?chapter=1&skipIntro&debug` });
  await waitForGame();
  const bsTest = await evaluate(`(() => {
    const g = window.__game;
    localStorage.removeItem('KURO_KIRI_SAVE_V1');
    g.audioEngine?.ensureContext?.();
    g.loop.stop();
    const ch1Stars = g.level.collectibles.filter(c => c.ch === 1);
    for (const star of ch1Stars) {
      g.player.aabb.x = star.x;
      g.player.aabb.y = star.y;
      g.loop.onFixedUpdate(1 / 60);
    }
    g.player.ink = 200;
    g.input.onKeyDown({ code: 'KeyF', repeat: false, preventDefault: () => {} });
    g.loop.onInputUpdate(1 / 60);
    g.loop.onFixedUpdate(1 / 60);
    g.hud.update(g.player);
    return {
      starCount: ch1Stars.length,
      allCollected: ch1Stars.every(c => c.collected && !c.mesh.visible),
      hudText: document.getElementById('hud-brushstrokes')?.innerText,
      saveRaw: localStorage.getItem('KURO_KIRI_SAVE_V1'),
      chId: g.hud.currentChapterId,
      starIds: ch1Stars.map(c => c.id),
      bellRings: g.level.bellRings.length,
      finite: Number.isFinite(g.player.aabb.x) && Number.isFinite(g.player.aabb.y)
    };
  })()`);
  assert(
    bsTest.starCount === 3 && bsTest.allCollected && bsTest.hudText === 'Brushstrokes 3/3' && bsTest.bellRings > 0 && bsTest.finite,
    `Ch1 Brushstrokes + Bell test failed: ${JSON.stringify(bsTest)}`
  );
  // Reload and verify collected stars remain hidden
  await send('Page.navigate', { url: `${BASE_URL}/?chapter=1&skipIntro` });
  await waitForGame();
  const reloadCheck = await evaluate(`(() => {
    const g = window.__game;
    const ch1Stars = g.level.collectibles.filter(c => c.ch === 1);
    return {
      allHidden: ch1Stars.every(c => c.collected && !c.mesh.visible),
      hudText: document.getElementById('hud-brushstrokes')?.innerText
    };
  })()`);
  assert(reloadCheck.allHidden && reloadCheck.hudText === 'Brushstrokes 3/3', `Brushstrokes reload persistence failed: ${JSON.stringify(reloadCheck)}`);
  console.log('✓ Ch1 3/3 Lost Brushstrokes + Bell (F) + reload persistence verified');

  // 4. Verify zero console errors & zero console warnings (including BiquadFilterNode)
  assert(consoleErrors.length === 0, `Console errors: ${consoleErrors.join('; ')}`);
  assert(consoleWarnings.length === 0, `Console warnings: ${consoleWarnings.join('; ')}`);
  assert(exceptions.length === 0, `Uncaught exceptions: ${exceptions.join('; ')}`);
  console.log('✓ A7 Zero console errors, zero warnings, zero exceptions verified');

  await send('Target.closeTarget', { targetId: target.id }).catch(() => {});
  ws.close();
  console.log('✓ ALL DETERMINISTIC PLAYTEST.MJS CHECKS PASSED!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
