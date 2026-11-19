// Act II Boss: Lady Shirayuki, the Mist Weaver (白雪姫 — 霧の織り手)
// Floating shrine maiden boss who teleports in bursts of fog, summons orbiting ink-mirror clones
// (real target glows faintly vermilion), and fires deflectable fan-shaped spirit needle volleys.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';
import { createSumieMaterial, addInkOutline } from '../shaders/SumieShader.js';

export class LadyShirayuki {
  constructor({ scene, collision, inkSplash, projectiles, x = 528, y = 74 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.projectiles = projectiles;

    this.name = 'Lady Shirayuki, the Mist Weaver';
    this.width = 1.3;
    this.height = 3.2;
    this.groundY = y;
    this.aabb = new AABB(x, y + 3.0, this.width, this.height);
    this.facing = -1;

    this.maxHp = 32;
    this.hp = this.maxHp;
    this.phase = 1;
    this.isDead = false;
    this.isActive = false;
    this.isVulnerable = true;

    this.actionTimer = 1.6;
    this.teleportPoints = [
      { x: 515, y: y + 2.8 },
      { x: 525, y: y + 4.2 },
      { x: 535, y: y + 2.8 },
    ];

    this.bodyHurtbox = new Hitbox({
      owner: this,
      type: 'enemy_hurtbox',
      width: this.width,
      height: this.height,
      offsetX: 0,
      offsetY: 0,
    });
    this.bodyHurtbox.activate();
    combatManager.registerEnemyHurtbox(this.bodyHurtbox);

    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.buildModel();
    this.scene.add(this.meshGroup);

    // Orbiting Ink-Mirror Clones (Decoys)
    this.clones = [];
    for (let i = 0; i < 2; i++) {
      const cloneMesh = this.buildCloneMesh();
      cloneMesh.visible = false;
      this.scene.add(cloneMesh);
      this.clones.push({ mesh: cloneMesh, active: false, angle: i * Math.PI });
    }
  }

  buildModel() {
    const silkMat = createSumieMaterial({
      inkDark: 0x1a1917,
      inkMid: 0x6b6860,
      inkLight: 0xd8d3c5,
      darkBias: -0.08,
    });
    const darkMat = createSumieMaterial({
      inkDark: 0x121210,
      inkMid: 0x33312d,
      inkLight: 0x66635b,
      darkBias: 0.2,
    });

    // Flowing Miko Hakama & Robes
    const skirtGeo = new THREE.ConeGeometry(0.75, 1.9, 12);
    const skirt = new THREE.Mesh(skirtGeo, darkMat);
    skirt.position.y = -0.55;
    addInkOutline(skirt, 0.032);
    this.meshGroup.add(skirt);

    // Upper Haori Robe & Wide Sleeves
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.45, 1.05, 10);
    const torso = new THREE.Mesh(torsoGeo, silkMat);
    torso.position.y = 0.45;
    addInkOutline(torso, 0.03);
    this.meshGroup.add(torso);

    for (const zSide of [-0.45, 0.45]) {
      const sleeveGeo = new THREE.BoxGeometry(0.45, 0.85, 0.25);
      const sleeve = new THREE.Mesh(sleeveGeo, silkMat);
      sleeve.position.set(0.1, 0.35, zSide);
      sleeve.rotation.x = zSide * 0.35;
      addInkOutline(sleeve, 0.026);
      this.meshGroup.add(sleeve);
    }

    // Head, Kitsune/Porcelain Mask & High Hair Chignon
    const headGeo = new THREE.SphereGeometry(0.24, 10, 10);
    const head = new THREE.Mesh(headGeo, silkMat);
    head.position.y = 1.15;
    addInkOutline(head, 0.025);
    this.meshGroup.add(head);

    // Real Target Vermilion Seal Aura (distinguishes her from mirror clones!)
    const auraGeo = new THREE.RingGeometry(0.55, 0.72, 24);
    this.auraMat = new THREE.MeshBasicMaterial({
      color: 0xb8292f,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.78,
    });
    this.auraRing = new THREE.Mesh(auraGeo, this.auraMat);
    this.auraRing.position.set(0, 0.55, -0.35);
    this.meshGroup.add(this.auraRing);
  }

