// Act III Final Boss: Lord Sumi-Ou, Warlord of the Iron Brush (墨王 — 鉄筆の覇者)
// Dual-wielding warlord who paints temporary molten hazards onto the arena floor,
// summons erupting ink-pillars, and enters a Phase 2 "Living Calligraphy" state at 50% HP.
// Defeating him restores the Seven Scrolls and triggers the Panoramic Sunrise Parchment Wash!

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { createSumieMaterial, addInkOutline } from '../shaders/SumieShader.js';

export class LordSumiOu {
  constructor({ scene, collision, inkSplash, shockwaves, x = 805, y = 98 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.shockwaves = shockwaves;

    this.name = 'Lord Sumi-Ou, Warlord of the Iron Brush';
    this.width = 2.0;
    this.height = 5.2;
    this.groundY = y;
    this.aabb = new AABB(x, y + this.height * 0.5, this.width, this.height);
    this.facing = -1;

    this.maxHp = 48;
    this.hp = this.maxHp;
    this.phase = 1; // Phase 2 "Living Calligraphy" at <= 50% HP
    this.isDead = false;
    this.isActive = false;
    this.isVulnerable = true;

    this.actionTimer = 2.0;
    this.inkPillars = [];

    this.bodyHurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: this.width * 0.9,
      height: this.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.bodyHurtbox.activate();
    combatManager.registerEnemyHurtbox(this.bodyHurtbox);

    this.attackHitbox = new Hitbox({
      owner: this,
      type: 'enemy_attack',
      width: 4.8,
      height: 2.2,
      offsetX: 2.4,
      offsetY: 0,
      damage: 1,
    });
    combatManager.registerEnemyAttack(this.attackHitbox);

    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.buildModel();
    this.scene.add(this.meshGroup);
  }

  buildModel() {
    const bottomY = -this.height * 0.5;
    const ironMat = createSumieMaterial({
      inkDark: 0x0f0f0e,
      inkMid: 0x292724,
      inkLight: 0x5c5850,
      darkBias: 0.22,
    });
    const crimsonMat = createSumieMaterial({
      inkDark: 0x26090b,
      inkMid: 0x7a1c20,
      inkLight: 0xb8292f,
      hasRedSeal: 1.0,
    });

    // Armored Warlord Legs & Greaves
    for (const [zOff, sx] of [[-0.45, -0.25], [0.45, 0.28]]) {
      const legGeo = new THREE.CylinderGeometry(0.45, 0.35, 1.9, 10);
      const leg = new THREE.Mesh(legGeo, ironMat);
      leg.position.set(sx, bottomY + 0.95, zOff);
      addInkOutline(leg, 0.036);
      this.meshGroup.add(leg);
    }

    // Colossal Shogun Cuirass & Crimson Foundry Mantle
    const torsoGeo = new THREE.CylinderGeometry(1.05, 0.85, 2.0, 14);
    const torso = new THREE.Mesh(torsoGeo, ironMat);
    torso.position.y = 0.35;
    addInkOutline(torso, 0.045);
    this.meshGroup.add(torso);

    // Crowned Warlord Kabuto with Triple Vermilion Sunburst Crest
    const helmGeo = new THREE.SphereGeometry(0.68, 12, 10);
    const helm = new THREE.Mesh(helmGeo, ironMat);
    helm.position.set(0.05, 1.85, 0);
    addInkOutline(helm, 0.038);
    this.meshGroup.add(helm);

    const crestGeo = new THREE.RingGeometry(0.45, 0.92, 16, 1, 0, Math.PI);
    const crest = new THREE.Mesh(crestGeo, crimsonMat);
    crest.position.set(0.25, 2.25, 0);
    addInkOutline(crest, 0.03);
    this.meshGroup.add(crest);

    // Dual Giant Iron Calligraphy Brushes (Left & Right hands!)
    this.leftBrush = this.buildGiantIronBrush(ironMat, crimsonMat);
    this.leftBrush.position.set(0.6, 0.35, -0.82);
    this.leftBrush.rotation.z = -0.35;
    this.meshGroup.add(this.leftBrush);

    this.rightBrush = this.buildGiantIronBrush(ironMat, crimsonMat);
    this.rightBrush.position.set(0.75, 0.25, 0.82);
    this.rightBrush.rotation.z = -0.18;
    this.meshGroup.add(this.rightBrush);

    // Phase 2 "Living Calligraphy" Orbiting Kanji Ring
    this.calligraphyRing = new THREE.Group();
    this.calligraphyRing.position.set(0, 0.8, -0.6);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const sealGeo = new THREE.BoxGeometry(0.42, 0.58, 0.12);
      const seal = new THREE.Mesh(sealGeo, crimsonMat);
      seal.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0);
      addInkOutline(seal, 0.025);
      this.calligraphyRing.add(seal);
    }
    this.calligraphyRing.visible = false;
    this.meshGroup.add(this.calligraphyRing);
  }

  buildGiantIronBrush(ironMat, crimsonMat) {
    const brushGrp = new THREE.Group();
    // Iron shaft
    const shaftGeo = new THREE.CylinderGeometry(0.11, 0.13, 3.2, 10);
    shaftGeo.rotateZ(Math.PI / 2);
    const shaft = new THREE.Mesh(shaftGeo, ironMat);
    shaft.position.x = 1.2;
    addInkOutline(shaft, 0.032);
    brushGrp.add(shaft);

    // Giant Sumi-e Brush Bristle Head soaked in Molten Vermilion Ink
    const tipGeo = new THREE.ConeGeometry(0.36, 1.35, 10);
    tipGeo.rotateZ(-Math.PI / 2);
    const tip = new THREE.Mesh(tipGeo, crimsonMat);
    tip.position.x = 3.35;
    addInkOutline(tip, 0.035);
    brushGrp.add(tip);

    return brushGrp;
  }

  takeDamage(amount = 1, sourceX = 0, isWeakPoint = false) {
    if (this.isDead) return;
    const mult = isWeakPoint ? 1.5 : 1.0;
    this.hp = Math.max(0, this.hp - amount * mult);

    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(this.aabb.x, this.aabb.y, this.facing, 18, true, true);
    }
    events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });

    // Enter Phase 2 "Living Calligraphy" at 50% HP!
    if (this.hp <= this.maxHp * 0.5 && this.phase === 1) {
      this.phase = 2;
      this.calligraphyRing.visible = true;
      events.emit('camera_shake', { amount: 0.55 });
      if (this.shockwaves) {
        this.shockwaves.spawnRingShockwave(this.aabb.x, this.groundY);
      }
    }

    if (this.hp <= 0) {
      this.die();
    }
  }

  summonInkPillar(targetX) {
    const pillarGroup = new THREE.Group();
    pillarGroup.position.set(targetX, this.groundY, 0);

    // Warning Vermilion Floor Seal Circle
    const sealGeo = new THREE.CircleGeometry(1.2, 20);
    sealGeo.rotateX(-Math.PI / 2);
    const sealMat = new THREE.MeshBasicMaterial({
      color: 0xb8292f,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const sealMesh = new THREE.Mesh(sealGeo, sealMat);
    sealMesh.position.y = 0.08;
    pillarGroup.add(sealMesh);

    // Erupting Black-and-Vermilion Calligraphic Ink Pillar (hidden during 1.0s warning)
    const colGeo = new THREE.CylinderGeometry(0.75, 1.05, 8.5, 10);
    const colMat = new THREE.MeshBasicMaterial({ color: 0x141413 });
    const colMesh = new THREE.Mesh(colGeo, colMat);
    colMesh.position.y = 4.25;
    colMesh.visible = false;
    addInkOutline(colMesh, 0.04, 0xb8292f);
    pillarGroup.add(colMesh);

    this.scene.add(pillarGroup);
    this.inkPillars.push({
      group: pillarGroup,
      colMesh,
      x: targetX,
      timer: 0,
      eruptTime: 1.0,
      maxTime: 1.65,
      erupted: false,
    });
  }

  die() {
    this.isDead = true;
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    this.meshGroup.visible = false;

    if (this.inkSplash) {
      this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, 2.5, 5.0);
    }

    // Trigger Grand Campaign Sunrise Parchment Wash & Final Victory!
    events.emit('campaign_sunrise_victory');
    events.emit('boss_defeated');
  }

  fixedUpdate(dt, player) {
    if (this.isDead || !player) return;

    if (!this.isActive && player.aabb.x >= 776) {
      this.isActive = true;
      events.emit('boss_intro_start', { name: this.name });
    }
    if (!this.isActive) return;

    this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;
    this.actionTimer -= dt;

    if (this.actionTimer <= 0) {
      // Alternate between Erupting Ink Pillar Calligraphy and Floor Shockwave Sweep!
      this.summonInkPillar(player.aabb.x);
      if (this.phase === 2) {
        this.summonInkPillar(player.aabb.x - 4.5);
        this.summonInkPillar(player.aabb.x + 4.5);
      }
      if (this.shockwaves) {
        this.shockwaves.spawnFloorWave(this.aabb.x + this.facing * 1.6, this.groundY, this.facing, 13.5);
      }
      this.leftBrush.rotation.z = -0.85;
      this.rightBrush.rotation.z = 0.45;
      setTimeout(() => {
        if (!this.isDead) {
          this.leftBrush.rotation.z = -0.35;
          this.rightBrush.rotation.z = -0.18;
        }
      }, 450);

      this.actionTimer = this.phase === 2 ? 2.2 : 2.8;
    }

    // Update Painted Floor Hazard Seals & Erupting Ink Pillars
    for (let i = this.inkPillars.length - 1; i >= 0; i--) {
      const p = this.inkPillars[i];
      p.timer += dt;
      if (!p.erupted && p.timer >= p.eruptTime) {
        p.erupted = true;
        p.colMesh.visible = true;
        events.emit('camera_shake', { amount: 0.25 });
        if (Math.abs(player.aabb.x - p.x) < 1.1 && player.aabb.y < this.groundY + 7.5) {
          player.takeDamage(1, p.x);
        }
      }
      if (p.timer >= p.maxTime) {
        this.scene.remove(p.group);
        this.inkPillars.splice(i, 1);
      }
    }

    this.bodyHurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
    this.attackHitbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render() {
    if (this.isDead) return;
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.meshGroup.scale.x = this.facing;
    if (this.calligraphyRing && this.calligraphyRing.visible) {
      this.calligraphyRing.rotation.z = performance.now() * 0.0025;
    }
  }

  dispose() {
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.scene.remove(this.meshGroup);
    for (const p of this.inkPillars) this.scene.remove(p.group);
  }
}
