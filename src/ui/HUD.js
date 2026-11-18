// Sumi-e Game HUD — Ink Drop Health, Dash Cooldown, 6-Chapter Sumiro Progression Bar,
// Poetic Chapter Title Unfurl Banner, Controls Hint & Boss Health Bar

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

export const SUMIRO_CHAPTERS = [
  { id: 1, num: 'I',   title: 'The Climb',               kanji: '霧の登坂',   minX: -20, maxX: 45,  spawnX: 2,   spawnY: 2.5,  dash: false },
  { id: 2, num: 'II',  title: 'The Broken Pass',         kanji: '断崖の道',   minX: 45,  maxX: 102, spawnX: 49,  spawnY: 12.5, dash: true },
  { id: 3, num: 'III', title: 'Hanging Pines',           kanji: '懸崖の松',   minX: 102, maxX: 164, spawnX: 105, spawnY: 17.5, dash: true },
  { id: 4, num: 'IV',  title: 'Temple of Silent Bells',  kanji: '無音の鐘寺', minX: 164, maxX: 194, spawnX: 172, spawnY: 23.0, dash: true },
  { id: 5, num: 'V',   title: 'Sea of Ink',              kanji: '墨の海',     minX: 194, maxX: 238, spawnX: 195, spawnY: 26.0, dash: true },
  { id: 6, num: 'VI',  title: 'The Last Brushstroke',    kanji: '最後の筆致', minX: 238, maxX: 999, spawnX: 255.0, spawnY: 50.0, dash: true },
];

export class HUD {
  constructor(onSelectChapter = null) {
    this.onSelectChapter = onSelectChapter;
    this.currentChapterId = 0;

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

    // 1. Top-Left Health Display (5 Ink Drops) + Title Seal
    this.healthContainer = document.createElement('div');
    this.healthContainer.style.cssText = `
      position: absolute;
      top: 22px;
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
    this.container.appendChild(this.healthContainer);

    // 2. Dash Cooldown & Current Chapter Subtitle
    this.dashMeter = document.createElement('div');
    this.dashMeter.style.cssText = `
      position: absolute;
      top: 58px;
      left: 28px;
      font-size: 11px;
      letter-spacing: 1.6px;
      color: #3d3b37;
      text-transform: uppercase;
      font-weight: 700;
    `;
    this.dashMeter.innerText = 'INK STEP: READY';
    this.container.appendChild(this.dashMeter);

    // 3. Top-Right 6-Chapter Sumiro Quick Selector Bar
    this.chapterNav = document.createElement('div');
    this.chapterNav.style.cssText = `
      position: absolute;
      top: 20px;
      right: 24px;
      display: flex;
      gap: 6px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
    `;

    this.chapterBtns = [];
    SUMIRO_CHAPTERS.forEach((ch) => {
      const btn = document.createElement('button');
      btn.innerText = `${ch.num}. ${ch.title}`;
      btn.title = `${ch.kanji} — Click to jump to Chapter ${ch.num}`;
      btn.style.cssText = `
        background: rgba(234, 229, 217, 0.85);
        color: #141413;
        border: 1px solid rgba(20, 20, 19, 0.45);
        padding: 5px 10px;
        font-family: 'Cinzel', serif;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.6px;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.18s ease;
        box-shadow: 0 2px 5px rgba(20,20,19,0.1);
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

    // 4. Center Poetic Sumi-e Chapter Title Unfurl Banner
    this.chapterBanner = document.createElement('div');
    this.chapterBanner.style.cssText = `
      position: absolute;
      top: 18%;
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
      font-size: 14px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-top: 4px;
    `;
    this.chapterBanner.appendChild(this.chapterKanji);
    this.chapterBanner.appendChild(this.chapterTitleText);
    this.container.appendChild(this.chapterBanner);

    // 5. Subtle Bottom-Left Controls Guide Bar
    this.controlsHint = document.createElement('div');
    this.controlsHint.style.cssText = `
      position: absolute;
      bottom: 16px;
      left: 24px;
      font-size: 11px;
      color: #2b2926;
      background: rgba(234, 229, 217, 0.78);
      border-left: 3px solid #b8292f;
      padding: 6px 12px;
      letter-spacing: 0.7px;
      font-weight: 600;
    `;
    this.controlsHint.innerHTML = `<b>A/D</b> Move &nbsp;·&nbsp; <b>SPACE</b> Jump/Wall-Jump &nbsp;·&nbsp; <b>J / Click</b> Katana &nbsp;·&nbsp; <b>K / R-Click</b> Parry &nbsp;·&nbsp; <b>L / Shift</b> Ink Dash`;
    this.container.appendChild(this.controlsHint);

    // 6. Boss Health Bar (Bottom Center)
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
    this.chapterTitleText.innerText = `Chapter ${ch.num} — ${ch.title}`;
    this.chapterBanner.style.opacity = '1';

    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
    this.bannerTimeout = setTimeout(() => {
      this.chapterBanner.style.opacity = '0';
    }, 3200);
  }

  setupListeners() {
    events.on('boss_intro_start', ({ name }) => {
      this.bossBarContainer.style.display = 'flex';
      this.bossTitle.innerText = `黒鉄 — ${name}`;
      this.bossFill.style.width = '100%';
    });

    events.on('boss_damaged', ({ hp, maxHp }) => {
      const pct = Math.max(0, (hp / maxHp) * 100);
      this.bossFill.style.width = `${pct}%`;
    });

    events.on('boss_defeated', () => {
      setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
      }, 2000);
    });
  }

  update(player) {
    if (!player) return;

    // 1. Update Health Drops
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

    // 2. Detect Current Sumiro Chapter (I - VI)
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
          item.btn.style.background = 'rgba(234, 229, 217, 0.85)';
          item.btn.style.color = '#141413';
          item.btn.style.borderColor = 'rgba(20, 20, 19, 0.45)';
        }
      }
    }

    // 3. Update Dash Status & Chapter Indicator
    const dashText = !player.hasInkStepUnlocked
      ? 'INK STEP: SHRINE AHEAD'
      : player.dashCooldownTimer > 0
      ? 'INK STEP: CHARGING'
      : 'INK STEP: READY';
    this.dashMeter.innerText = `CH. ${activeCh.num}: ${activeCh.title.toUpperCase()}  ·  ${dashText}`;
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
