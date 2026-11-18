// Kurogane, the Gatekeeper — Colossal 3-Phase Boss with Telegraphed Attacks, Vulnerable Windows & Sumi-e Dissolve

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { StateMachine } from '../core/StateMachine.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';

export class Kurogane {
  constructor({ scene, collision, inkSplash, shockwaves, x = 260, y = 50 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.shockwaves = shockwaves;

    const cfg = CONFIG.BOSS;
    this.aabb = new AABB(x, y + cfg.height * 0.5, cfg.width, cfg.height);
    this.velocity = { x: 0, y: 0 };
    this.facing = -1; // 1 = right, -1 = left

    this.arenaMinX = 243.0;
    this.arenaMaxX = 277.0;
    this.groundY = y;

    // Vitals & Phase State
    this.maxHp = cfg.hpMax;
    this.hp = this.maxHp;
    this.phase = 1; // 1 (100-60%), 2 (60-25%), 3 (<25%)
    this.isDead = false;
    this.isVulnerable = false;
    this.isStaggered = false;
    this.canBeParried = false;

    // AI & Decision Timers
    this.stateTimer = 0;
    this.decisionTimer = 1.0;
    this.farDistanceTimer = 0;
    this.vulnerableTimer = 0;
    this.staggerTimer = 0;

    // Hitboxes
    // 1. Armored Body Hurtbox (protected / clink outside vulnerable windows)
    this.bodyHurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: cfg.width * 0.9,
      height: cfg.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.bodyHurtbox.activate();
    combatManager.registerEnemyHurtbox(this.bodyHurtbox);

    // 2. Nodachi Blade Attack Hitbox
    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: 4.5,
      height: 1.8,
      offsetX: 2.5,
      offsetY: 0,
      damage: 1,
    });
    combatManager.registerEnemyAttack(this.attackHitbox);

