// Intro Ink Drop Cinematic — Single ink droplet fall, mountain bleed, shamisen pluck & title card

import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export class IntroInkDrop {
  constructor(audioEngine, onComplete) {
    this.audioEngine = audioEngine;
    this.onComplete = onComplete;
    this.canSkip = true; // allow skipping immediately if user presses a key
    this.completed = false;

    // Overlay container
    this.container = document.createElement('div');
    this.container.id = 'intro-cinematic';
    this.container.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #eae5d9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 50;
      font-family: 'Cinzel', serif;
      transition: opacity 1.2s ease-out;
      pointer-events: auto;
    `;

    // Canvas for droplet fall & bleed simulation
    this.canvas = document.createElement('canvas');
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.canvas.style.cssText = 'max-width: 90vw; max-height: 50vh;';
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    // Title & Story text container
    this.textContainer = document.createElement('div');
    this.textContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-top: 20px;
      opacity: 0;
      transition: opacity 1.0s ease;
      padding: 0 24px;
    `;

    this.title = document.createElement('h1');
    this.title.style.cssText = `
      font-family: 'Yuji Syuku', 'Kaisei Decol', serif;
      font-size: 34px;
      color: #141413;
      margin: 0 0 8px 0;
      letter-spacing: 2px;
    `;
    this.title.innerText = 'Kiri-no-Saka';
    this.textContainer.appendChild(this.title);

    this.subtitle = document.createElement('div');
    this.subtitle.style.cssText = `
      font-size: 14px;
      letter-spacing: 3px;
      color: #5c5b57;
      text-transform: uppercase;
      margin-bottom: 12px;
    `;
    this.subtitle.innerText = 'The Whispering Ascent';
    this.textContainer.appendChild(this.subtitle);

    this.story = document.createElement('div');
    this.story.style.cssText = `
      font-size: 13px;
      font-style: italic;
      color: #7a7870;
      max-width: 420px;
      line-height: 1.6;
    `;
    this.story.innerText = '“Seven scrolls of Sumi-Jutsu, stolen by the Iron Brush Clan. Climb before the ink dries.”';
    this.textContainer.appendChild(this.story);

    this.skipHint = document.createElement('div');
    this.skipHint.style.cssText = `
      margin-top: 18px;
      font-size: 11px;
      letter-spacing: 1px;
      color: #a8a59c;
      text-transform: uppercase;
      opacity: 0;
      transition: opacity 0.5s ease;
    `;
    this.skipHint.innerText = 'Press any key to begin';
    this.textContainer.appendChild(this.skipHint);

    this.container.appendChild(this.textContainer);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    this.startAnimation();

    // Skip listener after 2s
    this.skipHandler = (e) => {
      if (this.canSkip && !this.completed) {
        this.finish();
      }
    };
    window.addEventListener('keydown', this.skipHandler);
    window.addEventListener('mousedown', this.skipHandler);
  }

  startAnimation() {
    let startTime = performance.now();
    let dropY = 0;
    let hit = false;
    let bleedRadius = 0;

    const animate = (now) => {
      if (this.completed) return;

      const elapsed = (now - startTime) / 1000;
      const ctx = this.ctx;
      const w = this.canvas.width;
      const h = this.canvas.height;

      ctx.clearRect(0, 0, w, h);

      if (elapsed < 1.4) {
        // Drop falls down center
        dropY = (elapsed / 1.4) * (h * 0.55);
        ctx.fillStyle = '#141413';
        ctx.beginPath();
        ctx.ellipse(w * 0.5, dropY, 6, 9, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (!hit) {
        hit = true;
        // Resonant shamisen pluck on impact
        if (this.audioEngine) {
          this.audioEngine.ensureContext();
          this.audioEngine.playShamisenPluck(329.63, 2.5, 1.0);
        }
        events.emit('camera_shake', { amount: 0.25 });
      } else {
        // Ink bleeds outward into jagged mountain peak
        bleedRadius = Math.min(140, (elapsed - 1.4) * 85);

        ctx.fillStyle = '#141413';
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.55, bleedRadius, 0, Math.PI * 2);
        ctx.fill();

        // Mountain ridge reveal
        ctx.beginPath();
        ctx.moveTo(w * 0.5 - bleedRadius * 1.5, h * 0.55 + bleedRadius * 0.5);
        ctx.lineTo(w * 0.5, h * 0.55 - bleedRadius * 1.2);
        ctx.lineTo(w * 0.5 + bleedRadius * 1.5, h * 0.55 + bleedRadius * 0.5);
        ctx.closePath();
        ctx.fill();
      }

      // Show title text at 2.0s
      if (elapsed >= 2.0) {
        this.textContainer.style.opacity = '1';
        this.canSkip = true;
        this.skipHint.style.opacity = '0.8';
      }

      // Auto finish at 7.5s
      if (elapsed >= 7.5) {
        this.finish();
        return;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  finish() {
    if (this.completed) return;
    this.completed = true;

    try {
      const data = saveSystem.load();
      data.hasSeenIntro = true;
      saveSystem.save(data);
    } catch (e) {}

    this.container.style.opacity = '0';
    setTimeout(() => {
      this.dispose();
      if (this.onComplete) {
        this.onComplete();
      }
    }, 1200);
  }

  dispose() {
    window.removeEventListener('keydown', this.skipHandler);
    window.removeEventListener('mousedown', this.skipHandler);
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
