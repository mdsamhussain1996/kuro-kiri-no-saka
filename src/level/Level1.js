// Level 1: "Kiri-no-Saka" Master Level Assembler (Sumiro & Concept Art Visual Pass)
// Assembles carved sumi-e stone steps, craggy cliff foundations, gnarled bonsai pine trees,
// Temple of Silent Bells pavilion, churning Sea of Ink, and the moonlit Torii Boss Arena.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { events } from '../core/EventBus.js';
import { saveSystem } from '../core/SaveSystem.js';
import { AABB } from '../physics/Collision.js';
import { LEVEL1_DATA } from './level1.data.js';
import { BambooStalk } from './Bamboo.js';
import { SwingingLantern } from './SwingingLantern.js';
import { SuspensionBridge } from './SuspensionBridge.js';
import { InkShrine } from './InkShrine.js';
import { LanternCheckpoint } from './LanternCheckpoint.js';
import { AshigaruSentry } from '../enemies/AshigaruSentry.js';
import { InkWingTengu } from '../enemies/InkWingTengu.js';
import { ShadowArcher } from '../enemies/ShadowArcher.js';
import { IronBrushJuggernaut } from '../enemies/IronBrushJuggernaut.js';
import { ProjectileManager } from '../physics/ProjectileManager.js';
import { InkShockwaveManager } from '../boss/InkShockwave.js';
import { Kurogane } from '../boss/Kurogane.js';
import { LadyShirayuki } from '../boss/LadyShirayuki.js';
import { LordSumiOu } from '../boss/LordSumiOu.js';
import {
  CAMPAIGN_ACTS_DATA,
  buildPagodaTower,
  buildWeepingWillow,
  buildIronForgeWheel,
} from '../levels/CampaignLevels.js';
import { createSumieMaterial, addInkOutline } from '../render/SumieMaterial.js';

