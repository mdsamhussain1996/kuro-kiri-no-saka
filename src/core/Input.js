// Input System: Action mapping, repeat filtering, input buffering, Gamepad support

import { CONFIG } from '../config.js';

export class Input {
  constructor() {
    this.keysDown = new Set();
    this.keysPressedThisStep = new Set();
    this.keysReleasedThisStep = new Set();

    // Buffered action timers (in seconds)
    this.jumpBufferTimer = 0;
    this.attackBufferTimer = 0;
    this.dashBufferTimer = 0;
    this.parryBufferTimer = 0;

    // Directional state
    this.axisX = 0;
    this.axisY = 0;

    // Mouse buttons
    this.mouseButtonsDown = new Set();

    // Event handler bindings for clean disposal
    this._onKeyDown = this.onKeyDown.bind(this);
    this._onKeyUp = this.onKeyUp.bind(this);
    this._onMouseDown = this.onMouseDown.bind(this);
    this._onMouseUp = this.onMouseUp.bind(this);
    this._onContextMenu = (e) => e.preventDefault();
    this._onBlur = this.onBlur.bind(this);

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('mousedown', this._onMouseDown);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('contextmenu', this._onContextMenu);
    window.addEventListener('blur', this._onBlur);
  }

  onKeyDown(e) {
    if (e.repeat) return; // Ignore browser auto-repeat per §3 bug 2
    const code = e.code;
    this.keysDown.add(code);
    this.keysPressedThisStep.add(code);

    // Buffer critical combat & traversal actions
    if (code === 'Space') {
      this.jumpBufferTimer = CONFIG.PLAYER.jumpBuffer;
    }
    if (code === 'KeyJ') {
      this.attackBufferTimer = 0.12;
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'KeyK') {
      this.dashBufferTimer = 0.12;
    }
    if (code === 'KeyL') {
      this.parryBufferTimer = 0.12;
    }
  }

  onKeyUp(e) {
    const code = e.code;
    this.keysDown.delete(code);
    this.keysReleasedThisStep.add(code);
  }

  onMouseDown(e) {
    this.mouseButtonsDown.add(e.button);
    if (e.button === 0) { // Left click -> Attack
      this.attackBufferTimer = 0.12;
    } else if (e.button === 2) { // Right click -> Parry
      this.parryBufferTimer = 0.12;
    }
  }

  onMouseUp(e) {
    this.mouseButtonsDown.delete(e.button);
  }

  onBlur() {
    // Clear all held inputs on blur to prevent sticking keys
    this.keysDown.clear();
    this.keysPressedThisStep.clear();
    this.keysReleasedThisStep.clear();
    this.mouseButtonsDown.clear();
    this.jumpBufferTimer = 0;
    this.attackBufferTimer = 0;
    this.dashBufferTimer = 0;
    this.parryBufferTimer = 0;
    this.axisX = 0;
    this.axisY = 0;
  }

  update(dt) {
    // Decrement action buffers
    if (this.jumpBufferTimer > 0) this.jumpBufferTimer -= dt;
    if (this.attackBufferTimer > 0) this.attackBufferTimer -= dt;
    if (this.dashBufferTimer > 0) this.dashBufferTimer -= dt;
    if (this.parryBufferTimer > 0) this.parryBufferTimer -= dt;

    // Read Keyboard Axes
    let x = 0;
    let y = 0;
    if (this.isHeld('KeyD') || this.isHeld('ArrowRight')) x += 1;
    if (this.isHeld('KeyA') || this.isHeld('ArrowLeft'))  x -= 1;
    if (this.isHeld('KeyW') || this.isHeld('ArrowUp'))    y += 1;
    if (this.isHeld('KeyS') || this.isHeld('ArrowDown'))  y -= 1;

    // Poll Gamepad (if connected)
    const gp = this.getGamepad();
    if (gp) {
      const stickX = gp.axes[0] ?? 0;
      const stickY = -(gp.axes[1] ?? 0); // invert stick Y so up is positive
      const deadzone = 0.25;

      if (Math.abs(stickX) > deadzone) {
        x = stickX > 0 ? 1 : -1;
      }
      if (Math.abs(stickY) > deadzone) {
        y = stickY > 0 ? 1 : -1;
      }

      // D-Pad
      if (gp.buttons[15]?.pressed) x = 1;  // D-Pad Right
      if (gp.buttons[14]?.pressed) x = -1; // D-Pad Left
      if (gp.buttons[12]?.pressed) y = 1;  // D-Pad Up
      if (gp.buttons[13]?.pressed) y = -1; // D-Pad Down

      // Gamepad Buttons
      if (gp.buttons[0]?.pressed) this.jumpBufferTimer = CONFIG.PLAYER.jumpBuffer; // A / Cross
      if (gp.buttons[2]?.pressed) this.attackBufferTimer = 0.12;                   // X / Square
      if (gp.buttons[5]?.pressed || gp.buttons[7]?.pressed) this.dashBufferTimer = 0.12; // RB / R2
      if (gp.buttons[4]?.pressed || gp.buttons[3]?.pressed) this.parryBufferTimer = 0.12; // LB / Y
    }

    this.axisX = x;
    this.axisY = y;
  }

  postStep() {
    this.keysPressedThisStep.clear();
    this.keysReleasedThisStep.clear();
  }

  getGamepad() {
    if (typeof navigator !== 'undefined' && navigator.getGamepads) {
      const gamepads = navigator.getGamepads();
      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i] && gamepads[i].connected) return gamepads[i];
      }
    }
    return null;
  }

  isHeld(code) {
    return this.keysDown.has(code);
  }

  isPressed(code) {
    return this.keysPressedThisStep.has(code);
  }

  isReleased(code) {
    return this.keysReleasedThisStep.has(code);
  }

  // Action queries & consumption
  get jumpBuffered() {
    return this.jumpBufferTimer > 0;
  }

  consumeJump() {
    this.jumpBufferTimer = 0;
  }

  get jumpHeld() {
    const gp = this.getGamepad();
    return this.isHeld('Space') || (gp && gp.buttons[0]?.pressed);
  }

  get jumpReleased() {
    return this.isReleased('Space');
  }

  get attackBuffered() {
    return this.attackBufferTimer > 0;
  }

  consumeAttack() {
    this.attackBufferTimer = 0;
  }

  get dashBuffered() {
    return this.dashBufferTimer > 0;
  }

  consumeDash() {
    this.dashBufferTimer = 0;
  }

  get parryBuffered() {
    return this.parryBufferTimer > 0;
  }

  consumeParry() {
    this.parryBufferTimer = 0;
  }

  get pausePressed() {
    const gp = this.getGamepad();
    return this.isPressed('Escape') || (gp && gp.buttons[9]?.pressed);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('mousedown', this._onMouseDown);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('contextmenu', this._onContextMenu);
    window.removeEventListener('blur', this._onBlur);
  }
}
