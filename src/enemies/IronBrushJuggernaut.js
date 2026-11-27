// Iron Brush Juggernaut (Act III Heavy Construct)
// Wields a colossal frontal Iron-Ink Tower Shield and an iron brush club.
// Frontal katana strikes clink off his shield; Kuro must Ink Step behind his guard to strike his exposed back!

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { createSumieMaterial, addInkOutline } from '../shaders/SumieShader.js';

export class IronBrushJuggernaut {
  constructor({ scene, collision, inkSplash, x = 0, y = 0, facing = -1, patrolMinX = -4, patrolMaxX = 4 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;

    this.width = 1.45;
    this.height = 2.75;
    this.aabb = new AABB(x, y, this.width, this.height);
    this.facing = facing;
    this.patrolMinX = patrolMinX;
    this.patrolMaxX = patrolMaxX;

    this.maxHp = 5;
    this.hp = this.maxHp;
    this.isDead = false;
    this.isStaggered = false;
    this.isAirborne = false;
    this.staggerTimer = 0;
    this.attackCooldown = 1.5;
    this.attackWindupTimer = 0;
    this.attackActiveTimer = 0;
    this.velocity = { x: 0, y: 0 };

    this.hurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: this.width * 0.95,
      height: this.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.hurtbox.activate();
    combatManager.registerEnemyHurtbox(this.hurtbox);

    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: 2.2,
      height: 1.8,
      offsetX: 1.1,
      offsetY: 0,
      damage: 1,
    });
    combatManager.registerEnemyAttack(this.attackHitbox);

    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(x, y, 0);

    const ironMat = createSumieMaterial({
      inkDark: 0x111110,
      inkMid: 0x33312d,
      inkLight: 0x6b6860,
      darkBias: 0.22,
    });

    // Hulking Armored Torso & Grounded Pillar Legs
    const torsoGeo = new THREE.CylinderGeometry(0.62, 0.52, 1.45, 10);
    const torso = new THREE.Mesh(torsoGeo, ironMat);
    torso.position.y = 0.15;
    addInkOutline(torso, 0.036);
    this.meshGroup.add(torso);

