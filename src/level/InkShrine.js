// Ink Shrine — Stone shrine with glowing vermilion seal unlocking Ink Step (Dash)

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';

export class InkShrine {
  constructor({ scene, collision, inkSplash, x = 55, y = 10 }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.x = x;
    this.y = y;
    this.isUnlocked = false;

    // Trigger Box
    this.aabb = new AABB(x, y + 1.2, 2.4, 2.6);
    this.triggerRef = this.collision.addTrigger(this.aabb, (player) => {
      this.activate(player);
    }, { type: 'shrine' });

    // 3D Visual Mesh
    this.group = new THREE.Group();
    this.group.position.set(x, y, 0);

    // Stone Pedestal
    const baseGeo = new THREE.BoxGeometry(2.0, 0.8, 1.8);
    const stoneMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkMid),
      roughness: 0.85,
    });
    const base = new THREE.Mesh(baseGeo, stoneMat);
    base.position.y = 0.4;
    base.castShadow = true;
    this.group.add(base);

    // Shrine Pillar / Pagoda roof
    const roofGeo = new THREE.ConeGeometry(1.6, 0.7, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roofMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.7,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 2.2;
    roof.castShadow = true;
    this.group.add(roof);

    // Glowing Vermilion Seal Tablet in center
    const sealGeo = new THREE.BoxGeometry(0.6, 0.9, 0.1);
    this.sealMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
    });
    this.sealMesh = new THREE.Mesh(sealGeo, this.sealMat);
    this.sealMesh.position.set(0, 1.3, 0.4);
    this.group.add(this.sealMesh);

    // Vermilion Point Light
    this.light = new THREE.PointLight(0xb8292f, 1.5, 6.0);
    this.light.position.set(0, 1.4, 0.6);
    this.group.add(this.light);

    this.scene.add(this.group);
  }

  activate(player) {
    if (this.isUnlocked) return;
    this.isUnlocked = true;

    player.hasInkStepUnlocked = true;

    // Burst FX: Vermilion ring + ink droplets
    if (this.inkSplash) {
      this.inkSplash.spawnParryBurst(this.x, this.y + 1.4, true);
      this.inkSplash.spawnHitImpact(this.x, this.y + 1.4, 1, 16, true, true);
    }

    events.emit('shrine_unlocked', {
      title: 'Ink Step Unlocked',
      description: 'Press Shift or K to dash through the air. Grants invincibility and clears wide gaps.',
    });
    events.emit('camera_shake', { amount: 0.3 });
  }

  fixedUpdate(dt) {
    // Pulse light
    if (!this.isUnlocked) {
      const pulse = 1.0 + Math.sin(performance.now() * 0.005) * 0.4;
      this.light.intensity = 1.5 * pulse;
    } else {
      this.light.intensity = 0.5;
    }
  }

  dispose() {
    this.collision.removeTrigger(this.triggerRef);
    this.group.clear();
    this.scene.remove(this.group);
  }
}