    // 3D Procedural Mesh Hierarchy
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);

    this.buildBossModel();
    this.scene.add(this.meshGroup);

    // Boss State Machine
    this.fsm = new StateMachine(this, 'Dormant');
    this.setupFSM();
    this.fsm.changeState('Dormant');
  }

  buildBossModel() {
    const cfg = CONFIG.BOSS;

    const armorMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.6,
      metalness: 0.3,
    });

    const plateMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkMid),
      roughness: 0.7,
    });

    // 1. Torso & Ō-yoroi chest plates
    const torsoGeo = new THREE.BoxGeometry(cfg.width * 0.75, cfg.height * 0.45, 1.2);
    this.torso = new THREE.Mesh(torsoGeo, armorMat);
    this.torso.position.y = 0.2;
    this.torso.castShadow = true;
    this.meshGroup.add(this.torso);

    // 2. Kabuto Helmet & Crescent Moon Horns (Maedate)
    const helmetGeo = new THREE.CylinderGeometry(0.8, 1.1, 1.0, 8);
    this.helmet = new THREE.Mesh(helmetGeo, armorMat);
    this.helmet.position.y = cfg.height * 0.5 - 0.2;
    this.helmet.castShadow = true;
    this.meshGroup.add(this.helmet);

    // Horns (crescent curve)
    const hornGeo = new THREE.TorusGeometry(1.2, 0.08, 6, 16, Math.PI * 0.8);
    hornGeo.rotateZ(-Math.PI * 0.4);
    const hornMat = new THREE.MeshStandardMaterial({
      color: 0x2b2824,
      roughness: 0.4,
      metalness: 0.6,
    });
    this.horns = new THREE.Mesh(hornGeo, hornMat);
    this.horns.position.set(0.1, cfg.height * 0.5 + 0.5, 0.3);
    this.meshGroup.add(this.horns);

    // Menpō Demon Mask (dark with glint)
    const maskGeo = new THREE.BoxGeometry(0.7, 0.6, 0.5);
    const maskMat = new THREE.MeshStandardMaterial({ color: 0x141413, roughness: 0.5 });
    this.mask = new THREE.Mesh(maskGeo, maskMat);
    this.mask.position.set(0.4, cfg.height * 0.5 - 0.4, 0);
    this.meshGroup.add(this.mask);

    // 3. Weak Point Back Plate (Glowing Vermilion Crack)
    const weakGeo = new THREE.BoxGeometry(0.2, 0.8, 0.7);
    this.weakMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
    });
    this.weakMesh = new THREE.Mesh(weakGeo, this.weakMat);
    this.weakMesh.position.set(-cfg.width * 0.4, 0.3, 0);
    this.meshGroup.add(this.weakMesh);

    // 4. Nodachi Blade (Massive 5.5-unit katana dripping tar)
    this.swordGroup = new THREE.Group();
    this.swordGroup.position.set(0.6, 0.2, 0.7);

    // Long curved blade
    const bladeGeo = new THREE.BoxGeometry(5.2, 0.22, 0.08);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x1f1d1a,
      roughness: 0.3,
      metalness: 0.7,
    });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.x = 2.6;
    blade.castShadow = true;
    this.swordGroup.add(blade);

    // Dripping Tar Tip (Vermilion edge)
    const tipGeo = new THREE.ConeGeometry(0.16, 0.8, 4);
    tipGeo.rotateZ(-Math.PI / 2);
    this.tipMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(CONFIG.PALETTE.inkDark) });
    const tip = new THREE.Mesh(tipGeo, this.tipMat);
    tip.position.x = 5.3;
    this.swordGroup.add(tip);

    this.meshGroup.add(this.swordGroup);
  }

  setupFSM() {
    const cfg = CONFIG.BOSS;

    // --- DORMANT (WAITING FOR PLAYER ARENA ENTRY) ---
    this.fsm.addState('Dormant', {
      enter: () => {
        this.aabb.y = this.groundY + 16.0; // Perched up on Torii
        this.meshGroup.position.y = this.groundY + 16.0;
        this.attackHitbox.deactivate();
      },
      fixedUpdate: (dt, player) => {
        // Player crosses into boss arena threshold (x >= 246)
        if (player && player.aabb.x >= 246) {
          this.fsm.changeState('Intro');
        }
      }
    });

    // --- INTRO CINEMATIC (LEAP FROM TORII, SHOCKWAVE, ROAR) ---
    this.fsm.addState('Intro', {
      enter: () => {
        this.stateTimer = 3.5;
        this.velocity.y = -22.0; // Drop from Torii crossbar
        events.emit('boss_intro_start', { name: cfg.name });
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;

        // Falling down
        if (this.aabb.y > this.groundY + cfg.height * 0.5) {
          this.aabb.y += this.velocity.y * dt;
          if (this.aabb.y <= this.groundY + cfg.height * 0.5) {
            this.aabb.y = this.groundY + cfg.height * 0.5;
            this.velocity.y = 0;

            // LANDING IMPACT!
            events.emit('camera_shake', { amount: 0.65 });
            this.shockwaves.spawnRingShockwave(this.aabb.x, this.groundY);
            if (this.inkSplash) {
              this.inkSplash.spawnHitImpact(this.aabb.x, this.groundY, 1, 24, true);
              this.inkSplash.spawnHitImpact(this.aabb.x, this.groundY, -1, 24, true);
            }
          }
        }

        if (this.stateTimer <= 0) {
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- DECIDE NEXT ACTION ---
    this.fsm.addState('Decide', {
      enter: () => {
        this.decisionTimer = this.phase === 3 ? 0.35 : 0.65;
        this.isVulnerable = false;
        this.canBeParried = false;
        this.attackHitbox.deactivate();
      },
      fixedUpdate: (dt, player) => {
        if (!player || player.health <= 0) return;

        this.decisionTimer -= dt;
        this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;

        const dist = Math.abs(player.aabb.x - this.aabb.x);

        // Track how long player camps far away
        if (dist > 9.0) {
          this.farDistanceTimer += dt;
        } else {
          this.farDistanceTimer = 0;
        }

        if (this.decisionTimer <= 0) {
          // If player is far away for > 2.5s, execute Shoulder Charge
          if (this.farDistanceTimer >= 2.5) {
            this.farDistanceTimer = 0;
            this.fsm.changeState('Telegraph_Charge');
            return;
          }

          // In Phase 2 & 3: Chance to execute Crossbar Leap
          if (this.phase >= 2 && Math.random() < 0.30) {
            this.fsm.changeState('CrossbarLeap');
            return;
          }

          // Otherwise alternate between Ink Sweep and Heavy Slam
          if (Math.random() < 0.55) {
            this.fsm.changeState('Telegraph_Sweep');
          } else {
            this.fsm.changeState('Telegraph_Slam');
          }
        }
      }
    });

    // --- TELEGRAPH SWEEP (0.7s) ---
    this.fsm.addState('Telegraph_Sweep', {
      enter: () => {
        const speedMod = this.phase >= 2 ? 0.85 : 1.0;
        this.stateTimer = 0.7 * speedMod;
        this.swordGroup.rotation.z = 0.8; // Pull blade back horizontally
        this.tipMat.color.setHex(0xb8292f); // Vermilion drip telegraph
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.stateTimer <= 0) {
          this.fsm.changeState('Action_Sweep');
        }
      }
    });

    // --- ACTION SWEEP ---
    this.fsm.addState('Action_Sweep', {
      enter: () => {
        this.stateTimer = 0.3;
        this.attackHitbox.damage = 1;
        this.attackHitbox.activate();

        // Phase 3 allows parrying the sweep!
        if (this.phase === 3) {
          this.canBeParried = true;
        }

        // Spawn floor traveling ink wave
        this.shockwaves.spawnFloorWave(
          this.aabb.x + this.facing * 1.5,
          this.groundY,
          this.facing,
          cfg.sweepSpeed
        );

        if (this.phase >= 2) {
          // Phase 2 Triple Wave: secondary low/high staggered waves
          setTimeout(() => {
            if (!this.isDead) {
              this.shockwaves.spawnFloorWave(this.aabb.x + this.facing * 2.0, this.groundY, this.facing, cfg.sweepSpeed * 1.1);
            }
          }, 180);
        }

        // Forward swing animation
        this.swordGroup.rotation.z = -0.5;
        events.emit('camera_shake', { amount: 0.25 });
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.stateTimer <= 0) {
          this.attackHitbox.deactivate();
          this.canBeParried = false;
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- TELEGRAPH SLAM (0.9s) ---
    this.fsm.addState('Telegraph_Slam', {
      enter: () => {
        const speedMod = this.phase >= 2 ? 0.85 : 1.0;
        this.stateTimer = 0.9 * speedMod;
        this.swordGroup.rotation.z = Math.PI * 0.7; // Raise blade vertically high
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.stateTimer <= 0) {
          this.fsm.changeState('Action_Slam');
        }
      }
    });

    // --- ACTION SLAM (EMBEDS IN STONE FOR 1.6s VULNERABLE WINDOW!) ---
    this.fsm.addState('Action_Slam', {
      enter: () => {
        this.vulnerableTimer = cfg.slamEmbedDuration;
        this.isVulnerable = true;
        this.attackHitbox.damage = 2;
        this.attackHitbox.activate();

        // Nodachi slams down into floor
        this.swordGroup.rotation.z = -Math.PI * 0.45;
        this.swordGroup.position.set(1.2, -0.6, 0.7);

        // Ground impact & camera shake
        events.emit('camera_shake', { amount: 0.55 });
        if (this.inkSplash) {
          this.inkSplash.spawnHitImpact(this.aabb.x + this.facing * 2.0, this.groundY, 1, 20, true);
        }

        // Phase 3 leaves persistent damaging tar puddle
        if (this.phase === 3) {
          this.shockwaves.spawnPuddle(this.aabb.x + this.facing * 2.0, this.groundY);
        }
      },
      fixedUpdate: (dt) => {
        this.vulnerableTimer -= dt;

        // Weak point glows vermilion
        const isBlink = Math.floor(performance.now() / 80) % 2 === 0;
        this.weakMat.color.setHex(isBlink ? 0xb8292f : 0x141413);

        // Attack hitbox only active for initial 0.15s slam
        if (this.vulnerableTimer <= cfg.slamEmbedDuration - 0.15) {
          this.attackHitbox.deactivate();
        }

        // Vulnerable embed duration finishes
        if (this.vulnerableTimer <= 0) {
          this.isVulnerable = false;
          this.weakMat.color.setHex(0x141413);
          this.swordGroup.position.set(0.6, 0.2, 0.7);
          this.swordGroup.rotation.z = 0;
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- TELEGRAPH SHOULDER CHARGE (0.5s) ---
    this.fsm.addState('Telegraph_Charge', {
      enter: () => {
        this.stateTimer = 0.5;
        this.torso.rotation.z = this.facing * 0.2; // Bracing stance
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.stateTimer <= 0) {
          this.fsm.changeState('Action_Charge');
        }
      }
    });

    // --- ACTION CHARGE ---
    this.fsm.addState('Action_Charge', {
      enter: () => {
        this.stateTimer = 0.8;
        this.attackHitbox.damage = 1;
        this.attackHitbox.activate();
        this.velocity.x = this.facing * cfg.chargeSpeed;
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        this.aabb.x += this.velocity.x * dt;

        // Check arena boundaries
        if (this.aabb.x <= this.arenaMinX + 2.0 || this.aabb.x >= this.arenaMaxX - 2.0) {
          this.stateTimer = 0;
        }

        if (this.stateTimer <= 0) {
          this.attackHitbox.deactivate();
          this.velocity.x = 0;
          this.torso.rotation.z = 0;
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- CROSSBAR LEAP (PHASE 2 & 3) ---
    this.fsm.addState('CrossbarLeap', {
      enter: () => {
        this.stateTimer = 1.0; // Hang time at Torii crossbar
        this.aabb.y = this.groundY + 14.0;
        this.velocity.y = 0;
        this.attackHitbox.deactivate();
        events.emit('camera_shake', { amount: 0.2 });
      },
      fixedUpdate: (dt, player) => {
        this.stateTimer -= dt;

        // Target player's X while hanging
        if (player) {
          this.aabb.x += (player.aabb.x - this.aabb.x) * 0.08;
        }

        if (this.stateTimer <= 0) {
          this.fsm.changeState('CrossbarSlam');
        }
      }
    });

    // --- CROSSBAR SLAM DOWN ---
    this.fsm.addState('CrossbarSlam', {
      enter: () => {
        this.velocity.y = -28.0;
        this.attackHitbox.damage = 2;
        this.attackHitbox.activate();
      },
      fixedUpdate: (dt) => {
        this.aabb.y += this.velocity.y * dt;

        if (this.aabb.y <= this.groundY + cfg.height * 0.5) {
          this.aabb.y = this.groundY + cfg.height * 0.5;
          this.velocity.y = 0;
          this.attackHitbox.deactivate();

          // Radial 360 ring shockwave on landing
          events.emit('camera_shake', { amount: 0.6 });
          this.shockwaves.spawnRingShockwave(this.aabb.x, this.groundY);

          // Vulnerable recovery after slam
          this.vulnerableTimer = 1.2;
          this.isVulnerable = true;
          this.fsm.changeState('CrossbarRecovery');
        }
      }
    });

    // --- CROSSBAR RECOVERY (VULNERABLE WINDOW) ---
    this.fsm.addState('CrossbarRecovery', {
      enter: () => {
        this.weakMat.color.setHex(0xb8292f);
      },
      fixedUpdate: (dt) => {
        this.vulnerableTimer -= dt;
        const isBlink = Math.floor(performance.now() / 80) % 2 === 0;
        this.weakMat.color.setHex(isBlink ? 0xb8292f : 0x141413);

        if (this.vulnerableTimer <= 0) {
          this.isVulnerable = false;
          this.weakMat.color.setHex(0x141413);
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- STAGGERED (PARRY BREAK IN PHASE 3) ---
    this.fsm.addState('Staggered', {
      enter: () => {
        this.isStaggered = true;
        this.isVulnerable = true;
        this.staggerTimer = cfg.staggerDuration; // 2.0s
        this.attackHitbox.deactivate();
        this.weakMat.color.setHex(0xb8292f);
        this.swordGroup.rotation.z = -Math.PI * 0.5;
        this.torso.rotation.z = -0.3;
      },
      fixedUpdate: (dt) => {
        this.staggerTimer -= dt;
        const isBlink = Math.floor(performance.now() / 70) % 2 === 0;
        this.weakMat.color.setHex(isBlink ? 0xb8292f : 0x141413);

        if (this.staggerTimer <= 0) {
          this.isStaggered = false;
          this.isVulnerable = false;
          this.weakMat.color.setHex(0x141413);
          this.torso.rotation.z = 0;
          this.swordGroup.rotation.z = 0;
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- PHASE TRANSITION (ROAR & BURST) ---
    this.fsm.addState('PhaseTransition', {
      enter: () => {
        this.stateTimer = 1.4;
        this.attackHitbox.deactivate();
        events.emit('camera_shake', { amount: 0.5 });
        if (this.inkSplash) {
          this.inkSplash.spawnParryBurst(this.aabb.x, this.aabb.y, true);
        }
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        if (this.stateTimer <= 0) {
          this.fsm.changeState('Decide');
        }
      }
    });

    // --- DYING (SLOW-MO, ARMOR CRACK, INK SMOKE DISSOLVE, SCROLL DROP) ---
    this.fsm.addState('Dying', {
      enter: () => {
        this.isDead = true;
        this.bodyHurtbox.deactivate();
        this.attackHitbox.deactivate();
        combatManager.unregisterEntity(this);

        this.stateTimer = 3.0;

        // Heavy ink smoke dissolve
        if (this.inkSplash) {
          this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, cfg.width, cfg.height);
          this.inkSplash.spawnBackstabBurst(this.aabb.x, this.aabb.y);
        }

        events.emit('boss_defeated', { boss: this });
      },
      fixedUpdate: (dt) => {
        this.stateTimer -= dt;
        this.meshGroup.position.y -= dt * 0.6; // crumbling sink

        if (this.stateTimer <= 0) {
          this.meshGroup.visible = false;
          this.fsm.changeState('Dead');
        }
      }
    });

    this.fsm.addState('Dead', {
      fixedUpdate: () => {}
    });
  }

  // --- Take Damage Interaction ---
  takeDamage(amount = 1, isWeakPoint = false, attackerX = 0) {
    if (this.isDead || this.fsm.isInState('Intro') || this.fsm.isInState('PhaseTransition')) {
      return;
    }

    // Check if hit was during a vulnerable window
    if (!this.isVulnerable && !isWeakPoint) {
      // Clink protection! Armored shell blocks basic hits
      if (this.inkSplash) {
        this.inkSplash.spawnHitImpact(attackerX, this.aabb.y, this.facing, 4, false);
      }
      events.emit('boss_clink');
      return;
    }

    // Damage calculation: Weak point hit does x2 damage
    const mult = (this.isVulnerable || isWeakPoint) ? CONFIG.BOSS.weakPointMultiplier : 1.0;
    const finalDamage = amount * mult;
    this.hp = Math.max(0, this.hp - finalDamage);

    events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });

    // Check Death
    if (this.hp <= 0) {
      this.fsm.changeState('Dying');
      return;
    }

    // Check Phase Transitions
    const hpRatio = this.hp / this.maxHp;
    if (this.phase === 1 && hpRatio <= 0.60) {
      this.phase = 2;
      this.fsm.changeState('PhaseTransition');
    } else if (this.phase === 2 && hpRatio <= 0.25) {
      this.phase = 3;
      this.fsm.changeState('PhaseTransition');
    }
  }

  // Triggered when player parries Sweep in Phase 3
  stagger(duration = 2.0) {
    if (this.phase === 3 && this.canBeParried) {
      this.fsm.changeState('Staggered');
    }
  }

  fixedUpdate(dt, player) {
    if (this.isDead) return;

    this.fsm.fixedUpdate(dt, player);

    // Update Hitboxes
    this.bodyHurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
    this.attackHitbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render(alpha) {
    if (this.isDead && this.fsm.isInState('Dead')) return;

    this.meshGroup.position.x = this.aabb.x;
    this.meshGroup.position.y = this.aabb.y;
    this.meshGroup.scale.x = this.facing;
  }

  dispose() {
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.meshGroup.clear();
    this.scene.remove(this.meshGroup);
  }
}
