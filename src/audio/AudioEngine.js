// 100% Procedural WebAudio Engine — Lookahead Scheduler, Chapter/Boss Adaptive Score,
// Surface Footsteps, Combat SFX, Safe Clamped BiquadFilters & Master Limiter.

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.limiter = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.ambienceGain = null;

    const saved = saveSystem.load();
    this.volumeMaster = typeof saved.volumeMaster === 'number' ? saved.volumeMaster : (CONFIG.AUDIO.masterVolume ?? 0.8);
    this.volumeMusic = typeof saved.volumeMusic === 'number' ? saved.volumeMusic : (CONFIG.AUDIO.musicVolume ?? 0.65);
    this.volumeSFX = typeof saved.volumeSFX === 'number' ? saved.volumeSFX : (CONFIG.AUDIO.sfxVolume ?? 0.85);
    this.isMuted = !!saved.muted;

    this.initialized = false;
    this.windNode = null;
    this.rainNode = null;
    this.rainGain = null;

    // Adaptive Music State (lookahead scheduled via AudioContext.currentTime)
    this.shamisenScale = [220.0, 246.94, 261.63, 329.63, 349.23, 440.0, 493.88, 523.25]; // A minor / In-sen pentatonic
    this.nextNoteTime = 0;
    this.musicStep = 0;
    this.chapterId = 1;
    this.inCombat = false;
    this.combatDecayTimer = 0;
    this.inBoss = false;
    this.bossPhase = 1;
    this.weather = 'clear';
    this.activeVoices = 0;
    this.maxVoices = 24;

    this.setupEventListeners();
  }

  clampFreq(freq) {
    if (!this.ctx) return 440;
    const nyquistSafe = this.ctx.sampleRate * 0.45;
    return Math.max(20, Math.min(nyquistSafe, Number.isFinite(freq) ? freq : 440));
  }

  init() {
    if (this.initialized) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master Limiter (DynamicsCompressorNode) to prevent clipping during boss fights
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.setValueAtTime(-6, this.ctx.currentTime);
      this.limiter.knee.setValueAtTime(12, this.ctx.currentTime);
      this.limiter.ratio.setValueAtTime(8, this.ctx.currentTime);
      this.limiter.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.limiter.release.setValueAtTime(0.15, this.ctx.currentTime);
      this.limiter.connect(this.ctx.destination);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volumeMaster, this.ctx.currentTime);
      this.masterGain.connect(this.limiter);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(this.volumeMusic, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(this.volumeSFX, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      this.ambienceGain = this.ctx.createGain();
      this.ambienceGain.gain.setValueAtTime(this.volumeSFX * 0.75, this.ctx.currentTime);
      this.ambienceGain.connect(this.masterGain);

      this.startAmbientWind();
      this.startAmbientRain();
      this.nextNoteTime = this.ctx.currentTime + 0.1;

      this.initialized = true;
    } catch (e) {
      console.warn('AudioEngine: WebAudio not supported or blocked', e);
    }
  }

  ensureContext() {
    if (!this.initialized) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  setMasterVolume(val) {
    this.volumeMaster = Math.max(0, Math.min(1, Number(val) || 0));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volumeMaster, this.ctx.currentTime, 0.03);
    }
    saveSystem.save({ ...saveSystem.load(), volumeMaster: this.volumeMaster });
  }

  setMusicVolume(val) {
    this.volumeMusic = Math.max(0, Math.min(1, Number(val) || 0));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.volumeMusic, this.ctx.currentTime, 0.03);
    }
    saveSystem.save({ ...saveSystem.load(), volumeMusic: this.volumeMusic });
  }

  setSFXVolume(val) {
    this.volumeSFX = Math.max(0, Math.min(1, Number(val) || 0));
    if (this.ctx) {
      if (this.sfxGain) this.sfxGain.gain.setTargetAtTime(this.volumeSFX, this.ctx.currentTime, 0.03);
      if (this.ambienceGain) this.ambienceGain.gain.setTargetAtTime(this.volumeSFX * 0.75, this.ctx.currentTime, 0.03);
    }
    saveSystem.save({ ...saveSystem.load(), volumeSFX: this.volumeSFX });
  }

  setMuted(muted) {
    this.isMuted = !!muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volumeMaster, this.ctx.currentTime, 0.03);
    }
    saveSystem.save({ ...saveSystem.load(), muted: this.isMuted });
  }

  toggleMute() {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  setChapterContext(chapterId = 1, weather = 'clear', inBoss = false) {
    this.chapterId = chapterId;
    this.weather = weather;
    this.inBoss = !!inBoss;
    this.setRainIntensity(weather === 'rain' ? 1.0 : 0.0);
  }

  // --- Karplus-Strong Plucked String Synthesis (Shamisen) ---
  playShamisenPluck(freq = 440.0, duration = 1.6, velocity = 0.65, when = null) {
    if (!this.ctx || this.ctx.state !== 'running' || this.activeVoices >= this.maxVoices) return;
    const now = when ?? this.ctx.currentTime;
    const safeFreq = this.clampFreq(freq);
    const sampleRate = this.ctx.sampleRate;
    const period = Math.max(4, Math.round(sampleRate / safeFreq));
    const buffer = this.ctx.createBuffer(1, period, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < period; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.85;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;

    const delay = this.ctx.createDelay(0.1);
    delay.delayTime.setValueAtTime(1 / safeFreq, now);

    const feedback = this.ctx.createGain();
    feedback.gain.setValueAtTime(0.955, now);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(this.clampFreq(safeFreq * 3.2), now);
    filter.Q.setValueAtTime(0.7, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(velocity * 0.48, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noiseSource.connect(delay);
    delay.connect(filter);
    filter.connect(feedback);
    feedback.connect(delay);

    filter.connect(gain);
    gain.connect(this.musicGain);

    this.activeVoices++;
    noiseSource.onended = () => { this.activeVoices = Math.max(0, this.activeVoices - 1); };
    noiseSource.start(now);
    noiseSource.stop(now + 1 / safeFreq);
  }

  // --- Taiko Drum Synthesis ---
  playTaikoDrum(isHeavy = false, when = null, bus = null) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = when ?? this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    const startFreq = isHeavy ? 135 : 170;
    const endFreq = isHeavy ? 36 : 48;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.32);

    oscGain.gain.setValueAtTime(isHeavy ? 0.65 : 0.42, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    osc.connect(oscGain);
    oscGain.connect(bus || this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.6);

    if (!when) {
      this.playNoiseBurst(0.10, 320, 0.28);
    }
  }

  // --- Surface-Specific Footsteps (Stone / Wood / Bamboo with ±5% pitch variation) ---
  playFootstep(surface = 'stone') {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const jitter = 0.95 + Math.random() * 0.10;
    if (surface === 'wood') {
      this.playNoiseBurst(0.055, 520 * jitter, 0.16);
    } else if (surface === 'bamboo') {
      this.playNoiseBurst(0.045, 980 * jitter, 0.14);
    } else {
      this.playNoiseBurst(0.05, 340 * jitter, 0.14);
    }
  }

  playJump() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.playNoiseBurst(0.09, 720, 0.18);
  }

  playLand(yVel = -8) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const strength = Math.min(1.0, Math.abs(yVel) / 22);
    this.playNoiseBurst(0.09, 240, 0.15 + strength * 0.25);
  }

  playBambooSpring() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(640, now + 0.14);
    gain.gain.setValueAtTime(0.28, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playKatanaSlash(isHeavy = false) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.playNoiseBurst(isHeavy ? 0.22 : 0.14, isHeavy ? 1150 : 1650, 0.36);
  }

  playParryPing(isPerfect = true) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.frequency.setValueAtTime(isPerfect ? 1760 : 880, now);
    osc2.frequency.setValueAtTime(isPerfect ? 2640 : 1320, now);

    gain.gain.setValueAtTime(isPerfect ? 0.48 : 0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isPerfect ? 0.65 : 0.22));

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.7);
    osc2.stop(now + 0.7);
  }

  playInkSplash() {
    this.playNoiseBurst(0.16, 560, 0.32);
  }

  playDashWhoosh() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.15);
    gain.gain.setValueAtTime(0.32, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.18);
  }

  playVictoryStinger() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    [329.63, 440.0, 523.25, 659.25].forEach((freq, idx) => {
      this.playShamisenPluck(freq, 2.4, 0.72, now + idx * 0.16);
    });
  }

  playNoiseBurst(duration, filterFreq, volume = 0.4) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const bufferSize = Math.max(64, Math.floor(this.ctx.sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(this.clampFreq(filterFreq), this.ctx.currentTime);
    filter.Q.setValueAtTime(1.6, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    noise.start(now);
  }

  startAmbientWind() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = buffer;
    windSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(340, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.7, this.ctx.currentTime);

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.14, this.ctx.currentTime);

    windSource.connect(filter);
    filter.connect(this.windGain);
    this.windGain.connect(this.ambienceGain);
    windSource.start();
  }

  startAmbientRain() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.8, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0, this.ctx.currentTime);

    rainSource.connect(filter);
    filter.connect(this.rainGain);
    this.rainGain.connect(this.ambienceGain);
    rainSource.start();
  }

  setRainIntensity(val = 0) {
    if (this.rainGain && this.ctx) {
      this.rainGain.gain.setTargetAtTime(val * 0.24, this.ctx.currentTime, 0.4);
    }
  }

  playBambooFlute(freq = 440.0, duration = 2.4, when = null) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = when ?? this.ctx.currentTime;
    const safeFreq = this.clampFreq(freq);

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(safeFreq * 0.98, now);
    osc.frequency.exponentialRampToValueAtTime(safeFreq, now + 0.22);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(this.clampFreq(safeFreq * 2.0), now);
    filter.Q.setValueAtTime(0.7, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  // --- Lookahead Adaptive Music Scheduler ---
  update(dt) {
    if (!this.initialized || !this.ctx || this.ctx.state !== 'running') return;

    if (this.combatDecayTimer > 0) {
      this.combatDecayTimer -= dt;
      if (this.combatDecayTimer <= 0) this.inCombat = false;
    }

    const bpm = this.inBoss ? (88 + (this.bossPhase - 1) * 14) : (this.inCombat ? 80 : 68);
    const beatSec = 60 / bpm;
    const lookahead = 0.15;

    while (this.nextNoteTime < this.ctx.currentTime + lookahead) {
      const step = this.musicStep % 16;
      const scaleIdx = (step * 3 + this.chapterId) % this.shamisenScale.length;
      const note = this.shamisenScale[scaleIdx];

      if (step % 4 === 0 || (this.inBoss && step % 2 === 0)) {
        this.playShamisenPluck(note, beatSec * 1.8, this.inBoss ? 0.52 : 0.38, this.nextNoteTime);
      }
      if (step % 8 === 0) {
        this.playBambooFlute(note * 0.5, beatSec * 3.5, this.nextNoteTime);
      }
      if ((this.inCombat || this.inBoss) && step % 4 === 0) {
        this.playTaikoDrum(step === 0, this.nextNoteTime, this.musicGain);
      }

      this.nextNoteTime += beatSec * 0.5;
      this.musicStep++;
    }
  }

  setupEventListeners() {
    events.on('player_attack_swing', ({ isHeavy }) => this.playKatanaSlash(isHeavy));
    events.on('player:dash', () => this.playDashWhoosh());
    events.on('player:jump', () => this.playJump());
    events.on('player:walljump', () => this.playJump());
    events.on('player:land', ({ yVel }) => this.playLand(yVel));
    events.on('player:footstep', ({ surface }) => this.playFootstep(surface));
    events.on('bamboo_launch', () => this.playBambooSpring());
    events.on('parry_perfect', () => this.playParryPing(true));
    events.on('parry_late', () => this.playParryPing(false));
    events.on('boss_clink', () => this.playParryPing(false));
    events.on('enemy_alert', () => {
      this.inCombat = true;
      this.combatDecayTimer = 8.0;
    });
    events.on('checkpoint_activated', () => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      this.playShamisenPluck(523.25, 2.2, 0.75, t);
      this.playShamisenPluck(659.25, 2.5, 0.68, t + 0.2);
    });
    events.on('boss_defeated', () => this.playVictoryStinger());
    events.on('campaign_sunrise_victory', () => this.playVictoryStinger());
  }
}
