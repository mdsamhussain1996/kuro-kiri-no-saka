// Ink-Wing Tengu Enemy — Airborne crow demon, sine hover, diagonal swoop dive, air-dash refresh on hit

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { StateMachine } from '../core/StateMachine.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';

export class InkWingTengu {
  constructor({ scene, collision, inkSplash, x = 0, y = 5, facing = -1 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;

    const cfg = CONFIG.ENEMIES.tengu;
    this.aabb = new AABB(x, y, cfg.width, cfg.height);
    this.velocity = { x: 0, y: 0 };
    this.facing = facing;

    this.homeX = x;
    this.homeY = y;
    this.hoverTime = Math.random() * 10;

    // Vitals
    this.maxHp = cfg.hp;
    this.hp = this.maxHp;
    this.isDead = false;
    this.isAirborne = true;
    this.isStaggered = false;

    // Target position for swoop dive
    this.swoopTarget = { x: 0, y: 0 };
    this.swoopDir = { x: 0, y: 0 };
    this.stateTimer = 0;
    this.staggerTimer = 0;
    this.cooldownTimer = 1.0;

    // Hitboxes
    this.hurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: cfg.width * 0.95,
      height: cfg.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.hurtbox.activate();
    combatManager.registerEnemyHurtbox(this.hurtbox);

    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: cfg.width * 1.2,
      height: cfg.height * 1.2,
      offsetX: 0,
      offsetY: 0,
      damage: cfg.swoopDamage,
    });
    combatManager.registerEnemyAttack(this.attackHitbox);