export class Level1 {
  constructor({ scene, collision, inkSplash }) {
    this.scene = scene;
    this.collision = collision;
    this.inkSplash = inkSplash;
    this.shockwaves = new InkShockwaveManager(scene);

    // Arena walls: only up while the active boss fight is running (per boss/act)
    this.arenaLockBoxes = [];
    this.arenaLockBoxesByBoss = { kurogane: [], shirayuki: [], sumiOu: [] };
    this.arenaLockRefs = [];
    this.arenaLockRefsByBoss = { kurogane: [], shirayuki: [], sumiOu: [] };
    this._unsubBossIntro = events.on('boss_intro_start', (payload) => {
      if (payload?.name && payload.name === this.bossShirayuki?.name) {
        this.setArenaLocked(true, 'shirayuki');
      } else if (payload?.name && payload.name === this.bossSumiOu?.name) {
        this.setArenaLocked(true, 'sumiOu');
      } else {
        this.setArenaLocked(true, 'kurogane');
      }
    });
    this._unsubBossDefeated = events.on('boss_defeated', () => this.setArenaLocked(false));
    this._unsubAct2BossDefeated = events.on('act2_boss_defeated', () => this.setArenaLocked(false));
    this._unsubPlayerDied = events.on('player_died', () => this.setArenaLocked(false));
    this._unsubPlayerRespawn = events.on('player:respawn', () => this.setArenaLocked(false));

    this.solidMeshes = [];
    this.scenicObjects = [];
    this.pitTriggers = [];
    this.fogMesh = null;
    this.lavaMesh = null;
    this.bambooStalks = [];
    this.swingingLanterns = [];
    this.checkpoints = [];
    this.campaignCheckpoints = [];
    this.enemies = [];
    this.shrine = null;
    this.bridge = null;
    this.boss = null;
    this.bossShirayuki = null;
    this.bossSumiOu = null;
    this.templeBell = null;
    this.bellSwingAmp = 0.09;
    this.bellSwingPhase = 0;
    this.paintedBridges = [];
    this.bellRings = [];
    this.forgeWheels = [];
    this.projectiles = new ProjectileManager(scene, inkSplash);

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

    // 1. Bottomless Fog Pit Triggers (Act I, Act II Sanctuary, Act III Molten River & Fallback Floor)
    const pitBox = new AABB(150, data.fogPitY, 400, 4.0);
    this.pitTriggers.push(this.collision.addTrigger(pitBox, null, { type: 'pit', tag: 'act1_pit' }));
    this.pitTriggers.push(this.collision.addTrigger(new AABB(427.5, 36, 275, 4.0), null, { type: 'pit', tag: 'act2_pit' }));
    this.pitTriggers.push(this.collision.addTrigger(new AABB(700, 68.5, 320, 4.5), null, { type: 'pit', tag: 'act3_molten_river' }));
    this.pitTriggers.push(this.collision.addTrigger(new AABB(650, 30, 600, 4.0), null, { type: 'pit', tag: 'act2_3_fallback_pit' }));

    const fogMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.parchment),
      transparent: true,
      opacity: 0.90,
      fog: false,
    });
    this.fogMesh = new THREE.Mesh(new THREE.PlaneGeometry(600, 14), fogMat);
    this.fogMesh.position.set(150, data.fogPitY - 6, 1.5);
    this.scene.add(this.fogMesh);

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

    // 6. Boss 1: Kurogane (positioned in the moonlit Torii archway facing Kuro)
    this.boss = new Kurogane({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      shockwaves: this.shockwaves,
      x: data.act3.toriiGate.x + 3.2,
      y: data.act3.toriiGate.y,
    });

    // 7. Assemble Campaign Act II (Seijaku-no-Garan — The Silent Sanctuary) & Act III (Aka-no-Kajiya — The Crimson Foundry)
    this.buildExtendedCampaignActs();

    // 8. Early Chapter 1 safety checkpoint before crumbling steps & ledge cliff
    this.campaignCheckpoints.push(new LanternCheckpoint({
      id: 101,
      scene: this.scene,
      collision: this.collision,
      x: 28,
      y: 5.9,
    }));

    // 9. Bell-revealed Invisible-Ink Platforms (solidify & glow for 8s when Bell rings)
    this.mistPlatforms = [];
    this.mistRevealTimer = 0;
    const mistPlats = [
      { x: 179, y: 32.5, w: 4.5, h: 0.6 },
      { x: 191, y: 33.8, w: 4.5, h: 0.6 },
      { x: 388, y: 61.5, w: 5.0, h: 0.6 },
    ];
    for (const mp of mistPlats) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(mp.w, mp.h, 2.2),
        new THREE.MeshBasicMaterial({ color: 0xa8321f, transparent: true, opacity: 0.16, wireframe: true })
      );
      mesh.position.set(mp.x, mp.y, 0);
      this.scene.add(mesh);
      this.mistPlatforms.push({ ...mp, mesh, solidRef: null });
    }

    // 10. Lost Brushstrokes (3 per chapter)
    this.collectibles = [];
    const strokes = [
      { ch: 1, x: 22, y: 5.5 }, { ch: 1, x: 35, y: 9.0 }, { ch: 1, x: 42, y: 11.0 },
      { ch: 2, x: 65, y: 14.5 }, { ch: 2, x: 85, y: 18.2 }, { ch: 2, x: 96, y: 19.0 },
      { ch: 3, x: 130, y: 15.0 }, { ch: 3, x: 163, y: 34.0 }, { ch: 3, x: 179, y: 34.5 },
      { ch: 5, x: 330, y: 55.0 }, { ch: 5, x: 375, y: 58.0 }, { ch: 5, x: 440, y: 65.0 },
      { ch: 7, x: 610, y: 80.0 }, { ch: 7, x: 670, y: 86.0 }, { ch: 7, x: 730, y: 92.0 },
    ];
    const savedBrushstrokes = saveSystem.load().brushstrokes || [];
    for (let i = 0; i < strokes.length; i++) {
      const st = strokes[i];
      const id = `bs_${st.ch}_${i}`;
      const alreadyCollected = Array.isArray(savedBrushstrokes) && savedBrushstrokes.includes(id);
      const orb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.32, 0),
        new THREE.MeshBasicMaterial({ color: 0xa8321f })
      );
      orb.position.set(st.x, st.y, 0);
      orb.visible = !alreadyCollected;
      this.scene.add(orb);
      this.collectibles.push({
        id,
        type: 'brushstroke',
        ch: st.ch,
        x: st.x,
        y: st.y,
        mesh: orb,
        collected: alreadyCollected,
      });
    }
  }

  buildExtendedCampaignActs() {
    const act2 = CAMPAIGN_ACTS_DATA.act2Sanctuary;
    const act3 = CAMPAIGN_ACTS_DATA.act3Foundry;

    // --- ACT II: Seijaku-no-Garan (The Silent Sanctuary) ---
    this.buildSolids(act2.solids);
    for (const l of act2.lanterns) {
      this.swingingLanterns.push(new SwingingLantern({
        scene: this.scene,
        collision: this.collision,
        pivotX: l.pivotX,
        pivotY: l.pivotY,
        ropeLength: l.ropeLength,
      }));
    }
    for (const cp of act2.checkpoints) {
      this.campaignCheckpoints.push(new LanternCheckpoint({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: cp.x,
        y: cp.y,
        id: cp.id,
      }));
    }
    for (const a of act2.archers) {
      this.enemies.push(new ShadowArcher({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        projectiles: this.projectiles,
        x: a.x,
        y: a.y,
        facing: a.facing,
      }));
    }
    for (const t of act2.tengus) {
      this.enemies.push(new InkWingTengu({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: t.x,
        y: t.y,
      }));
    }
    for (const p of act2.pagodas) {
      this.scenicObjects.push(buildPagodaTower(this.scene, p.x, p.y, p.tiers, this.woodMat, this.cliffMat));
    }
    for (const w of act2.willows) {
      this.scenicObjects.push(buildWeepingWillow(this.scene, w.x, w.y, w.lean, this.woodMat, this.pineFoliageMat));
    }
    if (act2.arenaLock) {
      this.arenaLockBoxesByBoss.shirayuki.push(
        new AABB(act2.arenaLock.minX, act2.arenaLock.wallY + act2.arenaLock.wallH * 0.5 - 2, 1, act2.arenaLock.wallH),
        new AABB(act2.arenaLock.maxX, act2.arenaLock.wallY + act2.arenaLock.wallH * 0.5 - 2, 1, act2.arenaLock.wallH)
      );
    }

    // Boss 2: Lady Shirayuki, the Mist Weaver
    this.bossShirayuki = new LadyShirayuki({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      projectiles: this.projectiles,
      x: act2.boss.x,
      y: act2.boss.y,
    });

    // --- ACT III: Aka-no-Kajiya (The Crimson Foundry) ---
    this.buildSolids(act3.solids);
    for (const l of act3.lanterns) {
      this.swingingLanterns.push(new SwingingLantern({
        scene: this.scene,
        collision: this.collision,
        pivotX: l.pivotX,
        pivotY: l.pivotY,
        ropeLength: l.ropeLength,
      }));
    }
    for (const cp of act3.checkpoints) {
      this.campaignCheckpoints.push(new LanternCheckpoint({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: cp.x,
        y: cp.y,
        id: cp.id,
      }));
    }
    for (const j of act3.juggernauts) {
      this.enemies.push(new IronBrushJuggernaut({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: j.x,
        y: j.y,
        patrolMinX: j.patrolMinX,
        patrolMaxX: j.patrolMaxX,
      }));
    }
    for (const a of act3.archers) {
      this.enemies.push(new ShadowArcher({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        projectiles: this.projectiles,
        x: a.x,
        y: a.y,
        facing: a.facing,
      }));
    }
    for (const t of act3.tengus) {
      this.enemies.push(new InkWingTengu({
        scene: this.scene,
        collision: this.collision,
        inkSplash: this.inkSplash,
        x: t.x,
        y: t.y,
      }));
    }
    for (const fw of act3.forgeWheels) {
      const wheelMesh = buildIronForgeWheel(this.scene, fw.x, fw.y, fw.radius, this.cliffMat);
      this.forgeWheels.push({ mesh: wheelMesh, speed: fw.speed });
    }

    // Molten Vermilion Ink River glowing below Act III Crimson Foundry
    const lavaGeo = new THREE.PlaneGeometry(310, 4.5);
    const lavaMat = new THREE.MeshBasicMaterial({
      color: 0xb8292f,
      transparent: true,
      opacity: 0.72,
      fog: false,
    });
    this.lavaMesh = new THREE.Mesh(lavaGeo, lavaMat);
    this.lavaMesh.position.set(700, 68.5, -1.5);
    this.scene.add(this.lavaMesh);

    if (act3.arenaLock) {
      this.arenaLockBoxesByBoss.sumiOu.push(
        new AABB(act3.arenaLock.minX, act3.arenaLock.wallY + act3.arenaLock.wallH * 0.5 - 2, 1, act3.arenaLock.wallH),
        new AABB(act3.arenaLock.maxX, act3.arenaLock.wallY + act3.arenaLock.wallH * 0.5 - 2, 1, act3.arenaLock.wallH)
      );
    }

    // Grand Foundry Torii & Boss 3: Lord Sumi-Ou, Warlord of the Iron Brush
    this.buildToriiGate(800, 97.6);
    this.bossSumiOu = new LordSumiOu({
      scene: this.scene,
      collision: this.collision,
      inkSplash: this.inkSplash,
      shockwaves: this.shockwaves,
      x: act3.boss.x,
      y: act3.boss.y,
    });
  }

  // --- Sculpted Sumi-e Stone Steps & Rocky Cliffs ---
  buildSolids(solids) {
    if (!solids) return;

    for (const s of solids) {
      const box = new AABB(s.x, s.y, s.w, s.h);
      if (s.arenaLock) {
        // Arena walls stay down until the boss intro starts (see setArenaLocked)
        this.arenaLockBoxes.push(box);
        this.arenaLockBoxesByBoss.kurogane.push(box);
        continue;
      }
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

          // Organic Multi-Faceted Rocky Cliff Outcrops & Stepped Masonry Courses underneath the platform
          if (s.h <= 4.5) {
            const tier1Geo = new THREE.BoxGeometry(s.w * 0.90, 0.72, 2.7);
            const tier1 = new THREE.Mesh(tier1Geo, this.stoneMat);
            tier1.position.set(0, -s.h * 0.5 - 0.36, -0.05);
            addInkOutline(tier1, 0.032);
            group.add(tier1);

            // Craggy Multi-Faceted Rock Boulders forming the natural cliff underside
            const rockCount = Math.min(14, Math.max(3, Math.floor(s.w / 2.6)));
            const stepW = (s.w * 0.82) / rockCount;
            for (let r = 0; r < rockCount; r++) {
              const rx = -s.w * 0.41 + stepW * (r + 0.5);
              const distFromCenter = 1.0 - Math.abs(rx) / (s.w * 0.5);
              const rockRadius = 0.85 + distFromCenter * 0.85 + ((r * 11) % 3) * 0.18;
              const rockGeo = new THREE.DodecahedronGeometry(rockRadius, 0);
              const rock = new THREE.Mesh(rockGeo, this.cliffMat);
              rock.position.set(rx, -s.h * 0.5 - 0.85 - distFromCenter * 0.55, ((r % 2) - 0.5) * 0.3);
              rock.scale.set(1.35, 0.95, 1.05);
              rock.rotation.set(r * 0.7, r * 1.1, r * 0.4);
              addInkOutline(rock, 0.035);
              group.add(rock);
            }
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
      const solidRef = this.collision.addOneWay(box);

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
      this.solidMeshes.push({ mesh, group, solidRef, originalColor: 0x5c5b57 });
    }
  }

  // --- Organic Gnarled Japanese Bonsai / Mountain Pine Tree Generator ---
  buildPineTree(x, y, z = -1.8, scale = 1.0, lean = 1) {
    const pine = new THREE.Group();
    pine.position.set(x, y, z);
    pine.scale.set(scale, scale, scale);

    // 1. Curved Gnarled Main Trunk (CatmullRomCurve3 + TubeGeometry)
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(lean * 0.25, 1.15, 0.08),
      new THREE.Vector3(lean * 0.85, 2.35, -0.10),
      new THREE.Vector3(lean * 1.45, 3.45, 0.05),
      new THREE.Vector3(lean * 1.15, 4.35, 0),
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 14, 0.22, 7, false);
    const trunkMesh = new THREE.Mesh(trunkGeo, this.woodMat);
    addInkOutline(trunkMesh, 0.032);
    pine.add(trunkMesh);

    // Flared Root Base Gripping the Stone
    const rootBaseGeo = new THREE.ConeGeometry(0.45, 0.75, 7);
    const rootBase = new THREE.Mesh(rootBaseGeo, this.woodMat);
    rootBase.position.set(0, 0.3, 0);
    addInkOutline(rootBase, 0.032);
    pine.add(rootBase);

    // 2. Reaching Gnarled Secondary Branches
    const branches = [
      [new THREE.Vector3(lean * 0.35, 1.6, 0), new THREE.Vector3(lean * 1.35, 1.95, 0.15), new THREE.Vector3(lean * 2.15, 2.15, 0.1)],
      [new THREE.Vector3(lean * 0.75, 2.3, 0), new THREE.Vector3(-lean * 0.25, 2.75, -0.15), new THREE.Vector3(-lean * 0.95, 3.05, 0)],
      [new THREE.Vector3(lean * 1.25, 3.1, 0), new THREE.Vector3(lean * 2.15, 3.45, -0.1), new THREE.Vector3(lean * 2.75, 3.65, 0.05)],
    ];

    for (const bPts of branches) {
      const bCurve = new THREE.CatmullRomCurve3(bPts);
      const bGeo = new THREE.TubeGeometry(bCurve, 8, 0.11, 6, false);
      const bMesh = new THREE.Mesh(bGeo, this.woodMat);
      addInkOutline(bMesh, 0.025);
      pine.add(bMesh);
    }

    // 3. Organic Multi-Faceted Sumi-e Pine Needle Clusters (Replacing smooth oval spheres!)
    const canopyCenters = [
      { x: lean * 2.1, y: 2.2, z: 0.1, r: 0.65, count: 5 },
      { x: -lean * 0.9, y: 3.1, z: 0.0, r: 0.62, count: 5 },
      { x: lean * 2.7, y: 3.7, z: 0.05, r: 0.68, count: 5 },
      { x: lean * 1.2, y: 4.45, z: 0.0, r: 0.82, count: 7 },
    ];

    for (const c of canopyCenters) {
      for (let i = 0; i < c.count; i++) {
        const angle = (i / c.count) * Math.PI * 2;
        const dist = i === 0 ? 0 : c.r * 0.62;
        const ox = c.x + Math.cos(angle) * dist;
        const oy = c.y + Math.sin(angle) * (dist * 0.28) + (i === 0 ? 0.14 : 0);
        const oz = c.z + Math.sin(angle) * 0.22;

        // Faceted low-poly icosahedron cloud tuft flattened horizontally like real bonsai needle pads
        const tuftRadius = c.r * (i === 0 ? 0.85 : 0.62);
        const tuftGeo = new THREE.IcosahedronGeometry(tuftRadius, 1);
        tuftGeo.scale(1.35, 0.42, 0.95);
        const tuft = new THREE.Mesh(tuftGeo, this.pineFoliageMat);
        tuft.position.set(ox, oy, oz);
        tuft.rotation.y = i * 0.9;
        addInkOutline(tuft, 0.028);
        pine.add(tuft);
      }
    }

    this.scene.add(pine);
    this.scenicObjects.push(pine);
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
      this.scenicObjects.push(curb);
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
    this.scenicObjects.push(pavilion);
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
    this.scenicObjects.push(torii);
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
    this.scenicObjects.push(moonGroup);
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
    this.scenicObjects.push(this.scrollGroup);
  }

  // --- INNOVATION 1: Interactive "Living Brushstroke" Ink Bridge (Press E or Click Canvas) ---
  _disposeObject3D(obj) {
    if (!obj) return;
    const disposedMats = new Set([this.stoneMat, this.cliffMat, this.woodMat, this.pineFoliageMat]);
    obj.traverse?.((node) => {
      if (node.geometry) node.geometry.dispose();
      if (node.material && !disposedMats.has(node.material)) {
        disposedMats.add(node.material);
        node.material.dispose();
      }
    });
    obj.clear?.();
    this.scene.remove(obj);
  }

  paintInkBridge(x, y, facing = 1) {
    // Limit active painted bridges to 3 (remove oldest if exceeded)
    if (this.paintedBridges.length >= 3) {
      const oldest = this.paintedBridges.shift();
      this.collision.removeSolid(oldest.solidRef);
      this._disposeObject3D(oldest.group);
    }

    const w = 4.6;
    const h = 0.44;
    const bx = x + facing * (w * 0.5 + 0.45);
    const by = y - 1.12;

    const box = new AABB(bx, by, w, h);
    const solidRef = this.collision.addOneWay(box);

    const group = new THREE.Group();
    group.position.set(bx, by, 0);

    // Sculpted Calligraphic Sumi-e Brush-Stroke Ribbon Platform
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-w * 0.5, -0.05, 0),
      new THREE.Vector3(-w * 0.2, 0.08, 0.06),
      new THREE.Vector3(w * 0.2, -0.04, -0.06),
      new THREE.Vector3(w * 0.5, 0.06, 0),
    ]);
    const strokeGeo = new THREE.TubeGeometry(curve, 16, 0.26, 8, false);
    strokeGeo.scale(1.0, 0.72, 3.8);
    const strokeMesh = new THREE.Mesh(strokeGeo, this.cliffMat);
    addInkOutline(strokeMesh, 0.035);
    group.add(strokeMesh);

    // Glowing Vermilion Artist Hanko Seal Stamp at the tip of the brushstroke
    const sealGeo = new THREE.BoxGeometry(0.42, 0.42, 0.42);
    const sealMat = new THREE.MeshBasicMaterial({ color: 0xb8292f });
    const sealMesh = new THREE.Mesh(sealGeo, sealMat);
    sealMesh.position.set(facing * (w * 0.46), 0.14, 0.65);
    group.add(sealMesh);

    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(bx, by, facing, 14, true);
    }

    this.scene.add(group);
    this.paintedBridges.push({
      group,
      solidRef,
      timer: 7.5,
      maxTime: 7.5,
      x: bx,
      y: by,
    });
  }

  // --- INNOVATION 2: Resonant Bell Acoustic Sumi-e Soundwave (Press F) ---
  triggerBellResonance(player) {
    const px = player ? player.aabb.x : 183.0;
    const py = player ? player.aabb.y : 23.0;

    // Reveal invisible-ink mist platforms for 8 seconds
    this.mistRevealTimer = 8.0;
    if (this.mistPlatforms) {
      for (const mp of this.mistPlatforms) {
        if (!mp.solidRef) {
          mp.solidRef = this.collision.addSolid(new AABB(mp.x, mp.y, mp.w, mp.h), { runnable: false, crumbling: false });
        }
        mp.mesh.material.wireframe = false;
        mp.mesh.material.opacity = 0.85;
      }
    }
    events.emit('mist_cleared', { x: px, y: py, duration: 8.0 });

    // Swing the Temple Bell vigorously if nearby
    if (this.templeBell) {
      this.bellSwingAmp = 0.45;
      this.templeBell.rotation.z = this.bellSwingAmp;
    }

    // Create expanding concentric calligraphic soundwave rings
    const ringGroup = new THREE.Group();
    ringGroup.position.set(px, py, 0.4);

    const r1Geo = new THREE.RingGeometry(0.85, 1.05, 36);
    const r1Mat = new THREE.MeshBasicMaterial({
      color: 0xb8292f,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const r2Geo = new THREE.RingGeometry(0.55, 0.68, 36);
    const r2Mat = new THREE.MeshBasicMaterial({
      color: 0x141413,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });

    ringGroup.add(new THREE.Mesh(r1Geo, r1Mat));
    ringGroup.add(new THREE.Mesh(r2Geo, r2Mat));
    this.scene.add(ringGroup);

    this.bellRings.push({
      group: ringGroup,
      r1Mat,
      r2Mat,
      timer: 0.75,
      maxTime: 0.75,
    });

    // Stagger all nearby enemies within 15 units & refresh player air dash!
    if (player) {
      player.hasAirDash = true;
    }
    for (const e of this.enemies) {
      if (!e.isDead && Math.hypot(e.aabb.x - px, e.aabb.y - py) < 15.0) {
        if (typeof e.onParried === 'function') {
          e.onParried(true);
        }
      }
    }
  }

  // --- Fixed Update (60 Hz) ---
  setArenaLocked(locked, bossKey = null) {
    if (locked) {
      const key = bossKey || 'kurogane';
      const boxes = this.arenaLockBoxesByBoss[key] || [];
      const existing = this.arenaLockRefsByBoss[key] || [];
      if (existing.length === 0 && boxes.length > 0) {
        const added = boxes.map((box) =>
          this.collision.addSolid(new AABB(box.x, box.y, box.width, box.height))
        );
        this.arenaLockRefsByBoss[key] = added;
        this.arenaLockRefs = [
          ...this.arenaLockRefsByBoss.kurogane,
          ...this.arenaLockRefsByBoss.shirayuki,
          ...this.arenaLockRefsByBoss.sumiOu,
        ];
      }
    } else {
      const keys = bossKey ? [bossKey] : ['kurogane', 'shirayuki', 'sumiOu'];
      for (const k of keys) {
        const refs = this.arenaLockRefsByBoss[k] || [];
        for (const ref of refs) this.collision.removeSolid(ref);
        this.arenaLockRefsByBoss[k] = [];
      }
      this.arenaLockRefs = [
        ...this.arenaLockRefsByBoss.kurogane,
        ...this.arenaLockRefsByBoss.shirayuki,
        ...this.arenaLockRefsByBoss.sumiOu,
      ];
    }
  }

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

    if (this.mistRevealTimer > 0) {
      this.mistRevealTimer -= dt;
      if (this.mistRevealTimer <= 0 && this.mistPlatforms) {
        for (const mp of this.mistPlatforms) {
          if (mp.solidRef) {
            this.collision.removeSolid(mp.solidRef);
            mp.solidRef = null;
          }
          mp.mesh.material.wireframe = true;
          mp.mesh.material.opacity = 0.16;
        }
      }
    }

    if (this.collectibles && player) {
      for (const c of this.collectibles) {
        if (c.collected) continue;
        c.mesh.rotation.y += dt * 2.4;
        const dx = player.aabb.x - c.x;
        const dy = player.aabb.y - c.y;
        if (dx * dx + dy * dy < 1.3 * 1.3) {
          c.collected = true;
          c.mesh.visible = false;
          player.addInk?.(60);
          events.emit('brushstroke_collected', { id: c.id, ch: c.ch });
        }
      }
    }

    for (const cp of this.checkpoints) {
      cp.fixedUpdate(dt);
    }
    for (const cp of this.campaignCheckpoints) {
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
    if (this.bossShirayuki) {
      this.bossShirayuki.fixedUpdate(dt, player);
    }
    if (this.bossSumiOu) {
      this.bossSumiOu.fixedUpdate(dt, player);
    }
    if (this.projectiles) {
      this.projectiles.fixedUpdate(
        dt,
        player,
        this.enemies,
        [this.boss, this.bossShirayuki, this.bossSumiOu],
        this.collision
      );
    }

    for (const fw of this.forgeWheels) {
      fw.mesh.rotation.z += fw.speed * dt;
    }

    if (this.templeBell) {
      this.bellSwingPhase += dt * 4.5;
      this.bellSwingAmp = Math.max(0.06, this.bellSwingAmp * Math.exp(-1.5 * dt));
      this.templeBell.rotation.z = Math.sin(this.bellSwingPhase) * this.bellSwingAmp;
    }

    // Update Living Brushstroke Ink Bridges
    for (let i = this.paintedBridges.length - 1; i >= 0; i--) {
      const br = this.paintedBridges[i];
      br.timer -= dt;
      if (br.timer < 1.2) {
        br.group.scale.y = Math.max(0.1, br.timer / 1.2);
      }
      if (br.timer <= 0) {
        this.collision.removeSolid(br.solidRef);
        this._disposeObject3D(br.group);
        this.paintedBridges.splice(i, 1);
      }
    }

    // Update Resonant Bell Soundwave Rings
    for (let i = this.bellRings.length - 1; i >= 0; i--) {
      const ring = this.bellRings[i];
      ring.timer -= dt;
      const p = 1.0 - ring.timer / ring.maxTime;
      const s = 1.0 + p * 12.0;
      ring.group.scale.set(s, s, 1);
      ring.r1Mat.opacity = Math.max(0, (1.0 - p) * 0.9);
      ring.r2Mat.opacity = Math.max(0, (1.0 - p) * 0.85);
      if (ring.timer <= 0) {
        this._disposeObject3D(ring.group);
        this.bellRings.splice(i, 1);
      }
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
    if (this.bossShirayuki) {
      this.bossShirayuki.render(alpha);
    }
    if (this.bossSumiOu) {
      this.bossSumiOu.render(alpha);
    }
  }

  clearPaintedBridges() {
    for (const br of this.paintedBridges) {
      this.collision.removeSolid(br.solidRef);
      this._disposeObject3D(br.group);
    }
    this.paintedBridges = [];
  }

  clearMistPlatforms() {
    this.mistRevealTimer = 0;
    for (const mp of this.mistPlatforms || []) {
      if (mp.solidRef) {
        this.collision.removeSolid(mp.solidRef);
        mp.solidRef = null;
      }
      if (mp.mesh?.material) {
        mp.mesh.material.wireframe = true;
        mp.mesh.material.opacity = 0.16;
      }
    }
  }

  dispose() {
    this._unsubBossIntro?.();
    this._unsubBossDefeated?.();
    this._unsubAct2BossDefeated?.();
    this._unsubPlayerDied?.();
    this._unsubPlayerRespawn?.();

    this.setArenaLocked(false);
    for (const tr of this.pitTriggers) {
      this.collision.removeTrigger(tr);
    }
    this.pitTriggers = [];

    for (const item of this.solidMeshes) {
      this.collision.removeSolid(item.solidRef);
      this._disposeObject3D(item.group || item.mesh);
    }
    this.solidMeshes = [];

    for (const obj of this.scenicObjects) {
      this._disposeObject3D(obj);
    }
    this.scenicObjects = [];

    for (const fw of this.forgeWheels) {
      this._disposeObject3D(fw.mesh);
    }
    this.forgeWheels = [];

    if (this.fogMesh) {
      this._disposeObject3D(this.fogMesh);
      this.fogMesh = null;
    }
    if (this.lavaMesh) {
      this._disposeObject3D(this.lavaMesh);
      this.lavaMesh = null;
    }

    this.clearPaintedBridges();
    for (const ring of this.bellRings) {
      this._disposeObject3D(ring.group);
    }
    this.bellRings = [];

    for (const mp of this.mistPlatforms || []) {
      if (mp.solidRef) {
        this.collision.removeSolid(mp.solidRef);
        mp.solidRef = null;
      }
      this._disposeObject3D(mp.mesh);
    }
    this.mistPlatforms = [];

    for (const c of this.collectibles || []) {
      this._disposeObject3D(c.mesh);
    }
    this.collectibles = [];

    for (const b of this.bambooStalks) b.dispose();
    for (const l of this.swingingLanterns) l.dispose();
    for (const cp of this.checkpoints) cp.dispose();
    for (const cp of this.campaignCheckpoints) cp.dispose();
    for (const e of this.enemies) e.dispose();
    if (this.shrine) this.shrine.dispose();
    if (this.bridge) this.bridge.dispose();
    if (this.boss) this.boss.dispose();
    if (this.bossShirayuki) this.bossShirayuki.dispose();
    if (this.bossSumiOu) this.bossSumiOu.dispose();
    if (this.projectiles) this.projectiles.dispose();
    if (this.shockwaves) this.shockwaves.dispose();

    this.stoneMat?.dispose();
    this.cliffMat?.dispose();
    this.woodMat?.dispose();
    this.pineFoliageMat?.dispose();
  }
}
