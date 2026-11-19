// 100% Procedural WebAudio Engine — Karplus-Strong Shamisen, Taiko Drums, Wind, Rain, Combat SFX

import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;

    this.initialized = false;
    this.isMuted = false;

    // Ambient Wind & Rain Nodes
    this.windNode = null;
    this.rainNode = null;

    // Pentatonic scale frequencies for ambient shamisen: E4, F4, A4, B4, C5
    this.shamisenScale = [329.63, 349.23, 440.0, 493.88, 523.25, 659.25];
    this.ambientMelodyTimer = 4.0;

    this.setupEventListeners();
  }

  init() {
    if (this.initialized) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master, Music, and SFX buses
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = CONFIG.AUDIO.masterVolume ?? 0.8;
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = CONFIG.AUDIO.musicVolume ?? 0.65;
      this.musicGain.connect(this.masterGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = CONFIG.AUDIO.sfxVolume ?? 0.85;
      this.sfxGain.connect(this.masterGain);

      this.startAmbientWind();
      this.startAmbientRain();

      this.initialized = true;
      console.log('AudioEngine: WebAudio synthesized successfully.');
    } catch (e) {
      console.warn('AudioEngine: WebAudio not supported or blocked', e);
    }
  }

  // Ensure AudioContext is resumed after user interaction per browser autoplay policies
  ensureContext() {
    if (!this.initialized) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // --- Karplus-Strong Plucked String Synthesis (Shamisen) ---
  playShamisenPluck(freq = 440.0, duration = 1.8, velocity = 0.8) {
    if (!this.ctx || this.ctx.state !== 'running') return;

    const sampleRate = this.ctx.sampleRate;
    const period = Math.round(sampleRate / freq);
    const buffer = this.ctx.createBuffer(1, period, sampleRate);
    const data = buffer.getChannelData(0);

    // Initial noise excitation burst (plectrum / bachi pluck)
    for (let i = 0; i < period; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.9;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Feedback delay line with low-pass filter
    const delay = this.ctx.createDelay();
    delay.delayTime.value = 1 / freq;

    const feedback = this.ctx.createGain();
    feedback.gain.value = 0.965; // string resonance decay

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = freq * 3.5;

    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(velocity * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    // Wire Karplus-Strong feedback loop
    noiseSource.connect(delay);
    delay.connect(filter);
    filter.connect(feedback);
    feedback.connect(delay);

    filter.connect(gain);
    gain.connect(this.musicGain);

    noiseSource.start(now);
    noiseSource.stop(now + 1 / freq);
  }

  // --- Taiko Drum Synthesis (Low Sine Sweep + Impact Noise) ---
  playTaikoDrum(isHeavy = false) {
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    // Low pitch drop (160 Hz -> 35 Hz)
    const startFreq = isHeavy ? 140 : 180;
    const endFreq = isHeavy ? 35 : 45;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.35);

    oscGain.gain.setValueAtTime(isHeavy ? 1.0 : 0.75, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(oscGain);
    oscGain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.7);

    // Membrane punch burst
    this.playNoiseBurst(0.12, 350, 0.4);
  }

  // --- Combat SFX: Katana Slash Whoosh ---
  playKatanaSlash(isHeavy = false) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.playNoiseBurst(isHeavy ? 0.22 : 0.15, isHeavy ? 1200 : 1800, 0.45);
  }

  // --- Combat SFX: Parry Resonant "Shing" ---
  playParryPing(isPerfect = true) {
    if (!this.ctx || this.ctx.state !== 'running') return;

    const now = this.ctx.currentTime;

    // Dual ringing bells at 2400 Hz and 4800 Hz
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.frequency.value = isPerfect ? 2600 : 2100;
    osc2.frequency.value = isPerfect ? 5200 : 4200;

    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (isPerfect ? 0.75 : 0.4));

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.8);
    osc2.stop(now + 0.8);
  }

  // --- Wet Ink Splash Burst ---
  playInkSplash() {
    this.playNoiseBurst(0.18, 600, 0.4);
  }

  // --- Dash Whoosh ---
  playDashWhoosh() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.16);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // --- Helper: Filtered Noise Burst ---
  playNoiseBurst(duration, filterFreq, volume = 0.5) {
    if (!this.ctx || this.ctx.state !== 'running') return;

    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = filterFreq;
    filter.Q.value = 1.8;

    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start(now);
  }

  // --- Ambient Wind Loop ---
  startAmbientWind() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = buffer;
    windSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 350;

    this.windGain = this.ctx.createGain();
    this.windGain.gain.value = 0.18;

    windSource.connect(filter);
    filter.connect(this.windGain);
    this.windGain.connect(this.masterGain);

    windSource.start();
  }

  // --- Ambient Rain Loop (Act II) ---
  startAmbientRain() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 0.8;

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.value = 0; // Off until Act II

    rainSource.connect(filter);
    filter.connect(this.rainGain);
    this.rainGain.connect(this.masterGain);

    rainSource.start();
  }

  setRainIntensity(val = 0) {
    if (this.rainGain && this.ctx) {
      this.rainGain.gain.setTargetAtTime(val * 0.28, this.ctx.currentTime, 0.4);
    }
  }

  // --- Bamboo Shakuhachi Flute Synthesis (Breath Noise + Vibrato Sine) ---
  playBambooFlute(freq = 440.0, duration = 2.8) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq * 0.98, now);
    osc.frequency.exponentialRampToValueAtTime(freq, now + 0.25);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = freq * 2.2;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.45);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  // --- Ambient Music Updates ---
  update(dt, playerX) {
    if (!this.initialized) return;

    // Adjust rain volume based on Act I Ravine proximity
    if (playerX >= 105 && playerX <= 232) {
      this.setRainIntensity(1.0);
    } else {
      this.setRainIntensity(0.0);
    }

    // Sparse pentatonic shamisen & bamboo shakuhachi flute phrases
    this.ambientMelodyTimer -= dt;
    if (this.ambientMelodyTimer <= 0) {
      this.ambientMelodyTimer = 6.5 + Math.random() * 7.5;
      const note = this.shamisenScale[Math.floor(Math.random() * this.shamisenScale.length)];
      this.playShamisenPluck(note, 2.2, 0.65);
      if (Math.random() > 0.45) {
        setTimeout(() => this.playBambooFlute(note, 2.6), 450);
      }
    }
  }

  setupEventListeners() {
    // Wire EventBus combat triggers
    events.on('player_attack_swing', ({ isHeavy }) => this.playKatanaSlash(isHeavy));
    events.on('player:dash', () => this.playDashWhoosh());
    events.on('parry_perfect', () => this.playParryPing(true));
    events.on('boss_clink', () => this.playParryPing(false));
    events.on('checkpoint_activated', () => {
      this.playShamisenPluck(523.25, 2.5, 0.9); // High C
      setTimeout(() => this.playShamisenPluck(659.25, 2.8, 0.8), 220); // High E
    });
    events.on('shrine_unlocked', () => {
      this.playTaikoDrum(true);
      setTimeout(() => this.playShamisenPluck(440.0, 3.0, 1.0), 300);
    });
    events.on('boss_intro_start', () => {
      this.playTaikoDrum(true);
      setTimeout(() => this.playTaikoDrum(true), 350);
    });
    events.on('lightning_flash', () => {
      this.playNoiseBurst(0.8, 180, 0.85); // Thunder
    });
    events.on('lantern_grapple', () => {
      this.playShamisenPluck(659.25, 1.8, 0.95); // Vermilion Grapple Chime
    });
    events.on('scroll_unlocked', () => {
      this.playTaikoDrum(true);
      setTimeout(() => this.playBambooFlute(523.25, 3.2), 250);
    });
    events.on('campaign_sunrise_victory', () => {
      this.playTaikoDrum(true);
      setTimeout(() => this.playShamisenPluck(523.25, 3.5, 1.0), 200);
      setTimeout(() => this.playBambooFlute(659.25, 4.0), 500);
    });

    // Resume context on first user interaction
    const unlockAudio = () => {
      this.ensureContext();
      window.removeEventListener('keydown', unlockAudio);
      window.removeEventListener('mousedown', unlockAudio);
    };
    window.addEventListener('keydown', unlockAudio);
    window.addEventListener('mousedown', unlockAudio);
  }
}
