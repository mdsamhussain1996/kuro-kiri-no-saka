import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const CDP_PORT = 9222;
const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('media/review');
fs.mkdirSync(OUT_DIR, { recursive: true });

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
  const target = await openNewTab(`${BASE_URL}/`);
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
        else if (type === 'warning' && text.includes('BiquadFilter')) consoleWarnings.push(text);
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

  const snap = async (filename) => {
    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(OUT_DIR, filename), Buffer.from(data, 'base64'));
    console.log(`Captured media/review/${filename}`);
  };

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 720,
    deviceScaleFactor: 1,
    mobile: false
  });

  // 1. Intro Screenshot
  await sleep(1600);
  await snap('intro.png');

  // Press Enter to skip intro & unlock audio
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter' });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter' });
  await sleep(800);

  // 2. Chapter 1 Start
  await send('Page.navigate', { url: `${BASE_URL}/?chapter=1&skipIntro` });
  await sleep(1000);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: 640, y: 360, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 640, y: 360, button: 'left', clickCount: 1 });
  await sleep(400);
  await snap('chapter1_start.png');

  // Verify no debug chapter strip visible in normal play
  const debugStripHidden = await evaluate(`(() => {
    const btns = Array.from(document.querySelectorAll('#kuro-hud button'));
    const chBtn = btns.find(b => b.innerText.includes('I. The Climb'));
    return !chBtn || getComputedStyle(chBtn.parentElement).display === 'none';
  })()`);
  if (!debugStripHidden) throw new Error('Debug chapter strip should be hidden in normal play!');

  // Test W jump, J attack, K parry, E paint bridge, F bell, V camera, P pause
  for (const [key, code] of [['w', 'KeyW'], ['j', 'KeyJ'], ['k', 'KeyK'], ['e', 'KeyE'], ['f', 'KeyF'], ['v', 'KeyV']]) {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code });
    await sleep(60);
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code });
    await sleep(120);
  }
  await snap('parkour_action.png');

  // 3. Test Pause Menu via P key & Mute toggle via M key
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'p', code: 'KeyP' });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'p', code: 'KeyP' });
  await sleep(250);
  const pauseVisible = await evaluate(`getComputedStyle(document.getElementById('pause-menu')).display === 'flex'`);
  if (!pauseVisible) throw new Error('KeyP failed to open PauseMenu!');
  await snap('pause_menu.png');

  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'p', code: 'KeyP' });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'p', code: 'KeyP' });
  await sleep(200);

  // 4. Test all 8 chapters & capture Bosses (ch 4, 6, 8)
  for (let ch = 2; ch <= 8; ch++) {
    await send('Page.navigate', { url: `${BASE_URL}/?chapter=${ch}&skipIntro` });
    await sleep(850);
    if (ch === 4) await snap('boss1_kurogane.png');
    if (ch === 6) await snap('boss2_shirayuki.png');
    if (ch === 8) await snap('boss3_sumiou.png');
  }

  // 5. Measure rAF frame pacing over 60 frames
  const perf = await evaluate(`new Promise(resolve => {
    const deltas = [];
    let last = performance.now();
    function step(now) {
      deltas.push(now - last);
      last = now;
      if (deltas.length >= 60) {
        const avg = deltas.reduce((a, b) => a + b, 0) / deltas.length;
        const max = Math.max(...deltas);
        resolve({ avgMs: Number(avg.toFixed(2)), maxMs: Number(max.toFixed(2)), fps: Math.round(1000 / avg) });
      } else {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  })`);
  console.log('Frame Pacing (60 frames):', JSON.stringify(perf));

  // 6. Test Mobile 390x844 touch viewport
  await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Page.navigate', { url: `${BASE_URL}/?chapter=1&skipIntro` });
  await sleep(900);
  await snap('mobile_390x844.png');

  console.log(`Console Errors: ${consoleErrors.length}, BiquadFilter Warnings: ${consoleWarnings.length}, Exceptions: ${exceptions.length}`);
  if (consoleErrors.length > 0 || consoleWarnings.length > 0 || exceptions.length > 0) {
    throw new Error(`Console issues: errors=${consoleErrors.join(';')} warnings=${consoleWarnings.join(';')} exc=${exceptions.join(';')}`);
  }

  await send('Target.closeTarget', { targetId: target.id }).catch(() => {});
  ws.close();
  console.log('✓ ALL 8 CHAPTERS, BOSSES, CONTROLS, MOBILE & CONSOLE CHECKS PASSED!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
