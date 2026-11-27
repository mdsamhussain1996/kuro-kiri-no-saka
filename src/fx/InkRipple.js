// Pooled Ink Ripples: Circular brush stains left on stone landings

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';

export class InkRippleManager {
  constructor(scene) {
    this.scene = scene;
    this.sharedGeometry = new THREE.RingGeometry(0.1, 0.45, 24);
    this.sharedGeometry.rotateX(-Math.PI / 2); // Lay flat on ground

    this.sharedMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.pool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this.sharedGeometry, this.sharedMaterial.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          age: 0,
          maxAge: 0.6,
          baseScale: 1.0,
        };
      },
      (item, x, y, z = 0, scale = 1.0) => {
        item.mesh.position.set(x, y + 0.02, z);
        item.mesh.scale.set(scale, scale, scale);
        item.mesh.material.opacity = 0.65;
        item.mesh.visible = true;
        item.age = 0;
        item.maxAge = 0.55;
        item.baseScale = scale;
      },
      16
    );
  }

  spawn(x, y, z = 0, intensity = 1.0) {
    const scale = THREE.MathUtils.lerp(0.8, 1.8, Math.min(1.0, intensity));
    return this.pool.obtain(x, y, z, scale);
  }

  update(dt) {
    this.pool.update(dt, (item, delta) => {
      item.age += delta;
      const progress = item.age / item.maxAge;
      if (progress >= 1.0) {
        item.mesh.visible = false;
        return false;
      }

      // Expand and bleed outward
      const currentScale = item.baseScale * (1.0 + progress * 0.8);
      item.mesh.scale.set(currentScale, currentScale, currentScale);
      item.mesh.material.opacity = (1.0 - progress) * 0.65;
      return true;
    });
  }

  dispose() {
    this.pool.releaseAll();
    for (const item of this.pool.freeList) {
      this.scene.remove(item.mesh);
      item.mesh.material.dispose();
    }
    this.pool.freeList.length = 0;
    this.sharedGeometry.dispose();
    this.sharedMaterial.dispose();
  }
}
