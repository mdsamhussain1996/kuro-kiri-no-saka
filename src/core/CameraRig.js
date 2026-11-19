// Spring-Damped Third-Person Camera Rig
// Supports 2.5D Scroll View, 3D Over-Shoulder Cinema View, 3D Close Action Cam,
// mouse-look orbit option, and automatic wide-angle Boss Arena framing across Acts I, II, and III.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from './EventBus.js';

export class CameraRig {
  constructor(camera, initialMode = 0) {
    this.camera = camera;
    this.mode = initialMode; // 0 = 2.5D Scroll, 1 = 3D Cinema Over-Shoulder, 2 = 3D Close Action
    this.targetCameraY = 4.5;
    this.shakeAmount = 0;

    // Mouse-look orbit offsets
    this.isOrbitDragging = false;
    this.orbitYaw = 0;
    this.orbitPitch = 0;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    events.on('camera_shake', ({ amount }) => {
      this.shakeAmount = Math.max(this.shakeAmount, amount);
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('mousedown', (e) => {
        if (e.button === 1 || (e.button === 0 && e.altKey)) {
          this.isOrbitDragging = true;
          this.lastMouseX = e.clientX;
          this.lastMouseY = e.clientY;
        }
      });
      window.addEventListener('mousemove', (e) => {
        if (this.isOrbitDragging) {
          const dx = e.clientX - this.lastMouseX;
          const dy = e.clientY - this.lastMouseY;
          this.lastMouseX = e.clientX;
          this.lastMouseY = e.clientY;
          this.orbitYaw = THREE.MathUtils.clamp(this.orbitYaw - dx * 0.004, -0.55, 0.55);
          this.orbitPitch = THREE.MathUtils.clamp(this.orbitPitch - dy * 0.003, -0.35, 0.35);
        }
      });
      window.addEventListener('mouseup', () => {
        this.isOrbitDragging = false;
      });
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
    if (bossArena && this.mode === 0) {
      this.targetCameraY = bossArena.y;
      this.camera.position.set(bossArena.x, bossArena.y, bossArena.z);
    } else {
      this.targetCameraY = y + 2.5;
      this.camera.position.set(x, this.targetCameraY, CONFIG.CAMERA.distanceZ);
    }
  }

  getBossArenaFraming(px) {
    // Act I Boss Arena: Kurogane, the Gatekeeper
    if (px >= 244 && px <= 292) {
      return { x: 259.0, y: 53.5, z: 27.5 };
    }
    // Act II Boss Arena: Lady Shirayuki, the Mist Weaver
    if (px >= 502 && px <= 558) {
      return { x: 525.0, y: 78.5, z: 27.5 };
    }
    // Act III Final Boss Arena: Lord Sumi-Ou, Warlord of the Iron Brush
    if (px >= 774 && px <= 845) {
      return { x: 800.0, y: 102.5, z: 28.5 };
    }
    return null;
  }

  fixedUpdate(dt, player) {
    if (!player) return;
    const bossArena = this.getBossArenaFraming(player.aabb.x);
    if (bossArena) {
      this.targetCameraY = bossArena.y;
    } else if (player.coyoteTimer > 0) {
      this.targetCameraY = player.aabb.y + 2.5;
    }

    if (!this.isOrbitDragging) {
      this.orbitYaw *= 0.92;
      this.orbitPitch *= 0.92;
    }
  }

  render(player) {
    if (!player) return;

    const px = player.aabb.x;
    const py = player.aabb.y;
    const bossArena = this.getBossArenaFraming(px);

    if (bossArena && this.mode === 0) {
      // Wide-angle Boss Arena Framing
      this.camera.position.x += (bossArena.x - this.camera.position.x) * 0.08;
      this.camera.position.y += (bossArena.y - this.camera.position.y) * 0.08;
      this.camera.position.z += (bossArena.z - this.camera.position.z) * 0.08;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg) + this.orbitPitch - this.camera.rotation.x) * 0.08;
    } else if (this.mode === 1) {
      // 3D Over-Shoulder Cinema Perspective
      const targetCamX = px - player.facing * 4.2;
      const targetCamY = py + 3.2;
      const targetCamZ = 14.5;
      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.08;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.08;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.08;
      this.camera.rotation.y += (-player.facing * 0.34 + this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-0.12 + this.orbitPitch - this.camera.rotation.x) * 0.08;
    } else if (this.mode === 2) {
      // 3D Close Action Combat Cam
      const targetCamX = px + player.facing * 1.4;
      const targetCamY = py + 1.6;
      const targetCamZ = 14.0;
      this.camera.position.x += (targetCamX - this.camera.position.x) * 0.09;
      this.camera.position.y += (targetCamY - this.camera.position.y) * 0.08;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.08;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-0.06 + this.orbitPitch - this.camera.rotation.x) * 0.08;
    } else {
      // Standard 2.5D Painted Scroll Follow Camera
      const targetCamX = px + player.facing * CONFIG.CAMERA.lookAhead;
      const dx = targetCamX - this.camera.position.x;
      if (Math.abs(dx) > CONFIG.CAMERA.horizontalDeadzone) {
        this.camera.position.x += (targetCamX - this.camera.position.x) * 0.08;
      }
      this.camera.position.y += (this.targetCameraY - this.camera.position.y) * 0.05;
      this.camera.position.z += (CONFIG.CAMERA.distanceZ - this.camera.position.z) * 0.08;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg) + this.orbitPitch - this.camera.rotation.x) * 0.08;
    }

    // Apply decaying camera shake
    if (this.shakeAmount > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shakeAmount;
      this.camera.position.y += (Math.random() - 0.5) * this.shakeAmount;
      this.shakeAmount *= Math.exp(-CONFIG.CAMERA.shakeDecay * (1 / 60));
    } else {
      this.shakeAmount = 0;
    }
  }
}
