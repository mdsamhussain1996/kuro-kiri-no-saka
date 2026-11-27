// Sumiro-Style Poetic Sumi-e Game HUD
// Features SVG <feTurbulence> + <feDisplacementMap> torn-ink filters (#ink-edge, #ink-brush),
// Palatino/Georgia italic serif typography, 5 horizontal calligraphy brushstroke health bars,
// circular ink-step charge ring, square vermilion hanko seal (#a8321f), poetic bottom subtitle lines,
// and 8-Stage / 3-Boss campaign selector.

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export const SUMIRO_CHAPTERS = [
  {
    id: 1,
    num: 'I',
    word: 'Chapter One',
    act: 'Act I',
    title: 'The Climb',
    kanji: '一',
    poem: 'Mist, a bridge, and a road that only goes up.',
    minX: -20,
    maxX: 45,
    spawnX: 2,
    spawnY: 2.5,
    dash: false,
  },
  {
    id: 2,
    num: 'II',
    word: 'Chapter Two',
    act: 'Act I',
    title: 'The Broken Pass',
    kanji: '二',
    poem: 'The bridge did not fall. Someone cut the ropes.',
    minX: 45,
    maxX: 102,
    spawnX: 49,
    spawnY: 12.5,
    dash: true,
  },
  {
    id: 3,
    num: 'III',
    word: 'Chapter Three',
    act: 'Act I',
    title: 'Temple of Silent Bells',
    kanji: '三',
    poem: 'No monk has rung the bronze bell in forty winters.',
    minX: 102,
    maxX: 238,
    spawnX: 112,
    spawnY: 16.5,
    dash: true,
  },
  {
    id: 4,
    num: 'IV',
    word: 'Chapter Four',
    act: 'Act I Finale',
    title: 'Kurogane, the Gatekeeper',
    kanji: '四',
    poem: 'He waits beneath the Torii where stone meets the moon.',
    minX: 238,
    maxX: 295,
    spawnX: 255.0,
    spawnY: 50.0,
    dash: true,
  },
  {
    id: 5,
    num: 'V',
    word: 'Chapter Five',
    act: 'Act II',
    title: 'The Silent Sanctuary',
    kanji: '五',
    poem: 'Vermilion lanterns swing above a bottomless sea of clouds.',
    minX: 295,
    maxX: 502,
    spawnX: 312.0,
    spawnY: 53.0,
    dash: true,
  },
  {
    id: 6,
    num: 'VI',
    word: 'Chapter Six',
    act: 'Act II Finale',
    title: 'Lady Shirayuki',
    kanji: '六',
    poem: 'Her ink mirrors hold no reflection but the mist.',
    minX: 502,
    maxX: 558,
    spawnX: 512.0,
    spawnY: 74.5,
    dash: true,
  },
  {
    id: 7,
    num: 'VII',
    word: 'Chapter Seven',
    act: 'Act III',
    title: 'The Crimson Foundry',
    kanji: '七',
    poem: 'Iron and vermilion flow from the split peak.',
    minX: 558,
    maxX: 774,
    spawnX: 576.0,
    spawnY: 78.0,
    dash: true,
  },
  {
    id: 8,
    num: 'VIII',
    word: 'Chapter Eight',
    act: 'Final Act',
    title: 'Lord Sumi-Ou',
    kanji: '終',
    poem: 'Seven scrolls of living ink return to the iron brush.',
    minX: 774,
    maxX: 999,
    spawnX: 786.0,
    spawnY: 98.5,
    dash: true,
  },
];

