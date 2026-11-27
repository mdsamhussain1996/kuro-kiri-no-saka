// Unified Input System: Action mapping from CONFIG.CONTROLS, edge detection for Keyboard/Mouse/Gamepad/Touch,
// radial deadzone (0.25), preventDefault hygiene, and unscaled-dt input buffering.

import { CONFIG } from '../config.js';

export class Input {
  constructor() {
    this.keysDown = new Set();
    this.keysPressedThisStep = new Set();
    this.keysReleasedThisStep = new Set();

    // Mouse buttons
    this.mouseButtonsDown = new Set();
    this.mousePressedThisStep = new Set();

    // Gamepad edge-detection state
    this.prevGamepadButtons = new Array(18).fill(false);
    this.gamepadButtonsPressedThisStep = new Set();
    this.gamepadButtonsReleasedThisStep = new Set();

    // Touch controls state (driven by on-screen touch overlay when on touch devices)
    this.touchState = {
      left: false,
      right: false,
      up: false,
      down: false,
      jump: false,
      attack: false,
      parry: false,
      dash: false,
      paintBridge: false,
      bell: false
    };
    this.prevTouchState = { ...this.touchState };
    this.touchPressedThisStep = new Set();
    this.touchReleasedThisStep = new Set();

    // Buffered action timers (in unscaled seconds)
    this.jumpBufferTimer = 0;
    this.attackBufferTimer = 0;
    this.parryBufferTimer = 0;
    this.dashBufferTimer = 0;
    this.paintBridgeBufferTimer = 0;
    this.bellBufferTimer = 0;
    this.ippitsuBufferTimer = 0;
    this.cameraPressedThisStep = false;
    this.pausePressedThisStep = false;
    this.mutePressedThisStep = false;

    // Directional state
    this.axisX = 0;
    this.axisY = 0;

    // Block gameplay input while menus / dialogue are active
    this.blocked = false;
    this.onFirstGesture = null;
    this._gestureFired = false;

    this._onKeyDown = this.onKeyDown.bind(this);
    this._onKeyUp = this.onKeyUp.bind(this);
    this._onMouseDown = this.onMouseDown.bind(this);
    this._onMouseUp = this.onMouseUp.bind(this);
    this._onContextMenu = (e) => e.preventDefault();
    this._onBlur = this.onBlur.bind(this);

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this._onKeyDown, { passive: false });
      window.addEventListener('keyup', this._onKeyUp);
      window.addEventListener('mousedown', this._onMouseDown);
      window.addEventListener('mouseup', this._onMouseUp);
      window.addEventListener('contextmenu', this._onContextMenu);
      window.addEventListener('blur', this._onBlur);
    }
  }

  _notifyGesture() {
    if (!this._gestureFired) {
      this._gestureFired = true;
      if (typeof this.onFirstGesture === 'function') {
        this.onFirstGesture();
      }
    }
  }

  onKeyDown(e) {
    const tag = e.target?.tagName;
    const isFormInput = tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';
    const preventCodes = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab']);
    if (!isFormInput && preventCodes.has(e.code)) {
      e.preventDefault();
    }

    this._notifyGesture();
    if (e.repeat) return;

    const code = e.code;
    this.keysDown.add(code);
    this.keysPressedThisStep.add(code);

    const C = CONFIG.CONTROLS;
    if (C.pause.keys.includes(code)) {
      this.pausePressedThisStep = true;
      return;
    }
    if (C.mute.keys.includes(code)) {
      this.mutePressedThisStep = true;
      return;
    }

    if (this.blocked) return;

    if (C.jump.keys.includes(code)) this.jumpBufferTimer = C.jump.buffer;
    if (C.attack.keys.includes(code)) this.attackBufferTimer = C.attack.buffer;
    if (C.parry.keys.includes(code)) this.parryBufferTimer = C.parry.buffer;
    if (C.dash.keys.includes(code)) this.dashBufferTimer = C.dash.buffer;
    if (C.paintBridge.keys.includes(code)) this.paintBridgeBufferTimer = 0.12;
    if (C.bell.keys.includes(code)) this.bellBufferTimer = 0.12;
    if (C.ippitsu?.keys.includes(code)) this.ippitsuBufferTimer = 0.12;
    if (C.camera.keys.includes(code)) this.cameraPressedThisStep = true;
  }

  onKeyUp(e) {
    const code = e.code;
    this.keysDown.delete(code);
    this.keysReleasedThisStep.add(code);
  }

  onMouseDown(e) {
    this._notifyGesture();
    this.mouseButtonsDown.add(e.button);
    this.mousePressedThisStep.add(e.button);
    if (this.blocked) return;

    const tag = e.target?.tagName;
    if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT') return;

    if (e.button === 0) {
      this.attackBufferTimer = CONFIG.CONTROLS.attack.buffer;
    } else if (e.button === 2) {
      this.parryBufferTimer = CONFIG.CONTROLS.parry.buffer;
    }
  }

  onMouseUp(e) {
    this.mouseButtonsDown.delete(e.button);
  }

  onBlur() {
    this.keysDown.clear();
    this.keysPressedThisStep.clear();
    this.keysReleasedThisStep.clear();
    this.mouseButtonsDown.clear();
    this.mousePressedThisStep.clear();
    this.gamepadButtonsPressedThisStep.clear();
    this.gamepadButtonsReleasedThisStep.clear();
    for (const k of Object.keys(this.touchState)) {
      this.touchState[k] = false;
      this.prevTouchState[k] = false;
    }
    this.touchPressedThisStep.clear();
    this.touchReleasedThisStep.clear();

    this.jumpBufferTimer = 0;
    this.attackBufferTimer = 0;
    this.dashBufferTimer = 0;
    this.parryBufferTimer = 0;
    this.paintBridgeBufferTimer = 0;
    this.bellBufferTimer = 0;
    this.ippitsuBufferTimer = 0;
    this.cameraPressedThisStep = false;
    this.pausePressedThisStep = false;
    this.mutePressedThisStep = false;
    this.axisX = 0;
    this.axisY = 0;
  }

  /**
   * Unscaled dt update for buffers, axes, gamepad edge detection, and touch edge detection.
   */
  update(dt) {
    if (this.jumpBufferTimer > 0) this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - dt);
    if (this.attackBufferTimer > 0) this.attackBufferTimer = Math.max(0, this.attackBufferTimer - dt);
    if (this.dashBufferTimer > 0) this.dashBufferTimer = Math.max(0, this.dashBufferTimer - dt);
    if (this.parryBufferTimer > 0) this.parryBufferTimer = Math.max(0, this.parryBufferTimer - dt);
    if (this.paintBridgeBufferTimer > 0) this.paintBridgeBufferTimer = Math.max(0, this.paintBridgeBufferTimer - dt);
    if (this.bellBufferTimer > 0) this.bellBufferTimer = Math.max(0, this.bellBufferTimer - dt);
    if (this.ippitsuBufferTimer > 0) this.ippitsuBufferTimer = Math.max(0, this.ippitsuBufferTimer - dt);

    // 1. Poll Gamepad with edge detection + 0.25 radial deadzone
    let gpX = 0;
    let gpY = 0;
    const gp = this.getGamepad();
    if (gp) {
      for (let i = 0; i < 18; i++) {
        const nowPressed = !!gp.buttons?.[i]?.pressed;
        const wasPressed = !!this.prevGamepadButtons[i];
        if (nowPressed && !wasPressed) {
          this.gamepadButtonsPressedThisStep.add(i);
          this._notifyGesture();
        } else if (!nowPressed && wasPressed) {
          this.gamepadButtonsReleasedThisStep.add(i);
        }
        this.prevGamepadButtons[i] = nowPressed;
      }

      // Pause (Start = button 9)
      if (this.gamepadButtonsPressedThisStep.has(9)) {
        this.pausePressedThisStep = true;
      }

      if (!this.blocked) {
        const rawX = gp.axes?.[0] ?? 0;
        const rawY = -(gp.axes?.[1] ?? 0);
        const mag = Math.hypot(rawX, rawY);
        const radialDeadzone = 0.25;
        if (mag > radialDeadzone) {
          const nx = rawX / mag;
          const ny = rawY / mag;
          if (Math.abs(nx) > 0.35) gpX = nx > 0 ? 1 : -1;
          if (Math.abs(ny) > 0.45) gpY = ny > 0 ? 1 : -1;
        }

        if (gp.buttons?.[15]?.pressed) gpX = 1;
        if (gp.buttons?.[14]?.pressed) gpX = -1;
        if (gp.buttons?.[12]?.pressed) gpY = 1;
        if (gp.buttons?.[13]?.pressed) gpY = -1;

        if (this.gamepadButtonsPressedThisStep.has(0)) this.jumpBufferTimer = CONFIG.CONTROLS.jump.buffer; // A / Cross
        if (this.gamepadButtonsPressedThisStep.has(2)) this.attackBufferTimer = CONFIG.CONTROLS.attack.buffer; // X / Square
        if (this.gamepadButtonsPressedThisStep.has(4)) this.parryBufferTimer = CONFIG.CONTROLS.parry.buffer; // LB
        if (this.gamepadButtonsPressedThisStep.has(5) || this.gamepadButtonsPressedThisStep.has(7)) {
          this.dashBufferTimer = CONFIG.CONTROLS.dash.buffer; // RB / R2
        }
        if (this.gamepadButtonsPressedThisStep.has(3)) this.paintBridgeBufferTimer = 0.12; // Y
        if (this.gamepadButtonsPressedThisStep.has(6)) this.bellBufferTimer = 0.12; // LT
        if (this.gamepadButtonsPressedThisStep.has(8)) this.cameraPressedThisStep = true; // Select/Back
      }
    }

    // 2. Poll Touch Controls edge detection
    for (const k of Object.keys(this.touchState)) {
      const nowT = !!this.touchState[k];
      const prevT = !!this.prevTouchState[k];
      if (nowT && !prevT) {
        this.touchPressedThisStep.add(k);
        this._notifyGesture();
      } else if (!nowT && prevT) {
        this.touchReleasedThisStep.add(k);
      }
      this.prevTouchState[k] = nowT;
    }

    if (!this.blocked) {
      if (this.touchPressedThisStep.has('jump')) this.jumpBufferTimer = CONFIG.CONTROLS.jump.buffer;
      if (this.touchPressedThisStep.has('attack')) this.attackBufferTimer = CONFIG.CONTROLS.attack.buffer;
      if (this.touchPressedThisStep.has('parry')) this.parryBufferTimer = CONFIG.CONTROLS.parry.buffer;
      if (this.touchPressedThisStep.has('dash')) this.dashBufferTimer = CONFIG.CONTROLS.dash.buffer;
      if (this.touchPressedThisStep.has('paintBridge')) this.paintBridgeBufferTimer = 0.12;
      if (this.touchPressedThisStep.has('bell')) this.bellBufferTimer = 0.12;
    }

    // 3. Combine directional axes
    if (this.blocked) {
      this.axisX = 0;
      this.axisY = 0;
      return;
    }

    let x = 0;
    let y = 0;
    if (this.isActionHeld('moveRight') || this.touchState.right) x += 1;
    if (this.isActionHeld('moveLeft') || this.touchState.left) x -= 1;
    if (this.isActionHeld('moveUp') || this.touchState.up) y += 1;
    if (this.isActionHeld('moveDown') || this.touchState.down) y -= 1;

    if (gpX !== 0) x = gpX;
    if (gpY !== 0) y = gpY;

    this.axisX = Math.max(-1, Math.min(1, x));
    this.axisY = Math.max(-1, Math.min(1, y));
  }

  postStep() {
    this.keysPressedThisStep.clear();
    this.keysReleasedThisStep.clear();
    this.mousePressedThisStep.clear();
    this.gamepadButtonsPressedThisStep.clear();
    this.gamepadButtonsReleasedThisStep.clear();
    this.touchPressedThisStep.clear();
    this.touchReleasedThisStep.clear();
    this.cameraPressedThisStep = false;
    this.pausePressedThisStep = false;
    this.mutePressedThisStep = false;
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

  isActionHeld(actionName) {
    const binding = CONFIG.CONTROLS[actionName];
    if (!binding) return false;
    return binding.keys.some(k => this.keysDown.has(k));
  }

  // Action queries & consumption
  get jumpBuffered() {
    return !this.blocked && this.jumpBufferTimer > 0;
  }

  consumeJump() {
    this.jumpBufferTimer = 0;
  }

  get jumpHeld() {
    if (this.blocked) return false;
    const gp = this.getGamepad();
    return this.isActionHeld('jump') || !!(gp && gp.buttons?.[0]?.pressed) || !!this.touchState.jump;
  }

  get jumpReleased() {
    if (this.blocked) return false;
    const keyRel = CONFIG.CONTROLS.jump.keys.some(k => this.keysReleasedThisStep.has(k));
    const padRel = this.gamepadButtonsReleasedThisStep.has(0);
    const touchRel = this.touchReleasedThisStep.has('jump');
    return keyRel || padRel || touchRel;
  }

  get attackBuffered() {
    return !this.blocked && this.attackBufferTimer > 0;
  }

  consumeAttack() {
    this.attackBufferTimer = 0;
  }

  get dashBuffered() {
    return !this.blocked && this.dashBufferTimer > 0;
  }

  consumeDash() {
    this.dashBufferTimer = 0;
  }

  get parryBuffered() {
    return !this.blocked && this.parryBufferTimer > 0;
  }

  consumeParry() {
    this.parryBufferTimer = 0;
  }

  get paintBridgePressed() {
    return !this.blocked && this.paintBridgeBufferTimer > 0;
  }

  consumePaintBridge() {
    this.paintBridgeBufferTimer = 0;
  }

  get bellPressed() {
    return !this.blocked && this.bellBufferTimer > 0;
  }

  consumeBell() {
    this.bellBufferTimer = 0;
  }

  get ippitsuPressed() {
    return !this.blocked && this.ippitsuBufferTimer > 0;
  }

  consumeIppitsu() {
    this.ippitsuBufferTimer = 0;
  }

  get cameraPressed() {
    return !this.blocked && this.cameraPressedThisStep;
  }

  consumeCamera() {
    this.cameraPressedThisStep = false;
  }

  get pausePressed() {
    return this.pausePressedThisStep;
  }

  consumePause() {
    this.pausePressedThisStep = false;
  }

  get mutePressed() {
    return this.mutePressedThisStep;
  }

  consumeMute() {
    this.mutePressedThisStep = false;
  }

  dispose() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this._onKeyDown);
      window.removeEventListener('keyup', this._onKeyUp);
      window.removeEventListener('mousedown', this._onMouseDown);
      window.removeEventListener('mouseup', this._onMouseUp);
      window.removeEventListener('contextmenu', this._onContextMenu);
      window.removeEventListener('blur', this._onBlur);
    }
  }
}
