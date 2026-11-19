// Lantern & Stone Jizo Statue Checkpoint — Carved Stone Jizo Bodhisattva with Vermilion Bib
// paired with a Toro stone lantern. Ignites on contact, restores full HP, and persists to localStorage.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';
import { createSumieMaterial, addInkOutline } from '../shaders/SumieShader.js';

export class LanternCheckpoint {
  constructor({ scene, collision, inkSplash, x = 0, y = 0, id = 1 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.x = x;
    this.y = y;
    this.id = id;
    this.isLit = false;

    // Trigger Box
    this.aabb = new AABB(x, y + 1.2, 2.2, 2.4);
    this.triggerRef = this.collision.addTrigger(this.aabb, (player) => {
      this.activate(player);
    }, { type: 'checkpoint' });

    this.group = new THREE.Group();
    this.group.position.set(x, y, -0.4);

    const stoneMat = createSumieMaterial({
      inkDark: 0x1a1917,
      inkMid: 0x5c5b57,
      inkLight: 0x9c988e,
      noiseScale: 2.5,
    });

    // --- 1. Carved Stone Jizo Statue with Vermilion Bib ---
    const jizoGroup = new THREE.Group();
    jizoGroup.position.set(-0.55, 0, 0.25);

    const lotusBaseGeo = new THREE.CylinderGeometry(0.38, 0.46, 0.28, 8);
    const lotusBase = new THREE.Mesh(lotusBaseGeo, stoneMat);
    lotusBase.position.y = 0.14;
    addInkOutline(lotusBase, 0.024);
    jizoGroup.add(lotusBase);

    const jizoBodyGeo = new THREE.CylinderGeometry(0.24, 0.32, 0.82, 10);
    const jizoBody = new THREE.Mesh(jizoBodyGeo, stoneMat);
    jizoBody.position.y = 0.65;
    addInkOutline(jizoBody, 0.025);
    jizoGroup.add(jizoBody);

    const jizoHeadGeo = new THREE.SphereGeometry(0.22, 10, 10);
    const jizoHead = new THREE.Mesh(jizoHeadGeo, stoneMat);
    jizoHead.position.y = 1.22;
    addInkOutline(jizoHead, 0.025);
    jizoGroup.add(jizoHead);

    // Vermilion Cloth Bib (Yodarekake) around Jizo's neck
    const bibGeo = new THREE.ConeGeometry(0.29, 0.36, 8, 1, true);
    this.bibMat = new THREE.MeshBasicMaterial({
      color: 0x7a2428,
      side: THREE.DoubleSide,
    });
    const bib = new THREE.Mesh(bibGeo, this.bibMat);
    bib.position.y = 0.96;
    addInkOutline(bib, 0.02);
    jizoGroup.add(bib);

    this.group.add(jizoGroup);

    // --- 2. Traditional Toro Stone Lantern ---
    const baseGeo = new THREE.CylinderGeometry(0.45, 0.65, 0.38, 6);
    const base = new THREE.Mesh(baseGeo, stoneMat);
    base.position.set(0.35, 0.19, 0);
    addInkOutline(base, 0.025);
    this.group.add(base);

    const pillarGeo = new THREE.CylinderGeometry(0.22, 0.28, 1.15, 6);
    const pillar = new THREE.Mesh(pillarGeo, stoneMat);
    pillar.position.set(0.35, 0.95, 0);
    addInkOutline(pillar, 0.025);
    this.group.add(pillar);

    const chamberGeo = new THREE.BoxGeometry(0.75, 0.65, 0.75);
    const chamber = new THREE.Mesh(chamberGeo, stoneMat);
    chamber.position.set(0.35, 1.75, 0);
    addInkOutline(chamber, 0.025);
    this.group.add(chamber);

    const roofGeo = new THREE.ConeGeometry(0.88, 0.48, 6);
    const roof = new THREE.Mesh(roofGeo, stoneMat);
    roof.position.set(0.35, 2.35, 0);
    addInkOutline(roof, 0.028);
    this.group.add(roof);

    // Flame Core (Vermilion)
    const flameGeo = new THREE.SphereGeometry(0.2, 8, 8);
    this.flameMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.4,
    });
    this.flame = new THREE.Mesh(flameGeo, this.flameMat);
    this.flame.position.set(0.35, 1.75, 0);
    this.group.add(this.flame);

    this.pointLight = new THREE.PointLight(0xb8292f, 0, 8.0, 1.5);
    this.pointLight.position.set(0.35, 1.75, 0);
    this.group.add(this.pointLight);

    this.scene.add(this.group);
  }

  activate(player) {
    if (this.isLit) return;
    this.isLit = true;

    this.flameMat.color.setHex(0xb8292f);
    this.flameMat.opacity = 1.0;
    this.bibMat.color.setHex(0xb8292f);
    this.pointLight.intensity = 2.0;

    player.health = CONFIG.COMBAT.maxHealth;
    player.setCheckpoint(this.x, this.y + 0.5);
    saveSystem.saveCheckpoint(this.id, { x: this.x, y: this.y + 0.5 });

    if (this.inkSplash) {
      this.inkSplash.spawnParryBurst(this.x, this.y + 1.5, false);
    }
    events.emit('checkpoint_activated', { id: this.id, x: this.x, y: this.y });
  }

  fixedUpdate(dt) {
    if (this.isLit) {
      const flicker = 1.8 + Math.sin(performance.now() * 0.008) * 0.4;
      this.pointLight.intensity = flicker;
      const s = 1.0 + Math.sin(performance.now() * 0.012) * 0.15;
      this.flame.scale.set(s, s * 1.2, s);
    }
  }

  dispose() {
    this.collision.removeTrigger(this.triggerRef);
    this.group.clear();
    this.scene.remove(this.group);
  }
}
