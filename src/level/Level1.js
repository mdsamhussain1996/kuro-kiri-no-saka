// Level 1: "Kiri-no-Saka" Master Level Assembler (Sumiro & Concept Art Visual Pass)
// Assembles carved sumi-e stone steps, craggy cliff foundations, gnarled bonsai pine trees,
// Temple of Silent Bells pavilion, churning Sea of Ink, and the moonlit Torii Boss Arena.

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
import { createSumieMaterial, addInkOutline } from '../render/SumieMaterial.js';

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
    this.templeBell = null;

    // Shared Sumi-e Materials for Stone, Cliff Rock, Dark Wood & Pine Foliage
    this.stoneMat = createSumieMaterial({
      inkDark: 0x181715,
      inkMid: 0x57544d,
      inkLight: 0x99958b,
      noiseScale: 3.8,
      darkBias: 0.04,
    });
    this.cliffMat = createSumieMaterial({
      inkDark: 0x121210,
      inkMid: 0x383632,
      inkLight: 0x6b6860,
      noiseScale: 2.5,
      darkBias: 0.24,
    });
    this.woodMat = createSumieMaterial({
      inkDark: 0x141311,
      inkMid: 0x3b352e,
      inkLight: 0x6e655a,
      noiseScale: 6.0,
      darkBias: 0.18,
    });
    this.pineFoliageMat = createSumieMaterial({
      inkDark: 0x111110,
      inkMid: 0x2b2d28,
      inkLight: 0x4f5249,
      noiseScale: 7.5,
      darkBias: 0.30,
    });

    this.buildLevel();
  }

  buildLevel() {
    const data = LEVEL1_DATA;

    // 1. Bottomless Fog Pit Trigger & Soft Parchment Mist Plane
    const pitBox = new AABB(150, data.fogPitY, 400, 4.0);
    this.collision.addTrigger(pitBox, null, { type: 'pit' });

    const fogMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.parchment),
      transparent: true,
      opacity: 0.90,
      fog: false,
    });
    const fogMesh = new THREE.Mesh(new THREE.PlaneGeometry(600, 14), fogMat);
    fogMesh.position.set(150, data.fogPitY - 6, 1.5);
    this.scene.add(fogMesh);

    // 2. Assemble Act I (Ch I: The Climb & Ch II: The Broken Pass)
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

    // 3. Assemble Act II (Ch III: Hanging Pines, Ch IV: Temple of Silent Bells, Ch V: Sea of Ink)
    this.buildSolids(data.act2.solids);
    this.buildCheckpoints(data.act2.checkpoints);
    this.buildEnemies(data.act2.enemies);

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

    const sb = data.act2.suspensionBridge;
    this.bridge = new SuspensionBridge({
      scene: this.scene,
      collision: this.collision,
      startX: sb.startX,
      startY: sb.startY,
      totalWidth: sb.totalWidth,
      gapWidth: sb.gapWidth,
    });

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

    // 4. Assemble Act III (Ch VI: The Last Brushstroke — Boss Arena & Landmark Torii)
    this.buildSolids(data.act3.solids);
    this.buildCheckpoints(data.act3.checkpoints);
    this.buildToriiGate(data.act3.toriiGate.x, data.act3.toriiGate.y);
    this.buildPaleMoon(data.act3.toriiGate.x, data.act3.toriiGate.y + 8.5);
    this.buildFloatingScroll(data.act3.scroll.x, data.act3.scroll.y);

    // 5. Populate Scenic Sumi-e Landmarks: Gnarled Pines, Temple of Silent Bells & Boss Cliffs
    this.buildScenicEnvironment();

    // 6. Boss Kurogane (positioned in the moonlit Torii archway facing Kuro)
    this.boss = new Kurogane({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      shockwaves: this.shockwaves,
      x: data.act3.toriiGate.x + 3.2,
      y: data.act3.toriiGate.y,
    });
  }

  // --- Sculpted Sumi-e Stone Steps & Rocky Cliffs ---
  buildSolids(solids) {
    if (!solids) return;

    for (const s of solids) {
      const box = new AABB(s.x, s.y, s.w, s.h);
      const solidRef = this.collision.addSolid(box, {
        runnable: s.runnable ?? false,
        crumbling: s.crumbling ?? false,
      });

      if (!s.invisible) {
        const group = new THREE.Group();
        group.position.set(s.x, s.y, 0);

        // Main Stone Core Block with Sumi-e Shader & Calligraphic Black Ink Outline
        const coreGeo = new THREE.BoxGeometry(s.w, s.h, 3.0);
        const coreMat = s.crumbling
          ? new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.85 })
          : this.stoneMat;
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        coreMesh.castShadow = true;
        coreMesh.receiveShadow = true;
        addInkOutline(coreMesh, 0.045);
        group.add(coreMesh);

        // Individual Chiseled Top Masonry Stone Slabs (like traversal_steps.jpg & Sumiro)
        if (!s.crumbling && s.w >= 3) {
          const slabWidth = 2.2;
          const count = Math.min(28, Math.max(2, Math.floor(s.w / slabWidth)));
          const actualSlabW = s.w / count;
          const topY = s.h * 0.5;

          for (let i = 0; i < count; i++) {
            const sx = -s.w * 0.5 + actualSlabW * (i + 0.5);
            const hVar = 0.24 + ((i * 7) % 3) * 0.05;
            const zVar = 3.18 + ((i * 13) % 3) * 0.12;
            const slabGeo = new THREE.BoxGeometry(actualSlabW * 0.94, hVar, zVar);
            const slab = new THREE.Mesh(slabGeo, this.stoneMat);
            slab.position.set(sx, topY - hVar * 0.35, 0);
            addInkOutline(slab, 0.036);
            group.add(slab);

            // Grass / Moss Brush Tufts on alternating stone slabs
            if ((i + Math.floor(s.x)) % 3 === 0) {
              const tuftGeo = new THREE.ConeGeometry(0.18, 0.42, 4);
              const tuft = new THREE.Mesh(tuftGeo, this.pineFoliageMat);
              tuft.position.set(sx + 0.2, topY + 0.16, 1.35);
              tuft.rotation.z = ((i % 2) - 0.5) * 0.35;
              group.add(tuft);
            }
          }

          // Stepped Carved Stone Masonry Courses underneath the platform (like traversal_steps.jpg)
          if (s.h <= 4.5) {
            const tier1Geo = new THREE.BoxGeometry(s.w * 0.86, 0.85, 2.5);
            const tier1 = new THREE.Mesh(tier1Geo, this.stoneMat);
            tier1.position.set(0, -s.h * 0.5 - 0.42, -0.1);
            addInkOutline(tier1, 0.04);
            group.add(tier1);

            const tier2Geo = new THREE.BoxGeometry(s.w * 0.66, 0.85, 2.1);
            const tier2 = new THREE.Mesh(tier2Geo, this.cliffMat);
            tier2.position.set(0, -s.h * 0.5 - 1.25, -0.2);
            addInkOutline(tier2, 0.04);
            group.add(tier2);
          }
        }

        this.scene.add(group);
        this.solidMeshes.push({ mesh: coreMesh, group, solidRef, originalColor: s.color });
      }
    }
  }

  buildOneWays(oneWays) {
    if (!oneWays) return;

    for (const ow of oneWays) {
      const box = new AABB(ow.x, ow.y, ow.w, ow.h);
      this.collision.addOneWay(box);

      const group = new THREE.Group();
      group.position.set(ow.x, ow.y, 0);

      // Stepped Wooden / Stone Temple Bridge Deck
      const geo = new THREE.BoxGeometry(ow.w, ow.h, 2.4);
      const mesh = new THREE.Mesh(geo, this.woodMat);
      mesh.castShadow = true;
      addInkOutline(mesh, 0.038);
      group.add(mesh);

      // Decorative wooden support struts underneath
      const strutGeo = new THREE.BoxGeometry(0.22, 1.1, 2.1);
      for (const side of [-1, 1]) {
        const strut = new THREE.Mesh(strutGeo, this.woodMat);
        strut.position.set(side * (ow.w * 0.38), -0.55, 0);
        strut.rotation.z = side * 0.42;
        addInkOutline(strut, 0.028);
        group.add(strut);
      }

      this.scene.add(group);
    }
  }

  // --- Gnarled Japanese Bonsai / Mountain Pine Tree Generator ---
  buildPineTree(x, y, z = -1.8, scale = 1.0, lean = 1) {
    const pine = new THREE.Group();
    pine.position.set(x, y, z);
    pine.scale.set(scale, scale, scale);

    // Gnarled Twisted Trunk Segments
    const seg1Geo = new THREE.CylinderGeometry(0.24, 0.38, 2.2, 7);
    const seg1 = new THREE.Mesh(seg1Geo, this.woodMat);
    seg1.position.set(0, 1.0, 0);
    seg1.rotation.z = -lean * 0.22;
    addInkOutline(seg1, 0.04);
    pine.add(seg1);

    const seg2Geo = new THREE.CylinderGeometry(0.16, 0.24, 2.0, 7);
    const seg2 = new THREE.Mesh(seg2Geo, this.woodMat);
    seg2.position.set(lean * 0.65, 2.6, 0);
    seg2.rotation.z = -lean * 0.48;
    addInkOutline(seg2, 0.038);
    pine.add(seg2);

    const seg3Geo = new THREE.CylinderGeometry(0.10, 0.16, 1.6, 6);
    const seg3 = new THREE.Mesh(seg3Geo, this.woodMat);
    seg3.position.set(lean * 1.45, 3.85, 0);
    seg3.rotation.z = -lean * 0.25;
    addInkOutline(seg3, 0.035);
    pine.add(seg3);

    // Layered Sumi-e Pine Needle Canopy Pads
    const padCoords = [
      { x: lean * 0.4,  y: 2.3, rx: 1.35, ry: 0.42 },
      { x: lean * 1.3,  y: 3.2, rx: 1.65, ry: 0.48 },
      { x: lean * 2.1,  y: 3.9, rx: 1.40, ry: 0.44 },
      { x: lean * 1.1,  y: 4.6, rx: 1.80, ry: 0.52 },
      { x: -lean * 0.4, y: 3.5, rx: 1.15, ry: 0.38 },
    ];

    for (const p of padCoords) {
      const padGeo = new THREE.SphereGeometry(1.0, 10, 8);
      padGeo.scale(p.rx, p.ry, 0.85);
      const pad = new THREE.Mesh(padGeo, this.pineFoliageMat);
      pad.position.set(p.x, p.y, 0.1);
      addInkOutline(pad, 0.042);
      pine.add(pad);
    }

    this.scene.add(pine);
    return pine;
  }

  // --- Scenic Landmarks Across Chapters I - VI ---
  buildScenicEnvironment() {
    // Chapter I & II: Gnarled Mountain Pines along the Stone Steps & Ink Shrine
    this.buildPineTree(3.5, 0, -1.8, 1.15, 1);
    this.buildPineTree(17.5, 2.0, -2.0, 0.95, -1);
    this.buildPineTree(36.0, 8.0, -1.8, 1.1, 1);
    this.buildPineTree(52.5, 10.0, -2.2, 1.25, 1);
    this.buildPineTree(61.5, 10.0, -2.2, 1.15, -1);
    this.buildPineTree(91.0, 15.0, -2.0, 1.2, -1);

    // Chapter III: Hanging Pines jutting out from sheer cliffs around the Ravine & Bridge
    this.buildPineTree(110.0, 15.0, -2.0, 1.3, 1);
    this.buildPineTree(137.0, 17.5, -1.8, 1.1, 1);
    this.buildPineTree(163.0, 17.5, -1.8, 1.15, -1);

    // Chapter IV: Temple of Silent Bells Pavilion at x = 183, y = 21.0
    this.buildTempleBellPavilion(183.0, 21.0);
    this.buildPineTree(191.0, 21.0, -2.0, 1.25, -1);

    // Chapter V: Sea of Ink Rising Stone Pillars & Cliff Pines (x = 200..235)
    this.buildPineTree(218.0, 39.0, -2.0, 1.15, 1);
    this.buildPineTree(230.0, 45.0, -2.0, 1.2, -1);

    // Chapter VI: The Last Brushstroke — Framing Bonsai Pines & Rocky Crags around Boss Arena (matching boss_arena.jpg!)
    this.buildPineTree(243.5, 48.0, -1.6, 1.55, 1);
    this.buildPineTree(276.5, 48.0, -1.6, 1.55, -1);

    // Cracked Circular Arena Stone Rim Details on the Boss Plateau (x = 260, y = 48.0)
    for (let i = -7; i <= 7; i++) {
      const curbGeo = new THREE.BoxGeometry(1.9, 0.35, 3.6);
      const curb = new THREE.Mesh(curbGeo, this.stoneMat);
      curb.position.set(260 + i * 2.1, 47.92, 0);
      curb.rotation.z = (i % 2 === 0 ? 1 : -1) * 0.03;
      addInkOutline(curb, 0.035);
      this.scene.add(curb);
    }
  }

  // --- Chapter IV Landmark: Temple of Silent Bells (無音の鐘寺) ---
  buildTempleBellPavilion(x, y) {
    const pavilion = new THREE.Group();
    pavilion.position.set(x, y, -1.8);

    // 4 Timber Posts
    const postGeo = new THREE.CylinderGeometry(0.22, 0.26, 5.2, 8);
    for (const px of [-2.4, 2.4]) {
      const post = new THREE.Mesh(postGeo, this.woodMat);
      post.position.set(px, 2.6, 0);
      addInkOutline(post, 0.035);
      pavilion.add(post);
    }

    // Sweeping Pagoda Roof (Kawara tiles)
    const roofGeo = new THREE.ConeGeometry(4.2, 1.6, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, this.cliffMat);
    roof.position.set(0, 5.8, 0);
    roof.scale.set(1.25, 1.0, 0.75);
    addInkOutline(roof, 0.048);
    pavilion.add(roof);

    // Hanging Giant Bronze Temple Bell (Bonshō)
    this.templeBell = new THREE.Group();
    this.templeBell.position.set(0, 4.6, 0);

    const bellGeo = new THREE.CylinderGeometry(0.52, 0.72, 1.55, 12);
    const bell = new THREE.Mesh(bellGeo, this.cliffMat);
    bell.position.y = -0.9;
    addInkOutline(bell, 0.04);
    this.templeBell.add(bell);

    pavilion.add(this.templeBell);
    this.scene.add(pavilion);
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

  // --- Visual Landmark: Colossal Weathered Sumi-e Torii Gate (matching boss_arena.jpg) ---
  buildToriiGate(x, y) {
    const torii = new THREE.Group();
    torii.position.set(x, y - 2.0, -3.2);

    // Left & Right Tapered Pillars (Hashira) with Stone Pedestals (Kamebara)
    const pillarGeo = new THREE.CylinderGeometry(0.68, 0.86, 14.5, 14);
    const pedestalGeo = new THREE.CylinderGeometry(1.05, 1.25, 1.1, 12);

    for (const side of [-1, 1]) {
      const px = side * 6.4;
      const pillar = new THREE.Mesh(pillarGeo, this.woodMat);
      pillar.position.set(px, 7.2, 0);
      pillar.rotation.z = -side * 0.025; // Subtle inward architectural tilt
      pillar.castShadow = true;
      addInkOutline(pillar, 0.055);
      torii.add(pillar);

      const ped = new THREE.Mesh(pedestalGeo, this.cliffMat);
      ped.position.set(px, 0.55, 0);
      addInkOutline(ped, 0.048);
      torii.add(ped);
    }

    // Lower Crossbeam (Nuki)
    const nukiGeo = new THREE.BoxGeometry(16.5, 0.82, 0.95);
    const nuki = new THREE.Mesh(nukiGeo, this.woodMat);
    nuki.position.set(0, 10.8, 0);
    addInkOutline(nuki, 0.048);
    torii.add(nuki);

    // Upper Secondary Beam (Shimaki)
    const shimakiGeo = new THREE.BoxGeometry(17.8, 0.72, 1.15);
    const shimaki = new THREE.Mesh(shimakiGeo, this.woodMat);
    shimaki.position.set(0, 13.4, 0);
    addInkOutline(shimaki, 0.048);
    torii.add(shimaki);

    // Upper Curved Lintel (Kasagi) — center span + upturned wingtips
    const kasagiCenterGeo = new THREE.BoxGeometry(14.0, 1.05, 1.45);
    const kasagiCenter = new THREE.Mesh(kasagiCenterGeo, this.cliffMat);
    kasagiCenter.position.set(0, 14.15, 0);
    addInkOutline(kasagiCenter, 0.055);
    torii.add(kasagiCenter);

    for (const side of [-1, 1]) {
      const wingGeo = new THREE.BoxGeometry(4.2, 1.05, 1.45);
      const wing = new THREE.Mesh(wingGeo, this.cliffMat);
      wing.position.set(side * 8.4, 14.45, 0);
      wing.rotation.z = side * 0.16; // Iconic upturned Torii wingtips!
      addInkOutline(wing, 0.055);
      torii.add(wing);
    }

    // Center Strut & Tablet (Gakuzuka)
    const tabletGeo = new THREE.BoxGeometry(1.55, 2.5, 0.85);
    const tablet = new THREE.Mesh(tabletGeo, this.cliffMat);
    tablet.position.set(0, 12.1, 0.15);
    addInkOutline(tablet, 0.045);
    torii.add(tablet);

    this.scene.add(torii);
  }

  // --- Visual Landmark: Giant Pale Full Moon Directly Behind the Torii (fog: false!) ---
  buildPaleMoon(x, y) {
    const moonGroup = new THREE.Group();
    moonGroup.position.set(x, y, -14.0);

    // Soft Outer Moon Halo
    const haloGeo = new THREE.CircleGeometry(14.5, 40);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xf7f4eb,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      fog: false,
    });
    moonGroup.add(new THREE.Mesh(haloGeo, haloMat));

    // Bright Full Moon Disc
    const moonGeo = new THREE.CircleGeometry(11.2, 40);
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xfdfbf5,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      fog: false,
    });
    this.moon = new THREE.Mesh(moonGeo, moonMat);
    moonGroup.add(this.moon);

    this.scene.add(moonGroup);
  }

  // --- Visual Landmark: Floating Stolen Scroll ---
  buildFloatingScroll(x, y) {
    this.scrollGroup = new THREE.Group();
    this.scrollGroup.position.set(x, y, 0);

    const rollGeo = new THREE.CylinderGeometry(0.25, 0.25, 1.6, 12);
    const rollMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.rimHighlight),
      roughness: 0.6,
    });
    const roll = new THREE.Mesh(rollGeo, rollMat);
    roll.rotateZ(Math.PI / 2);
    addInkOutline(roll, 0.032);
    this.scrollGroup.add(roll);

    const sealGeo = new THREE.BoxGeometry(0.3, 0.8, 0.55);
    const sealMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
    });
    const seal = new THREE.Mesh(sealGeo, sealMat);
    this.scrollGroup.add(seal);

    this.scrollLight = new THREE.PointLight(0xb8292f, 2.0, 8.0);
    this.scrollGroup.add(this.scrollLight);

    this.scene.add(this.scrollGroup);
  }

  // --- Fixed Update (60 Hz) ---
  fixedUpdate(dt, player) {
    for (const item of this.solidMeshes) {
      if (item.solidRef.crumbling) {
        const targetObj = item.group || item.mesh;
        if (item.solidRef.crumbleState === 'collapsing') {
          targetObj.visible = true;
          targetObj.position.y = item.solidRef.aabb.y - (1.0 - (item.solidRef.crumbleTimer / 0.6)) * 0.2;
          if (item.mesh.material && item.mesh.material.color) {
            item.mesh.material.color.setHex(0xb8292f);
          }
        } else if (item.solidRef.crumbleState === 'collapsed') {
          targetObj.visible = false;
        } else {
          targetObj.visible = true;
          targetObj.position.y = item.solidRef.aabb.y;
          if (item.mesh.material && item.mesh.material.color) {
            item.mesh.material.color.setHex(item.originalColor);
          }
        }
      }
    }

    if (this.shrine) {
      this.shrine.fixedUpdate(dt);
    }

    for (const cp of this.checkpoints) {
      cp.fixedUpdate(dt);
    }

    for (const b of this.bambooStalks) {
      b.fixedUpdate(dt, player);
    }

    for (const l of this.swingingLanterns) {
      l.fixedUpdate(dt, player);
    }

    for (const e of this.enemies) {
      e.fixedUpdate(dt, player);
    }

    this.shockwaves.update(dt);

    if (this.boss) {
      this.boss.fixedUpdate(dt, player);
    }

    if (this.templeBell) {
      this.templeBell.rotation.z = Math.sin(performance.now() * 0.0018) * 0.09;
    }

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
      this.scene.remove(item.group || item.mesh);
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
