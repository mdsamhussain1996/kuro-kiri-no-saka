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
    this.retriesInPhase = 0;
    this.isDead = false;

    events.on('player:respawn', () => {
      if (this.isDead || this.fsm.isInState('Dormant')) return;
      this.attackHitbox.deactivate();
      this.isVulnerable = false;
      this.isStaggered = false;
      this.retriesInPhase++;
      if (this.retriesInPhase <= 2 && this.phase > 1) {
        this.hp = this.phase === 3 ? Math.ceil(this.maxHp * 0.25) : Math.ceil(this.maxHp * 0.6);
      } else {
        this.phase = 1;
        this.hp = this.maxHp;
        this.retriesInPhase = 0;
      }
      events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });
      // Back to the Torii: walking into the arena again replays the intro and re-locks the walls
      this.fsm.changeState('Dormant');
    });
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

    // 2. Nodachi Blade Attack Hitbox (covers ground level + close range)
    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: 5.2,
      height: 3.2,
      offsetX: 1.6,
      offsetY: -0.9,
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
      noiseScale: 2.2,
      darkBias: 0.14,
    });

    const plateMat = createSumieMaterial({
      inkDark: 0x191816,
      inkMid: 0x484640,
      inkLight: 0x858278,
      noiseScale: 2.0,
      darkBias: 0.04,
    });

    // 1. Armored Legs, Pleated Hakama & Suneate Greaves (Planted at bottomY = -2.4)
    const buildBossLeg = (zOffset, strideX) => {
      const legGrp = new THREE.Group();
      legGrp.position.set(strideX, bottomY + 1.85, zOffset);

      // Pleated Hakama Thigh
      const thighGeo = new THREE.CylinderGeometry(0.42, 0.54, 1.0, 12);
      const thigh = new THREE.Mesh(thighGeo, armorMat);
      thigh.position.y = -0.45;
      addInkOutline(thigh, 0.036);
      legGrp.add(thigh);

      // Sculpted Knee Guard (Tate-age)
      const kneeGeo = new THREE.SphereGeometry(0.30, 10, 10);
      const knee = new THREE.Mesh(kneeGeo, plateMat);
      knee.position.set(0.16, -0.92, 0);
      addInkOutline(knee, 0.03);
      legGrp.add(knee);

      // Suneate Splint Shin Greave
      const shinGeo = new THREE.CylinderGeometry(0.28, 0.21, 0.9, 12);
      const shin = new THREE.Mesh(shinGeo, plateMat);
      shin.position.y = -1.35;
      addInkOutline(shin, 0.032);
      legGrp.add(shin);

      // Waraji & Tabi Armored Foot
      const footGeo = new THREE.BoxGeometry(0.72, 0.22, 0.38);
      const foot = new THREE.Mesh(footGeo, armorMat);
      foot.position.set(0.16, -1.78, 0);
      addInkOutline(foot, 0.03);
      legGrp.add(foot);

      this.meshGroup.add(legGrp);
      return legGrp;
    };

    this.leftLeg = buildBossLeg(-0.40, -0.24);
    this.rightLeg = buildBossLeg(0.40, 0.28);

    // 2. Torso & Multi-Tiered Ō-yoroi Lamellar Cuirass (Dō)
    this.torso = new THREE.Group();
    this.torso.position.y = 0.32;
    this.meshGroup.add(this.torso);

    const chestCoreGeo = new THREE.CylinderGeometry(0.88, 0.74, 1.65, 14);
    const chestCore = new THREE.Mesh(chestCoreGeo, armorMat);
    chestCore.castShadow = true;
    addInkOutline(chestCore, 0.042);
    this.torso.add(chestCore);

    // Horizontal Lamellar Armor Bands (Odoshi lacing tiers)
    for (let tier = 0; tier < 4; tier++) {
      const bandGeo = new THREE.CylinderGeometry(0.92 - tier * 0.03, 0.90 - tier * 0.03, 0.22, 14);
      const band = new THREE.Mesh(bandGeo, plateMat);
      band.position.y = 0.52 - tier * 0.34;
      addInkOutline(band, 0.028);
      this.torso.add(band);
    }

    // Kusazuri (4-Side Layered Armored Waist Tassets)
    for (let i = -1; i <= 1; i++) {
      const tassetGrp = new THREE.Group();
      tassetGrp.position.set(i * 0.42, -0.58, 0);
      tassetGrp.rotation.z = i * 0.18;

      for (let p = 0; p < 3; p++) {
        const plateGeo = new THREE.BoxGeometry(0.52, 0.28, 1.38);
        const plate = new THREE.Mesh(plateGeo, p % 2 === 0 ? plateMat : armorMat);
        plate.position.y = -p * 0.26;
        addInkOutline(plate, 0.03);
        tassetGrp.add(plate);
      }
      this.meshGroup.add(tassetGrp);
    }

    // 3. Layered Sode Shoulder Shields & Articulated Gauntlet Arms
    const buildShoulderAndArm = (zSign) => {
      const sodeGrp = new THREE.Group();
      sodeGrp.position.set(0, 1.05, zSign * 0.86);

      // 3-Tier Curved Sode Shoulder Shield
      for (let s = 0; s < 3; s++) {
        const sodePlateGeo = new THREE.BoxGeometry(0.82, 0.26, 0.28);
        const sodePlate = new THREE.Mesh(sodePlateGeo, s % 2 === 0 ? plateMat : armorMat);
        sodePlate.position.set(-0.04 * s, 0.18 - s * 0.24, zSign * s * 0.05);
        sodePlate.rotation.x = zSign * 0.28;
        addInkOutline(sodePlate, 0.032);
        sodeGrp.add(sodePlate);
      }

      // Upper arm & Kote Forearm Gauntlet reaching forward to grip Nodachi
      const upperArmGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.72, 10);
      const upperArm = new THREE.Mesh(upperArmGeo, armorMat);
      upperArm.position.set(0.18, -0.45, -zSign * 0.12);
      upperArm.rotation.z = 0.42;
      addInkOutline(upperArm, 0.03);
      sodeGrp.add(upperArm);

      const forearmGeo = new THREE.CylinderGeometry(0.21, 0.17, 0.78, 10);
      const forearm = new THREE.Mesh(forearmGeo, plateMat);
      forearm.position.set(0.56, -0.78, -zSign * 0.24);
      forearm.rotation.z = 1.05;
      addInkOutline(forearm, 0.03);
      sodeGrp.add(forearm);

      this.meshGroup.add(sodeGrp);
    };
    buildShoulderAndArm(-1);
    buildShoulderAndArm(1);

    // 4. Draped Multi-Fold Samurai War Cloak (Jinbaori / War Cape)
    const capeGeo = new THREE.CylinderGeometry(0.38, 1.35, 2.85, 12, 4, true, -Math.PI * 0.45, Math.PI * 0.9);
    const capeMat = createSumieMaterial({
      inkDark: 0x0f0f0e,
      inkMid: 0x262522,
      inkLight: 0x4a4842,
      darkBias: 0.25,
    });
    capeMat.side = THREE.DoubleSide;
    this.bossCape = new THREE.Mesh(capeGeo, capeMat);
    this.bossCape.position.set(-0.78, -0.15, 0);
    this.bossCape.rotation.z = -0.36;
    addInkOutline(this.bossCape, 0.032);
    this.meshGroup.add(this.bossCape);

    // 5. Realistic Domed Kabuto Helmet, Tiered Shikoro Neck Plates & Brow Kuwagata Horns
    this.helmet = new THREE.Group();
    this.helmet.position.set(0.08, 1.58, 0);
    this.meshGroup.add(this.helmet);

    // Domed Kabuto Hachi (Helmet Bowl)
    const domeGeo = new THREE.SphereGeometry(0.62, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.62);
    const dome = new THREE.Mesh(domeGeo, armorMat);
    dome.position.y = 0.05;
    dome.castShadow = true;
    addInkOutline(dome, 0.038);
    this.helmet.add(dome);

    // 3 Flared Shikoro Laminated Neck-Guard Plates sweeping around back/sides
    for (let k = 0; k < 3; k++) {
      const shikoroGeo = new THREE.CylinderGeometry(
        0.62 + k * 0.12,
        0.74 + k * 0.15,
        0.16,
        14,
        1,
        true,
        Math.PI * 0.35,
        Math.PI * 1.3
      );
      const shikoro = new THREE.Mesh(shikoroGeo, k % 2 === 0 ? plateMat : armorMat);
      shikoro.position.set(-0.06, -0.02 - k * 0.14, 0);
      addInkOutline(shikoro, 0.028);
      this.helmet.add(shikoro);
    }

    // Authentic Brow-Mounted Forward-Sweeping Kuwagata Crescent Crest Horns
    this.horns = new THREE.Group();
    this.horns.position.set(0.52, 0.25, 0);
    this.helmet.add(this.horns);

    for (const zSide of [-0.18, 0.18]) {
      const hornBladeGeo = new THREE.ConeGeometry(0.11, 0.95, 5);
      const hornBlade = new THREE.Mesh(hornBladeGeo, plateMat);
      hornBlade.position.set(0.12, 0.42, zSide);
      hornBlade.rotation.z = -0.28;
      hornBlade.rotation.x = zSide * 0.65;
      addInkOutline(hornBlade, 0.028);
      this.horns.add(hornBlade);
    }

    // Fierce Sculpted Menpō Iron Demon Mask
    const maskGeo = new THREE.CylinderGeometry(0.42, 0.34, 0.52, 10);
    this.mask = new THREE.Mesh(maskGeo, armorMat);
    this.mask.position.set(0.24, 1.32, 0);
    addInkOutline(this.mask, 0.032);
    this.meshGroup.add(this.mask);

    // 6. Weak Point Back Plate (Glowing Vermilion Crack)
    const weakGeo = new THREE.BoxGeometry(0.28, 0.95, 0.85);
    this.weakMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
    });
    this.weakMesh = new THREE.Mesh(weakGeo, this.weakMat);
    this.weakMesh.position.set(-cfg.width * 0.42, 0.35, 0);
    this.meshGroup.add(this.weakMesh);

    // 7. Curved Japanese Ōdachi / Nodachi Katana with Animated Falling Ink Droplets!
    this.swordGroup = new THREE.Group();
    this.swordGroup.position.set(0.62, -0.05, 0.58);
    this.swordGroup.rotation.z = -0.24;

    // Diamond-Wrapped Long Tsuka (Hilt) & Tsuba (Guard)
    const hiltGeo = new THREE.CylinderGeometry(0.085, 0.075, 1.45, 10);
    hiltGeo.rotateZ(Math.PI / 2);
    const hilt = new THREE.Mesh(hiltGeo, armorMat);
    hilt.position.x = -0.45;
    addInkOutline(hilt, 0.028);
    this.swordGroup.add(hilt);

    const guardGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.09, 12);
    guardGeo.rotateZ(Math.PI / 2);
    const guard = new THREE.Mesh(guardGeo, plateMat);
    guard.position.x = 0.28;
    addInkOutline(guard, 0.028);
    this.swordGroup.add(guard);

    // Curved Segmented Nodachi Blade (Graceful upward sori katana curvature!)
    const segCount = 6;
    const segLen = 0.78;
    for (let s = 0; s < segCount; s++) {
      const t = s / segCount;
      const segW = 0.24 * (1.0 - t * 0.22);
      const segGeo = new THREE.BoxGeometry(segLen + 0.04, segW, 0.06);
      const segMesh = new THREE.Mesh(segGeo, plateMat);
      const curveY = Math.pow(t, 1.8) * 0.38;
      const angle = Math.pow(t, 1.4) * 0.14;
      segMesh.position.set(0.68 + s * segLen, curveY, 0);
      segMesh.rotation.z = angle;
      addInkOutline(segMesh, 0.03);
      this.swordGroup.add(segMesh);
    }

    // Katana Kissaki (Curved Point Tip)
    const tipGeo = new THREE.ConeGeometry(0.11, 0.55, 5);
    tipGeo.rotateZ(-Math.PI / 2 + 0.16);
    this.tipMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(CONFIG.PALETTE.inkDark) });
    const tip = new THREE.Mesh(tipGeo, this.tipMat);
    tip.position.set(0.68 + segCount * segLen, 0.44, 0);
    addInkOutline(tip, 0.028);
    this.swordGroup.add(tip);

    // Live Animated Falling Ink Teardrop Droplets & Wet Blade Beads (No giant rake spikes!)
    this.inkDrops = [];
    const dropMat = new THREE.MeshBasicMaterial({ color: 0x111110 });
    for (let i = 0; i < 9; i++) {
      const dropGeo = new THREE.SphereGeometry(0.055, 7, 7);
      dropGeo.scale(0.65, 1.85, 0.65); // Teardrop shape
      const dropMesh = new THREE.Mesh(dropGeo, dropMat);
      const bx = 0.95 + i * 0.48;
      const by = Math.pow((i / 9), 1.8) * 0.32 - 0.12;
      dropMesh.position.set(bx, by, 0);
      this.swordGroup.add(dropMesh);
      this.inkDrops.push({
        mesh: dropMesh,
        baseX: bx,
        baseY: by,
        phase: i * 0.73,
        speed: 1.4 + (i % 3) * 0.45,
      });
    }

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

        // Attack hitbox active for initial 0.25s slam
        if (this.vulnerableTimer <= cfg.slamEmbedDuration - 0.25) {
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
        events.emit('scroll_unlocked', CONFIG.SCROLLS[0]);
        events.emit('ippitsu_unlocked');
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
    if (player && (player.health <= 0 || player.fsm?.isInState('Dead'))) {
      this.attackHitbox.deactivate();
      return;
    }

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

    const t = performance.now() * 0.001;

    // Animate falling ink droplets off the curved nodachi blade
    if (this.inkDrops) {
      for (const d of this.inkDrops) {
        const cycle = (t * d.speed + d.phase) % 1.0;
        // Droplet forms on blade edge (0..0.35), then stretches and falls to the stone floor (0.35..1.0)
        if (cycle < 0.35) {
          d.mesh.position.set(d.baseX, d.baseY - cycle * 0.15, 0);
          const s = 0.5 + (cycle / 0.35) * 0.7;
          d.mesh.scale.set(s, s, s);
        } else {
          const fallT = (cycle - 0.35) / 0.65;
          const fallDist = fallT * fallT * 1.95;
          d.mesh.position.set(d.baseX, d.baseY - 0.05 - fallDist, 0);
          d.mesh.scale.set(0.85, 1.35 * (1.0 - fallT * 0.35), 0.85);
        }
      }
    }

    // Subtle breathing & wind ripple on boss war cape
    if (this.bossCape) {
      this.bossCape.rotation.z = -0.22 + Math.sin(t * 3.8) * 0.07;
      this.bossCape.rotation.y = 0.18 + Math.cos(t * 2.9) * 0.06;
    }
  }

  dispose() {
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.meshGroup.clear();
    this.scene.remove(this.meshGroup);
  }
}