  buildCloneMesh() {
    const grp = new THREE.Group();
    const cloneMat = createSumieMaterial({
      inkDark: 0x141413,
      inkMid: 0x3b3935,
      inkLight: 0x6e6b63,
      darkBias: 0.25,
    });
    const robe = new THREE.Mesh(new THREE.ConeGeometry(0.68, 2.5, 10), cloneMat);
    addInkOutline(robe, 0.028);
    grp.add(robe);
    return grp;
  }

  takeDamage(amount = 1, sourceX = 0, isWeakPoint = false) {
    if (this.isDead) return;
    const mult = isWeakPoint ? 1.5 : 1.0;
    this.hp = Math.max(0, this.hp - amount * mult);

    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(this.aabb.x, this.aabb.y, this.facing, 16, true, true);
    }
    events.emit('boss_damaged', { hp: this.hp, maxHp: this.maxHp });

    if (this.hp <= this.maxHp * 0.55 && this.phase === 1) {
      this.phase = 2;
      this.summonMirrorClones();
    }

    if (this.hp <= 0) {
      this.die();
    }
  }

  summonMirrorClones() {
    for (const c of this.clones) {
      c.active = true;
      c.mesh.visible = true;
    }
  }

  fireNeedleFan(player) {
    if (!this.projectiles || !player) return;
    const dx = player.aabb.x - this.aabb.x;
    const dy = player.aabb.y - this.aabb.y;
    const baseAngle = Math.atan2(dy, dx);
    const count = this.phase === 2 ? 5 : 3;
    const spread = 0.22;

    for (let i = 0; i < count; i++) {
      const offset = (i - (count - 1) * 0.5) * spread;
      const angle = baseAngle + offset;
      const speed = 13.5;
      this.projectiles.spawnProjectile({
        x: this.aabb.x + this.facing * 0.6,
        y: this.aabb.y + 0.3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        owner: this,
        type: 'needle',
        damage: 1,
      });
    }
  }

  die() {
    this.isDead = true;
    this.bodyHurtbox.deactivate();
    this.meshGroup.visible = false;
    for (const c of this.clones) c.mesh.visible = false;

    if (this.inkSplash) {
      this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, 2.0, 3.2);
    }
    events.emit('scroll_unlocked', {
      scrollId: 2,
      title: 'Second Scroll of Reflection',
      desc: 'Deflected projectiles now explode in an AoE vermilion ink burst!',
    });
    events.emit('act2_boss_defeated');
  }

  fixedUpdate(dt, player) {
    if (this.isDead || !player) return;

    // Activate boss HUD when player enters Act II Sanctuary Arena (x >= 504)
    if (!this.isActive && player.aabb.x >= 504 && player.aabb.x <= 558) {
      this.isActive = true;
      events.emit('boss_intro_start', { name: this.name });
    }
    if (!this.isActive) return;

    const t = performance.now() * 0.001;
    this.aabb.y += Math.sin(t * 2.8) * 0.025;
    this.facing = player.aabb.x >= this.aabb.x ? 1 : -1;

    this.actionTimer -= dt;
    if (this.actionTimer <= 0) {
      // Teleport in a burst of mist, then fire spirit needle fan volley!
      if (this.inkSplash) {
        this.inkSplash.spawnDeathDissolve(this.aabb.x, this.aabb.y, 1.2, 2.2);
      }
      const nextPt = this.teleportPoints[Math.floor(Math.random() * this.teleportPoints.length)];
      this.aabb.x = nextPt.x;
      this.aabb.y = nextPt.y;
      this.fireNeedleFan(player);
      this.actionTimer = this.phase === 2 ? 2.1 : 2.6;
    }

    // Update orbiting ink-mirror clones
    for (let i = 0; i < this.clones.length; i++) {
      const c = this.clones[i];
      if (c.active) {
        c.angle += dt * 1.8;
        const cx = this.aabb.x + Math.cos(c.angle) * 5.5;
        const cy = this.aabb.y + Math.sin(c.angle * 2) * 1.4;
        c.mesh.position.set(cx, cy, -0.3);
      }
    }

    this.bodyHurtbox.updatePosition(this.aabb.x, this.aabb.y, this.facing);
  }

  render() {
    if (this.isDead) return;
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);
    this.meshGroup.scale.x = this.facing;
    if (this.auraRing) {
      this.auraRing.rotation.z = performance.now() * 0.002;
    }
  }

  dispose() {
    this.bodyHurtbox.deactivate();
    combatManager.unregisterEntity(this);
    this.scene.remove(this.meshGroup);
    for (const c of this.clones) this.scene.remove(c.mesh);
  }
}
