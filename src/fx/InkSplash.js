// Procedural Sumi-e Ink Splash & Combat FX
// Handles ink droplets, slash arcs, parry sparks, and death dissolves with zero GC

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';

export class InkSplashManager {
  constructor(scene) {
    this.scene = scene;

    // 1. Pooled Ink Droplets (Instanced or individual pooled meshes)
    // Small varied spheres/discs for ink droplets
    const dropletGeo = new THREE.CircleGeometry(0.12, 8);
    const inkMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const vermilionMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.dropletPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(dropletGeo, inkMat.clone());
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
      80
    );

    // 2. Pooled Slash Arc Trails (Crescent / curved ink strokes)
    const arcGeo = new THREE.RingGeometry(0.8, 1.4, 16, 1, 0, Math.PI * 0.7);
    const slashMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.slashPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(arcGeo, slashMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          life: 0,
          maxLife: 0.12,
          initialScale: 1.0,
        };
      },
      (item, x, y, z, rotationZ, scale = 1.0, isVermilion = false) => {
        item.mesh.position.set(x, y, z + 0.05);
        item.mesh.rotation.z = rotationZ;
        item.mesh.scale.set(scale, scale, 1.0);
        item.mesh.material.color.set(isVermilion ? CONFIG.PALETTE.vermilion : CONFIG.PALETTE.inkDark);
        item.mesh.material.opacity = 0.9;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = 0.14;
        item.initialScale = scale;
      },
      12
    );

    // 3. Pooled Parry Flash Rings
    const ringGeo = new THREE.RingGeometry(0.1, 0.35, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.ringPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(ringGeo, ringMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          life: 0,
          maxLife: 0.25,
          startRadius: 0.5,
          endRadius: 2.2,
        };
      },
      (item, x, y, z, maxLife = 0.25, endRadius = 2.0, color = CONFIG.PALETTE.vermilion) => {
        item.mesh.position.set(x, y, z + 0.1);
        item.mesh.scale.set(0.2, 0.2, 1.0);
        item.mesh.material.color.set(color);
        item.mesh.material.opacity = 0.95;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = maxLife;
        item.endRadius = endRadius;
      },
      8
    );
  }

  // Spawn sword slash arc
  spawnSlashArc(x, y, facing = 1, comboIndex = 0, isAir = false) {
    let rot = facing > 0 ? -0.4 : Math.PI - 0.4;
    let scale = 1.0;
    if (comboIndex === 1) {
      rot = facing > 0 ? 0.4 : Math.PI + 0.4;
      scale = 1.15;
    } else if (comboIndex === 2) {
      rot = facing > 0 ? -0.2 : Math.PI - 0.2;
      scale = 1.4;
    }
    if (isAir) {
      rot = facing > 0 ? -0.8 : Math.PI - 0.8;
      scale = 1.2;
    }
    this.slashPool.obtain(x + facing * 0.4, y, 0.05, rot, scale, false);
  }

  // Spawn impact droplets on hit
  spawnHitImpact(x, y, facing = 1, count = 8, isHeavy = false, isVermilion = false) {
    const baseCount = count;
    const baseSpeed = isHeavy ? 14.0 : 9.0;

    for (let i = 0; i < baseCount; i++) {
      const angle = (facing > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 1.5;
      const speed = baseSpeed * (0.5 + Math.random() * 0.8);
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed + 3.0; // slight upward spray
      const vz = (Math.random() - 0.5) * 2.0;
      const life = 0.25 + Math.random() * 0.25;
      const scale = (isHeavy ? 1.4 : 1.0) * (0.6 + Math.random() * 0.8);

      this.dropletPool.obtain(x, y, 0.02, vx, vy, vz, life, scale, isVermilion);
    }
  }

  // Spawn parry burst: vermilion flash ring + sparks + ink disperse
  spawnParryBurst(x, y, isPerfect = true) {
    // Ring flash
    this.ringPool.obtain(x, y, 0.1, 0.25, isPerfect ? 2.5 : 1.5, CONFIG.PALETTE.vermilion);

    // Vermilion sparks flying outwards
    const sparkCount = isPerfect ? 18 : 8;
    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 12.0 + Math.random() * 8.0;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.dropletPool.obtain(x, y, 0.05, vx, vy, 0, 0.2 + Math.random() * 0.15, 0.8, true);
    }

    // Black ink droplets repelled
    for (let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6.0 + Math.random() * 6.0;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.dropletPool.obtain(x, y, 0.02, vx, vy, 0, 0.3 + Math.random() * 0.2, 1.0, false);
    }
  }

  // Spawn backstab fountain: massive vertical ink jet + vermilion critical flash
  spawnBackstabBurst(x, y) {
    // Vermilion burst
    this.ringPool.obtain(x, y, 0.1, 0.35, 3.0, CONFIG.PALETTE.vermilion);

    // 30 ink droplets spraying in tall fountain
    for (let i = 0; i < 30; i++) {
      const vx = (Math.random() - 0.5) * 8.0;
      const vy = 12.0 + Math.random() * 12.0; // strong upward jet
      const life = 0.4 + Math.random() * 0.3;
      const scale = 0.8 + Math.random() * 1.0;
      this.dropletPool.obtain(x, y, 0.05, vx, vy, 0, life, scale, i % 3 === 0);
    }
  }

  // Spawn enemy death ink dissolve
  spawnDeathDissolve(x, y, width = 1.0, height = 2.0) {
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
    // 1. Update droplets
    this.dropletPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }

      // Physics
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

    // 2. Update slash arcs
    this.slashPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }

      const progress = item.life / item.maxLife;
      item.mesh.material.opacity = (1.0 - progress) * 0.9;
      const currentScale = item.initialScale * (1.0 + progress * 0.3);
      item.mesh.scale.set(currentScale, currentScale, 1.0);
      return true;
    });

    // 3. Update parry rings
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
  }
}
