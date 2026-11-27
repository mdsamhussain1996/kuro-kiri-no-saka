// Shadow Archer (Act II Sniper) — Perched marksman wielding a Japanese Yumi asymmetric longbow.
// Telegraphs a glowing vermilion bowstring draw and fires deflectable ink arrows at Kuro.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { createSumieMaterial, addInkOutline } from '../shaders/SumieShader.js';

export class ShadowArcher {
  constructor({ scene, collision, inkSplash, projectiles, x = 0, y = 0, facing = -1 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.projectiles = projectiles;

    this.width = 0.85;
    this.height = 1.85;
    this.aabb = new AABB(x, y, this.width, this.height);
    this.facing = facing;
    this.maxHp = 2;
    this.hp = this.maxHp;
    this.isDead = false;
    this.isStaggered = false;
    this.isAirborne = false;

    this.cooldownTimer = 1.6;
    this.aimTimer = 0;
    this.staggerTimer = 0;
    this.isAiming = false;

    // Hurtbox registration so Kuro's katana or reflected arrows can kill him
    this.hurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: this.width * 0.9,
      height: this.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.hurtbox.activate();
    combatManager.registerEnemyHurtbox(this.hurtbox);

    // 3D Procedural Sumi-e Mesh
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(x, y, 0);

    const robeMat = createSumieMaterial({
      inkDark: 0x141413,
      inkMid: 0x45433e,
      inkLight: 0x7c7970,
      darkBias: 0.16,
    });

    // Body & Legs grounded at -height * 0.5
    const torsoGeo = new THREE.CylinderGeometry(0.24, 0.34, 1.05, 8);
    const torso = new THREE.Mesh(torsoGeo, robeMat);
    torso.position.y = -0.05;
    addInkOutline(torso, 0.028);
    this.meshGroup.add(torso);

    const legGeo = new THREE.CylinderGeometry(0.10, 0.08, 0.55, 8);
    for (const zOff of [-0.11, 0.11]) {
      const leg = new THREE.Mesh(legGeo, robeMat);
      leg.position.set(0, -this.height * 0.5 + 0.28, zOff);
      addInkOutline(leg, 0.022);
      this.meshGroup.add(leg);
    }

    // Hooded Head & Conical Archer Hat
    const headGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const head = new THREE.Mesh(headGeo, robeMat);
    head.position.y = 0.58;
    addInkOutline(head, 0.022);
    this.meshGroup.add(head);

    const hatGeo = new THREE.ConeGeometry(0.62, 0.32, 10);
    const hat = new THREE.Mesh(hatGeo, robeMat);
    hat.position.y = 0.78;
    addInkOutline(hat, 0.028);
    this.meshGroup.add(hat);

    // Tall Japanese Yumi Longbow
    const bowArcGeo = new THREE.TorusGeometry(0.78, 0.032, 6, 16, Math.PI * 0.92);
    bowArcGeo.rotateZ(-Math.PI * 0.46);
    const bowMesh = new THREE.Mesh(bowArcGeo, robeMat);
    bowMesh.position.set(0.25, 0.15, 0.22);
    addInkOutline(bowMesh, 0.022);
    this.meshGroup.add(bowMesh);

    // Glowing Vermilion Bowstring Telegraph
    const stringGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.45, 4);
    this.stringMat = new THREE.MeshBasicMaterial({ color: 0x3d3b37 });
    this.bowString = new THREE.Mesh(stringGeo, this.stringMat);
    this.bowString.position.set(0.22, 0.15, 0.22);
    this.meshGroup.add(this.bowString);

    this.scene.add(this.meshGroup);
  }

  takeDamage(amount = 1, isInstantKill = false, attackerX = 0) {
    if (this.isDead) return false;
    this.hp -= amount;
    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(this.aabb.x, this.aabb.y, this.facing, 12, true, true);
    }
    if (this.hp <= 0 || isInstantKill === true) {
      this.die();
    }
    return true;
  }

  stagger(duration = 2.0) {
    this.isStaggered = true;
    this.staggerTimer = duration;
    this.isAiming = false;
    this.cooldownTimer = Math.max(this.cooldownTimer, duration);
    this.stringMat.color.setHex(0x3d3b37);
  }

  onParried() {
    this.stagger(2.0);
  }

  die() {
    this.isDead = true;
    this.hurtbox.deactivate();
    combatManager.unregisterEntity(this);
    this.meshGroup.visible = false;
    if (this.inkSplash) {
      this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, this.width, this.height);
    }
    events.emit('enemy_killed', { enemy: this });
  }

  hasLineOfSight(player) {
    const solids = this.collision?.solids;
    if (!solids || !solids.length) return true;
    const x1 = this.aabb.x + this.facing * 0.65;
    const y1 = this.aabb.y + 0.15;
    const x2 = player.aabb.x;
    const y2 = player.aabb.y;
    const steps = 10;
    for (let s = 1; s < steps; s++) {
      const t = s / steps;
      const px = x1 + (x2 - x1) * t;
      const py = y1 + (y2 - y1) * t;
      for (let i = 0; i < solids.length; i++) {
        const solid = solids[i];
        if (solid.crumbleState === 'collapsed') continue;
        if (solid.aabb?.contains(px, py)) return false;
      }
    }
    return true;
  }

  fixedUpdate(dt, player) {
    if (this.isDead || !player || player.health <= 0 || player.fsm?.isInState?.('Dead')) {
      this.isAiming = false;
      this.stringMat.color.setHex(0x3d3b37);
      return;
    }

    this.hurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);

    if (this.staggerTimer > 0) {
      this.staggerTimer -= dt;
      if (this.staggerTimer <= 0) {
        this.isStaggered = false;
      }
      return;
    }

    const dx = player.aabb.x - this.aabb.x;
    const dy = player.aabb.y - this.aabb.y;
    const dist = Math.hypot(dx, dy);
    this.facing = dx >= 0 ? 1 : -1;

    if (dist < 18.0 && this.hasLineOfSight(player)) {
      if (!this.isAiming) {
        this.cooldownTimer -= dt;
        if (this.cooldownTimer <= 0) {
          this.isAiming = true;
          this.aimTimer = 0.72;
          this.stringMat.color.setHex(0xb8292f); // Glowing vermilion telegraph!
        }
      } else {
        this.aimTimer -= dt;
        if (this.aimTimer <= 0) {
          this.isAiming = false;
          this.cooldownTimer = 1.95;
          this.stringMat.color.setHex(0x3d3b37);

          if (this.projectiles) {
            const len = Math.hypot(dx, dy) || 1;
            const speed = 15.5;
            this.projectiles.spawnProjectile({
              x: this.aabb.x + this.facing * 0.65,
              y: this.aabb.y + 0.15,
              vx: (dx / len) * speed,
              vy: (dy / len) * speed,
              owner: this,
              type: 'arrow',
              damage: 1,
            });
          }
        }
      }
    } else {
      this.isAiming = false;
      this.stringMat.color.setHex(0x3d3b37);
    }
  }

  render() {
    if (this.isDead) return;
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.meshGroup.scale.x = this.facing;
  }

  dispose() {
    this.hurtbox.deactivate();
    combatManager.unregisterEntity(this);
    const disposedMats = new Set();
    this.meshGroup.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material && !disposedMats.has(obj.material)) {
        disposedMats.add(obj.material);
        obj.material.dispose();
      }
    });
    this.meshGroup.clear();
    this.scene.remove(this.meshGroup);
  }
}
