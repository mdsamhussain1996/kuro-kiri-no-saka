// Complete 3-Act Campaign Data & Architectural Landmarks (src/levels/CampaignLevels.js)
// Defines Act II: Seijaku-no-Garan (The Silent Sanctuary) and Act III: Aka-no-Kajiya (The Crimson Foundry),
// including Curved Multi-Tier Pagodas, Weeping Ink-Willows, Rotating Iron Forge Wheels,
// Molten Vermilion Ink Rivers, Shadow Archers, Iron Brush Juggernauts, Lady Shirayuki, and Lord Sumi-Ou.

import * as THREE from 'three';
import { addInkOutline } from '../shaders/SumieShader.js';

export const CAMPAIGN_ACTS_DATA = {
  // ============================================================================
  // ACT II — Seijaku-no-Garan (The Silent Sanctuary) [x: 290 → 555, y: 50 → 74]
  // ============================================================================
  act2Sanctuary: {
    solids: [
      // Stepping bridge east of Act I Torii
      { x: 292, y: 50.0, w: 12, h: 1.2, color: 0x5c5b57 },
      // Sanctuary Entrance Courtyard
      { x: 316, y: 51.5, w: 22, h: 1.8, color: 0x4a4843 },
      // Pagoda Eaves & Elevated Rooftops
      { x: 344, y: 55.5, w: 18, h: 1.4, color: 0x3d3b37 },
      { x: 372, y: 59.5, w: 16, h: 1.4, color: 0x4a4843 },
      // Cloud Chasm Stepping Pillars (with Grapple Lanterns overhead)
      { x: 402, y: 63.0, w: 10, h: 1.4, color: 0x5c5b57 },
      { x: 432, y: 66.5, w: 12, h: 1.4, color: 0x5c5b57 },
      // Upper Willow Courtyard
      { x: 464, y: 70.0, w: 22, h: 1.8, color: 0x4a4843 },
      { x: 492, y: 72.0, w: 14, h: 1.4, color: 0x5c5b57 },
      // Boss 2 Arena: The Mist Weaver's Floating Sanctuary (38 units wide)
      { x: 525, y: 72.5, w: 38, h: 2.0, color: 0x3d3a35 },
    ],

    lanterns: [
      { pivotX: 390, pivotY: 70.0, ropeLength: 5.5 },
      { pivotX: 417, pivotY: 73.5, ropeLength: 5.5 },
      { pivotX: 447, pivotY: 76.5, ropeLength: 5.5 },
    ],

    checkpoints: [
      { id: 5, x: 310, y: 52.4 },
      { id: 6, x: 508, y: 73.5 },
    ],

    archers: [
      { x: 348, y: 57.2, facing: -1 },
      { x: 376, y: 61.2, facing: -1 },
      { x: 468, y: 71.8, facing: -1 },
    ],

    tengus: [
      { x: 392, y: 67.5 },
      { x: 446, y: 72.0 },
    ],

    pagodas: [
      { x: 344, y: 56.2, tiers: 3 },
      { x: 464, y: 70.9, tiers: 4 },
      { x: 510, y: 73.5, tiers: 3 },
      { x: 540, y: 73.5, tiers: 3 },
    ],

    willows: [
      { x: 322, y: 52.4, lean: 1 },
      { x: 456, y: 70.9, lean: -1 },
      { x: 525, y: 73.5, lean: 1 },
    ],

    boss: { x: 530, y: 73.5 },
  },

  // ============================================================================
  // ACT III — Aka-no-Kajiya (The Crimson Foundry) [x: 560 → 840, y: 74 → 98]
  // ============================================================================
  act3Foundry: {
    solids: [
      // Bridge from Sanctuary to Crimson Foundry Ridge
      { x: 558, y: 74.0, w: 12, h: 1.2, color: 0x453835 },
      // Foundry Approach & First Juggernaut Anvil Deck
      { x: 584, y: 76.0, w: 26, h: 2.0, color: 0x332b29 },
      // Molten Ink Forge Terraces
      { x: 622, y: 80.5, w: 22, h: 1.8, color: 0x2e2624 },
      { x: 658, y: 85.0, w: 22, h: 1.8, color: 0x332b29 },
      // Iron Chain Crossing & Upper Crucible Deck
      { x: 696, y: 89.5, w: 24, h: 1.8, color: 0x2e2624 },
      { x: 736, y: 94.0, w: 24, h: 1.8, color: 0x332b29 },
      { x: 764, y: 96.0, w: 14, h: 1.4, color: 0x3d3230 },
      // Final Boss 3 Arena: Crucible of the Iron Brush (44 units wide)
      { x: 800, y: 96.5, w: 44, h: 2.2, color: 0x292220 },
    ],

    lanterns: [
      { pivotX: 605, pivotY: 85.0, ropeLength: 5.5 },
      { pivotX: 640, pivotY: 89.5, ropeLength: 5.5 },
      { pivotX: 677, pivotY: 94.0, ropeLength: 5.5 },
      { pivotX: 716, pivotY: 98.5, ropeLength: 5.5 },
    ],

    checkpoints: [
      { id: 7, x: 575, y: 77.0 },
      { id: 8, x: 780, y: 97.6 },
    ],

    juggernauts: [
      { x: 588, y: 78.4, patrolMinX: 576, patrolMaxX: 594 },
      { x: 660, y: 87.3, patrolMinX: 650, patrolMaxX: 666 },
      { x: 738, y: 96.3, patrolMinX: 727, patrolMaxX: 745 },
    ],

    archers: [
      { x: 626, y: 82.3, facing: -1 },
      { x: 700, y: 91.3, facing: -1 },
    ],

    tengus: [
      { x: 640, y: 86.0 },
      { x: 716, y: 95.0 },
    ],

    forgeWheels: [
      { x: 585, y: 81.0, radius: 5.2, speed: 0.45 },
      { x: 658, y: 90.0, radius: 5.8, speed: -0.55 },
      { x: 736, y: 99.0, radius: 5.5, speed: 0.50 },
      { x: 786, y: 103.0, radius: 6.5, speed: 0.40 },
      { x: 814, y: 103.0, radius: 6.5, speed: -0.40 },
    ],

    boss: { x: 806, y: 97.6 },
  },
};

