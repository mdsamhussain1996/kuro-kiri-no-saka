// Level 1 Complete End Card — "Scroll 1 of 7 Recovered" with Vermilion Seal Stamp

import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export class EndCard {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'end-card';
    this.container.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(234, 229, 217, 0.95);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 1.5s ease;
      z-index: 40;
      font-family: 'Cinzel', serif;
    `;

    this.wrapper = document.createElement('div');
    this.wrapper.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      max-width: 500px;
      padding: 32px;
    `;
    this.container.appendChild(this.wrapper);

    // Calligraphy Title
    this.title = document.createElement('h1');
    this.title.style.cssText = `
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 38px;
      color: #141413;
      margin-bottom: 4px;
    `;
    this.title.innerText = 'Scroll 1 of 7 Recovered';
    this.wrapper.appendChild(this.title);

    this.subtitle = document.createElement('div');
    this.subtitle.style.cssText = `
      font-size: 15px;
      letter-spacing: 2px;
      color: #5c5b57;
      text-transform: uppercase;
    `;
    this.subtitle.innerText = 'The Whispering Ascent Cleared';
    this.wrapper.appendChild(this.subtitle);

    // Vermilion Seal Stamp Box
    this.seal = document.createElement('div');
    this.seal.style.cssText = `
      width: 85px;
      height: 85px;
      border: 4px solid #b8292f;
      color: #b8292f;
      font-family: 'Yuji Syuku', serif;
      font-size: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px 0;
      transform: scale(3.0) rotate(-15deg);
      opacity: 0;
      transition: transform 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.35s ease;
    `;
    this.seal.innerText = '墨';
    this.wrapper.appendChild(this.seal);

    // Stats Grid
    this.stats = document.createElement('div');
    this.stats.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px 24px;
      font-size: 14px;
      color: #141413;
      margin-top: 8px;
    `;
    this.wrapper.appendChild(this.stats);

    // To be continued
    this.next = document.createElement('div');
    this.next.style.cssText = `
      font-size: 14px;
      letter-spacing: 3px;
      color: #7a7870;
      margin-top: 14px;
    `;
    this.next.innerText = '— To be continued: Level 2 (The Ink Lake) —';
    this.wrapper.appendChild(this.next);

    // Replay Button
    this.replayBtn = document.createElement('button');
    this.replayBtn.style.cssText = `
      margin-top: 18px;
      padding: 10px 24px;
      background: #141413;
      color: #eae5d9;
      border: none;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 2px;
      cursor: pointer;
      pointer-events: auto;
      transition: background 0.2s ease;
    `;
    this.replayBtn.innerText = 'PLAY AGAIN';
    this.replayBtn.addEventListener('click', () => {
      saveSystem.reset();
      window.location.reload();
    });
    this.wrapper.appendChild(this.replayBtn);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    events.on('boss_defeated', () => {
      setTimeout(() => this.show(), 4000);
    });
  }

  show() {
    this.container.style.opacity = '1';
    this.container.style.pointerEvents = 'auto';

    // Stamp vermilion seal onto parchment with impact
    setTimeout(() => {
      this.seal.style.opacity = '1';
      this.seal.style.transform = 'scale(1.0) rotate(-6deg)';
      events.emit('camera_shake', { amount: 0.3 });
    }, 800);
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
