// Kurogane, the Gatekeeper — Colossal 3-Phase Boss with Telegraphed Attacks, Vulnerable Windows & Sumi-e Dissolve

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { StateMachine } from '../core/StateMachine.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { createSumieMaterial, addInkOutline } from '../render/SumieMaterial.js';

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
    const bottomY = -cfg.height * 0.5; // -2.4

    const armorMat = createSumieMaterial({
      inkDark: 0x111110,
      inkMid: 0x2c2b28,
      inkLight: 0x5d5b54,
      noiseScale: 6.5,
      darkBias: 0.20,
    });

    const plateMat = createSumieMaterial({
      inkDark: 0x191816,
      inkMid: 0x45433e,
      inkLight: 0x7c7970,
      noiseScale: 5.5,
      darkBias: 0.08,
    });

    // 1. Armored Legs, Hakama & Greaves (Planted at bottomY = -2.4)
    const buildBossLeg = (zOffset, strideX) => {
      const legGrp = new THREE.Group();
      legGrp.position.set(strideX, bottomY + 1.85, zOffset);

      // Hakama thigh
      const thighGeo = new THREE.CylinderGeometry(0.45, 0.56, 1.0, 10);
      const thigh = new THREE.Mesh(thighGeo, armorMat);
      thigh.position.y = -0.45;
      addInkOutline(thigh, 0.048);
      legGrp.add(thigh);

      // Demon knee guard
      const kneeGeo = new THREE.SphereGeometry(0.34, 8, 8);
      const knee = new THREE.Mesh(kneeGeo, plateMat);
      knee.position.set(0.18, -0.92, 0);
      addInkOutline(knee, 0.04);
      legGrp.add(knee);

      // Suneate Armored Shin Greave
      const shinGeo = new THREE.CylinderGeometry(0.32, 0.24, 0.9, 10);
      const shin = new THREE.Mesh(shinGeo, plateMat);
      shin.position.y = -1.35;
      addInkOutline(shin, 0.042);
      legGrp.add(shin);

      // Armored War Boot
      const footGeo = new THREE.BoxGeometry(0.75, 0.24, 0.42);
      const foot = new THREE.Mesh(footGeo, armorMat);
      foot.position.set(0.16, -1.78, 0);
      addInkOutline(foot, 0.04);
      legGrp.add(foot);

      this.meshGroup.add(legGrp);
      return legGrp;
    };

    this.leftLeg = buildBossLeg(-0.42, -0.25);
    this.rightLeg = buildBossLeg(0.42, 0.30);

    // 2. Torso & Ō-yoroi Lamellar Chest Armor
    const torsoGeo = new THREE.CylinderGeometry(0.92, 0.78, 1.75, 12);
    this.torso = new THREE.Mesh(torsoGeo, armorMat);
    this.torso.position.y = 0.32;
    this.torso.castShadow = true;
    addInkOutline(this.torso, 0.055);
    this.meshGroup.add(this.torso);

    // Kusazuri (Armored Waist Tasset Skirt Plates)
    for (let i = -1; i <= 1; i++) {
      const tassetGeo = new THREE.BoxGeometry(0.55, 0.95, 1.45);
      const tasset = new THREE.Mesh(tassetGeo, plateMat);
      tasset.position.set(i * 0.44, -0.65, 0);
      tasset.rotation.z = i * 0.16;
      addInkOutline(tasset, 0.042);
      this.meshGroup.add(tasset);
    }

    // 3. Demon Lion Shoulder Pauldrons (Sode) & Armored Arms
    const buildShoulderAndArm = (zSign) => {
      const sodeGrp = new THREE.Group();
      sodeGrp.position.set(0, 1.05, zSign * 0.85);

      const sodeGeo = new THREE.BoxGeometry(0.95, 0.85, 0.45);
      const sode = new THREE.Mesh(sodeGeo, plateMat);
      sode.rotation.x = zSign * 0.25;
      addInkOutline(sode, 0.048);
      sodeGrp.add(sode);

      // Forearm gauntlet
      const armGeo = new THREE.CylinderGeometry(0.28, 0.24, 1.25, 8);
      const arm = new THREE.Mesh(armGeo, armorMat);
      arm.position.set(0.28, -0.65, zSign * 0.1);
      arm.rotation.z = 0.35;
      addInkOutline(arm, 0.04);
      sodeGrp.add(arm);

      this.meshGroup.add(sodeGrp);
    };
    buildShoulderAndArm(-1);
    buildShoulderAndArm(1);

    // 4. Tattered Sumi-e War Cape (Billowing behind Kurogane as in boss_arena.jpg)
    const capeGeo = new THREE.ConeGeometry(1.4, 3.4, 7, 1, true);
    const capeMat = createSumieMaterial({
      inkDark: 0x0e0e0d,
      inkMid: 0x22211e,
      inkLight: 0x3d3b36,
      darkBias: 0.35,
    });
    const cape = new THREE.Mesh(capeGeo, capeMat);
    cape.position.set(-1.15, -0.1, 0);
    cape.rotation.z = -0.52;
    addInkOutline(cape, 0.048);
    this.meshGroup.add(cape);

    // 5. Kabuto Helmet, Shikoro Neck Guard & Crescent Moon Horns (Maedate)
    const helmetGeo = new THREE.ConeGeometry(0.95, 1.05, 10);
    this.helmet = new THREE.Mesh(helmetGeo, armorMat);
    this.helmet.position.set(0.08, 1.65, 0);
    this.helmet.castShadow = true;
    addInkOutline(this.helmet, 0.048);
    this.meshGroup.add(this.helmet);

    // Crescent Horns (Maedate)
    const hornGeo = new THREE.TorusGeometry(0.92, 0.09, 6, 16, Math.PI * 0.85);
    hornGeo.rotateZ(-Math.PI * 0.35);
    this.horns = new THREE.Mesh(hornGeo, plateMat);
    this.horns.position.set(0.35, 2.15, 0);
    addInkOutline(this.horns, 0.036);
    this.meshGroup.add(this.horns);

    // Menpō Demon Mask
    const maskGeo = new THREE.BoxGeometry(0.68, 0.58, 0.65);
    this.mask = new THREE.Mesh(maskGeo, armorMat);
    this.mask.position.set(0.32, 1.32, 0);
    addInkOutline(this.mask, 0.038);
    this.meshGroup.add(this.mask);

    // 6. Weak Point Back Plate (Glowing Vermilion Crack)
    const weakGeo = new THREE.BoxGeometry(0.28, 0.95, 0.85);
    this.weakMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
    });
    this.weakMesh = new THREE.Mesh(weakGeo, this.weakMat);
    this.weakMesh.position.set(-cfg.width * 0.42, 0.35, 0);
    this.meshGroup.add(this.weakMesh);

    // 7. Colossal Curved Nodachi Blade Dripping Black Ink (matching boss_arena.jpg!)
    this.swordGroup = new THREE.Group();
    this.swordGroup.position.set(0.55, 0.15, 0.72);
    this.swordGroup.rotation.z = -0.26; // Menacing low-angled forward stance

    // Long hilt (Tsuka) & guard (Tsuba)
    const hiltGeo = new THREE.CylinderGeometry(0.11, 0.10, 1.5, 8);
    hiltGeo.rotateZ(Math.PI / 2);
    const hilt = new THREE.Mesh(hiltGeo, armorMat);
    hilt.position.x = -0.45;
    addInkOutline(hilt, 0.035);
    this.swordGroup.add(hilt);

    const guardGeo = new THREE.BoxGeometry(0.14, 0.65, 0.55);
    const guard = new THREE.Mesh(guardGeo, plateMat);
    guard.position.x = 0.28;
    addInkOutline(guard, 0.035);
    this.swordGroup.add(guard);

    // Massive Ink-Stained Curved Blade
    const bladeGeo = new THREE.BoxGeometry(4.8, 0.32, 0.09);
    const blade = new THREE.Mesh(bladeGeo, plateMat);
    blade.position.x = 2.65;
    blade.castShadow = true;
    addInkOutline(blade, 0.045);
    this.swordGroup.add(blade);

    // Dripping Black Sumi-e Ink Stalactites Hanging off the Nodachi Blade (as in boss_arena.jpg!)
    const dripMat = new THREE.MeshBasicMaterial({ color: 0x111110 });
    const dripPositions = [1.4, 2.05, 2.7, 3.35, 4.0, 4.6];
    dripPositions.forEach((dx, idx) => {
      const dripLen = 0.45 + (idx % 3) * 0.38;
      const dripGeo = new THREE.ConeGeometry(0.065, dripLen, 6);
      dripGeo.rotateX(Math.PI); // Point downward
      const drip = new THREE.Mesh(dripGeo, dripMat);
      drip.position.set(dx, -0.16 - dripLen * 0.45, 0);
      this.swordGroup.add(drip);
    });

    // Dripping Tar Tip (Vermilion/Ink edge)
    const tipGeo = new THREE.ConeGeometry(0.22, 0.9, 5);
    tipGeo.rotateZ(-Math.PI / 2);
    this.tipMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(CONFIG.PALETTE.inkDark) });
    const tip = new THREE.Mesh(tipGeo, this.tipMat);
    tip.position.x = 5.25;
    addInkOutline(tip, 0.04);
    this.swordGroup.add(tip);

    this.meshGroup.add(this.swordGroup);
  }

  setupFSM() {
    const cfg = CONFIG.BOSS;

    // --- DORMANT (WAITING FOR PLAYER ARENA ENTRY) ---
    this.fsm.addState('Dormant', {
      enter: () => {
        this.aabb.y = this.groundY + 5.5; // Perched up on Torii
        this.meshGroup.position.y = this.groundY + 5.5;
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
        this.stateTimer = 2.0;
        this.velocity.y = -45.0; // Fast thunderous drop from Torii crossbar
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
