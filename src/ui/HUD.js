// Sumi-e Game HUD — Ink Drop Health, Dash Cooldown, Boss Health Bar, Act Banner

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

export class HUD {
  constructor() {
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

    // 1. Health Display (5 Ink Drops in top left)
    this.healthContainer = document.createElement('div');
    this.healthContainer.style.cssText = `
      position: absolute;
      top: 24px;
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

    // 2. Dash Cooldown Pip
    this.dashMeter = document.createElement('div');
    this.dashMeter.style.cssText = `
      position: absolute;
      top: 60px;
      left: 28px;
      font-size: 11px;
      letter-spacing: 1.5px;
      color: #5c5b57;
      text-transform: uppercase;
      font-weight: 600;
    `;
    this.dashMeter.innerText = 'INK STEP: READY';
    this.container.appendChild(this.dashMeter);

    // 3. Boss Health Bar (Hidden until boss intro)
    this.bossBarContainer = document.createElement('div');
    this.bossBarContainer.style.cssText = `
      position: absolute;
      bottom: 40px;
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
      font-size: 20px;
      font-weight: 700;
      color: #141413;
      letter-spacing: 2px;
      text-shadow: 0 1px 2px rgba(234,229,217,0.8);
    `;
    this.bossTitle.innerText = 'Kurogane, the Gatekeeper';
    this.bossBarContainer.appendChild(this.bossTitle);

    // Brush Stroke Bar Frame
    this.barFrame = document.createElement('div');
    this.barFrame.style.cssText = `
      width: 100%;
      height: 12px;
      background: rgba(92, 91, 87, 0.25);
      border: 1px solid #141413;
      border-radius: 4px;
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

    this.setupListeners();
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

    events.on('boss_defeated', () => {
      setTimeout(() => {
        this.bossBarContainer.style.display = 'none';
      }, 2000);
    });
  }

  update(player) {
    if (!player) return;

    // Update Health Drops
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

    // Update Dash Status
    if (!player.hasInkStepUnlocked) {
      this.dashMeter.innerText = 'INK STEP: LOCKED';
      this.dashMeter.style.color = '#a8a59c';
    } else if (player.dashCooldownTimer > 0) {
      this.dashMeter.innerText = 'INK STEP: CHARGING';
      this.dashMeter.style.color = '#7a7870';
    } else {
      this.dashMeter.innerText = 'INK STEP: READY';
      this.dashMeter.style.color = '#141413';
    }
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
