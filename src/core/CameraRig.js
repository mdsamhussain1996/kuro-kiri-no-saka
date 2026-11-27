// Spring-Damped Third-Person Camera Rig (Sumiro Intimate 3D Framing + Wide Boss Arena Framing)
// Mode 0 (Default): Sumiro Intimate 3D Oblique Scroll Follow (close framing showing 3D cliff depth & Voronoi stairs)
// Mode 1: 3D Over-Shoulder Cinema View
// Mode 2: Wide Panoramic Scroll View
// Also supports mouse-look orbit (Alt+Drag or Middle-Mouse Drag).

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from './EventBus.js';

export class CameraRig {
  constructor(camera, initialMode = 0) {
    this.camera = camera;
    this.mode = initialMode;
    this.targetCameraY = 3.6;
    this.prevBaseCamPos = new THREE.Vector3(0, 3.6, CONFIG.CAMERA.distanceZ);
    this.baseCamPos = new THREE.Vector3(0, 3.6, CONFIG.CAMERA.distanceZ);
    this.shakeAmount = 0;
    this.shakeOffset = new THREE.Vector2(0, 0);
    this.reduceShake = false;
    this.orbitBlocked = false;
    this.bosses = null;

    // Mouse-look orbit offsets
    this.isOrbitDragging = false;
    this.orbitYaw = 0;
    this.orbitPitch = 0;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    this._unsubShake = events.on('camera_shake', ({ amount }) => {
      this.shakeAmount = Math.max(this.shakeAmount, amount);
    });

    if (typeof window !== 'undefined') {
      this._onMouseDown = (e) => {
        if (this.orbitBlocked) return;
        if (e.button === 1 || (e.button === 0 && e.altKey)) {
          this.isOrbitDragging = true;
          this.lastMouseX = e.clientX;
          this.lastMouseY = e.clientY;
        }
      };
      this._onMouseMove = (e) => {
        if (this.orbitBlocked) {
          this.isOrbitDragging = false;
          return;
        }
        if (this.isOrbitDragging) {
          const dx = e.clientX - this.lastMouseX;
          const dy = e.clientY - this.lastMouseY;
          this.lastMouseX = e.clientX;
          this.lastMouseY = e.clientY;
          this.orbitYaw = THREE.MathUtils.clamp(this.orbitYaw - dx * 0.004, -0.55, 0.55);
          this.orbitPitch = THREE.MathUtils.clamp(this.orbitPitch - dy * 0.003, -0.35, 0.35);
        }
      };
      this._onMouseUp = () => {
        this.isOrbitDragging = false;
      };
      this._onBlur = () => {
        this.isOrbitDragging = false;
      };
      window.addEventListener('mousedown', this._onMouseDown);
      window.addEventListener('mousemove', this._onMouseMove);
      window.addEventListener('mouseup', this._onMouseUp);
      window.addEventListener('blur', this._onBlur);
    }
  }

  cyclePerspective() {
    this.mode = (this.mode + 1) % 3;
    this.orbitYaw = 0;
    this.orbitPitch = 0;
    return this.mode;
  }

