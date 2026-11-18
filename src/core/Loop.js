// Fixed Timestep 60Hz Game Loop with Accumulator, Clamping, and Interpolation

import { CONFIG } from '../config.js';

export class Loop {
  constructor({ onFixedUpdate, onRender, onInputUpdate }) {
    this.onFixedUpdate = onFixedUpdate;
    this.onRender = onRender;
    this.onInputUpdate = onInputUpdate;

    this.timeStep = CONFIG.TIME_STEP; // 1/60 s
    this.maxDelta = CONFIG.MAX_DELTA; // 0.1 s
    this.accumulator = 0;
    this.lastTime = performance.now();
    this.running = false;
    this.paused = false;

    // Hit-stop support (in seconds)
    this.hitStopRemaining = 0;

    // Time scale for slow-motion effects (e.g. backstab)
    this.timeScale = 1.0;

    this._rafId = null;
    this._tick = this.tick.bind(this);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.accumulator = 0;
    this._rafId = requestAnimationFrame(this._tick);
  }

  stop() {
    this.running = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
    this.lastTime = performance.now();
  }

  triggerHitStop(ms) {
    this.hitStopRemaining = Math.max(this.hitStopRemaining, ms / 1000);
  }

  setTimeScale(scale) {
    this.timeScale = Math.max(0, scale);
  }

  tick(currentTime) {
    if (!this.running) return;

    let delta = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Clamp delta to prevent spiral of death / floor tunneling on lag spikes
    if (delta > this.maxDelta) {
      delta = this.maxDelta;
    }

    if (!this.paused) {
      // Process hit-stop
      if (this.hitStopRemaining > 0) {
        this.hitStopRemaining -= delta;
        // Still render current state without advancing physics
        if (this.onRender) {
          this.onRender(0);
        }
        this._rafId = requestAnimationFrame(this._tick);
        return;
      }

      const scaledDelta = delta * this.timeScale;
      this.accumulator += scaledDelta;

      // Update input buffer timers with real delta
      if (this.onInputUpdate) {
        this.onInputUpdate(delta);
      }

      // Consume fixed simulation steps
      let stepsTaken = 0;
      const maxSubSteps = 8;

      while (this.accumulator >= this.timeStep && stepsTaken < maxSubSteps) {
        if (this.onFixedUpdate) {
          this.onFixedUpdate(this.timeStep);
        }
        this.accumulator -= this.timeStep;
        stepsTaken++;
      }

      // If still lagging behind after maxSubSteps, discard accumulator to avoid spiraling
      if (this.accumulator >= this.timeStep) {
        this.accumulator = 0;
      }

      // Calculate interpolation alpha for render smoothing
      const alpha = this.accumulator / this.timeStep;
      if (this.onRender) {
        this.onRender(alpha);
      }
    }

    this._rafId = requestAnimationFrame(this._tick);
  }
}
