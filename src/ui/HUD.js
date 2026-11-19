// Sumi-e Game HUD — Brush-Stroke Health & Ink Drops, Stamina/Dash Pips, Speedrun Timer,
// Contextual Lantern Grapple Indicator, 3-Act / 3-Boss Campaign Selector Bar & Boss Health Bar

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

export const SUMIRO_CHAPTERS = [
  { id: 1, num: 'I',    act: 'Act I',   title: 'The Climb',               kanji: '霧の登坂',     minX: -20, maxX: 45,  spawnX: 2,     spawnY: 2.5,  dash: false },
  { id: 2, num: 'II',   act: 'Act I',   title: 'The Broken Pass',         kanji: '断崖の道',     minX: 45,  maxX: 102, spawnX: 49,    spawnY: 12.5, dash: true },
  { id: 3, num: 'III',  act: 'Act I',   title: 'Temple of Silent Bells',  kanji: '無音の鐘寺',   minX: 102, maxX: 238, spawnX: 172,   spawnY: 23.0, dash: true },
  { id: 4, num: 'IV',   act: 'Act I',   title: 'Boss: Kurogane',          kanji: '黒鉄・門番',   minX: 238, maxX: 295, spawnX: 255.0, spawnY: 50.0, dash: true },
  { id: 5, num: 'V',    act: 'Act II',  title: 'Silent Sanctuary',        kanji: '静寂の伽藍',   minX: 295, maxX: 502, spawnX: 312.0, spawnY: 53.0, dash: true },
  { id: 6, num: 'VI',   act: 'Act II',  title: 'Boss: Lady Shirayuki',    kanji: '白雪・霧織',   minX: 502, maxX: 558, spawnX: 512.0, spawnY: 74.5, dash: true },
  { id: 7, num: 'VII',  act: 'Act III', title: 'Crimson Foundry',         kanji: '朱の鍛冶屋',   minX: 558, maxX: 774, spawnX: 576.0, spawnY: 78.0, dash: true },
  { id: 8, num: 'VIII', act: 'Act III', title: 'Final Boss: Sumi-Ou',     kanji: '墨王・鉄筆',   minX: 774, maxX: 999, spawnX: 786.0, spawnY: 98.5, dash: true },
];

