// Level 1: "Kiri-no-Saka" Master Level Assembler
// Assembles Act I (The Awakening Mist), Act II (The Bamboo Ravine), and Act III (The Torii Plateau)

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { LEVEL1_DATA } from './level1.data.js';
import { BambooStalk } from './Bamboo.js';
import { SwingingLantern } from './SwingingLantern.js';
import { SuspensionBridge } from './SuspensionBridge.js';
import { InkShrine } from './InkShrine.js';
import { LanternCheckpoint } from './LanternCheckpoint.js';
import { AshigaruSentry } from '../enemies/AshigaruSentry.js';
import { InkWingTengu } from '../enemies/InkWingTengu.js';
import { InkShockwaveManager } from '../boss/InkShockwave.js';
import { Kurogane } from '../boss/Kurogane.js';

export class Level1 {
  constructor({ scene, collision, inkSplash }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.shockwaves = new InkShockwaveManager(scene);

    this.solidMeshes = [];
    this.bambooStalks = [];
    this.swingingLanterns = [];
    this.checkpoints = [];
    this.enemies = [];
    this.shrine = null;
    this.bridge = null;
    this.boss = null;

    this.buildLevel();
  }

  buildLevel() {
    const data = LEVEL1_DATA;

    // 1. Bottomless Fog Pit Trigger
    const pitBox = new AABB(150, data.fogPitY, 400, 4.0);
    this.collision.addTrigger(pitBox, null, { type: 'pit' });

    // Fog Visual Plane
    const fogMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.parchment),
      transparent: true,
      opacity: 0.85,
    });
    const fogMesh = new THREE.Mesh(new THREE.PlaneGeometry(600, 40), fogMat);
    fogMesh.position.set(150, data.fogPitY + 4, 0);
    this.scene.add(fogMesh);

    // 2. Assemble Act I
    this.buildSolids(data.act1.solids);
    this.buildOneWays(data.act1.oneWays);
    this.shrine = new InkShrine({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      x: data.act1.shrine.x,
      y: data.act1.shrine.y,
    });
    this.buildCheckpoints(data.act1.checkpoints);
    this.buildEnemies(data.act1.enemies);

    // 3. Assemble Act II
    this.buildSolids(data.act2.solids);
    this.buildCheckpoints(data.act2.checkpoints);
    this.buildEnemies(data.act2.enemies);

    // Bamboo stalks
    for (const b of data.act2.bambooStalks) {
      const stalk = new BambooStalk({
        scene: this.scene,
        collision: this.collision,
        x: b.x,
        y: b.y,
        height: b.height,
      });
      this.bambooStalks.push(stalk);
    }

    // Suspension Bridge
    const sb = data.act2.suspensionBridge;
    this.bridge = new SuspensionBridge({
      scene: this.scene,
      collision: this.collision,
      startX: sb.startX,
      startY: sb.startY,
      totalWidth: sb.totalWidth,
      gapWidth: sb.gapWidth,
    });

    // Swinging Lanterns
    for (const l of data.act2.swingingLanterns) {
      const lantern = new SwingingLantern({
        scene: this.scene,
        collision: this.collision,
        pivotX: l.pivotX,
        pivotY: l.pivotY,
        ropeLength: l.ropeLength,
      });
      this.swingingLanterns.push(lantern);
    }

    // 4. Assemble Act III (Boss Arena & Landmark Torii)
    this.buildSolids(data.act3.solids);
    this.buildCheckpoints(data.act3.checkpoints);
    this.buildToriiGate(data.act3.toriiGate.x, data.act3.toriiGate.y);
    this.buildPaleMoon(data.act3.toriiGate.x, data.act3.toriiGate.y + 22);
    this.buildFloatingScroll(data.act3.scroll.x, data.act3.scroll.y);

    // Boss Kurogane
    this.boss = new Kurogane({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      shockwaves: this.shockwaves,
      x: data.act3.toriiGate.x,
      y: data.act3.toriiGate.y,
    });
  }

  buildSolids(solids) {
    if (!solids) return;

    for (const s of solids) {
      const box = new AABB(s.x, s.y, s.w, s.h);
      const solidRef = this.collision.addSolid(box, {
        runnable: s.runnable ?? false,
        crumbling: s.crumbling ?? false,
      });

      if (!s.invisible) {
        const geo = new THREE.BoxGeometry(s.w, s.h, 2.5);
        const mat = new THREE.MeshStandardMaterial({
          color: s.color,
          roughness: 0.85,
          metalness: 0.05,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(s.x, s.y, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        this.solidMeshes.push({ mesh, solidRef, originalColor: s.color });
      }
    }
  }

  buildOneWays(oneWays) {
    if (!oneWays) return;

    for (const ow of oneWays) {
      const box = new AABB(ow.x, ow.y, ow.w, ow.h);
      this.collision.addOneWay(box);

      const geo = new THREE.BoxGeometry(ow.w, ow.h, 2.0);
      const mat = new THREE.MeshStandardMaterial({ color: 0x827d73, roughness: 0.8 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(ow.x, ow.y, 0);
      mesh.castShadow = true;
      this.scene.add(mesh);
    }
  }

  buildCheckpoints(cps) {
    if (!cps) return;

    for (const cp of cps) {
      const lantern = new LanternCheckpoint({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: cp.x,
        y: cp.y,
        id: cp.id,
      });
      this.checkpoints.push(lantern);
    }
  }

  buildEnemies(enemyList) {
    if (!enemyList) return;

    for (const e of enemyList) {
      if (e.type === 'ashigaru') {
        const sentry = new AshigaruSentry({
          scene: this.scene,
          collision: this.collision,
          inkSplash: this.inkSplash,
          x: e.x,
          y: e.y,
          facing: e.facing ?? -1,
          isStationary: e.isStationary ?? false,
          patrolMinX: e.patrolMinX ?? (e.x - 4),
          patrolMaxX: e.patrolMaxX ?? (e.x + 4),
        });
        this.enemies.push(sentry);
      } else if (e.type === 'tengu') {
        const tengu = new InkWingTengu({
          scene: this.scene,
          collision: this.collision,
          inkSplash: this.inkSplash,
          x: e.x,
          y: e.y,
          facing: e.facing ?? -1,
        });
        this.enemies.push(tengu);
      }
    }
  }

  // --- Visual Landmark: Colossal Torii Gate ---
  buildToriiGate(x, y) {
    const torii = new THREE.Group();
    torii.position.set(x, y, -2.0); // Slightly recessed on Z

    const woodMat = new THREE.MeshStandardMaterial({
      color: 0x22201d,
      roughness: 0.9,
    });

    // Left & Right Pillars (Hashira)
    const pillarGeo = new THREE.CylinderGeometry(0.7, 0.85, 14, 12);
    const pillarL = new THREE.Mesh(pillarGeo, woodMat);
    pillarL.position.set(-6.5, 7, 0);
    pillarL.castShadow = true;
    torii.add(pillarL);

    const pillarR = new THREE.Mesh(pillarGeo, woodMat);
    pillarR.position.set(6.5, 7, 0);
    pillarR.castShadow = true;
    torii.add(pillarR);

    // Lower Crossbeam (Nuki)
    const nukiGeo = new THREE.BoxGeometry(16, 0.7, 1.0);
    const nuki = new THREE.Mesh(nukiGeo, woodMat);
    nuki.position.set(0, 10.5, 0);
    torii.add(nuki);

    // Upper Curved Crossbeam (Kasagi & Shimaki)
    const kasagiGeo = new THREE.BoxGeometry(19, 1.2, 1.4);
    const kasagi = new THREE.Mesh(kasagiGeo, woodMat);
    kasagi.position.set(0, 13.5, 0);
    torii.add(kasagi);

    // Name Tablet in center (Gakuzuka)
    const tabletGeo = new THREE.BoxGeometry(1.6, 2.2, 0.2);
    const tabletMat = new THREE.MeshStandardMaterial({ color: 0x141413 });
    const tablet = new THREE.Mesh(tabletGeo, tabletMat);
    tablet.position.set(0, 12.0, 0.4);
    torii.add(tablet);

    this.scene.add(torii);
  }

  // --- Visual Landmark: Pale Moon ---
  buildPaleMoon(x, y) {
    const moonGeo = new THREE.CircleGeometry(12, 32);
    const moonMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.rimHighlight),
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
    });
    this.moon = new THREE.Mesh(moonGeo, moonMat);
    this.moon.position.set(x, y, -35.0); // Far background plane
    this.scene.add(this.moon);
  }

  // --- Visual Landmark: Floating Stolen Scroll ---
  buildFloatingScroll(x, y) {
    this.scrollGroup = new THREE.Group();
    this.scrollGroup.position.set(x, y, 0);

    // Parchment Scroll cylinder
    const rollGeo = new THREE.CylinderGeometry(0.25, 0.25, 1.6, 12);
    const rollMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.rimHighlight),
      roughness: 0.6,
    });
    const roll = new THREE.Mesh(rollGeo, rollMat);
    roll.rotateZ(Math.PI / 2);
    this.scrollGroup.add(roll);

    // Glowing Vermilion Seal Ribbon
    const sealGeo = new THREE.BoxGeometry(0.3, 0.8, 0.55);
    const sealMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
    });
    const seal = new THREE.Mesh(sealGeo, sealMat);
    this.scrollGroup.add(seal);

    // Vermilion glow light
    this.scrollLight = new THREE.PointLight(0xb8292f, 2.0, 8.0);
    this.scrollGroup.add(this.scrollLight);

    this.scene.add(this.scrollGroup);
  }

  // --- Fixed Update (60 Hz) ---
  fixedUpdate(dt, player) {
    // Update crumbling platforms
    for (const item of this.solidMeshes) {
      if (item.solidRef.crumbling) {
        if (item.solidRef.crumbleState === 'collapsing') {
          item.mesh.visible = true;
          item.mesh.position.y = item.solidRef.aabb.y - (1.0 - (item.solidRef.crumbleTimer / 0.6)) * 0.2;
          item.mesh.material.color.setHex(0xb8292f);
        } else if (item.solidRef.crumbleState === 'collapsed') {
          item.mesh.visible = false;
        } else {
          item.mesh.visible = true;
          item.mesh.position.y = item.solidRef.aabb.y;
          item.mesh.material.color.setHex(item.originalColor);
        }
      }
    }

    // Update shrine
    if (this.shrine) {
      this.shrine.fixedUpdate(dt);
    }

    // Update checkpoints
    for (const cp of this.checkpoints) {
      cp.fixedUpdate(dt);
    }

    // Update bamboo stalks
    for (const b of this.bambooStalks) {
      b.fixedUpdate(dt, player);
    }

    // Update swinging lanterns
    for (const l of this.swingingLanterns) {
      l.fixedUpdate(dt, player);
    }

    // Update enemies
    for (const e of this.enemies) {
      e.fixedUpdate(dt, player);
    }

    // Update shockwaves
    this.shockwaves.update(dt);

    // Update Boss
    if (this.boss) {
      this.boss.fixedUpdate(dt, player);
    }

    // Float animation for scroll
    if (this.scrollGroup) {
      const t = performance.now() * 0.003;
      this.scrollGroup.position.y = LEVEL1_DATA.act3.scroll.y + Math.sin(t) * 0.35;
      this.scrollGroup.rotation.y = t * 0.8;
      this.scrollLight.intensity = 1.8 + Math.sin(t * 2) * 0.6;
    }
  }

  // --- Render Interpolation ---
  render(alpha) {
    for (const e of this.enemies) {
      e.render(alpha);
    }
    if (this.boss) {
      this.boss.render(alpha);
    }
  }

  dispose() {
    for (const item of this.solidMeshes) {
      this.collision.removeSolid(item.solidRef);
      this.scene.remove(item.mesh);
    }
    for (const b of this.bambooStalks) b.dispose();
    for (const l of this.swingingLanterns) l.dispose();
    for (const cp of this.checkpoints) cp.dispose();
    for (const e of this.enemies) e.dispose();
    if (this.shrine) this.shrine.dispose();
    if (this.bridge) this.bridge.dispose();
    if (this.boss) this.boss.dispose();
    if (this.shockwaves) this.shockwaves.dispose();
  }
}
