// Traveling Ink Shockwaves & Tar Puddles for Boss Attacks (Zero GC)

import * as THREE from 'three';
import { Pool } from '../core/Pool.js';
import { CONFIG } from '../config.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';

export class InkShockwaveManager {
  constructor(scene) {
    this.scene = scene;

    // 1. Traveling Floor Ink Waves (Sweep Attack)
    this._waveGeo = new THREE.PlaneGeometry(1.4, 0.9);
    this._waveMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });

    this.wavePool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._waveGeo, this._waveMat.clone());
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
      (item, x, y, direction = 1, speed = 14.0, damage = 1) => {
        item.mesh.position.set(x, y + 0.45, 0.05);
        item.mesh.scale.set(direction, 1, 1);
        item.mesh.material.opacity = 0.95;
        item.mesh.visible = true;
        item.vx = direction * speed;
        item.lifetime = 0;
        item.maxLife = 2.4;
        item.active = true;
        item.hitbox.damage = damage;
        if (damage > 0) {
          item.hitbox.activate();
        } else {
          item.hitbox.deactivate();
        }
        item.hitbox.owner.aabb.x = x;
        item.hitbox.owner.aabb.y = y + 0.45;
        item.hitbox.updatePosition(x, y + 0.45, 1);
      },
      8
    );

    // 2. Persistent Tar Puddles (Phase 3 Hazard)
    this._puddleGeo = new THREE.PlaneGeometry(2.4, 0.3);
    this._puddleMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    this.puddlePool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._puddleGeo, this._puddleMat.clone());
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
        item.mesh.material.opacity = 0.85;
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
    this._ringGeo = new THREE.RingGeometry(0.2, 0.6, 24);
    this._ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    this.ringPool = new Pool(
      () => {
        const mesh = new THREE.Mesh(this._ringGeo, this._ringMat.clone());
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
        item.mesh.material.opacity = 0.9;
        item.mesh.visible = true;
        item.life = 0;
        item.maxLife = 0.45;
        item.maxRadius = 7.5;
      },
      6
    );
  }

  spawnFloorWave(x, y, direction = 1, speed = 14.0, damage = 1) {
    this.wavePool.obtain(x, y, direction, speed, damage);
  }

  spawnPuddle(x, y) {
    this.puddlePool.obtain(x, y);
  }

  spawnRingShockwave(x, y, damage = 1) {
    this.ringPool.obtain(x, y);
    // Also launch waves in both directions
    this.spawnFloorWave(x - 0.5, y, -1, 14.0, damage);
    this.spawnFloorWave(x + 0.5, y, 1, 14.0, damage);
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

  clear() {
    for (const w of this.wavePool.activeList) {
      w.hitbox.deactivate();
      w.mesh.visible = false;
      w.active = false;
    }
    for (const p of this.puddlePool.activeList) {
      p.hitbox.deactivate();
      p.mesh.visible = false;
      p.active = false;
    }
    for (const r of this.ringPool.activeList) {
      r.mesh.visible = false;
    }
    this.wavePool.releaseAll();
    this.puddlePool.releaseAll();
    this.ringPool.releaseAll();
  }

  dispose() {
    this.clear();
    for (const w of [...this.wavePool.activeList, ...this.wavePool.freeList]) {
      w.hitbox.deactivate();
      combatManager.unregisterEntity(w.hitbox.owner);
      this.scene.remove(w.mesh);
      w.mesh.material.dispose();
    }
    for (const p of [...this.puddlePool.activeList, ...this.puddlePool.freeList]) {
      p.hitbox.deactivate();
      combatManager.unregisterEntity(p.hitbox.owner);
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    for (const r of [...this.ringPool.activeList, ...this.ringPool.freeList]) {
      this.scene.remove(r.mesh);
      r.mesh.material.dispose();
    }
    this.wavePool.activeList.length = 0;
    this.wavePool.freeList.length = 0;
    this.puddlePool.activeList.length = 0;
    this.puddlePool.freeList.length = 0;
    this.ringPool.activeList.length = 0;
    this.ringPool.freeList.length = 0;
    this._waveGeo.dispose();
    this._waveMat.dispose();
    this._puddleGeo.dispose();
    this._puddleMat.dispose();
    this._ringGeo.dispose();
    this._ringMat.dispose();
  }
}