    // Visual Mesh Hierarchy
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);

    // Body (dark cloaked figure)
    const bodyGeo = new THREE.ConeGeometry(0.5, cfg.height * 0.8, 6);
    this.bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.6,
    });
    this.bodyMesh = new THREE.Mesh(bodyGeo, this.bodyMat);
    this.bodyMesh.rotation.x = Math.PI; // upside down cone (cape shape)
    this.meshGroup.add(this.bodyMesh);

    // Tengu Beak / Mask (vermilion beak)
    const beakGeo = new THREE.ConeGeometry(0.18, 0.5, 4);
    beakGeo.rotateZ(-Math.PI / 2);
    const beakMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
      roughness: 0.3,
    });
    this.beakMesh = new THREE.Mesh(beakGeo, beakMat);
    this.beakMesh.position.set(0.35, 0.2, 0);
    this.meshGroup.add(this.beakMesh);

    // Ink Wings (Left & Right)
    const wingGeo = new THREE.PlaneGeometry(1.4, 0.6);
    this.wingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      roughness: 0.7,
      transparent: true,
      opacity: 0.9,
    });

    this.wingL = new THREE.Mesh(wingGeo, this.wingMat);
    this.wingL.position.set(-0.6, 0.2, -0.2);
    this.meshGroup.add(this.wingL);

    this.wingR = new THREE.Mesh(wingGeo, this.wingMat);
    this.wingR.position.set(-0.6, 0.2, 0.2);
    this.meshGroup.add(this.wingR);

    // Telegraph Line (Dotted ink trajectory path)
    const lineMat = new THREE.LineDashedMaterial({
      color: 0xb8292f, // vermilion telegraph
      dashSize: 0.4,
      gapSize: 0.2,
      linewidth: 2,
    });
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1, 0, 0),
    ]);
    this.telegraphLine = new THREE.Line(lineGeo, lineMat);
    this.telegraphLine.visible = false;
    this.scene.add(this.telegraphLine);

    this.scene.add(this.meshGroup);

    // FSM
    this.fsm = new StateMachine(this, 'Hover');
    this.setupFSM();
    this.fsm.changeState('Hover');
  }

  get isUnaware() {
    return false; // Tengu detects air presence quickly
  }

  setupFSM() {
    const cfg = CONFIG.ENEMIES.tengu;

    // --- HOVER ---
    this.fsm.addState('Hover', {
      enter: () => {
        this.telegraphLine.visible = false;
        this.attackHitbox.deactivate();
      },
      fixedUpdate: (dt, player) => {
        this.hoverTime += dt;
        this.cooldownTimer -= dt;

        // Sine wave hover around home position
        const targetY = this.homeY + Math.sin(this.hoverTime * cfg.bobFrequency) * cfg.bobAmplitude;
        this.aabb.y += (targetY - this.aabb.y) * 0.1;
        this.aabb.x += (this.homeX - this.aabb.x) * 0.05;

        // Wing flapping
        this.wingL.rotation.z = Math.sin(this.hoverTime * 8) * 0.4;
        this.wingR.rotation.z = Math.sin(this.hoverTime * 8) * 0.4;

        if (player) {
          this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;

          // Check dive trigger distance
          const dx = player.aabb.x - this.aabb.x;
          const dy = player.aabb.y - this.aabb.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 10.0 && this.cooldownTimer <= 0 && dy < 1.0) {
            this.swoopTarget = { x: player.aabb.x + player.facing * 1.5, y: player.aabb.y };
            const sx = this.swoopTarget.x - this.aabb.x;
            const sy = this.swoopTarget.y - this.aabb.y;
            const len = Math.hypot(sx, sy) || 1;
            this.swoopDir = { x: sx / len, y: sy / len };

            this.fsm.changeState('Telegraph');
          }
        }
      }
    });

    // --- TELEGRAPH ---
    this.fsm.addState('Telegraph', {
      enter: () => {
        this.stateTimer = cfg.swoopTelegraph;
        this.telegraphLine.visible = true;

        // Update line vertices from Tengu to Swoop Target
        const pts = [
          new THREE.Vector3(this.aabb.x, this.aabb.y, 0),
          new THREE.Vector3(this.swoopTarget.x + this.swoopDir.x * 4, this.swoopTarget.y + this.swoopDir.y * 4, 0),
        ];
        this.telegraphLine.geometry.setFromPoints(pts);
        this.telegraphLine.computeLineDistances();
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;

        // Wings pulled tight in preparation for dive
        this.wingL.rotation.z = 0.8;
        this.wingR.rotation.z = 0.8;

        if (this.stateTimer <= 0) {
          this.telegraphLine.visible = false;
          this.fsm.changeState('Swoop');
        }
      }
    });

    // --- SWOOP (DIVE ATTACK) ---
    this.fsm.addState('Swoop', {
      enter: () => {
        this.stateTimer = 0.55;
        this.attackHitbox.activate();
        this.velocity.x = this.swoopDir.x * cfg.swoopSpeed;
        this.velocity.y = this.swoopDir.y * cfg.swoopSpeed;
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.collision) {
          const col = this.collision.moveAndSlide(this.aabb, this.velocity, dt, false);
          if (col.grounded || col.ceiling || col.wallLeft || col.wallRight) {
            this.attackHitbox.deactivate();
            this.fsm.changeState('Ascend');
            return;
          }
        } else {
          this.aabb.x += this.velocity.x * dt;
          this.aabb.y += this.velocity.y * dt;
        }

        // Stream of ink droplets behind swoop dive
        if (this.inkSplash && Math.random() < 0.6) {
          this.inkSplash.spawnHitImpact(this.aabb.x, this.aabb.y, -this.facing, 2, false);
        }

        if (this.stateTimer <= 0 || this.aabb.y <= this.swoopTarget.y - 1.0) {
          this.attackHitbox.deactivate();
          this.fsm.changeState('Ascend');
        }
      }
    });

    // --- ASCEND (RETURN TO HOVER ALTITUDE) ---
    this.fsm.addState('Ascend', {
      enter: () => {
        this.attackHitbox.deactivate();
        this.cooldownTimer = cfg.swoopCooldown;
      },
      fixedUpdate: (dt) => {
        // Smoothly fly back to home altitude
        const dx = this.homeX - this.aabb.x;
        const dy = this.homeY - this.aabb.y;
        this.velocity.x += (dx * 2.5 - this.velocity.x) * 0.08;
        this.velocity.y += (dy * 3.5 - this.velocity.y) * 0.08;

        this.aabb.x += this.velocity.x * dt;
        this.aabb.y += this.velocity.y * dt;

        if (Math.hypot(dx, dy) < 0.8) {
          this.fsm.changeState('Hover');
        }
      }
    });

    // --- HURT ---
    this.fsm.addState('Hurt', {
      enter: () => {
        this.stateTimer = this.staggerTimer > 0 ? this.staggerTimer : 0.2;
        this.attackHitbox.deactivate();
        this.telegraphLine.visible = false;
      },
      exit: () => {
        this.isStaggered = false;
        this.staggerTimer = 0;
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.staggerTimer > 0) this.staggerTimer = Math.max(0, this.staggerTimer - dt);
        this.aabb.x += this.velocity.x * dt;
        this.aabb.y += this.velocity.y * dt;
        this.velocity.x *= 0.85;
        this.velocity.y *= 0.85;

        if (this.stateTimer <= 0) {
          this.isStaggered = false;
          this.fsm.changeState('Ascend');
        }
      }
    });

    // --- DEAD ---
    this.fsm.addState('Dead', {
      enter: () => {
        this.isDead = true;
        this.telegraphLine.visible = false;
        this.hurtbox.deactivate();
        this.attackHitbox.deactivate();
        combatManager.unregisterEntity(this);

        if (this.inkSplash) {
          this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, cfg.width, cfg.height);
        }
        this.meshGroup.visible = false;
        events.emit('enemy_killed', { enemy: this });
      },
      fixedUpdate: () => {}
    });
  }

  stagger(duration = 1.2) {
    this.isStaggered = true;
    this.staggerTimer = duration;
    this.attackHitbox.deactivate();
    this.telegraphLine.visible = false;
    this.fsm.changeState('Hurt', null, true);
  }

  takeDamage(amount = 1, isInstantKill = false, attackerX = 0) {
    if (this.isDead) return;

    this.hp -= amount;

    // Knockback
    const kx = this.aabb.x >= attackerX ? 1 : -1;
    this.velocity.x = kx * 8.0;
    this.velocity.y = 5.0;

    if (this.hp <= 0 || isInstantKill) {
      this.fsm.changeState('Dead');
    } else {
      this.fsm.changeState('Hurt');
    }
  }

  fixedUpdate(dt, player) {
    if (this.isDead) return;

    this.fsm.fixedUpdate(dt, player);

    // Update Hitboxes
    this.hurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
    this.attackHitbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render(alpha) {
    if (this.isDead) return;

    this.meshGroup.position.x = this.aabb.x;
    this.meshGroup.position.y = this.aabb.y;
    this.meshGroup.scale.x = this.facing;
  }

  dispose() {
    this.telegraphLine.visible = false;
    this.telegraphLine.geometry?.dispose();
    this.telegraphLine.material?.dispose();
    this.scene.remove(this.telegraphLine);
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
