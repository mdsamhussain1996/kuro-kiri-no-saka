// Deflectable Sumi-e Projectile Manager
// Manages Shadow Archer ink arrows and Lady Shirayuki's spirit needle volleys.
// Supports 180ms timed katana parry reflection back at high velocity and Scroll 2 AoE Ink Burst.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';
import { addInkOutline } from '../shaders/SumieShader.js';

export class ProjectileManager {
  constructor(scene, inkSplash) {
    this.scene = scene;
    this.inkSplash = inkSplash;
    this.projectiles = [];
    this.scrollOfReflectionUnlocked = false;

    this._unsubScroll = events.on('scroll_unlocked', (payload = {}) => {
      const id = payload?.scrollId ?? payload?.index ?? 0;
      if (id >= 2) {
        this.scrollOfReflectionUnlocked = true;
      }
    });
  }

  /**
   * Spawns a deflectable projectile (arrow or spirit needle)
   */
  spawnProjectile({ x, y, vx, vy, owner, type = 'arrow', damage = 1 }) {
    const group = new THREE.Group();
    group.position.set(x, y, 0.15);

    let mesh;
    if (type === 'needle') {
      const geo = new THREE.ConeGeometry(0.08, 0.95, 6);
      geo.rotateZ(-Math.PI / 2);
      const mat = new THREE.MeshBasicMaterial({ color: 0xb8292f });
      mesh = new THREE.Mesh(geo, mat);
      addInkOutline(mesh, 0.025, 0x141413);
    } else {
      // Shadow Archer Ink Arrow
      const shaftGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.25, 6);
      shaftGeo.rotateZ(Math.PI / 2);
      const shaftMat = new THREE.MeshBasicMaterial({ color: 0x141413 });
      mesh = new THREE.Mesh(shaftGeo, shaftMat);

      const tipGeo = new THREE.ConeGeometry(0.09, 0.35, 5);
      tipGeo.rotateZ(-Math.PI / 2);
      const tipMat = new THREE.MeshBasicMaterial({ color: 0xb8292f });
      const tip = new THREE.Mesh(tipGeo, tipMat);
      tip.position.x = 0.65;
      mesh.add(tip);
    }

    group.add(mesh);
    group.rotation.z = Math.atan2(vy, vx);
    this.scene.add(group);

    this.projectiles.push({
      group,
      mesh,
      x,
      y,
      vx,
      vy,
      owner,
      type,
      damage,
      reflected: false,
      life: 0,
      maxLife: 4.0,
    });
  }

  fixedUpdate(dt, player, enemies = [], bosses = [], collision = null) {
    if (!player) return;
    const colSys = collision || player.collision || null;
    const playerDead = player.health <= 0 || player.fsm?.isInState?.('Dead');

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.removeProjectile(i);
        continue;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.group.position.set(p.x, p.y, 0.15);
      p.group.rotation.z = Math.atan2(p.vy, p.vx);

      // Destroy projectiles on solid terrain impact
      if (colSys?.solids?.length) {
        let hitSolid = false;
        for (let s = 0; s < colSys.solids.length; s++) {
          const solid = colSys.solids[s];
          if (solid.crumbleState === 'collapsed') continue;
          if (solid.aabb?.contains(p.x, p.y)) {
            hitSolid = true;
            break;
          }
        }
        if (hitSolid) {
          if (this.inkSplash) {
            this.inkSplash.spawnHitImpact(p.x, p.y, -(Math.sign(p.vx) || 1), 4, false, false);
          }
          this.removeProjectile(i);
          continue;
        }
      }

      // 1. If not yet reflected, check collision with Player or Player's Parry/Attack
      if (!p.reflected) {
        if (playerDead) continue;
        const dx = p.x - player.aabb.x;
        const dy = p.y - player.aabb.y;
        const dist = Math.hypot(dx, dy);

        // Check active Parry OR active Katana slash facing projectile
        const isParrying = !!(player.isParrying || player.fsm?.isInState?.('Parry'));
        const isActiveSlash = player.combat?.attackPhase === 'active'
          && (player.fsm?.isInState?.('Attack') || player.fsm?.isInState?.('AirAttack'))
          && (dx * player.facing >= -0.35);

        if (dist < 1.65 && (isParrying || isActiveSlash)) {
          // REFLECT PROJECTILE BACK AT HIGH VELOCITY (2.2x)!
          p.reflected = true;
          p.life = 0;

          if (p.owner && p.owner.aabb) {
            const tx = p.owner.aabb.x - p.x;
            const ty = p.owner.aabb.y - p.y;
            const len = Math.hypot(tx, ty) || 1;
            const speed = Math.hypot(p.vx, p.vy) * 2.2;
            p.vx = (tx / len) * speed;
            p.vy = (ty / len) * speed;
          } else {
            p.vx = -p.vx * 2.2;
            p.vy = -p.vy * 2.2;
          }

          if (this.inkSplash) {
            this.inkSplash.spawnParryBurst(p.x, p.y, true);
          }
          events.emit('parry_perfect', { x: p.x, y: p.y, reflectedProjectile: true });
          events.emit('camera_shake', { amount: 0.22 });
          continue;
        }

        // Check player hurtbox impact
        if (Math.abs(dx) < 0.65 && Math.abs(dy) < 0.95) {
          player.takeDamage(p.damage, p.x);
          if (this.inkSplash) {
            this.inkSplash.spawnHitImpact(p.x, p.y, Math.sign(p.vx) || 1, 10, false, true);
          }
          this.removeProjectile(i);
          continue;
        }
      } else {
        // 2. Reflected projectile checks collision against all Enemies & Bosses!
        let hitTarget = null;

        for (const e of enemies) {
          if (e && !e.isDead && Math.abs(p.x - e.aabb.x) < 1.1 && Math.abs(p.y - e.aabb.y) < 1.3) {
            hitTarget = e;
            break;
          }
        }

        if (!hitTarget) {
          for (const b of bosses) {
            if (b && !b.isDead && Math.abs(p.x - b.aabb.x) < 1.8 && Math.abs(p.y - b.aabb.y) < 2.4) {
              hitTarget = b;
              break;
            }
          }
        }

        if (hitTarget) {
          // Reflected projectile deals 3 heavy weak-point damage!
          hitTarget.takeDamage(3, true, p.x);

          if (this.inkSplash) {
            this.inkSplash.spawnParryBurst(p.x, p.y, true);
            this.inkSplash.spawnHitImpact(p.x, p.y, Math.sign(p.vx) || 1, 22, true, true);
          }

          // Second Scroll of Reflection: AoE Ink Burst damaging all nearby enemies within 5 units!
          if (this.scrollOfReflectionUnlocked) {
            for (const e of enemies) {
              if (e && !e.isDead && e !== hitTarget && Math.hypot(e.aabb.x - p.x, e.aabb.y - p.y) < 5.0) {
                e.takeDamage(2, false, p.x);
              }
            }
          }

          events.emit('camera_shake', { amount: 0.35 });
          this.removeProjectile(i);
          continue;
        }
      }
    }
  }

  _disposeProjectileGroup(group) {
    if (!group) return;
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    group.clear();
    this.scene.remove(group);
  }

  removeProjectile(index) {
    const p = this.projectiles[index];
    if (p && p.group) {
      this._disposeProjectileGroup(p.group);
    }
    this.projectiles.splice(index, 1);
  }

  clear() {
    for (const p of this.projectiles) {
      this._disposeProjectileGroup(p.group);
    }
    this.projectiles = [];
  }

  dispose() {
    this._unsubScroll?.();
    this.clear();
  }
}
