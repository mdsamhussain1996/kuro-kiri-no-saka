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
    this.isBoss = true;
    this.width = 2.0;
    this.height = 5.2;
    this._spawnX = x;
    this.groundY = y;
    this.aabb = new AABB(x, y + this.height * 0.5, this.width, this.height);
    this.facing = -1;

    this.maxHp = 64;
    this.hp = this.maxHp;
    this.phase = 1; // Phase 2 "Living Calligraphy" at <= 50% HP
    this.retriesInPhase = 0;
    this.isDead = false;
    this.isActive = false;
    this.isVulnerable = false; // Armored except during post-sweep punish window
    this.vulnerableTimer = 0;
    this.brushSwingTimer = 0;

    this._unsubRespawn = events.on('player:respawn', () => {
      if (this.isDead || !this.isActive) return;
      if (this._lastPlayerX !== undefined && (this._lastPlayerX < 770 || this._lastPlayerX > 845)) return;
      this.attackHitbox.deactivate();
      this.clearInkPillars();
      this.isActive = false;
      this.isVulnerable = false;
      this.vulnerableTimer = 0;
      this.brushSwingTimer = 0;
      this.actionTimer = 2.0;
      this.aabb.x = this._spawnX;
      this.leftBrush.rotation.z = -0.35;
      this.rightBrush.rotation.z = -0.18;
      this.retriesInPhase++;
      if (this.retriesInPhase <= 2 && this.phase === 2) {
        this.hp = Math.ceil(this.maxHp * 0.5);
      } else {
        this.phase = 1;
        this.hp = this.maxHp;
        this.retriesInPhase = 0;
        if (this.calligraphyRing) this.calligraphyRing.visible = false;
      }
      events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });
    });

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

    const ironPlateMat = createSumieMaterial({
      inkDark: 0x1a1917,
      inkMid: 0x45433d,
      inkLight: 0x7d7970,
      darkBias: 0.08,
    });

    // Armored Warlord Legs, Hakama & Suneate Greaves
    for (const [zOff, sx] of [[-0.45, -0.25], [0.45, 0.28]]) {
      const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.56, 1.0, 10), ironMat);
      thigh.position.set(sx, bottomY + 1.45, zOff);
      addInkOutline(thigh, 0.036);
      this.meshGroup.add(thigh);

      const legGeo = new THREE.CylinderGeometry(0.32, 0.24, 1.05, 10);
      const leg = new THREE.Mesh(legGeo, ironPlateMat);
      leg.position.set(sx + 0.05, bottomY + 0.55, zOff);
      addInkOutline(leg, 0.034);
      this.meshGroup.add(leg);
    }

    // Colossal Shogun Cuirass with Lamellar Odoshi Bands
    const torsoGeo = new THREE.CylinderGeometry(1.05, 0.85, 2.0, 14);
    const torso = new THREE.Mesh(torsoGeo, ironMat);
    torso.position.y = 0.35;
    addInkOutline(torso, 0.045);
    this.meshGroup.add(torso);

    for (let tier = 0; tier < 4; tier++) {
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(1.10 - tier * 0.04, 1.07 - tier * 0.04, 0.22, 14),
        tier % 2 === 0 ? ironPlateMat : crimsonMat
      );
      band.position.y = 0.92 - tier * 0.36;
      addInkOutline(band, 0.028);
      this.meshGroup.add(band);
    }

    // Kusazuri Layered Armored Waist Tassets
    for (let i = -1; i <= 1; i++) {
      const tassetGrp = new THREE.Group();
      tassetGrp.position.set(i * 0.48, -0.58, 0);
      tassetGrp.rotation.z = i * 0.20;
      for (let p = 0; p < 3; p++) {
        const plate = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.28, 1.48), p % 2 === 0 ? ironPlateMat : ironMat);
        plate.position.y = -p * 0.27;
        addInkOutline(plate, 0.03);
        tassetGrp.add(plate);
      }
      this.meshGroup.add(tassetGrp);
    }

    // Layered Sode Shoulder Shields (3-Tier Curved Iron Pauldrons)
    for (const zSign of [-1, 1]) {
      const sodeGrp = new THREE.Group();
      sodeGrp.position.set(0, 1.22, zSign * 1.02);
      for (let s = 0; s < 3; s++) {
        const sodePlate = new THREE.Mesh(
          new THREE.BoxGeometry(0.95, 0.28, 0.30),
          s === 0 ? crimsonMat : (s % 2 === 0 ? ironPlateMat : ironMat)
        );
        sodePlate.position.set(-0.05 * s, 0.20 - s * 0.26, zSign * s * 0.06);
        sodePlate.rotation.x = zSign * 0.28;
        addInkOutline(sodePlate, 0.032);
        sodeGrp.add(sodePlate);
      }
      this.meshGroup.add(sodeGrp);
    }

    // Draped Flowing Warlord Cape / Jinbaori Sash
    const capeGeo = new THREE.CylinderGeometry(0.44, 1.48, 3.2, 12, 4, true, -Math.PI * 0.45, Math.PI * 0.9);
    const capeMat = createSumieMaterial({
      inkDark: 0x160708,
      inkMid: 0x451215,
      inkLight: 0x7a1c20,
      darkBias: 0.2,
    });
    capeMat.side = THREE.DoubleSide;
    this.warCape = new THREE.Mesh(capeGeo, capeMat);
    this.warCape.position.set(-0.88, -0.1, 0);
    this.warCape.rotation.z = -0.34;
    addInkOutline(this.warCape, 0.032);
    this.meshGroup.add(this.warCape);

    // Crowned Warlord Kabuto, Shikoro Neck Guard, Menpō Demon Mask & Twin Kuwagata Horns
    const helmGroup = new THREE.Group();
    helmGroup.position.set(0.05, 1.85, 0);
    this.meshGroup.add(helmGroup);

    const helmGeo = new THREE.SphereGeometry(0.68, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.65);
    const helm = new THREE.Mesh(helmGeo, ironMat);
    addInkOutline(helm, 0.038);
    helmGroup.add(helm);

    for (let k = 0; k < 3; k++) {
      const shikoro = new THREE.Mesh(
        new THREE.CylinderGeometry(0.68 + k * 0.12, 0.80 + k * 0.14, 0.18, 14, 1, true, Math.PI * 0.35, Math.PI * 1.3),
        k % 2 === 0 ? ironPlateMat : ironMat
      );
      shikoro.position.set(-0.08, -0.06 - k * 0.15, 0);
      addInkOutline(shikoro, 0.028);
      helmGroup.add(shikoro);
    }

    const mask = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.36, 0.52, 10), ironMat);
    mask.position.set(0.24, -0.32, 0);
    addInkOutline(mask, 0.032);
    helmGroup.add(mask);

    for (const zSide of [-0.26, 0.26]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.13, 1.15, 5), crimsonMat);
      horn.position.set(0.44, 0.48, zSide);
      horn.rotation.z = -0.34;
      horn.rotation.x = zSide * 0.72;
      addInkOutline(horn, 0.028);
      helmGroup.add(horn);
    }

    const crestGeo = new THREE.RingGeometry(0.45, 0.92, 16, 1, 0, Math.PI);
    const crest = new THREE.Mesh(crestGeo, crimsonMat);
    crest.position.set(0.20, 0.42, 0);
    addInkOutline(crest, 0.03);
    helmGroup.add(crest);

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

    // Vulnerability Seal Ring (glows vermilion during post-sweep punish window)
    const vulnGeo = new THREE.RingGeometry(1.45, 1.72, 24);
    this.vulnAuraMat = new THREE.MeshBasicMaterial({
      color: 0xb8292f,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    this.vulnAura = new THREE.Mesh(vulnGeo, this.vulnAuraMat);
    this.vulnAura.position.set(0, 0.35, -0.5);
    this.vulnAura.visible = false;
    this.meshGroup.add(this.vulnAura);
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

  clearInkPillars() {
    for (const p of this.inkPillars) {
      p.group.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      p.group.clear();
      this.scene.remove(p.group);
    }
    this.inkPillars = [];
  }

  die() {
    this.isDead = true;
    this.isActive = false;
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.clearInkPillars();
    this.meshGroup.visible = false;

    if (this.inkSplash) {
      this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, 2.5, 5.0);
    }

    // Trigger Grand Campaign Sunrise Parchment Wash & Final Victory!
    events.emit('scroll_unlocked', CONFIG.SCROLLS[2]);
    events.emit('campaign_sunrise_victory');
    events.emit('boss_defeated');
  }

  takeDamage(amount = 1, arg2 = false, arg3 = false) {
    if (this.isDead || !this.isActive) return false;
    const isWeakPoint = (typeof arg2 === 'boolean' && arg2) || (typeof arg3 === 'boolean' && arg3);
    if (!this.isVulnerable && !isWeakPoint) {
      events.emit('boss_clink', { boss: this });
      return false;
    }
    const dmg = isWeakPoint ? amount * 2 : amount;
    this.hp = Math.max(0, this.hp - dmg);
    events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });
    if (this.hp <= this.maxHp * 0.5 && this.phase === 1) {
      this.phase = 2;
      if (this.calligraphyRing) this.calligraphyRing.visible = true;
      events.emit('camera_shake', { amount: 0.5 });
    }
    if (this.hp <= 0) {
      this.die();
    }
    return true;
  }

  fixedUpdate(dt, player) {
    if (this.isDead || !player) return;
    this._lastPlayerX = player.aabb.x;
    if (player.health <= 0 || player.fsm?.isInState('Dead')) {
      this.attackHitbox.deactivate();
      return;
    }

    if (this.vulnerableTimer > 0) {
      this.vulnerableTimer -= dt;
      if (this.vulnerableTimer <= 0) {
        this.isVulnerable = false;
      }
    }

    if (!this.isActive && player.aabb.x >= 774 && player.aabb.x <= 830) {
      this.isActive = true;
      events.emit('boss_intro_start', { name: this.name });
    }
    if (!this.isActive) return;

    this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;
    this.actionTimer -= dt;

    if (this.brushSwingTimer > 0) {
      this.brushSwingTimer -= dt;
      if (this.brushSwingTimer <= 0) {
        this.attackHitbox.deactivate();
        this.leftBrush.rotation.z = -0.35;
        this.rightBrush.rotation.z = -0.18;
      }
    }

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
      this.attackHitbox.damage = 1;
      this.attackHitbox.activate();
      this.isVulnerable = true;
      this.vulnerableTimer = 1.0; // Post-sweep punish window
      this.leftBrush.rotation.z = -0.85;
      this.rightBrush.rotation.z = 0.45;
      this.brushSwingTimer = 0.45;

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
      }
      if (p.erupted && Math.abs(player.aabb.x - p.x) < 1.1 && player.aabb.y < this.groundY + 7.5) {
        player.takeDamage(1, p.x);
      }
      if (p.timer >= p.maxTime) {
        p.group.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
        p.group.clear();
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
    const t = performance.now() * 0.001;
    if (this.calligraphyRing && this.calligraphyRing.visible) {
      this.calligraphyRing.rotation.z = t * 2.5;
    }
    if (this.warCape) {
      this.warCape.rotation.z = -0.30 + Math.sin(t * 3.4) * 0.06;
    }
    if (this.vulnAura) {
      this.vulnAura.visible = this.isVulnerable && !this.isDead;
      if (this.vulnAura.visible) {
        const pulse = 1.0 + Math.sin(t * 12.0) * 0.1;
        this.vulnAura.scale.set(pulse, pulse, 1);
        this.vulnAuraMat.opacity = 0.55 + Math.sin(t * 12.0) * 0.25;
      }
    }
  }

  resetForEncounter() {
    this.clearInkPillars();
    this.isDead = false;
    this.isActive = false;
    this.isVulnerable = false;
    this.vulnerableTimer = 0;
    this.brushSwingTimer = 0;
    this.actionTimer = 2.0;
    this.phase = 1;
    this.hp = this.maxHp;
    this.retriesInPhase = 0;
    this.aabb.x = this._spawnX;
    this.facing = -1;
    this.meshGroup.visible = true;
    if (this.calligraphyRing) this.calligraphyRing.visible = false;
    if (this.vulnAura) this.vulnAura.visible = false;
    this.leftBrush.rotation.z = -0.35;
    this.rightBrush.rotation.z = -0.18;
    this.bodyHurtbox.activate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    combatManager.registerEnemyHurtbox(this.bodyHurtbox);
    combatManager.registerEnemyAttack(this.attackHitbox);
  }

  dispose() {
    this._unsubRespawn?.();
    this.bodyHurtbox.deactivate();
    this.attackHitbox.deactivate();
    combatManager.unregisterEntity(this);
    this.clearInkPillars();
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
