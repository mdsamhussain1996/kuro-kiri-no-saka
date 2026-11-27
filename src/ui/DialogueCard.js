// In-Game Dialogue & Ability Unlock Card

import { events } from '../core/EventBus.js';

export class DialogueCard {
  constructor() {
    this.isVisible = false;
    this.container = document.createElement('div');
    this.container.id = 'dialogue-card';
    this.container.style.cssText = `
      position: absolute;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%) translateY(16px);
      width: 440px;
      max-width: 88vw;
      background: #eae5d9;
      border: 2px solid #141413;
      box-shadow: 0 10px 30px rgba(20,20,19,0.35);
      border-radius: 8px;
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      z-index: 25;
      font-family: 'Cinzel', serif;
    `;

    this.title = document.createElement('div');
    this.title.style.cssText = `
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 24px;
      font-weight: 700;
      color: #b8292f;
      letter-spacing: 2px;
    `;
    this.container.appendChild(this.title);

    this.body = document.createElement('div');
    this.body.style.cssText = `
      font-size: 13px;
      line-height: 1.6;
      color: #141413;
      letter-spacing: 0.5px;
    `;
    this.container.appendChild(this.body);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this.hideTimeout = null;

    this._unsubShrine = events.on('shrine_unlocked', ({ title, description }) => {
      this.show(title, description, 4500);
    });
  }

  show(titleText, bodyText, duration = 3500) {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);

    this.isVisible = true;
    this.title.innerText = titleText;
    this.body.innerText = bodyText;

    this.container.style.opacity = '1';
    this.container.style.transform = 'translateX(-50%) translateY(0)';

    this.hideTimeout = setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide() {
    this.isVisible = false;
    this.container.style.opacity = '0';
    this.container.style.transform = 'translateX(-50%) translateY(16px)';
  }

  dispose() {
    this._unsubShrine?.();
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