    const legGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.85, 8);
    for (const zOff of [-0.24, 0.24]) {
      const leg = new THREE.Mesh(legGeo, ironMat);
      leg.position.set(0, -this.height * 0.5 + 0.42, zOff);
      addInkOutline(leg, 0.028);
      this.meshGroup.add(leg);
    }

    // Iron Helmet
    const helmGeo = new THREE.ConeGeometry(0.55, 0.65, 8);
    const helm = new THREE.Mesh(helmGeo, ironMat);
    helm.position.y = 1.12;
    addInkOutline(helm, 0.032);
    this.meshGroup.add(helm);

    // Colossal Frontal Iron Tower Shield (+X)
    const shieldGeo = new THREE.BoxGeometry(0.26, 2.25, 1.35);
    const shield = new THREE.Mesh(shieldGeo, ironMat);
    shield.position.set(0.68, 0.0, 0);
    addInkOutline(shield, 0.038);
    this.meshGroup.add(shield);

    // Glowing Vermilion Back Core (Shows player to dash behind his shield!)
    const backCoreGeo = new THREE.BoxGeometry(0.22, 0.85, 0.55);
    const backCoreMat = new THREE.MeshBasicMaterial({ color: 0xb8292f });
    const backCore = new THREE.Mesh(backCoreGeo, backCoreMat);
    backCore.position.set(-0.56, 0.2, 0);
    this.meshGroup.add(backCore);

    this.scene.add(this.meshGroup);
  }

  takeDamage(amount = 1, isBypassShield = false, attackerX = 0) {
    if (this.isDead) return false;

    let bypass = isBypassShield === true || this.isStaggered;
    let srcX = attackerX;
    if (typeof isBypassShield === 'number') {
      srcX = isBypassShield;
      bypass = this.isStaggered;
    }

    // Check if attack came from the FRONT (shielded side) while not bypassed/staggered!
    const attackFromFront = (srcX - this.aabb.x) * this.facing > 0;
    if (attackFromFront && !bypass) {
      if (this.inkSplash) {
        this.inkSplash.spawnHitImpact(this.aabb.x + this.facing * 0.7, this.aabb.y, this.facing, 6, false, false);
      }
      events.emit('boss_clink');
      return false;
    }

    // Rear / Flank / Bypass Strike (or Staggered) deals double damage!
    this.hp -= amount * 2;
    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(this.aabb.x, this.aabb.y, -this.facing, 18, true, true);
    }
    if (this.hp <= 0) {
      this.die();
    }
    return true;
  }

  stagger(duration = 2.2) {
    this.isStaggered = true;
    this.staggerTimer = duration;
    this.attackWindupTimer = 0;
    this.attackActiveTimer = 0;
    this.attackHitbox.deactivate();
  }

  onParried() {
    this.stagger(2.2);
  }

  die() {
    this.isDead = true;
    this.hurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.meshGroup.visible = false;
    if (this.inkSplash) {
      this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, this.width, this.height);
    }
    events.emit('enemy_killed', { enemy: this });
  }

  fixedUpdate(dt, player) {
    if (this.isDead || !player) return;

    // Gravity
    const g = this.velocity.y > 0 ? CONFIG.PLAYER.gravityRising : CONFIG.PLAYER.gravityFalling;
    this.velocity.y += g * dt;
    if (this.velocity.y < CONFIG.PLAYER.maxFallSpeed) {
      this.velocity.y = CONFIG.PLAYER.maxFallSpeed;
    }

    if (this.staggerTimer > 0) {
      this.staggerTimer -= dt;
      this.velocity.x = 0;
      if (this.staggerTimer <= 0) {
        this.isStaggered = false;
      }
    } else if (this.attackWindupTimer > 0) {
      this.velocity.x = 0;
      this.attackWindupTimer -= dt;
      if (this.attackWindupTimer <= 0) {
        this.attackHitbox.activate();
        this.attackActiveTimer = 0.24;
        this.attackCooldown = 1.65;
      }
    } else if (this.attackActiveTimer > 0) {
      this.velocity.x = 0;
      this.attackActiveTimer -= dt;
      if (this.attackActiveTimer <= 0) {
        this.attackHitbox.deactivate();
      }
    } else {
      // Slow turn rate so Kuro can Ink Step behind his shield!
      const dx = player.aabb.x - this.aabb.x;
      const dist = Math.abs(dx);

      if (dist < 10.0) {
        this.attackCooldown -= dt;
        if (this.attackCooldown <= 0) {
          this.facing = dx >= 0 ? 1 : -1;
          this.attackWindupTimer = 0.45;
          this.velocity.x = 0;
        } else if (dist > 1.8) {
          this.velocity.x = this.facing * 2.2;
        } else {
          this.velocity.x = 0;
        }
      } else {
        this.velocity.x = this.facing * 1.6;
        if (this.aabb.x <= this.patrolMinX) this.facing = 1;
        if (this.aabb.x >= this.patrolMaxX) this.facing = -1;
      }
    }

    if (this.collision) {
      const col = this.collision.moveAndSlide(this.aabb, this.velocity, dt, false);
      if (col.grounded) {
        this.velocity.y = 0;
      }
    } else {
      this.aabb.x += this.velocity.x * dt;
    }

    // Clamp to patrol bounds so Juggernaut does not walk off ledges
    if (this.aabb.x < this.patrolMinX) {
      this.aabb.x = this.patrolMinX;
      this.facing = 1;
    } else if (this.aabb.x > this.patrolMaxX) {
      this.aabb.x = this.patrolMaxX;
      this.facing = -1;
    }

    this.hurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
    this.attackHitbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render() {
    if (this.isDead) return;
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.meshGroup.scale.x = this.facing;
  }

  dispose() {
    this.hurtbox.deactivate();
    this.attackHitbox.deactivate();
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