  snapTo(x, y) {
    const bossArena = this.getBossArenaFraming(x);
    if (bossArena && this.mode !== 1) {
      this.targetCameraY = bossArena.y;
      this.baseCamPos.set(bossArena.x, bossArena.y, bossArena.z);
      this.prevBaseCamPos.copy(this.baseCamPos);
      this.camera.position.copy(this.baseCamPos);
      this.camera.rotation.set(-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg), 0, 0);
    } else {
      this.targetCameraY = y + 1.35;
      this.baseCamPos.set(x + 1.2, this.targetCameraY, CONFIG.CAMERA.distanceZ);
      this.prevBaseCamPos.copy(this.baseCamPos);
      this.camera.position.copy(this.baseCamPos);
      this.camera.rotation.set(-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg), -0.13, 0);
    }
  }

  getBossArenaFraming(px) {
    // Zoomed closer (z=18.8) while Kuro & active Boss fight; releases framing once boss is dead
    if (px >= 244 && px <= 281 && !this.bosses?.kurogane?.isDead) {
      return { x: 259.0, y: 52.6, z: 18.8 };
    }
    if (px >= 502 && px <= 546 && !this.bosses?.shirayuki?.isDead) {
      return { x: 525.0, y: 77.6, z: 18.8 };
    }
    if (px >= 774 && px <= 825 && !this.bosses?.sumiOu?.isDead) {
      return { x: 800.0, y: 101.6, z: 19.6 };
    }
    return null;
  }

  fixedUpdate(dt, player) {
    if (!player) return;
    this.prevBaseCamPos.copy(this.baseCamPos);
    if (this.orbitBlocked) {
      this.isOrbitDragging = false;
    }
    const px = player.aabb.x;
    const py = player.aabb.y;
    const bossArena = this.getBossArenaFraming(px);
    if (bossArena) {
      this.targetCameraY = bossArena.y;
    } else {
      // Lower framing (y + 1.35) + falling look-ahead + vertical deadzone (1.1 u)
      const fallLook = player.velocity?.y < -4 ? Math.max(-1.6, player.velocity.y * 0.08) : 0;
      const desiredY = py + 1.35 + fallLook;
      const dy = desiredY - this.targetCameraY;
      if (player.coyoteTimer > 0) {
        if (Math.abs(dy) > 0.35) {
          this.targetCameraY += dy * Math.min(1, 7.5 * dt);
        }
      } else if (Math.abs(dy) > 1.2) {
        this.targetCameraY += (dy - Math.sign(dy) * 1.2) * Math.min(1, 6.0 * dt);
      }
    }

    if (!this.isOrbitDragging) {
      this.orbitYaw *= Math.exp(-5.0 * dt);
      this.orbitPitch *= Math.exp(-5.0 * dt);
    }

    // Frame-rate independent exponential follow smoothing (equivalent to ~0.08-0.09 at 60 Hz)
    const fastLerp = 1.0 - Math.exp(-5.6 * dt);
    const smoothLerp = 1.0 - Math.exp(-5.0 * dt);
    const tiltRad = -THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg);

    if (bossArena && this.mode !== 1) {
      this.baseCamPos.x += (bossArena.x - this.baseCamPos.x) * smoothLerp;
      this.baseCamPos.y += (bossArena.y - this.baseCamPos.y) * smoothLerp;
      this.baseCamPos.z += (bossArena.z - this.baseCamPos.z) * smoothLerp;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * smoothLerp;
      this.camera.rotation.x += (tiltRad + this.orbitPitch - this.camera.rotation.x) * smoothLerp;
    } else if (this.mode === 1) {
      const targetCamX = px - player.facing * 3.1;
      const targetCamY = py + 2.1;
      const targetCamZ = 9.4;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * fastLerp;
      this.baseCamPos.y += (targetCamY - this.baseCamPos.y) * fastLerp;
      this.baseCamPos.z += (targetCamZ - this.baseCamPos.z) * fastLerp;
      this.camera.rotation.y += (-player.facing * 0.34 + this.orbitYaw - this.camera.rotation.y) * fastLerp;
      this.camera.rotation.x += (-0.11 + this.orbitPitch - this.camera.rotation.x) * fastLerp;
    } else if (this.mode === 2) {
      const targetCamX = px + player.facing * 2.4;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * smoothLerp;
      this.baseCamPos.y += (py + 2.3 - this.baseCamPos.y) * (1.0 - Math.exp(-4.35 * dt));
      this.baseCamPos.z += (20.5 - this.baseCamPos.z) * smoothLerp;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * smoothLerp;
      this.camera.rotation.x += (tiltRad + this.orbitPitch - this.camera.rotation.x) * smoothLerp;
    } else {
      // Mode 0: Sumiro Intimate 3D Oblique Follow with horizontal look-ahead (~2.2 u)
      const velLook = Math.max(-1.0, Math.min(1.0, (player.velocity?.x || 0) / 9.0));
      const lookAheadX = (player.facing * 1.4 + velLook * 0.9);
      const targetCamX = px + lookAheadX;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * fastLerp;
      this.baseCamPos.y += (this.targetCameraY - this.baseCamPos.y) * smoothLerp;
      this.baseCamPos.z += (CONFIG.CAMERA.distanceZ - this.baseCamPos.z) * fastLerp;
      const targetYaw = -player.facing * 0.11 + this.orbitYaw;
      this.camera.rotation.y += (targetYaw - this.camera.rotation.y) * smoothLerp;
      this.camera.rotation.x += (tiltRad + this.orbitPitch - this.camera.rotation.x) * smoothLerp;
    }

    // Real-dt shake decay in fixedUpdate (never fed back into baseCamPos)
    if (this.shakeAmount > 0.001 && !this.reduceShake) {
      this.shakeOffset.set(
        (Math.random() - 0.5) * this.shakeAmount,
        (Math.random() - 0.5) * this.shakeAmount
      );
      this.shakeAmount *= Math.exp(-CONFIG.CAMERA.shakeDecay * dt);
    } else {
      this.shakeAmount = 0;
      this.shakeOffset.set(0, 0);
    }
  }

  render(player, alpha = 1.0) {
    if (!player) return;

    const t = THREE.MathUtils.clamp(alpha, 0, 1);
    // Interpolate baseCamPos across fixed ticks and apply shake AFTER smoothing
    this.camera.position.set(
      THREE.MathUtils.lerp(this.prevBaseCamPos.x, this.baseCamPos.x, t) + this.shakeOffset.x,
      THREE.MathUtils.lerp(this.prevBaseCamPos.y, this.baseCamPos.y, t) + this.shakeOffset.y,
      THREE.MathUtils.lerp(this.prevBaseCamPos.z, this.baseCamPos.z, t)
    );
  }

  dispose() {
    this._unsubShake?.();
    if (typeof window !== 'undefined') {
      if (this._onMouseDown) window.removeEventListener('mousedown', this._onMouseDown);
      if (this._onMouseMove) window.removeEventListener('mousemove', this._onMouseMove);
      if (this._onMouseUp) window.removeEventListener('mouseup', this._onMouseUp);
      if (this._onBlur) window.removeEventListener('blur', this._onBlur);
    }
  }
}
