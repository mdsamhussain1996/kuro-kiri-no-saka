// Pause Menu & Settings Modal (Controls, Audio Sliders, Quality Toggle)

import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export class PauseMenu {
  constructor(loop, audioEngine) {
    this.loop = loop;
    this.audioEngine = audioEngine;
    this.isOpen = false;

    this.container = document.createElement('div');
    this.container.id = 'pause-menu';
    this.container.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(20, 20, 19, 0.75);
      backdrop-filter: blur(4px);
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 35;
      font-family: 'Cinzel', serif;
      color: #eae5d9;
    `;

    this.card = document.createElement('div');
    this.card.style.cssText = `
      background: #eae5d9;
      color: #141413;
      border: 2px solid #141413;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 32px 40px;
      width: 440px;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      pointer-events: auto;
    `;
    this.container.appendChild(this.card);

    this.title = document.createElement('h2');
    this.title.style.cssText = `
      font-family: 'Yuji Syuku', serif;
      font-size: 30px;
      margin: 0;
      letter-spacing: 2px;
    `;
    this.title.innerText = 'PAUSED';
    this.card.appendChild(this.title);

    // Buttons & Controls
    const btnStyle = `
      width: 100%;
      padding: 10px;
      background: #141413;
      color: #eae5d9;
      border: none;
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 2px;
      cursor: pointer;
      transition: background 0.15s ease;
    `;

    // 1. Resume
    this.resumeBtn = document.createElement('button');
    this.resumeBtn.style.cssText = btnStyle;
    this.resumeBtn.innerText = 'RESUME';
    this.resumeBtn.onclick = () => this.toggle();
    this.card.appendChild(this.resumeBtn);

    // 2. Controls Summary
    const controlsBox = document.createElement('div');
    controlsBox.style.cssText = `
      width: 100%;
      background: rgba(92, 91, 87, 0.1);
      padding: 12px;
      border-radius: 4px;
      font-size: 12px;
      line-height: 1.7;
      color: #3d3b36;
    `;
    controlsBox.innerHTML = `
      <strong>CONTROLS:</strong><br>
      • <strong>Move:</strong> A / D or Left / Right Arrows<br>
      • <strong>Jump:</strong> Spacebar (hold for height, variable cut)<br>
      • <strong>Attack:</strong> J or Left Click (3-hit combo & air slash)<br>
      • <strong>Parry:</strong> L or Right Click (0.15s perfect parry window)<br>
      • <strong>Ink Step (Dash):</strong> Shift or K (grants i-frames)<br>
      • <strong>Wall-Run:</strong> Hold toward wall -> Space to kick
    `;
    this.card.appendChild(controlsBox);

    // 3. Audio Volume Sliders
    const audioBox = document.createElement('div');
    audioBox.style.cssText = 'width: 100%; display: flex; flex-direction: column; gap: 8px; font-size: 12px;';
    audioBox.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <span>Master Volume</span>
        <input type="range" id="vol-master" min="0" max="1" step="0.05" value="0.8" style="width: 160px;">
      </div>
    `;
    this.card.appendChild(audioBox);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);

    // ESC Key Listener
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.toggle();
      }
    });

    // Slider listener
    setTimeout(() => {
      const slider = document.getElementById('vol-master');
      if (slider && this.audioEngine) {
        slider.addEventListener('input', (e) => {
          if (this.audioEngine.masterGain) {
            this.audioEngine.masterGain.gain.value = parseFloat(e.target.value);
          }
        });
      }
    }, 100);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.container.style.display = this.isOpen ? 'flex' : 'none';

    if (this.isOpen) {
      this.loop.pause();
    } else {
      this.loop.resume();
    }
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