export class HUD {
  constructor(onSelectChapter = null) {
    this.onSelectChapter = onSelectChapter;
    this.currentChapterId = 0;
    this.speedrunStartTime = performance.now();

    this.container = document.createElement('div');
    this.container.id = 'kuro-hud';
    this.container.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 12;
      font-family: 'Cinzel', serif;
    `;

    // 1. Top-Left Health Display (5 Ink Drops + Brush-Stroke Bar) & Speedrun Timer
    this.healthContainer = document.createElement('div');
    this.healthContainer.style.cssText = `
      position: absolute;
      top: 20px;
      left: 28px;
      display: flex;
      align-items: center;
      gap: 12px;
    `;

    this.inkDrops = [];
    for (let i = 0; i < CONFIG.COMBAT.maxHealth; i++) {
      const drop = document.createElement('div');
      drop.style.cssText = `
        width: 18px;
        height: 26px;
        background-color: #141413;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transform: rotate(45deg);
        box-shadow: 0 2px 6px rgba(20,20,19,0.35);
        transition: transform 0.25s ease, opacity 0.25s ease, background-color 0.25s ease;
      `;
      this.healthContainer.appendChild(drop);
      this.inkDrops.push(drop);
    }

    // Speedrun Timer Badge
    this.timerBadge = document.createElement('div');
    this.timerBadge.style.cssText = `
      margin-left: 14px;
      padding: 3px 10px;
      background: rgba(20, 20, 19, 0.85);
      color: #f5f1e6;
      font-family: monospace;
      font-size: 12px;
      font-weight: 700;
      border-left: 3px solid #b8292f;
      letter-spacing: 1px;
    `;
    this.timerBadge.innerText = '00:00.00';
    this.healthContainer.appendChild(this.timerBadge);

    this.container.appendChild(this.healthContainer);

    // 2. Dash, Double-Jump & Grapple Status Line
    this.dashMeter = document.createElement('div');
    this.dashMeter.style.cssText = `
      position: absolute;
      top: 56px;
      left: 28px;
      font-size: 11px;
      letter-spacing: 1.4px;
      color: #2b2926;
      text-transform: uppercase;
      font-weight: 700;
    `;
    this.dashMeter.innerText = 'INK STEP: READY · DOUBLE JUMP: READY';
    this.container.appendChild(this.dashMeter);

    // 3. Top-Right 3-Act / 8-Stage Campaign Selector Bar
    this.chapterNav = document.createElement('div');
    this.chapterNav.style.cssText = `
      position: absolute;
      top: 18px;
      right: 22px;
      display: flex;
      gap: 5px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 68vw;
    `;

    this.chapterBtns = [];
    SUMIRO_CHAPTERS.forEach((ch) => {
      const btn = document.createElement('button');
      btn.innerText = `${ch.num}. ${ch.title}`;
      btn.title = `${ch.act}: ${ch.kanji} — Click to jump`;
      btn.style.cssText = `
        background: rgba(234, 229, 217, 0.88);
        color: #141413;
        border: 1px solid rgba(20, 20, 19, 0.48);
        padding: 4px 8px;
        font-family: 'Cinzel', serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.5px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.18s ease;
        box-shadow: 0 2px 5px rgba(20,20,19,0.12);
      `;
      btn.addEventListener('click', () => {
        if (this.onSelectChapter) {
          this.onSelectChapter(ch);
        }
        btn.blur();
      });
      this.chapterNav.appendChild(btn);
      this.chapterBtns.push({ id: ch.id, btn });
    });
    this.container.appendChild(this.chapterNav);

    // 4. Center Poetic Sumi-e Act/Chapter Title Unfurl Banner
    this.chapterBanner = document.createElement('div');
    this.chapterBanner.style.cssText = `
      position: absolute;
      top: 19%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.8s ease;
    `;
    this.chapterKanji = document.createElement('div');
    this.chapterKanji.style.cssText = `
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 34px;
      color: #141413;
      letter-spacing: 8px;
      text-shadow: 0 2px 12px rgba(234,229,217,0.95);
    `;
    this.chapterTitleText = document.createElement('div');
    this.chapterTitleText.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 13.5px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      margin-top: 4px;
    `;
    this.chapterBanner.appendChild(this.chapterKanji);
    this.chapterBanner.appendChild(this.chapterTitleText);
    this.container.appendChild(this.chapterBanner);

    // 5. Contextual Lantern Grapple Prompt Badge
    this.grappleBadge = document.createElement('div');
    this.grappleBadge.style.cssText = `
      position: absolute;
      top: 32%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(184, 41, 47, 0.92);
      color: #f5f1e6;
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 11.5px;
      font-weight: 700;
      letter-spacing: 1.5px;
      display: none;
      box-shadow: 0 0 12px rgba(184,41,47,0.6);
    `;
    this.grappleBadge.innerText = '🏮 [SHIFT / L] LANTERN GRAPPLE DASH';
    this.container.appendChild(this.grappleBadge);

    // 6. Bottom-Left Controls & Innovations Guide Bar
    this.controlsHint = document.createElement('div');
    this.controlsHint.style.cssText = `
      position: absolute;
      bottom: 16px;
      left: 24px;
      font-size: 10.5px;
      color: #2b2926;
      background: rgba(234, 229, 217, 0.88);
      border-left: 3px solid #b8292f;
      padding: 6px 12px;
      letter-spacing: 0.5px;
      font-weight: 600;
    `;
    this.controlsHint.innerHTML = `<b>A/D</b> Move · <b>SPACE×2</b> Double Jump · <b>J/Click</b> Katana · <b>K/R-Click</b> Parry/Reflect · <b>L/Shift</b> Ink Dash & Grapple · <span style="color:#b8292f;"><b>E</b> Paint Bridge · <b>F</b> Bell Wave · <b>V</b> 3D Cam</span>`;
    this.container.appendChild(this.controlsHint);

    // 6b. Bottom-Right Interactive Innovation Toolbar
    this.powerBar = document.createElement('div');
    this.powerBar.style.cssText = `
      position: absolute;
      bottom: 14px;
      right: 24px;
      display: flex;
      gap: 8px;
      pointer-events: auto;
    `;

    const makePowerBtn = (label, keyCode) => {
      const b = document.createElement('button');
      b.innerHTML = label;
      b.style.cssText = `
        background: #141413;
        color: #f5f1e6;
        border: 1px solid #b8292f;
        padding: 6px 11px;
        font-family: 'Cinzel', serif;
        font-size: 10.5px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 3px;
        box-shadow: 0 2px 6px rgba(20,20,19,0.25);
      `;
      b.addEventListener('click', () => {
        window.dispatchEvent(new KeyboardEvent('keydown', { code: keyCode }));
        b.blur();
      });
      this.powerBar.appendChild(b);
    };

    makePowerBtn('🖌️ Paint Bridge [E]', 'KeyE');
    makePowerBtn('🔔 Bell Wave [F]', 'KeyF');
    makePowerBtn('🎥 3D Perspective [V]', 'KeyV');
    this.container.appendChild(this.powerBar);

    // 7. Boss Health Bar (Bottom Center)
    this.bossBarContainer = document.createElement('div');
    this.bossBarContainer.style.cssText = `
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      width: 520px;
      max-width: 90vw;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    `;

    this.bossTitle = document.createElement('div');
    this.bossTitle.style.cssText = `
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 21px;
      font-weight: 700;
      color: #141413;
      letter-spacing: 2px;
      text-shadow: 0 1px 4px rgba(234,229,217,0.95);
    `;
    this.bossTitle.innerText = '黒鉄 — Kurogane, the Gatekeeper';
    this.bossBarContainer.appendChild(this.bossTitle);

    this.barFrame = document.createElement('div');
    this.barFrame.style.cssText = `
      width: 100%;
      height: 13px;
      background: rgba(20, 20, 19, 0.22);
      border: 2px solid #141413;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
    `;

    this.bossFill = document.createElement('div');
    this.bossFill.style.cssText = `
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #141413, #b8292f);
      transition: width 0.2s ease-out;
    `;
    this.barFrame.appendChild(this.bossFill);
    this.bossBarContainer.appendChild(this.barFrame);
    this.container.appendChild(this.bossBarContainer);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this.bannerTimeout = null;
    this.setupListeners();
  }

