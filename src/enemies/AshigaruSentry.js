// Ashigaru Sentry Enemy — Ground spear patrol, vision cone, readable telegraphs, parryable thrust, backstab

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { StateMachine } from '../core/StateMachine.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { addInkOutline } from '../render/SumieMaterial.js';

export class AshigaruSentry {
  constructor({ scene, collision, inkSplash, x = 0, y = 0, facing = -1, patrolMinX = -5, patrolMaxX = 5, isStationary = false }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;

    const cfg = CONFIG.ENEMIES.ashigaru;
    this.aabb = new AABB(x, y, cfg.width, cfg.height);
    this.velocity = { x: 0, y: 0 };
    this.facing = facing; // 1 = right, -1 = left
    this.patrolMinX = patrolMinX;
    this.patrolMaxX = patrolMaxX;
    this.isStationary = isStationary;

    // Vitals
    this.maxHp = cfg.hp;
    this.hp = this.maxHp;
    this.isDead = false;
    this.isStaggered = false;
    this.isAirborne = false;

    // Timers
    this.stateTimer = 0;
    this.staggerTimer = 0;
    this.patrolPauseTimer = 0;
    this.flashTimer = 0;

    // Hitboxes
    this.hurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: cfg.width * 0.9,
      height: cfg.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.hurtbox.activate();
    combatManager.registerEnemyHurtbox(this.hurtbox);

    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: cfg.attackReach,
      height: 0.6,
      offsetX: cfg.attackReach * 0.5,
      offsetY: 0,
      damage: cfg.attackDamage,
    });
    combatManager.registerEnemyAttack(this.attackHitbox);

    // Visual Mesh Hierarchy
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);

    // Body (armored foot soldier with grounded legs & black ink outlines)
    const bodyGeo = new THREE.CylinderGeometry(0.28, 0.34, 0.78, 8);
    this.bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkMid),
      roughness: 0.7,
      transparent: true,
      opacity: 1.0,
    });
    this.bodyMesh = new THREE.Mesh(bodyGeo, this.bodyMat);
    this.bodyMesh.position.y = 0.05;
    this.bodyMesh.castShadow = true;
    addInkOutline(this.bodyMesh, 0.032);
    this.meshGroup.add(this.bodyMesh);

    // Legs & Boots grounded at -cfg.height * 0.5
    const legGeo = new THREE.CylinderGeometry(0.11, 0.08, 0.65, 8);
    const legL = new THREE.Mesh(legGeo, this.bodyMat);
    legL.position.set(-0.10, -cfg.height * 0.5 + 0.32, -0.10);
    addInkOutline(legL, 0.025);
    this.meshGroup.add(legL);

    const legR = new THREE.Mesh(legGeo, this.bodyMat);
    legR.position.set(0.12, -cfg.height * 0.5 + 0.32, 0.10);
    addInkOutline(legR, 0.025);
    this.meshGroup.add(legR);

    // Head
    const headGeo = new THREE.SphereGeometry(0.19, 8, 8);
    const headMesh = new THREE.Mesh(headGeo, this.bodyMat);
    headMesh.position.y = 0.55;
    addInkOutline(headMesh, 0.025);
    this.meshGroup.add(headMesh);

    // Jingasa conical war hat
    const hatGeo = new THREE.ConeGeometry(0.75, 0.28, 14);
    this.hatMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.9,
    });
    this.hatMesh = new THREE.Mesh(hatGeo, this.hatMat);
    this.hatMesh.position.y = 0.72;
    this.hatMesh.castShadow = true;
    addInkOutline(this.hatMesh, 0.035);
    this.meshGroup.add(this.hatMesh);

    // Yari Spear (shaft + vermilion-tipped blade)
    this.spearGroup = new THREE.Group();
    this.spearGroup.position.set(0.25, 0.05, 0.28);

    const shaftGeo = new THREE.CylinderGeometry(0.04, 0.04, cfg.attackReach, 6);
    shaftGeo.rotateZ(Math.PI / 2);
    const shaftMat = new THREE.MeshStandardMaterial({ color: 0x26221e, roughness: 0.8 });
    const shaftMesh = new THREE.Mesh(shaftGeo, shaftMat);
    shaftMesh.position.x = cfg.attackReach * 0.45;
    addInkOutline(shaftMesh, 0.022);
    this.spearGroup.add(shaftMesh);

    const spearTipGeo = new THREE.ConeGeometry(0.13, 0.65, 6);
    spearTipGeo.rotateZ(-Math.PI / 2);
    this.spearTipMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
      roughness: 0.3,
      metalness: 0.8,
    });
    const spearTipMesh = new THREE.Mesh(spearTipGeo, this.spearTipMat);
    spearTipMesh.position.x = cfg.attackReach + 0.15;
    addInkOutline(spearTipMesh, 0.025);
    this.spearGroup.add(spearTipMesh);

    this.meshGroup.add(this.spearGroup);

    // Alert "!" Indicator & Unaware Awareness Ring "○"
    if (typeof document !== 'undefined') {
      const alertCanvas = document.createElement('canvas');
      alertCanvas.width = 64;
      alertCanvas.height = 64;
      const ctx = alertCanvas.getContext('2d');
      ctx.fillStyle = '#b8292f'; // vermilion
      ctx.font = 'bold 52px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('!', 32, 32);
      const alertTex = new THREE.CanvasTexture(alertCanvas);
      const alertMat = new THREE.SpriteMaterial({ map: alertTex, transparent: true, opacity: 0 });
      this.alertSprite = new THREE.Sprite(alertMat);
      this.alertSprite.position.set(0, cfg.height * 0.5 + 0.85, 0);
      this.alertSprite.scale.set(0.8, 0.8, 1);
      this.meshGroup.add(this.alertSprite);

      // Unaware empty vermilion circle (signals backstab opportunity)
      const ringCanvas = document.createElement('canvas');
      ringCanvas.width = 64;
      ringCanvas.height = 64;
      const rctx = ringCanvas.getContext('2d');
      rctx.strokeStyle = '#a8321f';
      rctx.lineWidth = 6;
      rctx.beginPath();
      rctx.arc(32, 32, 16, 0, Math.PI * 2);
      rctx.stroke();
      const ringTex = new THREE.CanvasTexture(ringCanvas);
      this.unawareSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: ringTex, transparent: true, opacity: 0.78 }));
      this.unawareSprite.position.set(0, cfg.height * 0.5 + 0.72, 0);
      this.unawareSprite.scale.set(0.55, 0.55, 1);
      this.meshGroup.add(this.unawareSprite);
    } else {
      this.alertSprite = { material: { opacity: 0 } };
      this.unawareSprite = { material: { opacity: 0 } };
    }

    this.scene.add(this.meshGroup);

    // State Machine
    this.fsm = new StateMachine(this, 'Patrol');
    this.setupFSM();
    this.fsm.changeState('Patrol');
  }

  get isUnaware() {
    return this.fsm.isInState('Patrol') || this.fsm.isInState('Alert');
  }

  setupFSM() {
    const cfg = CONFIG.ENEMIES.ashigaru;

    // --- PATROL ---
    this.fsm.addState('Patrol', {
      enter: () => {
        this.alertSprite.material.opacity = 0;
        if (this.unawareSprite) this.unawareSprite.material.opacity = 0.78;
        this.attackHitbox.deactivate();
        this.isStaggered = false;
      },
      fixedUpdate: (dt, player) => {
        if (!this.isStationary) {
          if (this.patrolPauseTimer > 0) {
            this.patrolPauseTimer -= dt;
            this.velocity.x = 0;
          } else {
            this.velocity.x = this.facing * cfg.patrolSpeed;
            if (this.facing > 0 && this.aabb.x >= this.patrolMaxX) {
              this.facing = -1;
              this.patrolPauseTimer = cfg.patrolPause;
            } else if (this.facing < 0 && this.aabb.x <= this.patrolMinX) {
              this.facing = 1;
              this.patrolPauseTimer = cfg.patrolPause;
            }
          }
        }

        // Check player in vision cone
        if (this.canSeePlayer(player)) {
          this.fsm.changeState('Alert');
          return;
        }
      }
    });

    // --- ALERT ---
    this.fsm.addState('Alert', {
      enter: () => {
        this.velocity.x = 0;
        this.stateTimer = 0.38;
        this.alertSprite.material.opacity = 1.0;
        if (this.unawareSprite) this.unawareSprite.material.opacity = 0;
        events.emit('enemy_alert', { enemy: this });
      },
      fixedUpdate: (dt, player) => {
        this.stateTimer -= dt;

        // Turn towards player
        if (player) {
          this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;
        }

        if (this.stateTimer <= 0) {
          // If within spear reach + 1 unit, start telegraph attack, else approach
          const dist = Math.abs(player.aabb.x - this.aabb.x);
          if (dist <= cfg.attackReach + 1.2) {
            this.fsm.changeState('Telegraph');
          } else {
            this.fsm.changeState('Chase');
          }
        }
      }
    });

    // --- CHASE ---
    this.fsm.addState('Chase', {
      enter: () => {
        this.alertSprite.material.opacity = 0.8;
      },
      fixedUpdate: (dt, player) => {
        if (!player) return;

        const dist = Math.abs(player.aabb.x - this.aabb.x);
        this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;

        if (dist <= cfg.attackReach + 0.4) {
          this.fsm.changeState('Telegraph');
          return;
        }

        this.velocity.x = this.facing * (cfg.patrolSpeed * 1.5);

        // Lost sight if player is too far
        if (dist > cfg.visionRange * 1.5) {
          this.fsm.changeState('Patrol');
        }
      }
    });

    // --- TELEGRAPH (WINDUP) ---
    this.fsm.addState('Telegraph', {
      enter: () => {
        this.velocity.x = 0;
        this.stateTimer = cfg.attackTelegraph;
        this.spearTipMat.color.setHex(0xffffff); // glint flash
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;

        // Pull spear back in anticipation
        const progress = 1.0 - (this.stateTimer / cfg.attackTelegraph);
        this.spearGroup.position.x = 0.3 - progress * 0.6;
        this.spearGroup.rotation.z = Math.sin(progress * Math.PI) * 0.15;

        if (this.stateTimer <= 0) {
          this.fsm.changeState('Thrust');
        }
      }
    });

    // --- THRUST ---
    this.fsm.addState('Thrust', {
      enter: () => {
        this.stateTimer = cfg.attackDuration;
        this.attackHitbox.activate();
        this.spearTipMat.color.setHex(0xb8292f); // vermilion spear thrust
        this.velocity.x = this.facing * 3.5; // slight forward step
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;

        // Spear lunges forward
        const progress = 1.0 - (this.stateTimer / cfg.attackDuration);
        this.spearGroup.position.x = 0.3 + Math.sin(progress * Math.PI) * 0.8;

        if (this.stateTimer <= 0) {
          this.attackHitbox.deactivate();
          this.fsm.changeState('Recovery');
        }
      }
    });

    // --- RECOVERY ---
    this.fsm.addState('Recovery', {
      enter: () => {
        this.stateTimer = cfg.attackRecovery;
        this.velocity.x = 0;
        this.spearTipMat.color.setHex(0x5c5b57);
      },
      fixedUpdate: (dt, player) => {
        this.stateTimer -= dt;
        this.spearGroup.position.x = 0.3;
        this.spearGroup.rotation.z = 0;

        if (this.stateTimer <= 0) {
          if (player && this.canSeePlayer(player)) {
            this.fsm.changeState('Alert');
          } else {
            this.fsm.changeState('Patrol');
          }
        }
      }
    });

    // --- STAGGERED (PARRY BREAK) ---
    this.fsm.addState('Staggered', {
      enter: () => {
        this.isStaggered = true;
        this.attackHitbox.deactivate();
        this.alertSprite.material.opacity = 0;
        this.spearGroup.rotation.z = -Math.PI * 0.4; // spear dropped to ground
        this.bodyMesh.rotation.z = -0.3; // leaning back dazed
      },
      fixedUpdate: (dt) => {
        this.staggerTimer -= dt;
        this.velocity.x *= 0.85;

        // Flashing vermilion weak state
        const isBlink = Math.floor(performance.now() / 90) % 2 === 0;
        this.bodyMat.color.setHex(isBlink ? 0xb8292f : 0x5c5b57);

        if (this.staggerTimer <= 0) {
          this.isStaggered = false;
          this.bodyMesh.rotation.z = 0;
          this.spearGroup.rotation.z = 0;
          this.bodyMat.color.setHex(CONFIG.PALETTE.inkMid);
          this.fsm.changeState('Recovery');
        }
      }
    });

    // --- HURT ---
    this.fsm.addState('Hurt', {
      enter: () => {
        this.stateTimer = 0.22;
        this.attackHitbox.deactivate();
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        this.velocity.x *= 0.9;

        if (this.stateTimer <= 0) {
          if (this.isStaggered) {
            this.fsm.changeState('Staggered');
          } else {
            this.fsm.changeState('Alert');
          }
        }
      }
    });

    // --- DEAD ---
    this.fsm.addState('Dead', {
      enter: () => {
        this.isDead = true;
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

  canSeePlayer(player) {
    if (!player || player.health <= 0) return false;
    const cfg = CONFIG.ENEMIES.ashigaru;

    const dx = player.aabb.x - this.aabb.x;
    const dy = player.aabb.y - this.aabb.y;
    const dist = Math.hypot(dx, dy);

    if (dist > cfg.visionRange) return false;

    // Check facing direction
    if ((this.facing > 0 && dx < 0) || (this.facing < 0 && dx > 0)) {
      return false; // Player is behind
    }

    // Check angle within cone
    const angleRad = Math.atan2(Math.abs(dy), Math.abs(dx));
    const maxAngleRad = (cfg.visionAngleDeg * Math.PI) / 180;
    return angleRad <= maxAngleRad;
  }

  stagger(duration = 1.2) {
    this.staggerTimer = duration;
    this.fsm.changeState('Staggered');
  }

  takeDamage(amount = 1, isInstantKill = false, attackerX = 0) {
    if (this.isDead) return;

    this.hp -= amount;

    // Knockback
    const kx = this.aabb.x >= attackerX ? 1 : -1;
    this.velocity.x = kx * (isInstantKill ? 6.0 : 4.0);
    this.velocity.y = 3.0;

    if (this.hp <= 0 || isInstantKill) {
      this.fsm.changeState('Dead');
    } else {
      this.fsm.changeState('Hurt');
    }
  }

  fixedUpdate(dt, player) {
    if (this.isDead) return;

    // Gravity
    const g = this.velocity.y > 0 ? CONFIG.PLAYER.gravityRising : CONFIG.PLAYER.gravityFalling;
    this.velocity.y += g * dt;
    if (this.velocity.y < CONFIG.PLAYER.maxFallSpeed) {
      this.velocity.y = CONFIG.PLAYER.maxFallSpeed;
    }

    // FSM update
    this.fsm.fixedUpdate(dt, player);

    // Collision move & slide
    const col = this.collision.moveAndSlide(this.aabb, this.velocity, dt, false);
    if (col.grounded) {
      this.velocity.y = 0;
    }

    // Update Hitboxes
    this.hurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
    this.attackHitbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render(alpha) {
    if (this.isDead) return;

    this.meshGroup.position.x = this.aabb.x;
    this.meshGroup.position.y = this.aabb.y;

    // Flip mesh based on facing
    this.meshGroup.scale.x = this.facing;
  }

  dispose() {
    this.hurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.meshGroup.clear();
    this.scene.remove(this.meshGroup);
  }
}
