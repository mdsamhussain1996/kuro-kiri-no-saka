// Dynamic Ink-Brush Particle, Tapered Calligraphy Slash Ribbon & Ground Decal System
// Handles curved tapering calligraphy katana ribbons, ground ink-splatter decals,
// pooled ink droplets, parry rings, and death dissolves with zero GC.

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';

export class InkSplashManager {
  constructor(scene) {
    this.scene = scene;

    // 1. Pooled Ink Droplets
    this._dropletGeo = new THREE.CircleGeometry(0.12, 8);
    this._inkMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.dropletPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._dropletGeo, this._inkMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          vx: 0,
          vy: 0,
          vz: 0,
          gravity: -20.0,
          drag: 0.96,
          life: 0,
          maxLife: 0.4,
          initialScale: 1.0,
          isVermilion: false,
        };
      },
      (item, x, y, z, vx, vy, vz, maxLife = 0.4, initialScale = 1.0, isVermilion = false) => {
        item.mesh.position.set(x, y, z);
        item.vx = vx;
        item.vy = vy;
        item.vz = vz;
        item.life = 0;
        item.maxLife = maxLife;
        item.initialScale = initialScale;
        item.isVermilion = isVermilion;
        item.mesh.material.color.set(isVermilion ? CONFIG.PALETTE.vermilion : CONFIG.PALETTE.inkDark);
        item.mesh.material.opacity = isVermilion ? 0.95 : 0.88;
        item.mesh.scale.set(initialScale, initialScale, initialScale);
        item.mesh.visible = true;
      },
      96
    );

    // 2. Tapered Calligraphy Ribbon Geometry for Katana Slashes
    this._arcGeo = this.createTaperedCalligraphyRibbonGeo(1.35, 0.42, 24);
    this._slashMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.slashPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._arcGeo, this._slashMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          life: 0,
          maxLife: 0.16,
          initialScale: 1.0,
          facing: 1,
        };
      },
      (item, x, y, z, rotationZ, scale = 1.0, isVermilion = false, facing = 1) => {
        item.mesh.position.set(x, y, z + 0.08);
        item.mesh.rotation.z = rotationZ * facing;
        item.mesh.scale.set(scale * facing, scale, 1.0);
        item.mesh.material.color.set(isVermilion ? CONFIG.PALETTE.vermilion : CONFIG.PALETTE.inkDark);
        item.mesh.material.opacity = 0.94;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = 0.16;
        item.initialScale = scale;
        item.facing = facing;
      },
      16
    );

    // 3. Pooled Parry Flash Rings
    this._ringGeo = new THREE.RingGeometry(0.1, 0.35, 28);
    this._ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.ringPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._ringGeo, this._ringMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          life: 0,
          maxLife: 0.28,
          startRadius: 0.5,
          endRadius: 2.4,
        };
      },
      (item, x, y, z, maxLife = 0.28, endRadius = 2.2, color = CONFIG.PALETTE.vermilion) => {
        item.mesh.position.set(x, y, z + 0.1);
        item.mesh.scale.set(0.2, 0.2, 1.0);
        item.mesh.material.color.set(color);
        item.mesh.material.opacity = 0.95;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = maxLife;
        item.endRadius = endRadius;
      },
      12
    );

    // 4. Pooled Ground Ink-Splatter Decals (flat on XZ ground plane)
    this._decalGeo = new THREE.CircleGeometry(0.75, 14);
    this._decalGeo.scale(1.8, 0.72, 1.0);
    this._decalGeo.rotateX(-Math.PI / 2);
    this._decalMat = new THREE.MeshBasicMaterial({
      color: 0x141413,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.decalPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._decalGeo, this._decalMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return { mesh, life: 0, maxLife: 6.5 };
      },
      (item, x, y, scale = 1.0, isVermilion = false) => {
        item.mesh.position.set(x, y + 0.03, 0.25);
        item.mesh.scale.set(scale, 1.0, scale);
        item.mesh.material.color.set(isVermilion ? CONFIG.PALETTE.vermilion : 0x141413);
        item.mesh.material.opacity = 0.78;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = 6.5;
      },
      24
    );
  }

  // Creates a curved ribbon mesh whose width tapers sinusoidally at both ends like a sumi-e brush stroke
  createTaperedCalligraphyRibbonGeo(radius = 1.35, maxThickness = 0.42, segments = 24) {
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array((segments + 1) * 2 * 3);
    const indices = [];
    const arcAngle = Math.PI * 0.85;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const theta = -arcAngle * 0.5 + t * arcAngle;
      // Brush pressure curve: sharp entry, thick middle belly, feathered exit tail
      const taper = Math.sin(t * Math.PI) * (1.0 - 0.3 * t);
      const halfW = maxThickness * taper * 0.5;

      const rInner = radius - halfW;
      const rOuter = radius + halfW;
      const cos = Math.cos(theta);
      const sin = Math.sin(theta);

      const vIdx = i * 6;
      verts[vIdx + 0] = cos * rInner;
      verts[vIdx + 1] = sin * rInner;
      verts[vIdx + 2] = 0;

      verts[vIdx + 3] = cos * rOuter;
      verts[vIdx + 4] = sin * rOuter;
      verts[vIdx + 5] = 0;

      if (i < segments) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const d = (i + 1) * 2 + 1;
        indices.push(a, b, c, b, d, c);
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.setIndex(indices);
    return geo;
  }

  // Spawn tapered calligraphy sword slash ribbon
  spawnSlashArc(x, y, facing = 1, comboIndex = 0, isAir = false) {
    let rot = -0.35;
    let scale = 1.0;
    if (comboIndex === 1) {
      rot = 0.42;
      scale = 1.18;
    } else if (comboIndex === 2) {
      rot = -0.15;
      scale = 1.48;
      // Finisher adds a secondary vermilion inner brush ribbon
      this.slashPool.obtain(x + facing * 0.48, y, 0.08, rot, scale * 0.88, true, facing);
    }
    if (isAir) {
      rot = -0.82;
      scale = 1.25;
    }
    this.slashPool.obtain(x + facing * 0.45, y, 0.05, rot, scale, false, facing);
  }

  /**
   * Spawn crisp metallic sparks and deflect ring when an attack clinks off boss armor.
   */
  spawnClinkSpark(x, y, facing = 1) {
    this.ringPool.obtain(x, y, 0.12, 0.18, 1.35, CONFIG.PALETTE.goldAccent);
    for (let i = 0; i < 9; i++) {
      const angle = (facing > 0 ? Math.PI : 0) + (Math.random() - 0.5) * 1.4;
      const speed = 10.0 + Math.random() * 7.0;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + 2.5;
      const item = this.dropletPool.obtain(x, y, 0.06, vx, vy, 0, 0.16 + Math.random() * 0.1, 0.65, false);
      if (item) {
        item.mesh.material.color.set(i % 2 === 0 ? CONFIG.PALETTE.goldAccent : CONFIG.PALETTE.rimHighlight);
      }
    }
  }

  spawnGroundDecal(x, y, scale = 1.0, isVermilion = false) {
    this.decalPool.obtain(x, y, scale, isVermilion);
  }

  // Spawn impact droplets on hit + ground splatter decal
  spawnHitImpact(x, y, facing = 1, count = 8, isHeavy = false, isVermilion = false) {
    const baseCount = count;
    const baseSpeed = isHeavy ? 14.0 : 9.0;

    for (let i = 0; i < baseCount; i++) {
      const angle = (facing > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 1.5;
      const speed = baseSpeed * (0.5 + Math.random() * 0.8);
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + 3.0;
      const vz = (Math.random() - 0.5) * 2.0;
      const life = 0.25 + Math.random() * 0.25;
      const scale = (isHeavy ? 1.4 : 1.0) * (0.6 + Math.random() * 0.8);

      this.dropletPool.obtain(x, y, 0.02, vx, vy, vz, life, scale, isVermilion);
    }

    if (isHeavy) {
      this.spawnGroundDecal(x, y - 0.6, 1.15, isVermilion);
    }
  }

  // Spawn parry burst
  spawnParryBurst(x, y, isPerfect = true) {
    this.ringPool.obtain(x, y, 0.1, 0.25, isPerfect ? 2.6 : 1.5, CONFIG.PALETTE.vermilion);

    const sparkCount = isPerfect ? 18 : 8;
    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 12.0 + Math.random() * 8.0;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.dropletPool.obtain(x, y, 0.05, vx, vy, 0, 0.2 + Math.random() * 0.15, 0.8, true);
    }

    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6.0 + Math.random() * 6.0;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.dropletPool.obtain(x, y, 0.02, vx, vy, 0, 0.3 + Math.random() * 0.2, 1.0, false);
    }
  }

  // Spawn backstab fountain
  spawnBackstabBurst(x, y) {
    this.ringPool.obtain(x, y, 0.1, 0.35, 3.0, CONFIG.PALETTE.vermilion);
    this.spawnGroundDecal(x, y - 0.8, 1.4, true);

    for (let i = 0; i < 30; i++) {
      const vx = (Math.random() - 0.5) * 8.0;
      const vy = 12.0 + Math.random() * 12.0;
      const life = 0.4 + Math.random() * 0.3;
      const scale = 0.8 + Math.random() * 1.0;
      this.dropletPool.obtain(x, y, 0.05, vx, vy, 0, life, scale, i % 3 === 0);
    }
  }

  // Spawn enemy death ink dissolve + persistent ground ink splatter
  spawnDeathDissolve(x, y, width = 1.0, height = 2.0) {
    this.spawnGroundDecal(x, y - height * 0.45, 1.3, false);
    const count = 35;
    for (let i = 0; i < count; i++) {
      const px = x + (Math.random() - 0.5) * width;
      const py = y + (Math.random() - 0.5) * height;
      const vx = (Math.random() - 0.5) * 5.0;
      const vy = (Math.random() - 0.2) * 6.0;
      const life = 0.5 + Math.random() * 0.4;
      const scale = 1.0 + Math.random() * 1.5;
      this.dropletPool.obtain(px, py, 0.02, vx, vy, 0, life, scale, false);
    }
  }

  update(dt) {
    this.dropletPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }
      item.vy += item.gravity * delta;
      item.vx *= item.drag;
      item.vy *= item.drag;
      item.mesh.position.x += item.vx * delta;
      item.mesh.position.y += item.vy * delta;
      item.mesh.position.z += item.vz * delta;

      const progress = item.life / item.maxLife;
      const fade = 1.0 - progress;
      item.mesh.material.opacity = fade * (item.isVermilion ? 0.95 : 0.85);
      const currentScale = item.initialScale * (1.0 - progress * 0.5);
      item.mesh.scale.set(currentScale, currentScale, 1.0);
      return true;
    });

    this.slashPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }
      const progress = item.life / item.maxLife;
      item.mesh.material.opacity = (1.0 - progress) * 0.92;
      const currentScale = item.initialScale * (1.0 + progress * 0.28);
      item.mesh.scale.set(currentScale * (item.facing || 1), currentScale, 1.0);
      return true;
    });

    this.ringPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }
      const progress = item.life / item.maxLife;
      item.mesh.material.opacity = (1.0 - progress) * 0.95;
      const r = THREE.MathUtils.lerp(0.2, item.endRadius, progress);
      item.mesh.scale.set(r, r, 1.0);
      return true;
    });

    this.decalPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }
      const progress = item.life / item.maxLife;
      item.mesh.material.opacity = (1.0 - progress * progress) * 0.78;
      return true;
    });
  }

  dispose() {
    for (const pool of [this.dropletPool, this.slashPool, this.ringPool, this.decalPool]) {
      pool.releaseAll();
      for (const item of pool.freeList) {
        this.scene.remove(item.mesh);
        item.mesh.material.dispose();
      }
      pool.freeList.length = 0;
    }
    this._dropletGeo.dispose();
    this._inkMat.dispose();
    this._arcGeo.dispose();
    this._slashMat.dispose();
    this._ringGeo.dispose();
    this._ringMat.dispose();
    this._decalGeo.dispose();
    this._decalMat.dispose();
  }
}

export { InkSplashManager as InkFX };
