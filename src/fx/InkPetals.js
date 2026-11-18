// Drifting Ink Blossom Petals Particle System (Act I & Act III)

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class InkPetalSystem {
  constructor(scene) {
    this.scene = scene;
    this.petalCount = 65;

    const geo = new THREE.PlaneGeometry(0.18, 0.28);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });

    this.group = new THREE.Group();
    this.petals = [];

    for (let i = 0; i < this.petalCount; i++) {
      const mesh = new THREE.Mesh(geo, mat.clone());
      const p = {
        mesh,
        x: (Math.random() - 0.5) * 50,
        y: Math.random() * 25,
        z: (Math.random() - 0.5) * 6,
        vx: 1.5 + Math.random() * 2.0,
        vy: -1.0 - Math.random() * 1.5,
        rotSpeed: (Math.random() - 0.5) * 4.0,
        swayPhase: Math.random() * Math.PI * 2,
      };
      mesh.position.set(p.x, p.y, p.z);
      this.group.add(mesh);
      this.petals.push(p);
    }

    this.scene.add(this.group);
  }

  update(dt, playerX, playerY) {
    this.group.position.set(playerX, playerY, 0);

    for (let i = 0; i < this.petalCount; i++) {
      const p = this.petals[i];
      p.swayPhase += dt * 3.0;

      p.x += (p.vx + Math.sin(p.swayPhase) * 1.5) * dt;
      p.y += p.vy * dt;

      p.mesh.rotation.z += p.rotSpeed * dt;
      p.mesh.rotation.y += p.rotSpeed * 0.7 * dt;

      // Wrap around bounds relative to player
      if (p.y < -15) {
        p.y = 15;
        p.x = (Math.random() - 0.5) * 50;
      }
      if (p.x > 28) {
        p.x = -28;
      }

      p.mesh.position.set(p.x, p.y, p.z);
    }
  }

  dispose() {
    this.group.clear();
    this.scene.remove(this.group);
  }
}