/**
 * Builds a Multi-Tier Japanese Curved Pagoda Tower (Act II Landmark)
 */
export function buildPagodaTower(scene, x, y, tiers = 3, woodMat, cliffMat) {
  const pagoda = new THREE.Group();
  pagoda.position.set(x, y, -3.5);

  for (let t = 0; t < tiers; t++) {
    const scale = 1.0 - t * 0.18;
    const ty = t * 3.1;

    // Timber story core
    const coreGeo = new THREE.BoxGeometry(3.8 * scale, 2.2, 2.8 * scale);
    const core = new THREE.Mesh(coreGeo, woodMat);
    core.position.y = ty + 1.1;
    addInkOutline(core, 0.035);
    pagoda.add(core);

    // Sweeping Curved Pagoda Eaves (Kawara roof)
    const roofGeo = new THREE.ConeGeometry(4.2 * scale, 1.35, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, cliffMat);
    roof.position.y = ty + 2.65;
    roof.scale.set(1.25, 1.0, 0.85);
    addInkOutline(roof, 0.042);
    pagoda.add(roof);
  }

  // Sorin (Bronze Spire Finial at summit)
  const spireGeo = new THREE.CylinderGeometry(0.06, 0.16, 2.4, 8);
  const spire = new THREE.Mesh(spireGeo, cliffMat);
  spire.position.y = tiers * 3.1 + 1.2;
  addInkOutline(spire, 0.025);
  pagoda.add(spire);

  scene.add(pagoda);
  return pagoda;
}

/**
 * Builds a Weeping Ink-Willow Tree with Hanging Curtain Fronds (Act II Landmark)
 */
export function buildWeepingWillow(scene, x, y, lean = 1, woodMat, foliageMat) {
  const willow = new THREE.Group();
  willow.position.set(x, y, -2.2);

  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(lean * 0.4, 1.8, 0),
    new THREE.Vector3(lean * 1.1, 3.6, 0),
    new THREE.Vector3(lean * 1.6, 4.8, 0),
  ]);
  const trunkGeo = new THREE.TubeGeometry(trunkCurve, 12, 0.25, 7, false);
  const trunk = new THREE.Mesh(trunkGeo, woodMat);
  addInkOutline(trunk, 0.032);
  willow.add(trunk);

  // Hanging Weeping Willow Ink Strands
  for (let i = 0; i < 14; i++) {
    const fx = lean * 0.4 + (i - 6) * 0.36;
    const fy = 3.6 + Math.sin(i) * 0.65;
    const len = 2.2 + (i % 3) * 0.65;
    const strandGeo = new THREE.CylinderGeometry(0.03, 0.08, len, 5);
    const strand = new THREE.Mesh(strandGeo, foliageMat);
    strand.position.set(fx, fy - len * 0.5, (i % 2 - 0.5) * 0.4);
    addInkOutline(strand, 0.02);
    willow.add(strand);
  }

  scene.add(willow);
  return willow;
}

/**
 * Builds a Towering Rotating Iron Forge Wheel & Suspended Chains (Act III Landmark)
 */
export function buildIronForgeWheel(scene, x, y, radius = 5.5, cliffMat) {
  const wheelGroup = new THREE.Group();
  wheelGroup.position.set(x, y, -4.2);

  // Outer Iron Rim
  const rimGeo = new THREE.TorusGeometry(radius, 0.38, 8, 24);
  const rim = new THREE.Mesh(rimGeo, cliffMat);
  addInkOutline(rim, 0.045);
  wheelGroup.add(rim);

  // Inner Hub
  const hubGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.7, 12);
  hubGeo.rotateX(Math.PI / 2);
  const hub = new THREE.Mesh(hubGeo, cliffMat);
  addInkOutline(hub, 0.035);
  wheelGroup.add(hub);

  // 8 Heavy Iron Spokes & Paddles
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const spokeGeo = new THREE.BoxGeometry(radius * 1.95, 0.28, 0.35);
    const spoke = new THREE.Mesh(spokeGeo, cliffMat);
    spoke.rotation.z = angle;
    addInkOutline(spoke, 0.03);
    wheelGroup.add(spoke);
  }

  // Glowing Vermilion Furnace Core inside Hub
  const coreGeo = new THREE.CircleGeometry(0.75, 16);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xb8292f, side: THREE.DoubleSide });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.z = 0.38;
  wheelGroup.add(core);

  scene.add(wheelGroup);
  return wheelGroup;
}
