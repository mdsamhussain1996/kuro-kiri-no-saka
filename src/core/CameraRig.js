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
    this.baseCamPos = new THREE.Vector3(0, 3.6, CONFIG.CAMERA.distanceZ);
    this.shakeAmount = 0;
    this.shakeOffset = new THREE.Vector2(0, 0);
    this.reduceShake = false;

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
    if (bossArena && this.mode !== 1) {
      this.targetCameraY = bossArena.y;
      this.baseCamPos.set(bossArena.x, bossArena.y, bossArena.z);
      this.camera.position.copy(this.baseCamPos);
      this.camera.rotation.set(-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg), 0, 0);
    } else {
      this.targetCameraY = y + 1.35;
      this.baseCamPos.set(x + 1.2, this.targetCameraY, CONFIG.CAMERA.distanceZ);
      this.camera.position.copy(this.baseCamPos);
      this.camera.rotation.set(-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg), -0.13, 0);
    }
  }

  getBossArenaFraming(px) {
    // Act I Boss Arena: Kurogane, the Gatekeeper
    if (px >= 244 && px <= 292) {
      return { x: 259.0, y: 53.2, z: 26.5 };
    }
    // Act II Boss Arena: Lady Shirayuki, the Mist Weaver
    if (px >= 502 && px <= 558) {
      return { x: 525.0, y: 78.2, z: 26.5 };
    }
    // Act III Final Boss Arena: Lord Sumi-Ou, Warlord of the Iron Brush
    if (px >= 774 && px <= 845) {
      return { x: 800.0, y: 102.2, z: 27.5 };
    }
    return null;
  }

  fixedUpdate(dt, player) {
    if (!player) return;
    const bossArena = this.getBossArenaFraming(player.aabb.x);
    if (bossArena) {
      this.targetCameraY = bossArena.y;
    } else {
      // Lower framing (y + 1.35) + vertical deadzone (1.1 u) so small hops don't bob camera
      const desiredY = player.aabb.y + 1.35;
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

  render(player) {
    if (!player) return;

    const px = player.aabb.x;
    const py = player.aabb.y;
    const bossArena = this.getBossArenaFraming(px);

    if (bossArena && this.mode !== 1) {
      this.baseCamPos.x += (bossArena.x - this.baseCamPos.x) * 0.08;
      this.baseCamPos.y += (bossArena.y - this.baseCamPos.y) * 0.08;
      this.baseCamPos.z += (bossArena.z - this.baseCamPos.z) * 0.08;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg) + this.orbitPitch - this.camera.rotation.x) * 0.08;
    } else if (this.mode === 1) {
      const targetCamX = px - player.facing * 3.1;
      const targetCamY = py + 2.1;
      const targetCamZ = 9.4;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * 0.09;
      this.baseCamPos.y += (targetCamY - this.baseCamPos.y) * 0.09;
      this.baseCamPos.z += (targetCamZ - this.baseCamPos.z) * 0.09;
      this.camera.rotation.y += (-player.facing * 0.34 + this.orbitYaw - this.camera.rotation.y) * 0.09;
      this.camera.rotation.x += (-0.11 + this.orbitPitch - this.camera.rotation.x) * 0.09;
    } else if (this.mode === 2) {
      const targetCamX = px + player.facing * 2.4;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * 0.08;
      this.baseCamPos.y += (py + 2.3 - this.baseCamPos.y) * 0.07;
      this.baseCamPos.z += (20.5 - this.baseCamPos.z) * 0.08;
      this.camera.rotation.y += (this.orbitYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg) + this.orbitPitch - this.camera.rotation.x) * 0.08;
    } else {
      // Mode 0: Sumiro Intimate 3D Oblique Follow with horizontal look-ahead (~2.2 u)
      const velLook = Math.max(-1.0, Math.min(1.0, (player.velocity?.x || 0) / 9.0));
      const lookAheadX = (player.facing * 1.4 + velLook * 0.9);
      const targetCamX = px + lookAheadX;
      this.baseCamPos.x += (targetCamX - this.baseCamPos.x) * 0.09;
      this.baseCamPos.y += (this.targetCameraY - this.baseCamPos.y) * 0.08;
      this.baseCamPos.z += (CONFIG.CAMERA.distanceZ - this.baseCamPos.z) * 0.09;
      const targetYaw = -player.facing * 0.11 + this.orbitYaw;
      this.camera.rotation.y += (targetYaw - this.camera.rotation.y) * 0.08;
      this.camera.rotation.x += (-THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg) + this.orbitPitch - this.camera.rotation.x) * 0.08;
    }

    // Apply shake offset AFTER computing smoothed target (never fed back into baseCamPos)
    this.camera.position.set(
      this.baseCamPos.x + this.shakeOffset.x,
      this.baseCamPos.y + this.shakeOffset.y,
      this.baseCamPos.z
    );
  }
}
