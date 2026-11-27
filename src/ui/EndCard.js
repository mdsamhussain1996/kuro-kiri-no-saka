// Level 1 Complete End Card — "Scroll 1 of 7 Recovered" with Vermilion Seal Stamp

import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export class EndCard {
  constructor(onShow = null) {
    this.onShow = onShow;
    this._showTimeout = null;
    this._sealTimeout = null;
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
    this.title.innerText = 'All 3 Scrolls Restored';
    this.wrapper.appendChild(this.title);

    this.subtitle = document.createElement('div');
    this.subtitle.style.cssText = `
      font-size: 15px;
      letter-spacing: 2px;
      color: #5c5b57;
      text-transform: uppercase;
    `;
    this.subtitle.innerText = 'Kiri-no-Saka Campaign Complete';
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
    this.next.innerText = '— Boss Rush, Time Trial & One-Drop Modes Unlocked —';
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

    // Export Painted Scroll (PNG) Button
    this.exportBtn = document.createElement('button');
    this.exportBtn.style.cssText = `
      margin-top: 8px;
      padding: 8px 20px;
      background: transparent;
      color: #a8321f;
      border: 1.5px solid #a8321f;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 12px;
      letter-spacing: 1.5px;
      cursor: pointer;
      pointer-events: auto;
    `;
    this.exportBtn.innerText = 'EXPORT PAINTED SCROLL (PNG)';
    this.exportBtn.addEventListener('click', () => this.exportPaintedScroll());
    this.wrapper.appendChild(this.exportBtn);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this._unsubVictory = events.on('campaign_sunrise_victory', () => {
      saveSystem.update({ postCampaignUnlocked: true });
      if (this._showTimeout) clearTimeout(this._showTimeout);
      this._showTimeout = setTimeout(() => this.show(), 3200);
    });
  }

  getRankSeal() {
    const data = saveSystem.load();
    const deaths = data.deaths || 0;
    if (deaths <= 2) return { kanji: '松', label: 'Pine (Master)' };
    if (deaths <= 8) return { kanji: '竹', label: 'Bamboo (Seasoned)' };
    return { kanji: '梅', label: 'Plum (Persevered)' };
  }

  exportPaintedScroll() {
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 420;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#eae5d9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sumi-e mountain silhouette wash
    ctx.fillStyle = 'rgba(28, 25, 20, 0.14)';
    ctx.beginPath();
    ctx.moveTo(0, 340);
    ctx.lineTo(140, 210);
    ctx.lineTo(290, 280);
    ctx.lineTo(480, 140);
    ctx.lineTo(660, 250);
    ctx.lineTo(810, 170);
    ctx.lineTo(900, 290);
    ctx.lineTo(900, 420);
    ctx.lineTo(0, 420);
    ctx.closePath();
    ctx.fill();

    // Border
    ctx.strokeStyle = '#141413';
    ctx.lineWidth = 4;
    ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

    const data = saveSystem.load();
    const rank = this.getRankSeal();
    ctx.fillStyle = '#141413';
    ctx.font = 'bold 34px serif';
    ctx.fillText('KURO: Kiri-no-Saka — Painted Scroll', 48, 84);
    ctx.font = '20px serif';
    ctx.fillStyle = '#5c5b57';
    ctx.fillText(`Rank: ${rank.kanji} ${rank.label}  |  Scrolls: 3/3  |  Brushstrokes: ${(data.brushstrokes || []).length}/15`, 48, 130);

    // Vermilion seal stamp
    ctx.strokeStyle = '#b8292f';
    ctx.lineWidth = 5;
    ctx.strokeRect(750, 56, 92, 92);
    ctx.fillStyle = '#b8292f';
    ctx.font = 'bold 52px serif';
    ctx.fillText(rank.kanji, 770, 120);

    const link = document.createElement('a');
    link.download = 'kuro-painted-scroll.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  show() {
    const rank = this.getRankSeal();
    const data = saveSystem.load();
    this.seal.innerText = rank.kanji;
    this.stats.innerHTML = `
      <div><strong>Rank:</strong> ${rank.label}</div>
      <div><strong>Deaths:</strong> ${data.deaths || 0}</div>
      <div><strong>Scrolls:</strong> 3 / 3</div>
      <div><strong>Brushstrokes:</strong> ${(data.brushstrokes || []).length} / 15</div>
    `;
    this.container.style.opacity = '1';
    this.container.style.pointerEvents = 'auto';
    if (typeof this.onShow === 'function') {
      this.onShow();
    }
    events.emit('end_card_shown');

    // Stamp vermilion seal onto parchment with impact
    if (this._sealTimeout) clearTimeout(this._sealTimeout);
    this._sealTimeout = setTimeout(() => {
      this.seal.style.opacity = '1';
      this.seal.style.transform = 'scale(1.0) rotate(-6deg)';
      events.emit('camera_shake', { amount: 0.3 });
    }, 800);
  }

  dispose() {
    this._unsubVictory?.();
    if (this._showTimeout) clearTimeout(this._showTimeout);
    if (this._sealTimeout) clearTimeout(this._sealTimeout);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
