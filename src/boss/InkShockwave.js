// Traveling Ink Shockwaves & Tar Puddles for Boss Attacks (Zero GC)

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';

export class InkShockwaveManager {
  constructor(scene) {
    this.scene = scene;

    // 1. Traveling Floor Ink Waves (Sweep Attack)
    const waveGeo = new THREE.PlaneGeometry(1.4, 0.9);
    const waveMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });

    this.wavePool = new Pool(
      () => {
        const mesh = new THREE.Mesh(waveGeo, waveMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);

        const hitbox = new Hitbox({
          owner: { aabb: { x: 0, y: 0 } },
          type: 'enemy_attack',
          width: 1.4,
          height: 0.9,
          damage: 1,
        });
        combatManager.registerEnemyAttack(hitbox);

        return {
          mesh,
          hitbox,
          vx: 0,
          lifetime: 0,
          maxLife: 2.5,
          active: false,
        };
      },
      (item, x, y, direction = 1, speed = 14.0) => {
        item.mesh.position.set(x, y + 0.45, 0.05);
        item.mesh.scale.set(direction, 1, 1);
        item.mesh.visible = true;
        item.vx = direction * speed;
        item.lifetime = 0;
        item.maxLife = 2.4;
        item.active = true;
        item.hitbox.activate();
        item.hitbox.owner.aabb.x = x;
        item.hitbox.owner.aabb.y = y + 0.45;
        item.hitbox.updatePosition(x, y + 0.45, 1);
      },
      8
    );

    // 2. Persistent Tar Puddles (Phase 3 Hazard)
    const puddleGeo = new THREE.PlaneGeometry(2.4, 0.3);
    const puddleMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    this.puddlePool = new Pool(
      () => {
        const mesh = new THREE.Mesh(puddleGeo, puddleMat.clone());
        mesh.rotation.x = -Math.PI / 2;
        mesh.visible = false;
        this.scene.add(mesh);

        const hitbox = new Hitbox({
          owner: { aabb: { x: 0, y: 0 } },
          type: 'enemy_attack',
          width: 2.4,
          height: 0.4,
          damage: 1,
        });
        combatManager.registerEnemyAttack(hitbox);

        return {
          mesh,
          hitbox,
          lifetime: 0,
          maxLife: CONFIG.BOSS.puddleLifetime,
          active: false,
        };
      },
      (item, x, y) => {
        item.mesh.position.set(x, y + 0.02, 0);
        item.mesh.visible = true;
        item.lifetime = 0;
        item.maxLife = CONFIG.BOSS.puddleLifetime;
        item.active = true;
        item.hitbox.activate();
        item.hitbox.owner.aabb.x = x;
        item.hitbox.owner.aabb.y = y + 0.2;
        item.hitbox.updatePosition(x, y + 0.2, 1);
      },
      12
    );

    // 3. Ring Shockwaves (Crossbar Leap)
    const ringGeo = new THREE.RingGeometry(0.2, 0.6, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    this.ringPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(ringGeo, ringMat.clone());
        mesh.visible = false;
        this.scene.add(mesh);
        return {
          mesh,
          life: 0,
          maxLife: 0.45,
          maxRadius: 8.0,
        };
      },
      (item, x, y) => {
        item.mesh.position.set(x, y + 0.05, 0.02);
        item.mesh.scale.set(0.1, 0.1, 1);
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = 0.45;
        item.maxRadius = 7.5;
      },
      6
    );
  }

  spawnFloorWave(x, y, direction = 1, speed = 14.0) {
    this.wavePool.obtain(x, y, direction, speed);
  }

  spawnPuddle(x, y) {
    this.puddlePool.obtain(x, y);
  }

  spawnRingShockwave(x, y) {
    this.ringPool.obtain(x, y);
    // Also launch waves in both directions
    this.spawnFloorWave(x - 0.5, y, -1, 14.0);
    this.spawnFloorWave(x + 0.5, y, 1, 14.0);
  }

  update(dt) {
    // 1. Update Floor Waves
    this.wavePool.update(dt, (item, delta) => {
      item.lifetime += delta;
      if (item.lifetime >= item.maxLife) {
        item.hitbox.deactivate();
        item.mesh.visible = false;
        return false;
      }

      item.mesh.position.x += item.vx * delta;
      item.hitbox.updatePosition(item.mesh.position.x, item.mesh.position.y, 1);

      // Fade out near end of life
      const progress = item.lifetime / item.maxLife;
      if (progress > 0.8) {
        item.mesh.material.opacity = (1.0 - progress) * 5.0 * 0.95;
      }
      return true;
    });

    // 2. Update Puddles
    this.puddlePool.update(dt, (item, delta) => {
      item.lifetime += delta;
      if (item.lifetime >= item.maxLife) {
        item.hitbox.deactivate();
        item.mesh.visible = false;
        return false;
      }

      const progress = item.lifetime / item.maxLife;
      if (progress > 0.8) {
        item.mesh.material.opacity = (1.0 - progress) * 5.0 * 0.85;
      }
      return true;
    });

    // 3. Update Rings
    this.ringPool.update(dt, (item, delta) => {
      item.life += delta;
      if (item.life >= item.maxLife) {
        item.mesh.visible = false;
        return false;
      }

      const progress = item.life / item.maxLife;
      const r = THREE.MathUtils.lerp(0.5, item.maxRadius, progress);
      item.mesh.scale.set(r, r, 1);
      item.mesh.material.opacity = (1.0 - progress) * 0.9;
      return true;
    });
  }

  dispose() {
    this.wavePool.forEach(w => combatManager.unregisterEntity(w.hitbox.owner));
    this.puddlePool.forEach(p => combatManager.unregisterEntity(p.hitbox.owner));
  }
}
