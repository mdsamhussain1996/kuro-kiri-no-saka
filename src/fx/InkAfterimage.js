// Pooled Ink Afterimages for Ink Step (Dash) Effect

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';

export class InkAfterimageManager {
  constructor(scene) {
    this.scene = scene;
    this.sharedGeometry = new THREE.BoxGeometry(CONFIG.PLAYER.width, CONFIG.PLAYER.height, 0.4);
    this.sharedMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });

    this.pool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this.sharedGeometry, this.sharedMaterial.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          age: 0,
          maxAge: CONFIG.PLAYER.afterimageLifetime,
          scale: 1.0,
        };
      },
      (item, x, y, z, facing, scaleY = 1.0) => {
        item.mesh.position.set(x, y, z);
        item.mesh.scale.set(1.0, scaleY, 1.0);
        item.mesh.material.opacity = 0.55;
        item.mesh.visible = true;
        item.age = 0;
        item.maxAge = CONFIG.PLAYER.afterimageLifetime;
      },
      20
    );
  }

  spawn(x, y, z = 0, facing = 1, scaleY = 1.0) {
    return this.pool.obtain(x, y, z, facing, scaleY);
  }

  update(dt) {
    this.pool.update(dt, (item, delta) => {
      item.age += delta;
      const progress = item.age / item.maxAge;
      if (progress >= 1.0) {
        item.mesh.visible = false;
        return false; // Release back to pool
      }

      // Shrink and fade over lifetime per §4.2
      const fade = 1.0 - progress;
      item.mesh.material.opacity = fade * 0.55;
      item.mesh.scale.x = (1.0 - progress * 0.25);
      item.mesh.scale.y = (1.0 - progress * 0.25);
      return true;
    });
  }

  dispose() {
    this.pool.releaseAll();
    this.sharedGeometry.dispose();
    this.sharedMaterial.dispose();
  }
}
