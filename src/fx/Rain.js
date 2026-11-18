// Atmospheric Rain System & Lightning Flash for Act II Storm

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';

export class RainSystem {
  constructor(scene) {
    this.scene = scene;
    this.dropCount = 350;
    this.active = false;
    this.lightningTimer = 0;
    this.lightningFlash = 0;

    // BufferGeometry for slanted rain streaks
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.dropCount * 6); // 2 vertices per line streak

    this.drops = [];
    for (let i = 0; i < this.dropCount; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 10;
      const speed = 32.0 + Math.random() * 16.0;
      const length = 1.2 + Math.random() * 0.8;

      this.drops.push({ x, y, z, speed, length });

      // Streak start
      positions[i * 6 + 0] = x;
      positions[i * 6 + 1] = y;
      positions[i * 6 + 2] = z;
      // Streak end (angled by wind)
      positions[i * 6 + 3] = x - 0.3;
      positions[i * 6 + 4] = y - length;
      positions[i * 6 + 5] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkMid),
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });

    this.lineSegments = new THREE.LineSegments(geometry, material);
    this.lineSegments.visible = false;
    this.scene.add(this.lineSegments);
  }

  update(dt, playerX, playerY) {
    // Only active in Act II (x 105 to 232)
    this.active = playerX >= 105 && playerX <= 232;
    this.lineSegments.visible = this.active;

    if (!this.active) return;

    // Follow camera/player
    this.lineSegments.position.set(playerX, playerY, 0);

    const positions = this.lineSegments.geometry.attributes.position.array;

    for (let i = 0; i < this.dropCount; i++) {
      const drop = this.drops[i];
      drop.y -= drop.speed * dt;
      drop.x -= drop.speed * 0.25 * dt; // wind slant

      // Wrap around bounds
      if (drop.y < -18) {
        drop.y = 18;
        drop.x = (Math.random() - 0.5) * 60;
      }

      positions[i * 6 + 0] = drop.x;
      positions[i * 6 + 1] = drop.y;
      positions[i * 6 + 2] = drop.z;

      positions[i * 6 + 3] = drop.x - 0.3;
      positions[i * 6 + 4] = drop.y - drop.length;
      positions[i * 6 + 5] = drop.z;
    }
    this.lineSegments.geometry.attributes.position.needsUpdate = true;

    // Lightning Flash Timer
    this.lightningTimer -= dt;
    if (this.lightningTimer <= 0) {
      this.lightningTimer = 6.0 + Math.random() * 8.0;
      this.triggerLightning();
    }

    if (this.lightningFlash > 0) {
      this.lightningFlash -= dt;
    }
  }

  triggerLightning() {
    this.lightningFlash = 0.12;
    events.emit('lightning_flash');
    events.emit('camera_shake', { amount: 0.3 });
  }

  dispose() {
    this.scene.remove(this.lineSegments);
    this.lineSegments.geometry.dispose();
    this.lineSegments.material.dispose();
  }
}