export class HUD {
  constructor(onSelectChapter = null, input = null) {
    this.onSelectChapter = onSelectChapter;
    this.input = input;
    this.currentChapterId = 0;
    this.speedrunStartTime = null;
    this.playElapsedSec = 0;
    this.hintDismissed = false;
    this._unsubs = [];
    this.suppressUnlockSave = typeof window !== 'undefined' && /[?&](chapter|boss|act|debug)=/.test(window.location.search);
    this._lastTimerText = '';
    this._lastDashMeterText = '';
    this._lastBrushstrokeText = '';

    this.injectSumiroSVGAndStyles();

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
      font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
      color: #1c1914;
      user-select: none;
    `;

    // 1. Top-Left Sumiro Brushstroke Vitality Bars + Stamina Ring + Chapter Caption
    this.topLeft = document.createElement('div');
    this.topLeft.style.cssText = `
      position: absolute;
      top: 20px;
      left: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 10px 14px;
      background: rgba(235, 226, 205, 0.78);
      border: 1px solid rgba(28, 25, 20, 0.16);
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.08);
    `;

    this.hpRow = document.createElement('div');
    this.hpRow.style.cssText = 'display: flex; gap: 6px; align-items: center; filter: url(#ink-edge);';

    this.inkDrops = [];
    for (let i = 0; i < CONFIG.COMBAT.maxHealth; i++) {
      const pip = document.createElement('div');
      const rot = i % 2 === 0 ? -1.2 : 0.9;
      pip.style.cssText = `
        width: 28px;
        height: 8px;
        background: linear-gradient(90deg, #15120e 0%, #1c1914 78%, rgba(28,25,20,0.55) 100%);
        border-radius: 3px 9px 2px 7px / 4px 3px 5px 3px;
        transform: rotate(${rot}deg);
        box-shadow: 0 1px 0 rgba(230,220,200,0.45);
        transition: opacity 0.25s ease, transform 0.25s ease, background 0.25s ease;
      `;
      this.hpRow.appendChild(pip);
      this.inkDrops.push(pip);
    }

    // Discrete speedrun timer next to health strokes
    this.timerBadge = document.createElement('div');
    this.timerBadge.style.cssText = `
      margin-left: 10px;
      font-size: 11px;
      font-style: italic;
      color: rgba(28, 25, 20, 0.65);
      letter-spacing: 0.08em;
    `;
    this.timerBadge.innerText = '00:00';
    this.hpRow.appendChild(this.timerBadge);
    this.topLeft.appendChild(this.hpRow);

    // Second row: Circular Ink-Step Ring + Double-Jump Gourd Pips + Small Italic Chapter Label
    this.subRow = document.createElement('div');
    this.subRow.style.cssText = 'display: flex; align-items: center; gap: 10px; margin-top: 2px;';

    // SVG Circular Stamina / Ink-Step Ring
    this.staminaWrap = document.createElement('div');
    this.staminaWrap.style.cssText = 'width: 24px; height: 24px; position: relative; filter: url(#ink-edge);';
    this.staminaWrap.innerHTML = `
      <svg viewBox="0 0 36 36" style="width: 24px; height: 24px; transform: rotate(-90deg);">
        <circle cx="18" cy="18" r="13.5" fill="none" stroke="rgba(28,25,20,0.18)" stroke-width="3.2"/>
        <circle id="kuro-stam-arc" cx="18" cy="18" r="13.5" fill="none" stroke="#1c1914" stroke-width="3.2"
          stroke-linecap="round" stroke-dasharray="84.82" stroke-dashoffset="0"/>
      </svg>
    `;
    this.subRow.appendChild(this.staminaWrap);

    this.dashMeter = document.createElement('div');
    this.dashMeter.style.cssText = `
      font-size: 11.5px;
      font-style: italic;
      letter-spacing: 0.14em;
      color: rgba(28, 25, 20, 0.72);
    `;
    this.dashMeter.innerText = 'Chapter One — The Climb';
    this.subRow.appendChild(this.dashMeter);

    this.topLeft.appendChild(this.subRow);

    // Sumi Ink-Stone Meter (3 segments of 100 each = 300 max)
    this.inkRow = document.createElement('div');
    this.inkRow.style.cssText = 'display: flex; align-items: center; gap: 5px; margin-top: 2px;';
    const inkLabel = document.createElement('span');
    inkLabel.style.cssText = 'font-size: 11px; font-weight: bold; color: #1c1914; letter-spacing: 0.08em; margin-right: 4px;';
    inkLabel.innerText = '墨';
    this.inkRow.appendChild(inkLabel);
    this.inkSegments = [];
    for (let i = 0; i < 3; i++) {
      const segWrap = document.createElement('div');
      segWrap.style.cssText = 'width: 34px; height: 6px; background: rgba(28,25,20,0.20); border: 1px solid rgba(28,25,20,0.45); border-radius: 2px; overflow: hidden;';
      const segFill = document.createElement('div');
      segFill.style.cssText = 'width: 0%; height: 100%; background: #141413; transition: width 0.12s ease;';
      segWrap.appendChild(segFill);
      this.inkRow.appendChild(segWrap);
      this.inkSegments.push(segFill);
    }
    this.brushstrokeBadge = document.createElement('span');
    this.brushstrokeBadge.id = 'hud-brushstrokes';
    this.brushstrokeBadge.style.cssText = 'font-size: 11px; font-weight: bold; color: #a8321f; margin-left: 8px; letter-spacing: 0.04em;';
    this.inkRow.appendChild(this.brushstrokeBadge);
    this.topLeft.appendChild(this.inkRow);
    this.updateBrushstrokeBadge();
    this._unsubs.push(events.on('brushstroke_collected', () => this.updateBrushstrokeBadge()));

    this.container.appendChild(this.topLeft);

    // 2. Top-Right Poetic Chapter Navigation Strip (Debug/Dev mode ONLY)
    const isDevMode = typeof window !== 'undefined' && (window.location.search.includes('debug') || window.location.search.includes('dev'));
    this.chapterNav = document.createElement('div');
    this.chapterNav.style.cssText = `
      position: absolute;
      top: 22px;
      right: 24px;
      display: ${isDevMode ? 'flex' : 'none'};
      gap: 5px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 58vw;
    `;

    const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || !!window.matchMedia?.('(pointer: coarse)')?.matches);
    const isNarrow = typeof window !== 'undefined' && window.innerWidth <= 640;

    // Subtle "Click / Press any key for sound" note until AudioContext unlocks
    this.soundUnlockNote = document.createElement('div');
    this.soundUnlockNote.style.cssText = `
      position: absolute;
      top: ${isNarrow ? '64px' : '22px'};
      ${isNarrow ? 'left: 28px;' : 'right: 24px;'}
      background: rgba(234, 229, 217, 0.90);
      color: #1c1914;
      border: 1px solid rgba(28, 25, 20, 0.25);
      padding: 4px 10px;
      font-size: 12px;
      font-style: italic;
      border-radius: 3px;
      display: ${isDevMode ? 'none' : 'block'};
      pointer-events: none;
    `;
    this.soundUnlockNote.innerText = isTouch ? 'Tap anywhere for sound' : 'Click / Press any key for sound';
    this.container.appendChild(this.soundUnlockNote);

    this.chapterBtns = [];
    SUMIRO_CHAPTERS.forEach((ch) => {
      const btn = document.createElement('button');
      btn.innerText = `${ch.num}. ${ch.title}`;
      btn.title = `${ch.word} — ${ch.poem}`;
      btn.style.cssText = `
        background: rgba(214, 202, 175, 0.72);
        color: #1c1914;
        border: 1px solid rgba(28, 25, 20, 0.32);
        padding: 3px 8px;
        font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
        font-style: italic;
        font-size: 11px;
        letter-spacing: 0.04em;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.2s ease;
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

    // 3. Center Sumiro Chapter Title Card + Square Vermilion Hanko Seal
    this.chapterBanner = document.createElement('div');
    this.chapterBanner.style.cssText = `
      position: absolute;
      top: 24%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1.1s ease;
    `;

    this.chapterKicker = document.createElement('div');
    this.chapterKicker.style.cssText = `
      font-size: 12px;
      font-style: italic;
      letter-spacing: 0.38em;
      text-transform: uppercase;
      color: rgba(28, 25, 20, 0.65);
      margin-bottom: 6px;
    `;

    this.chapterTitleText = document.createElement('div');
    this.chapterTitleText.style.cssText = `
      font-size: 32px;
      font-weight: normal;
      font-style: italic;
      letter-spacing: 0.14em;
      color: #1c1914;
      text-shadow: 0 1px 0 rgba(235, 226, 205, 0.75);
      filter: url(#ink-edge);
    `;

    this.chapterRule = document.createElement('div');
    this.chapterRule.style.cssText = `
      width: 140px;
      height: 2px;
      margin: 12px auto 0;
      background: linear-gradient(90deg, transparent, #1c1914 25%, #1c1914 75%, transparent);
      opacity: 0.55;
      filter: url(#ink-edge);
    `;

    this.chapterSeal = document.createElement('div');
    this.chapterSeal.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
      width: 24px;
      height: 24px;
      background: #a8321f;
      color: #ede3cc;
      font-style: normal;
      font-size: 12px;
      font-weight: bold;
      border-radius: 2px;
      box-shadow: inset 0 0 0 1.5px rgba(240, 231, 208, 0.55);
      transform: rotate(-3deg);
      filter: url(#ink-edge);
    `;

    this.chapterBanner.appendChild(this.chapterKicker);
    this.chapterBanner.appendChild(this.chapterTitleText);
    this.chapterBanner.appendChild(this.chapterRule);
    this.chapterBanner.appendChild(this.chapterSeal);
    this.container.appendChild(this.chapterBanner);

    // 4. Contextual Lantern Grapple Prompt Badge
    this.grappleBadge = document.createElement('div');
    this.grappleBadge.style.cssText = `
      position: absolute;
      top: 36%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(168, 50, 31, 0.92);
      color: #ede3cc;
      padding: 4px 14px;
      border-radius: 2px;
      font-size: 12px;
      font-style: italic;
      letter-spacing: 0.12em;
      display: none;
      box-shadow: inset 0 0 0 1px rgba(240, 231, 208, 0.45);
      filter: url(#ink-edge);
    `;
    this.grappleBadge.innerText = 'Shift / L — Grapple Lantern';
    this.container.appendChild(this.grappleBadge);

    // 5. Sumiro Poetic Subtitle Line (Bottom Center on Radial Parchment Glow)
    this.subtitleLine = document.createElement('div');
    this.subtitleLine.style.cssText = `
      position: absolute;
      bottom: 54px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 560px;
      text-align: center;
      font-size: 15px;
      font-style: italic;
      letter-spacing: 0.05em;
      line-height: 1.55;
      color: #1c1914;
      padding: 8px 26px;
      background: radial-gradient(ellipse at center, rgba(214,203,178,0.78) 0%, rgba(214,203,178,0) 74%);
      text-shadow: 0 1px 0 rgba(236, 228, 210, 0.85);
      opacity: 0;
      transition: opacity 0.8s ease;
      pointer-events: none;
    `;
    this.container.appendChild(this.subtitleLine);

    // 6. Responsive Bottom Bar (Zero overlap from 960x540 to 2560x1440; hidden on touch)
    const C = CONFIG.CONTROLS;
    this.bottomBar = document.createElement('div');
    this.bottomBar.style.cssText = `
      position: absolute;
      bottom: 12px;
      left: 20px;
      right: 20px;
      display: ${isTouch ? 'none' : 'flex'};
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      pointer-events: none;
    `;

    this.controlsHint = document.createElement('div');
    this.controlsHint.style.cssText = `
      font-size: clamp(11.5px, 1.05vw, 13px);
      font-style: normal;
      font-weight: 600;
      color: #141413;
      background: rgba(234, 229, 217, 0.88);
      border: 1px solid rgba(28, 25, 20, 0.25);
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 68vw;
      transition: opacity 0.6s ease;
    `;
    this.controlsHint.innerHTML = `${C.moveLeft.display}/${C.moveRight.display} Move · ${C.jump.display} Jump · ${C.attack.display} Atk · ${C.parry.display} Parry · ${C.dash.display} Dash · ${C.pause.display} Pause`;
    this.bottomBar.appendChild(this.controlsHint);

    this.powerBar = document.createElement('div');
    this.powerBar.style.cssText = `
      display: flex;
      gap: 6px;
      pointer-events: auto;
      flex-shrink: 0;
    `;

    this.powerBtns = {};
    const makePowerBtn = (label, keyCode, id) => {
      const b = document.createElement('button');
      b.innerHTML = label;
      b.style.cssText = `
        background: rgba(28, 25, 20, 0.90);
        color: #ede3cc;
        border: 1px solid rgba(168, 50, 31, 0.78);
        padding: 5px 9px;
        font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
        font-style: italic;
        font-size: 12px;
        letter-spacing: 0.03em;
        cursor: pointer;
        border-radius: 2px;
        white-space: nowrap;
      `;
      b.addEventListener('click', () => {
        window.dispatchEvent(new KeyboardEvent('keydown', { code: keyCode }));
        window.dispatchEvent(new KeyboardEvent('keyup', { code: keyCode }));
        b.blur();
      });
      this.powerBar.appendChild(b);
      this.powerBtns[id] = b;
    };

    makePowerBtn(`Bridge [${C.paintBridge.display}]`, 'KeyE', 'paint');
    makePowerBtn(`Bell [${C.bell.display}]`, 'KeyF', 'bell');
    makePowerBtn(`Ippitsu [Q]`, 'KeyQ', 'ippitsu');
    makePowerBtn(`Cam [${C.camera.display}]`, 'KeyV', 'cam');
    if (isTouch) {
      this.powerBar.style.cssText = 'position:absolute;top:20px;right:14px;display:flex;gap:5px;pointer-events:auto;';
      this.container.appendChild(this.powerBar);
    } else {
      this.bottomBar.appendChild(this.powerBar);
      this.container.appendChild(this.bottomBar);
    }

    // 7. Sumiro Boss Vitality Bar (positioned cleanly above bottomBar & below subtitle)
    this.bossBarContainer = document.createElement('div');
    this.bossBarContainer.style.cssText = `
      position: absolute;
      bottom: 52px;
      left: 50%;
      transform: translateX(-50%);
      width: min(500px, 88vw);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      filter: url(#ink-edge);
    `;

    this.bossTitle = document.createElement('div');
    this.bossTitle.style.cssText = `
      font-size: clamp(11px, 1.35vw, 15px);
      font-style: italic;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      white-space: nowrap;
      text-align: center;
      color: #1c1914;
      text-shadow: 0 1px 0 rgba(235, 226, 205, 0.85);
    `;
    this.bossTitle.innerText = 'Kurogane, the Gatekeeper';
    this.bossBarContainer.appendChild(this.bossTitle);

    this.barFrame = document.createElement('div');
    this.barFrame.style.cssText = `
      width: 100%;
      height: 7px;
      background: rgba(28, 25, 20, 0.22);
      border-radius: 3px 8px 2px 6px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 1px 0 rgba(235, 226, 205, 0.45);
      transition: transform 0.08s ease, box-shadow 0.14s ease;
    `;

    this.bossGhostFill = document.createElement('div');
    this.bossGhostFill.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #dfd7c2;
      transition: width 0.55s ease-out 0.14s;
    `;
    this.barFrame.appendChild(this.bossGhostFill);

    this.bossFill = document.createElement('div');
    this.bossFill.style.cssText = `
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #a8321f 0%, #6d1f14 75%, #1c1914 100%);
      transition: width 0.12s ease-out;
    `;
    this.barFrame.appendChild(this.bossFill);
    this.bossBarContainer.appendChild(this.barFrame);
    this.container.appendChild(this.bossBarContainer);

    // 8. Screen-edge Combat Flash Vignette (Damage & Perfect Parry Feedback)
    this.combatFlash = document.createElement('div');
    this.combatFlash.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.22s ease-out;
    `;
    this.container.appendChild(this.combatFlash);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this.initTouchControls();

    this.bannerTimeout = null;
    this.poemTimeout = null;
    this.setupListeners();
  }

  startRunTimer() {
    if (this.speedrunStartTime === null) {
      this.speedrunStartTime = performance.now();
    }
  }

  setSoundUnlocked(unlocked) {
    if (this.soundUnlockNote) {
      this.soundUnlockNote.style.display = unlocked ? 'none' : 'block';
    }
  }

  initTouchControls() {
    if (typeof window === 'undefined' || !this.input) return;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || !!window.matchMedia?.('(pointer: coarse)')?.matches;
    if (!isTouch) return;

    const wrap = document.createElement('div');
    wrap.id = 'kuro-touch-controls';
    wrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:18;';
    wrap.innerHTML = `
      <div style="position:absolute;bottom:18px;left:14px;display:flex;gap:10px;pointer-events:auto;">
        <button data-tk="left" style="width:52px;height:52px;border-radius:50%;background:rgba(20,20,19,0.78);color:#eae5d9;border:1px solid #a8321f;font-size:18px;">◀</button>
        <button data-tk="right" style="width:52px;height:52px;border-radius:50%;background:rgba(20,20,19,0.78);color:#eae5d9;border:1px solid #a8321f;font-size:18px;">▶</button>
      </div>
      <div style="position:absolute;bottom:18px;right:14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;pointer-events:auto;">
        <button data-tk="parry" style="padding:10px 12px;border-radius:8px;background:rgba(20,20,19,0.82);color:#eae5d9;border:1px solid #a8321f;font-size:11px;font-weight:bold;">PARRY</button>
        <button data-tk="dash" style="padding:10px 12px;border-radius:8px;background:rgba(20,20,19,0.82);color:#eae5d9;border:1px solid #a8321f;font-size:11px;font-weight:bold;">DASH</button>
        <button data-tk="attack" style="padding:10px 12px;border-radius:8px;background:rgba(168,50,31,0.88);color:#eae5d9;border:1px solid #eae5d9;font-size:11px;font-weight:bold;">ATK</button>
        <button data-tk="jump" style="padding:10px 12px;border-radius:8px;background:rgba(20,20,19,0.88);color:#eae5d9;border:1px solid #eae5d9;font-size:11px;font-weight:bold;">JUMP</button>
      </div>
    `;
    this.container.appendChild(wrap);
    wrap.querySelectorAll('[data-tk]').forEach(btn => {
      const k = btn.dataset.tk;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); this.input.touchState[k] = true; }, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); this.input.touchState[k] = false; }, { passive: false });
    });
  }

  injectSumiroSVGAndStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('sumiro-svg-filters')) return;

    const svgWrap = document.createElement('div');
    svgWrap.id = 'sumiro-svg-filters';
    svgWrap.style.cssText = 'position:absolute; width:0; height:0; overflow:hidden; pointer-events:none;';
    svgWrap.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <filter id="ink-edge" x="-10%" y="-20%" width="120%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.9" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <filter id="ink-brush" x="-30%" y="-60%" width="160%" height="220%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035 0.08" numOctaves="3" seed="11" result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>
    `;
    document.body.appendChild(svgWrap);
  }

  showChapterBanner(ch) {
    this.chapterKicker.innerText = ch.word;
    this.chapterTitleText.innerText = ch.title;
    this.chapterSeal.innerText = ch.kanji;
    this.chapterBanner.style.opacity = '1';

    this.subtitleLine.innerText = ch.poem;
    this.subtitleLine.style.opacity = '1';

    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
    this.bannerTimeout = setTimeout(() => {
      this.chapterBanner.style.opacity = '0';
    }, 2200);

    if (this.poemTimeout) clearTimeout(this.poemTimeout);
    this.poemTimeout = setTimeout(() => {
      this.subtitleLine.style.opacity = '0';
    }, 4200);
  }

  setupListeners() {
    this._flashTimeout = null;
    this._bossBarPulseTimeout = null;
    this.bossBarHideTimeout = null;

    const triggerCombatFlash = (boxShadow, duration = 220) => {
      if (!this.combatFlash) return;
      this.combatFlash.style.boxShadow = boxShadow;
      this.combatFlash.style.opacity = '1';
      if (this._flashTimeout) clearTimeout(this._flashTimeout);
      this._flashTimeout = setTimeout(() => {
        if (this.combatFlash) this.combatFlash.style.opacity = '0';
      }, duration);
    };

    this._unsubs.push(events.on('boss_intro_start', ({ name }) => {
      if (this.bossBarHideTimeout) {
        clearTimeout(this.bossBarHideTimeout);
        this.bossBarHideTimeout = null;
      }
      this.bossBarContainer.style.display = 'flex';
      this.bossTitle.innerText = name;
      this.bossFill.style.width = '100%';
      if (this.bossGhostFill) this.bossGhostFill.style.width = '100%';
    }));

    this._unsubs.push(events.on('boss_damaged', ({ hp, maxHp }) => {
      const pct = Math.max(0, (hp / maxHp) * 100);
      this.bossFill.style.width = `${pct}%`;
      if (this.bossGhostFill) this.bossGhostFill.style.width = `${pct}%`;
      if (this.barFrame) {
        this.barFrame.style.boxShadow = '0 0 10px rgba(168, 50, 31, 0.75)';
        if (this._bossBarPulseTimeout) clearTimeout(this._bossBarPulseTimeout);
        this._bossBarPulseTimeout = setTimeout(() => {
          if (this.barFrame) this.barFrame.style.boxShadow = '0 1px 0 rgba(235, 226, 205, 0.45)';
        }, 140);
      }
    }));

    this._unsubs.push(events.on('boss_clink', () => {
      if (this.barFrame && this.bossBarContainer?.style.display === 'flex') {
        this.barFrame.style.transform = 'translateX(3px)';
        this.barFrame.style.boxShadow = '0 0 8px rgba(150, 150, 142, 0.85)';
        if (this._bossBarPulseTimeout) clearTimeout(this._bossBarPulseTimeout);
        this._bossBarPulseTimeout = setTimeout(() => {
          if (this.barFrame) {
            this.barFrame.style.transform = 'translateX(0)';
            this.barFrame.style.boxShadow = '0 1px 0 rgba(235, 226, 205, 0.45)';
          }
        }, 95);
      }
    }));

    this._unsubs.push(events.on('player_damaged', () => {
      triggerCombatFlash('inset 0 0 65px 12px rgba(168, 50, 31, 0.55)', 240);
    }));

    this._unsubs.push(events.on('parry_perfect', () => {
      triggerCombatFlash('inset 0 0 48px 8px rgba(255, 212, 59, 0.40)', 160);
    }));

    this._unsubs.push(events.on('scroll_unlocked', ({ title, desc }) => {
      this.chapterKicker.innerText = 'Scroll Restored';
      this.chapterTitleText.innerText = title;
      this.chapterSeal.innerText = '印';
      this.chapterBanner.style.opacity = '1';
      this.subtitleLine.innerText = desc;
      this.subtitleLine.style.opacity = '1';

      if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
      if (this.poemTimeout) clearTimeout(this.poemTimeout);
      this.bannerTimeout = setTimeout(() => {
        this.chapterBanner.style.opacity = '0';
        this.subtitleLine.style.opacity = '0';
      }, 4200);
    }));

    this._unsubs.push(events.on('act2_boss_defeated', () => {
      if (this.bossBarHideTimeout) clearTimeout(this.bossBarHideTimeout);
      this.bossBarHideTimeout = setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
        this.bossBarHideTimeout = null;
      }, 1500);
    }));

    this._unsubs.push(events.on('boss_defeated', () => {
      if (this.bossBarHideTimeout) clearTimeout(this.bossBarHideTimeout);
      this.bossBarHideTimeout = setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
        this.bossBarHideTimeout = null;
      }, 2000);
    }));