  showChapterBanner(ch) {
    this.chapterKanji.innerText = ch.kanji;
    this.chapterTitleText.innerText = `${ch.act} · Stage ${ch.num} — ${ch.title}`;
    this.chapterBanner.style.opacity = '1';

    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
    this.bannerTimeout = setTimeout(() => {
      this.chapterBanner.style.opacity = '0';
    }, 3200);
  }

  setupListeners() {
    events.on('boss_intro_start', ({ name }) => {
      this.bossBarContainer.style.display = 'flex';
      this.bossTitle.innerText = name;
      this.bossFill.style.width = '100%';
    });

    events.on('boss_damaged', ({ hp, maxHp }) => {
      const pct = Math.max(0, (hp / maxHp) * 100);
      this.bossFill.style.width = `${pct}%`;
    });

    events.on('scroll_unlocked', ({ title, desc }) => {
      this.chapterKanji.innerText = '秘伝之巻';
      this.chapterTitleText.innerText = `${title} — ${desc}`;
      this.chapterBanner.style.opacity = '1';
      if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
      this.bannerTimeout = setTimeout(() => {
        this.chapterBanner.style.opacity = '0';
      }, 4000);
    });

    events.on('act2_boss_defeated', () => {
      setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
      }, 1500);
    });

    events.on('boss_defeated', () => {
      setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
      }, 2000);
    });
  }

  update(player) {
    if (!player) return;

    // 1. Update Speedrun Timer
    const elapsedSec = (performance.now() - this.speedrunStartTime) * 0.001;
    const mins = Math.floor(elapsedSec / 60).toString().padStart(2, '0');
    const secs = (elapsedSec % 60).toFixed(2).padStart(5, '0');
    this.timerBadge.innerText = `${mins}:${secs}`;

    // 2. Update Health Drops
    const curHp = player.health;
    for (let i = 0; i < this.inkDrops.length; i++) {
      const drop = this.inkDrops[i];
      if (i < curHp) {
        drop.style.opacity = '1.0';
        drop.style.transform = 'rotate(45deg) scale(1.0)';
        drop.style.backgroundColor = '#141413';
      } else {
        drop.style.opacity = '0.25';
        drop.style.transform = 'rotate(45deg) scale(0.75)';
        drop.style.backgroundColor = '#a8a59c';
      }
    }

    // 3. Contextual Lantern Grapple Prompt
    if (player.targetGrappleLantern) {
      this.grappleBadge.style.display = 'block';
    } else {
      this.grappleBadge.style.display = 'none';
    }

    // 4. Detect Current Campaign Stage (I - VIII)
    const px = player.aabb.x;
    let activeCh = SUMIRO_CHAPTERS[0];
    for (const ch of SUMIRO_CHAPTERS) {
      if (px >= ch.minX && px < ch.maxX) {
        activeCh = ch;
        break;
      }
    }

    if (activeCh.id !== this.currentChapterId) {
      this.currentChapterId = activeCh.id;
      this.showChapterBanner(activeCh);

      for (const item of this.chapterBtns) {
        if (item.id === activeCh.id) {
          item.btn.style.background = '#141413';
          item.btn.style.color = '#f5f1e6';
          item.btn.style.borderColor = '#b8292f';
        } else {
          item.btn.style.background = 'rgba(234, 229, 217, 0.88)';
          item.btn.style.color = '#141413';
          item.btn.style.borderColor = 'rgba(20, 20, 19, 0.48)';
        }
      }
    }

    // 5. Update Dash & Double Jump Status
    const dashText = !player.hasInkStepUnlocked
      ? 'INK STEP: SHRINE AHEAD'
      : player.dashCooldownTimer > 0
      ? 'INK STEP: CHARGING'
      : 'INK STEP: READY';
    const djText = player.hasDoubleJump ? '2× JUMP: READY' : '2× JUMP: USED';
    this.dashMeter.innerText = `${activeCh.act.toUpperCase()} (${activeCh.title.toUpperCase()})  ·  ${dashText}  ·  ${djText}`;
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
