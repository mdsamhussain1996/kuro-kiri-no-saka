// Pause Menu & Settings Modal (Resume, Restart Chapter, Unlocked Chapter Select, Controls Tabs, Audio & Quality)

import { CONFIG } from '../config.js';
import { saveSystem } from '../core/SaveSystem.js';
import { SUMIRO_CHAPTERS } from './HUD.js';

export class PauseMenu {
  constructor(loop, audioEngine, callbacks = {}) {
    this.loop = loop;
    this.audioEngine = audioEngine;
    this.callbacks = callbacks;
    this.isOpen = false;
    this.controlsTab = 'keyboard';

    this.container = document.createElement('div');
    this.container.id = 'pause-menu';
    this.container.style.cssText = `
      position: absolute;
      inset: 0;
      background: rgba(20, 20, 19, 0.78);
      backdrop-filter: blur(4px);
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 35;
      font-family: 'Cinzel', 'Palatino Linotype', serif;
      color: #eae5d9;
      pointer-events: auto;
    `;

    this.card = document.createElement('div');
    this.card.style.cssText = `
      background: #eae5d9;
      color: #141413;
      border: 2px solid #141413;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 24px 30px;
      width: 500px;
      max-width: 92vw;
      max-height: 88vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;
      pointer-events: auto;
    `;
    this.container.appendChild(this.card);

    const uiRoot = document.getElementById('ui-root') || document.body;
    uiRoot.appendChild(this.container);
    this.render();
  }