    this._unsubs.push(events.on('player:respawn', (pos) => {
      const px = pos?.x;
      if (typeof px === 'number' && (px < 244 || (px > 292 && px < 502) || (px > 558 && px < 774))) {
        this.hideBossBarImmediate();
      }
    }));
  }

  hideBossBarImmediate() {
    if (this.bossBarHideTimeout) {
      clearTimeout(this.bossBarHideTimeout);
      this.bossBarHideTimeout = null;
    }
    if (this.bossBarContainer) {
      this.bossBarContainer.style.display = 'none';
    }
  }

  update(player) {
    if (!player) return;

    // 1. Update Speedrun Timer & Auto-fade controls hint after 60s
    if (this.speedrunStartTime !== null) {
      const elapsedSec = (performance.now() - this.speedrunStartTime) * 0.001;
      const mins = Math.floor(elapsedSec / 60).toString().padStart(2, '0');
      const secs = Math.floor(elapsedSec % 60).toString().padStart(2, '0');
      const nextTimer = `${mins}:${secs}`;
      if (nextTimer !== this._lastTimerText) {
        this._lastTimerText = nextTimer;
        this.timerBadge.innerText = nextTimer;
      }
      if (!this.hintDismissed && elapsedSec >= 60) {
        this.hintDismissed = true;
        this.controlsHint.style.opacity = '0';
      }
    }

    // Keep subtitle above boss bar when boss bar is visible
    if (this.subtitleLine && this.bossBarContainer) {
      this.subtitleLine.style.bottom = this.bossBarContainer.style.display === 'flex' ? '108px' : '56px';
    }

    // 2. Update Horizontal Brushstroke Health Pips (vermilion warning pulse at 1 HP)
    const curHp = player.health;
    const isCritical = curHp === 1;
    const pulse = isCritical ? (0.65 + 0.35 * Math.sin(performance.now() * 0.012)) : 1.0;
    for (let i = 0; i < this.inkDrops.length; i++) {
      const pip = this.inkDrops[i];
      if (i < curHp) {
        pip.style.opacity = `${pulse}`;
        pip.style.background = isCritical
          ? 'linear-gradient(90deg, #a8321f 0%, #6d1f14 85%, rgba(168,50,31,0.65) 100%)'
          : 'linear-gradient(90deg, #15120e 0%, #1c1914 78%, rgba(28,25,20,0.55) 100%)';
      } else {
        pip.style.opacity = '0.22';
        pip.style.background = 'rgba(28, 25, 20, 0.35)';
      }
    }

    // 3. Update Circular Stamina / Ink-Step Arc
    const stamArc = document.getElementById('kuro-stam-arc');
    if (stamArc) {
      const circum = 84.82;
      let ratio = 1.0;
      if (player.dashCooldownTimer > 0) {
        ratio = 1.0 - Math.min(1.0, player.dashCooldownTimer / CONFIG.PLAYER.dashCooldown);
      }
      stamArc.style.strokeDashoffset = `${(1.0 - ratio) * circum}`;
      stamArc.style.stroke = ratio < 1.0 ? '#a8321f' : '#1c1914';
    }

    // 3b. Update 3-Segment Sumi Ink Meter & Power Button Unlock/Ink States
    const inkVal = player.ink || 0;
    if (this.inkSegments) {
      for (let i = 0; i < 3; i++) {
        const segPct = Math.max(0, Math.min(100, inkVal - i * 100));
        this.inkSegments[i].style.width = `${segPct}%`;
        this.inkSegments[i].style.background = inkVal >= 300 ? '#a8321f' : '#141413';
      }
    }

    // 4. Contextual Lantern Grapple Prompt
    if (player.targetGrappleLantern) {
      this.grappleBadge.style.display = 'block';
    } else {
      this.grappleBadge.style.display = 'none';
    }

    // 5. Detect Current Campaign Stage (I - VIII)
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
      this.updateBrushstrokeBadge();
      this.showChapterBanner(activeCh);
      if (!this.suppressUnlockSave) {
        const saved = saveSystem.load();
        if (activeCh.id > (saved.unlockedChapter || 1)) {
          saveSystem.save({ ...saved, unlockedChapter: activeCh.id });
        }
      }
      events.emit('chapter_changed', activeCh);

      for (const item of this.chapterBtns) {
        if (item.id === activeCh.id) {
          item.btn.style.background = '#1c1914';
          item.btn.style.color = '#ede3cc';
          item.btn.style.borderColor = '#a8321f';
        } else {
          item.btn.style.background = 'rgba(214, 202, 175, 0.72)';
          item.btn.style.color = '#1c1914';
          item.btn.style.borderColor = 'rgba(28, 25, 20, 0.32)';
        }
      }
    }

    const isDebugMode = typeof window !== 'undefined' && window.location.search.includes('debug');
    const canPaint = player.hasPaintBridgeUnlocked || activeCh.id >= 3 || isDebugMode;
    const canBell = player.hasBellUnlocked || activeCh.id >= 3 || isDebugMode;
    if (this.powerBtns?.paint) {
      this.powerBtns.paint.style.display = canPaint ? 'inline-block' : 'none';
      this.powerBtns.paint.style.opacity = inkVal >= 100 ? '1' : '0.45';
    }
    if (this.powerBtns?.bell) {
      this.powerBtns.bell.style.display = canBell ? 'inline-block' : 'none';
      this.powerBtns.bell.style.opacity = inkVal >= 100 ? '1' : '0.45';
    }
    if (this.powerBtns?.ippitsu) {
      this.powerBtns.ippitsu.style.display = player.hasIppitsuUnlocked ? 'inline-block' : 'none';
      this.powerBtns.ippitsu.style.opacity = inkVal >= 300 ? '1' : '0.45';
    }

    const nextMeter = `${activeCh.word} — ${activeCh.title}`;
    if (nextMeter !== this._lastDashMeterText) {
      this._lastDashMeterText = nextMeter;
      this.dashMeter.innerText = nextMeter;
    }
  }

  updateBrushstrokeBadge() {
    if (!this.brushstrokeBadge) return;
    const saved = saveSystem.load();
    const list = Array.isArray(saved.brushstrokes) ? saved.brushstrokes : [];
    const chId = this.currentChapterId || 1;
    const count = list.filter(id => typeof id === 'string' && id.startsWith(`bs_${chId}_`)).length;
    const nextText = `Brushstrokes ${count}/3`;
    if (nextText !== this._lastBrushstrokeText) {
      this._lastBrushstrokeText = nextText;
      this.brushstrokeBadge.innerText = nextText;
    }
  }

  dispose() {
    for (const unsub of this._unsubs) {
      unsub?.();
    }
    this._unsubs = [];
    if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
    if (this.poemTimeout) clearTimeout(this.poemTimeout);
    if (this._flashTimeout) clearTimeout(this._flashTimeout);
    if (this._bossBarPulseTimeout) clearTimeout(this._bossBarPulseTimeout);
    if (this.bossBarHideTimeout) clearTimeout(this.bossBarHideTimeout);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
