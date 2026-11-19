// Sumiro-Style Poetic Sumi-e Game HUD
// Features SVG <feTurbulence> + <feDisplacementMap> torn-ink filters (#ink-edge, #ink-brush),
// Palatino/Georgia italic serif typography, 5 horizontal calligraphy brushstroke health bars,
// circular ink-step charge ring, square vermilion hanko seal (#a8321f), poetic bottom subtitle lines,
// and 8-Stage / 3-Boss campaign selector.

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

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
    spawnX: 172,
    spawnY: 23.0,
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
  constructor(onSelectChapter = null) {
    this.onSelectChapter = onSelectChapter;
    this.currentChapterId = 0;
    this.speedrunStartTime = performance.now();

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
      top: 24px;
      left: 28px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      filter: url(#ink-edge);
    `;

    this.hpRow = document.createElement('div');
    this.hpRow.style.cssText = 'display: flex; gap: 6px; align-items: center;';

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
    this.staminaWrap.style.cssText = 'width: 24px; height: 24px; position: relative;';
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
    this.container.appendChild(this.topLeft);

    // 2. Top-Right Poetic Chapter Navigation Strip
    this.chapterNav = document.createElement('div');
    this.chapterNav.style.cssText = `
      position: absolute;
      top: 22px;
      right: 24px;
      display: flex;
      gap: 5px;
      pointer-events: auto;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 58vw;
    `;

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

    // 6. Subtle Bottom Controls & Interactive Brush-Power Strip
    this.controlsHint = document.createElement('div');
    this.controlsHint.style.cssText = `
      position: absolute;
      bottom: 16px;
      left: 28px;
      font-size: 11.5px;
      font-style: italic;
      color: rgba(28, 25, 20, 0.72);
      letter-spacing: 0.06em;
      text-shadow: 0 1px 0 rgba(232, 223, 202, 0.75);
    `;
    this.controlsHint.innerHTML = `WASD / Arrows to walk &nbsp;·&nbsp; Space×2 jump &nbsp;·&nbsp; Click / J strike &nbsp;·&nbsp; R-Click / K deflect &nbsp;·&nbsp; Shift / L ink-step`;
    this.container.appendChild(this.controlsHint);

    this.powerBar = document.createElement('div');
    this.powerBar.style.cssText = `
      position: absolute;
      bottom: 14px;
      right: 24px;
      display: flex;
      gap: 6px;
      pointer-events: auto;
    `;

    const makePowerBtn = (label, keyCode) => {
      const b = document.createElement('button');
      b.innerHTML = label;
      b.style.cssText = `
        background: rgba(28, 25, 20, 0.84);
        color: #ede3cc;
        border: 1px solid rgba(168, 50, 31, 0.75);
        padding: 4px 10px;
        font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
        font-style: italic;
        font-size: 11px;
        letter-spacing: 0.05em;
        cursor: pointer;
        border-radius: 2px;
      `;
      b.addEventListener('click', () => {
        window.dispatchEvent(new KeyboardEvent('keydown', { code: keyCode }));
        b.blur();
      });
      this.powerBar.appendChild(b);
    };

    makePowerBtn('Paint Bridge [E]', 'KeyE');
    makePowerBtn('Bell Resonance [F]', 'KeyF');
    makePowerBtn('Camera Angle [V]', 'KeyV');
    this.container.appendChild(this.powerBar);

    // 7. Sumiro Boss Vitality Bar (Torn-Ink Brush Bar)
    this.bossBarContainer = document.createElement('div');
    this.bossBarContainer.style.cssText = `
      position: absolute;
      bottom: 86px;
      left: 50%;
      transform: translateX(-50%);
      width: 440px;
      max-width: 88vw;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      filter: url(#ink-edge);
    `;

    this.bossTitle = document.createElement('div');
    this.bossTitle.style.cssText = `
      font-size: 15px;
      font-style: italic;
      letter-spacing: 0.22em;
      text-transform: uppercase;
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
    `;

    this.bossFill = document.createElement('div');
    this.bossFill.style.cssText = `
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #a8321f 0%, #6d1f14 75%, #1c1914 100%);
      transition: width 0.2s ease-out;
    `;
    this.barFrame.appendChild(this.bossFill);
    this.bossBarContainer.appendChild(this.barFrame);
    this.container.appendChild(this.bossBarContainer);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this.bannerTimeout = null;
    this.poemTimeout = null;
    this.setupListeners();
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
    }, 3400);

    if (this.poemTimeout) clearTimeout(this.poemTimeout);
    this.poemTimeout = setTimeout(() => {
      this.subtitleLine.style.opacity = '0';
    }, 5200);
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
      this.chapterKicker.innerText = 'Scroll Restored';
      this.chapterTitleText.innerText = title;
      this.chapterSeal.innerText = '印';
      this.chapterBanner.style.opacity = '1';
      this.subtitleLine.innerText = desc;
      this.subtitleLine.style.opacity = '1';

      if (this.bannerTimeout) clearTimeout(this.bannerTimeout);
      this.bannerTimeout = setTimeout(() => {
        this.chapterBanner.style.opacity = '0';
        this.subtitleLine.style.opacity = '0';
      }, 4200);
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
    const secs = Math.floor(elapsedSec % 60).toString().padStart(2, '0');
    this.timerBadge.innerText = `${mins}:${secs}`;

    // 2. Update Horizontal Brushstroke Health Pips
    const curHp = player.health;
    for (let i = 0; i < this.inkDrops.length; i++) {
      const pip = this.inkDrops[i];
      if (i < curHp) {
        pip.style.opacity = '1.0';
        pip.style.background = 'linear-gradient(90deg, #15120e 0%, #1c1914 78%, rgba(28,25,20,0.55) 100%)';
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
      this.showChapterBanner(activeCh);

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

    this.dashMeter.innerText = `${activeCh.word} — ${activeCh.title}`;
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