  render() {
    const saved = saveSystem.load();
    const C = CONFIG.CONTROLS;
    const unlocked = Math.max(1, saved.unlockedChapter || 1);
    const chapters = SUMIRO_CHAPTERS.filter(ch => ch.id <= unlocked);

    const keyboardRows = Object.values(C)
      .map(c => `<div><strong>${c.label}:</strong> ${c.display}</div>`)
      .join('');
    const gamepadRows = `
      <div><strong>Move:</strong> Left Stick / D-Pad</div>
      <div><strong>Jump / Vault:</strong> A / Cross</div>
      <div><strong>Katana Attack:</strong> X / Square</div>
      <div><strong>Parry / Guard:</strong> LB / L1</div>
      <div><strong>Ink Step Dash:</strong> RB / R2</div>
      <div><strong>Paint Bridge / Bell:</strong> Y / LT</div>
      <div><strong>3D Camera / Pause:</strong> Back / Start</div>
    `;

    this.card.innerHTML = `
      <h2 style="font-family:'Yuji Syuku',serif;font-size:28px;margin:0;letter-spacing:2px;">PAUSED</h2>
      <div style="display:flex;gap:8px;width:100%;">
        <button id="pm-resume" style="flex:1;padding:10px;background:#141413;color:#eae5d9;border:none;border-radius:4px;font-weight:bold;letter-spacing:1.5px;cursor:pointer;">RESUME</button>
        <button id="pm-restart" style="flex:1;padding:10px;background:#a8321f;color:#eae5d9;border:none;border-radius:4px;font-weight:bold;letter-spacing:1.5px;cursor:pointer;">RESTART CHAPTER</button>
      </div>

      <div style="width:100%;background:rgba(92,91,87,0.1);padding:10px 12px;border-radius:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong style="font-size:12px;">CHAPTER SELECT (UNLOCKED)</strong>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${chapters.map(ch => `<button class="pm-ch-btn" data-ch="${ch.id}" style="padding:4px 8px;background:#d6caaf;color:#141413;border:1px solid #141413;border-radius:3px;font-size:11px;cursor:pointer;">${ch.num}. ${ch.title}</button>`).join('')}
        </div>
      </div>

      <div style="width:100%;background:rgba(92,91,87,0.1);padding:10px 12px;border-radius:4px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong>CONTROLS</strong>
          <div style="display:flex;gap:4px;">
            <button id="pm-tab-kb" style="padding:2px 8px;font-size:11px;border:1px solid #141413;border-radius:3px;cursor:pointer;background:${this.controlsTab === 'keyboard' ? '#141413' : 'transparent'};color:${this.controlsTab === 'keyboard' ? '#eae5d9' : '#141413'};">Keyboard</button>
            <button id="pm-tab-pad" style="padding:2px 8px;font-size:11px;border:1px solid #141413;border-radius:3px;cursor:pointer;background:${this.controlsTab === 'gamepad' ? '#141413' : 'transparent'};color:${this.controlsTab === 'gamepad' ? '#eae5d9' : '#141413'};">Gamepad</button>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 10px;line-height:1.5;color:#2b2a26;">
          ${this.controlsTab === 'keyboard' ? keyboardRows : gamepadRows}
        </div>
      </div>

      <div style="width:100%;display:flex;flex-direction:column;gap:8px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>Master Volume</span>
          <input type="range" id="vol-master" min="0" max="1" step="0.05" value="${saved.volumeMaster ?? 0.8}" style="width:170px;">
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>Music Volume</span>
          <input type="range" id="vol-music" min="0" max="1" step="0.05" value="${saved.volumeMusic ?? 0.65}" style="width:170px;">
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span>SFX Volume</span>
          <input type="range" id="vol-sfx" min="0" max="1" step="0.05" value="${saved.volumeSFX ?? 0.85}" style="width:170px;">
        </div>
        <div style="display:flex;gap:8px;margin-top:4px;flex-wrap:wrap;">
          <button id="pm-mute" style="flex:1;padding:6px;background:${this.audioEngine?.isMuted ? '#a8321f' : '#141413'};color:#eae5d9;border:none;border-radius:3px;font-size:11px;cursor:pointer;">${this.audioEngine?.isMuted ? 'AUDIO: MUTED (M)' : 'AUDIO: ON (M)'}</button>
          <button id="pm-shake" style="flex:1;padding:6px;background:#3d3b36;color:#eae5d9;border:none;border-radius:3px;font-size:11px;cursor:pointer;">SHAKE: ${saved.reduceShake ? 'REDUCED' : 'FULL'}</button>
          <button id="pm-quality" style="flex:1;padding:6px;background:#3d3b36;color:#eae5d9;border:none;border-radius:3px;font-size:11px;cursor:pointer;">QUALITY: ${(saved.quality || 'high').toUpperCase()}</button>
          <button id="pm-assist" style="flex:1;padding:6px;background:${saved.assistMode ? '#a8321f' : '#3d3b36'};color:#eae5d9;border:none;border-radius:3px;font-size:11px;cursor:pointer;">ASSIST: ${saved.assistMode ? 'ON' : 'OFF'}</button>
        </div>
      </div>
    `;

    this.card.querySelector('#pm-resume').onclick = () => this.callbacks.onResume?.() ?? this.close();
    this.card.querySelector('#pm-restart').onclick = () => {
      this.close();
      this.callbacks.onRestartChapter?.();
    };
    this.card.querySelectorAll('.pm-ch-btn').forEach(btn => {
      btn.onclick = () => {
        const ch = SUMIRO_CHAPTERS.find(c => c.id === Number(btn.dataset.ch));
        if (ch) {
          this.close();
          this.callbacks.onSelectChapter?.(ch);
        }
      };
    });
    this.card.querySelector('#pm-tab-kb').onclick = () => { this.controlsTab = 'keyboard'; this.render(); };
    this.card.querySelector('#pm-tab-pad').onclick = () => { this.controlsTab = 'gamepad'; this.render(); };

    this.card.querySelector('#vol-master').oninput = (e) => this.audioEngine?.setMasterVolume(parseFloat(e.target.value));
    this.card.querySelector('#vol-music').oninput = (e) => this.audioEngine?.setMusicVolume(parseFloat(e.target.value));
    this.card.querySelector('#vol-sfx').oninput = (e) => this.audioEngine?.setSFXVolume(parseFloat(e.target.value));

    this.card.querySelector('#pm-mute').onclick = () => {
      this.audioEngine?.toggleMute();
      this.render();
    };
    this.card.querySelector('#pm-shake').onclick = () => {
      const cur = saveSystem.load();
      const next = !cur.reduceShake;
      saveSystem.save({ ...cur, reduceShake: next });
      this.callbacks.onShakeChange?.(next);
      this.render();
    };
    this.card.querySelector('#pm-quality').onclick = () => {
      const cur = saveSystem.load();
      const next = cur.quality === 'low' ? 'high' : 'low';
      saveSystem.save({ ...cur, quality: next });
      this.callbacks.onQualityChange?.(next);
      this.render();
    };
    this.card.querySelector('#pm-assist').onclick = () => {
      const cur = saveSystem.load();
      const next = !cur.assistMode;
      saveSystem.save({ ...cur, assistMode: next });
      this.callbacks.onAssistChange?.(next);
      this.render();
    };
  }

  open() {
    this.isOpen = true;
    this.render();
    this.container.style.display = 'flex';
  }

  close() {
    this.isOpen = false;
    this.container.style.display = 'none';
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
    return this.isOpen;
  }

  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
