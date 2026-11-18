// Lantern Checkpoint — Stone toro lantern with vermilion flame ignition and full heal

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';

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
    this.aabb = new AABB(x, y + 1.2, 1.8, 2.4);
    this.triggerRef = this.collision.addTrigger(this.aabb, (player) => {
      this.activate(player);
    }, { type: 'checkpoint' });

    // 3D Visual Mesh (Traditional Toro stone lantern)
    this.group = new THREE.Group();
    this.group.position.set(x, y, 0);

    const stoneMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkMid),
      roughness: 0.85,
    });

    // Base pedestal
    const baseGeo = new THREE.CylinderGeometry(0.5, 0.7, 0.4, 6);
    const base = new THREE.Mesh(baseGeo, stoneMat);
    base.position.y = 0.2;
    this.group.add(base);

    // Pillar shaft
    const pillarGeo = new THREE.CylinderGeometry(0.25, 0.3, 1.2, 6);
    const pillar = new THREE.Mesh(pillarGeo, stoneMat);
    pillar.position.y = 1.0;
    this.group.add(pillar);

    // Fire chamber
    const chamberGeo = new THREE.BoxGeometry(0.8, 0.7, 0.8);
    const chamber = new THREE.Mesh(chamberGeo, stoneMat);
    chamber.position.y = 1.8;
    this.group.add(chamber);

    // Umbrella roof
    const roofGeo = new THREE.ConeGeometry(0.9, 0.5, 6);
    const roof = new THREE.Mesh(roofGeo, stoneMat);
    roof.position.y = 2.4;
    this.group.add(roof);

    // Flame Core (Vermilion)
    const flameGeo = new THREE.SphereGeometry(0.2, 8, 8);
    this.flameMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      transparent: true,
      opacity: 0.4,
    });
    this.flame = new THREE.Mesh(flameGeo, this.flameMat);
    this.flame.position.y = 1.8;
    this.group.add(this.flame);

    // Vermilion Point Light (initially off)
    this.pointLight = new THREE.PointLight(0xb8292f, 0, 8.0, 1.5);
    this.pointLight.position.y = 1.8;
    this.group.add(this.pointLight);

    this.scene.add(this.group);
  }

  activate(player) {
    if (this.isLit) return;
    this.isLit = true;

    // Ignite flame
    this.flameMat.color.setHex(0xb8292f);
    this.flameMat.opacity = 1.0;
    this.pointLight.intensity = 2.0;

    // Heal player and set checkpoint
    player.health = CONFIG.COMBAT.maxHealth;
    player.setCheckpoint(this.x, this.y + 0.5);
    saveSystem.saveCheckpoint(this.id, { x: this.x, y: this.y + 0.5 });

    // FX & Event
    if (this.inkSplash) {
      this.inkSplash.spawnParryBurst(this.x, this.y + 1.8, false);
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
