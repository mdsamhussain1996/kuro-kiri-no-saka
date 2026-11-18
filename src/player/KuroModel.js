// Kuro Procedural Character Model — Authentic Sumi-e Shinobi Wanderer
// Articulated side-profile anatomy oriented along +X, woven kasa hat with radial ribs,
// armored bracers (kote), pleated hakama, shin guards (suneate), tabi boots,
// katana scabbard & drawn blade, 3D Verlet cloth cape mesh, and twin headband ribbons.

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { createSumieMaterial, addInkOutline } from '../render/SumieMaterial.js';

export class KuroModel {
  constructor() {
    this.root = new THREE.Group();

    // Offset bodyRoot by -halfH so feet (y=0 in bodyRoot) rest squarely on the ground!
    this.bodyRoot = new THREE.Group();
    this.bodyRoot.position.y = -CONFIG.PLAYER.height * 0.5;
    this.root.add(this.bodyRoot);

    const matDark = createSumieMaterial({
      inkDark: 0x121211,
      inkMid: 0x2c2b28,
      inkLight: 0x55534d,
      noiseScale: 5.5,
      darkBias: 0.22,
    });
    const matMid = createSumieMaterial({
      inkDark: 0x1c1b19,
      inkMid: 0x484641,
      inkLight: 0x7d7a72,
      noiseScale: 5.0,
      darkBias: 0.08,
    });
    const matArmor = createSumieMaterial({
      inkDark: 0x111110,
      inkMid: 0x33312d,
      inkLight: 0x6b6860,
      noiseScale: 7.0,
      darkBias: 0.15,
    });

    // ---------------- 1. TORSO, GI & SHOULDER MANTLE ----------------
    this.torsoGroup = new THREE.Group();
    this.torsoGroup.position.set(0, 0.96, 0);
    this.bodyRoot.add(this.torsoGroup);

    // Core Gi chest (tapered cylinder oriented in 3D)
    const chestGeo = new THREE.CylinderGeometry(0.24, 0.20, 0.62, 10);
    const chest = new THREE.Mesh(chestGeo, matMid);
    chest.castShadow = true;
    addInkOutline(chest, 0.032);
    this.torsoGroup.add(chest);

    // Wrapped Shoulder Mantle / Cloak Collar
    const mantleGeo = new THREE.CylinderGeometry(0.27, 0.34, 0.28, 12);
    const mantle = new THREE.Mesh(mantleGeo, matDark);
    mantle.position.y = 0.22;
    addInkOutline(mantle, 0.035);
    this.torsoGroup.add(mantle);

    // Obi (Waist Sash)
    const obiGeo = new THREE.CylinderGeometry(0.22, 0.23, 0.15, 10);
    const obi = new THREE.Mesh(obiGeo, matDark);
    obi.position.y = -0.24;
    addInkOutline(obi, 0.028);
    this.torsoGroup.add(obi);

    // ---------------- 2. HEAD, MASK & WOVEN KASA HAT ----------------
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0.03, 0.46, 0);
    this.torsoGroup.add(this.headGroup);

    // Wrapped Hood & Mask
    const headGeo = new THREE.SphereGeometry(0.21, 12, 10);
    const headMesh = new THREE.Mesh(headGeo, matDark);
    addInkOutline(headMesh, 0.028);
    this.headGroup.add(headMesh);

    // Fierce Eye Slit (facing +X)
    const eyeGeo = new THREE.BoxGeometry(0.08, 0.035, 0.24);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xf5f1e6 });
    const eyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
    eyeMesh.position.set(0.16, 0.03, 0);
    this.headGroup.add(eyeMesh);

    // Conical Woven Straw Kasa Hat (matching kuro_side.jpg & kuro_front.jpg)
    const kasaTex = this.generateKasaTexture();
    const kasaMat = kasaTex
      ? new THREE.MeshStandardMaterial({
          map: kasaTex,
          roughness: 0.85,
          metalness: 0.05,
          bumpMap: kasaTex,
          bumpScale: 0.02,
        })
      : matMid;

    const hatGeo = new THREE.ConeGeometry(0.88, 0.30, 24);
    this.hat = new THREE.Mesh(hatGeo, kasaMat);
    this.hat.position.set(0.02, 0.19, 0);
    this.hat.rotation.z = -0.06; // subtle forward tilt
    this.hat.castShadow = true;
    addInkOutline(this.hat, 0.036);
    this.headGroup.add(this.hat);

    // Black Ink Brim Ring on Kasa Hat
    const brimGeo = new THREE.TorusGeometry(0.88, 0.024, 6, 24);
    brimGeo.rotateX(Math.PI / 2);
    const brimMat = new THREE.MeshBasicMaterial({ color: 0x141413 });
    const brim = new THREE.Mesh(brimGeo, brimMat);
    brim.position.y = -0.14;
    this.hat.add(brim);

    // ---------------- 3. ARTICULATED ARMS & KOTE BRACERS ----------------
    // Back Arm (Left, z = -0.25)
    this.leftArm = this.buildArm(matMid, matArmor);
    this.leftArm.position.set(0, 0.22, -0.25);
    this.torsoGroup.add(this.leftArm);

    // Front Arm (Right, z = +0.25)
    this.rightArm = this.buildArm(matMid, matArmor);
    this.rightArm.position.set(0, 0.22, 0.25);
    this.torsoGroup.add(this.rightArm);

    // ---------------- 4. ARTICULATED HAKAMA LEGS, SHIN GUARDS & TABI ----------------
    // Back Leg (Left, z = -0.13)
    this.leftLeg = this.buildLeg(matMid, matArmor, matDark);
    this.leftLeg.position.set(0, 0.72, -0.13);
    this.bodyRoot.add(this.leftLeg);

    // Front Leg (Right, z = +0.13)
    this.rightLeg = this.buildLeg(matMid, matArmor, matDark);
    this.rightLeg.position.set(0, 0.72, 0.13);
    this.bodyRoot.add(this.rightLeg);

    // ---------------- 5. KATANA SCABBARD (SAYA) & DRAWN BLADE ----------------
    // Scabbard worn at waist pointing diagonally back (-X, -Y)
    this.sayaGroup = new THREE.Group();
    this.sayaGroup.position.set(-0.05, -0.20, 0.24);
    this.sayaGroup.rotation.z = 0.48; // Angled hip scabbard
    this.torsoGroup.add(this.sayaGroup);

    const sayaGeo = new THREE.CylinderGeometry(0.032, 0.026, 1.15, 8);
    sayaGeo.rotateZ(Math.PI / 2);
    const sayaMesh = new THREE.Mesh(sayaGeo, matDark);
    sayaMesh.position.x = -0.35;
    addInkOutline(sayaMesh, 0.022);
    this.sayaGroup.add(sayaMesh);

    // Tsuba (handguard)
    const tsubaGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.025, 10);
    tsubaGeo.rotateZ(Math.PI / 2);
    const tsubaMesh = new THREE.Mesh(tsubaGeo, matArmor);
    tsubaMesh.position.x = 0.22;
    this.sayaGroup.add(tsubaMesh);

    // Tsuka (wrapped hilt sticking forward when sheathed)
    const tsukaGeo = new THREE.CylinderGeometry(0.03, 0.028, 0.34, 8);
    tsukaGeo.rotateZ(Math.PI / 2);
    this.sheathedHilt = new THREE.Mesh(tsukaGeo, matMid);
    this.sheathedHilt.position.x = 0.40;
    addInkOutline(this.sheathedHilt, 0.02);
    this.sayaGroup.add(this.sheathedHilt);

    // Drawn Katana Blade attached to front hand (visible during attacks/parry/combat)
    this.drawnSword = new THREE.Group();
    this.drawnSword.position.set(0.08, -0.26, 0);
    const bladeGeo = new THREE.BoxGeometry(1.35, 0.055, 0.02);
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xf5f1e6 });
    const bladeMesh = new THREE.Mesh(bladeGeo, bladeMat);
    bladeMesh.position.x = 0.72;
    addInkOutline(bladeMesh, 0.028, 0x141413);
    this.drawnSword.add(bladeMesh);

    const drawnHilt = new THREE.Mesh(tsukaGeo, matDark);
    this.drawnSword.add(drawnHilt);
    this.drawnSword.visible = false;
    this.rightArm.userData.forearm.add(this.drawnSword);

    // ---------------- 6. 3D VOLUMETRIC VERLET BILLOWING INK CLOAK & HEADBANDS ----------------
    this.cloakNodeCount = 12;
    this.cloakSpacing = 0.17;
    this.cloakNodes = [];
    for (let i = 0; i < this.cloakNodeCount; i++) {
      this.cloakNodes.push({
        x: -i * this.cloakSpacing,
        y: 1.25 - i * 0.03,
        prevX: -i * this.cloakSpacing,
        prevY: 1.25 - i * 0.03,
      });
    }

    // 3D Ribbon Mesh for Billowing Cape (2 vertices per node: top & bottom edge of cape)
    const cloakGeo = new THREE.BufferGeometry();
    const cloakVerts = new Float32Array(this.cloakNodeCount * 2 * 3);
    const cloakUvs = new Float32Array(this.cloakNodeCount * 2 * 2);
    const cloakIndices = [];

    for (let i = 0; i < this.cloakNodeCount; i++) {
      const u = i / (this.cloakNodeCount - 1);
      cloakUvs[i * 4 + 0] = u;
      cloakUvs[i * 4 + 1] = 0;
      cloakUvs[i * 4 + 2] = u;
      cloakUvs[i * 4 + 3] = 1;

      if (i < this.cloakNodeCount - 1) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const d = (i + 1) * 2 + 1;
        cloakIndices.push(a, b, c, b, d, c);
      }
    }

    cloakGeo.setAttribute('position', new THREE.BufferAttribute(cloakVerts, 3));
    cloakGeo.setAttribute('uv', new THREE.BufferAttribute(cloakUvs, 2));
    cloakGeo.setIndex(cloakIndices);

    const cloakTex = this.generateCloakBrushTexture();
    const cloakMat = new THREE.MeshBasicMaterial({
      map: cloakTex,
      color: 0x161614,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
    });
    this.cloakMesh = new THREE.Mesh(cloakGeo, cloakMat);
    this.bodyRoot.add(this.cloakMesh);

    // Secondary Headband Sash Ribbon streaming from back of cowl
    const sashGeo = new THREE.BufferGeometry();
    const sashVerts = new Float32Array(this.cloakNodeCount * 2 * 3);
    sashGeo.setAttribute('position', new THREE.BufferAttribute(sashVerts, 3));
    sashGeo.setAttribute('uv', new THREE.BufferAttribute(cloakUvs, 2));
    sashGeo.setIndex(cloakIndices);
    this.sashMesh = new THREE.Mesh(sashGeo, cloakMat);
    this.bodyRoot.add(this.sashMesh);

    // Trailing Sumi-e Ink Droplet Motes off the Cloak
    this.inkMotes = [];
    const moteGeo = new THREE.CircleGeometry(0.04, 6);
    const moteMat = new THREE.MeshBasicMaterial({ color: 0x141413, side: THREE.DoubleSide });
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(moteGeo, moteMat);
      this.bodyRoot.add(m);
      this.inkMotes.push({
        mesh: m,
        phase: i * 0.85,
        radius: 0.12 + (i % 3) * 0.08,
      });
    }
  }

  buildArm(matSleeve, matBracer) {
    const armGroup = new THREE.Group();

    // Upper sleeve
    const upperGeo = new THREE.CylinderGeometry(0.085, 0.075, 0.28, 8);
    const upper = new THREE.Mesh(upperGeo, matSleeve);
    upper.position.y = -0.12;
    addInkOutline(upper, 0.024);
    armGroup.add(upper);

    // Elbow & Armored Forearm Bracer (Kote)
    const forearmGroup = new THREE.Group();
    forearmGroup.position.set(0, -0.25, 0);
    armGroup.add(forearmGroup);

    const koteGeo = new THREE.CylinderGeometry(0.072, 0.055, 0.28, 8);
    const kote = new THREE.Mesh(koteGeo, matBracer);
    kote.position.y = -0.12;
    addInkOutline(kote, 0.024);
    forearmGroup.add(kote);

    // Hand
    const handGeo = new THREE.SphereGeometry(0.058, 8, 8);
    const hand = new THREE.Mesh(handGeo, matBracer);
    hand.position.y = -0.27;
    forearmGroup.add(hand);

    armGroup.userData.forearm = forearmGroup;
    return armGroup;
  }

  buildLeg(matHakama, matShin, matBoot) {
    const legGroup = new THREE.Group();

    // Wide Pleated Hakama Thigh
    const thighGeo = new THREE.CylinderGeometry(0.14, 0.19, 0.38, 8);
    const thigh = new THREE.Mesh(thighGeo, matHakama);
    thigh.position.y = -0.17;
    addInkOutline(thigh, 0.028);
    legGroup.add(thigh);

    // Knee Pivot & Shin Guard (Suneate)
    const kneeGroup = new THREE.Group();
    kneeGroup.position.set(0, -0.35, 0);
    legGroup.add(kneeGroup);

    const shinGeo = new THREE.CylinderGeometry(0.085, 0.062, 0.32, 8);
    const shin = new THREE.Mesh(shinGeo, matShin);
    shin.position.y = -0.15;
    addInkOutline(shin, 0.024);
    kneeGroup.add(shin);

    // Split-Toe Tabi Boot pointing forward (+X)
    const bootGeo = new THREE.BoxGeometry(0.26, 0.10, 0.14);
    const boot = new THREE.Mesh(bootGeo, matBoot);
    boot.position.set(0.05, -0.32, 0);
    addInkOutline(boot, 0.024);
    kneeGroup.add(boot);

    legGroup.userData.knee = kneeGroup;
    return legGroup;
  }

  generateKasaTexture() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Warm woven straw wash
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#2a2621');
    grad.addColorStop(0.35, '#787163');
    grad.addColorStop(0.85, '#b0a795');
    grad.addColorStop(1.0, '#1c1a17');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Vertical bamboo rib lines (map radially around cone UV)
    ctx.strokeStyle = '#1a1815';
    ctx.lineWidth = 3;
    for (let x = 0; x < 512; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }

    // Concentric woven straw binding rings
    ctx.lineWidth = 4;
    for (let y = 40; y < 512; y += 52) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    return new THREE.CanvasTexture(canvas);
  }

  generateCloakBrushTexture() {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 512, 256);

    // Rich dark sumi-e ink brush strokes fading to ragged dry-brush tails at u -> 1
    for (let y = 8; y < 248; y += 6) {
      const len = 360 + Math.sin(y * 0.27) * 90 + Math.cos(y * 0.73) * 55;
      const grad = ctx.createLinearGradient(0, y, len, y);
      grad.addColorStop(0.0, 'rgba(18, 18, 17, 1.0)');
      grad.addColorStop(0.65, 'rgba(28, 27, 25, 0.94)');
      grad.addColorStop(0.88, 'rgba(45, 43, 40, 0.55)');
      grad.addColorStop(1.0, 'rgba(20, 20, 19, 0.0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 7 + (y % 5);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(len, y + Math.sin(y) * 8);
      ctx.stroke();
    }

    return new THREE.CanvasTexture(canvas);
  }

  update(dt, player) {
    const vx = player.velocity.x;
    const vy = player.velocity.y;
    const speed = Math.abs(vx);
    const state = player.fsm.currentStateName;
    const t = performance.now() * 0.001;

    // 1. Dynamic Torso & Head Posture
    if (state === 'Run') {
      const cycle = t * 14.0;
      // Forward shinobi sprint lean (+X is forward inside meshGroup because meshGroup scales X by facing)
      this.torsoGroup.rotation.z = -0.24;
      this.torsoGroup.position.y = 0.94 + Math.abs(Math.sin(cycle)) * 0.07;
      this.headGroup.rotation.z = 0.14;

      // Full Running Stride Along X-Y Plane (rotation.z swings legs forward/back!)
      const stride = Math.sin(cycle) * 0.85;
      this.rightLeg.rotation.z = stride;
      this.rightLeg.userData.knee.rotation.z = Math.min(0, -Math.cos(cycle) * 0.75 - 0.25);

      this.leftLeg.rotation.z = -stride;
      this.leftLeg.userData.knee.rotation.z = Math.min(0, Math.cos(cycle) * 0.75 - 0.25);

      // Counter-swinging Arms
      this.rightArm.rotation.z = -stride * 0.75;
      this.rightArm.userData.forearm.rotation.z = 0.55;
      this.leftArm.rotation.z = stride * 0.75;
      this.leftArm.userData.forearm.rotation.z = 0.55;
    } else if (state === 'JumpRise' || state === 'Fall' || state === 'WallRun') {
      // Iconic Airborne Shinobi Leap Pose from traversal_steps.jpg!
      // Front knee raised high (+0.95 rad), rear leg trailing back (-0.75 rad)
      this.torsoGroup.rotation.z = -0.28;
      this.torsoGroup.position.y = 0.98;
      this.headGroup.rotation.z = 0.18;

      this.rightLeg.rotation.z = 0.95;
      this.rightLeg.userData.knee.rotation.z = -1.15;

      this.leftLeg.rotation.z = -0.68;
      this.leftLeg.userData.knee.rotation.z = -0.35;

      this.rightArm.rotation.z = -0.65;
      this.rightArm.userData.forearm.rotation.z = 0.4;
      this.leftArm.rotation.z = -0.95;
      this.leftArm.userData.forearm.rotation.z = 0.25;
    } else if (state === 'LedgeHang' || state === 'LedgeClimb') {
      // Reaching up to grip the stone ledge
      this.torsoGroup.rotation.z = -0.05;
      this.rightArm.rotation.z = 2.4;
      this.leftArm.rotation.z = 2.2;
      this.rightLeg.rotation.z = 0.2;
      this.leftLeg.rotation.z = -0.15;
    } else {
      // Poised Ready Stance (matching kuro_side.jpg & boss_arena.jpg)
      const breathe = Math.sin(t * 2.6) * 0.025;
      this.torsoGroup.rotation.z = -0.08;
      this.torsoGroup.position.y = 0.95 + breathe;
      this.headGroup.rotation.z = 0.05;

      this.rightLeg.rotation.z = 0.22;
      this.rightLeg.userData.knee.rotation.z = -0.18;
      this.leftLeg.rotation.z = -0.22;
      this.leftLeg.userData.knee.rotation.z = -0.12;

      this.rightArm.rotation.z = 0.25;
      this.rightArm.userData.forearm.rotation.z = 0.45;
      this.leftArm.rotation.z = -0.18;
      this.leftArm.userData.forearm.rotation.z = 0.35;
    }

    // 2. Katana Draw & Combat Swing Poses
    const inCombatPose = state === 'Attack' || state === 'AirAttack' || state === 'Parry';
    this.drawnSword.visible = inCombatPose;
    this.sheathedHilt.visible = !inCombatPose;

    if (state === 'Attack' || state === 'AirAttack') {
      const comboIdx = player.combat ? player.combat.comboIndex : 0;
      const swingAngles = [1.45, -0.55, 1.95];
      this.rightArm.rotation.z = swingAngles[comboIdx % 3];
      this.rightArm.userData.forearm.rotation.z = 0.25;
      this.torsoGroup.rotation.z = -0.35;
    } else if (state === 'Parry') {
      // Defensive diagonal blade guard across chest
      this.rightArm.rotation.z = 1.15;
      this.rightArm.userData.forearm.rotation.z = 0.85;
    }

    // 3. Volumetric 3D Verlet Cloth Cloak & Headband Simulation
    // Note: Inside meshGroup, +X is ALWAYS forward because meshGroup.scale.x flips with facing!
    // Therefore, trailing behind Kuro is ALWAYS in the -X direction in local coordinates!
    this.cloakNodes[0].x = -0.12;
    this.cloakNodes[0].y = 1.24;
    this.cloakNodes[0].prevX = -0.12;
    this.cloakNodes[0].prevY = 1.24;

    const windBackX = -(4.8 + speed * 0.65);
    const waveFreq = t * 7.5;

    for (let i = 1; i < this.cloakNodeCount; i++) {
      const node = this.cloakNodes[i];
      const vxNode = (node.x - node.prevX) * 0.88;
      const vyNode = (node.y - node.prevY) * 0.88;

      node.prevX = node.x;
      node.prevY = node.y;

      const flutterY = Math.sin(waveFreq - i * 0.65) * (1.8 + speed * 0.22);
      const liftY = Math.min(2.5, speed * 0.16) - vy * 0.08;

      node.x += vxNode + windBackX * dt;
      node.y += vyNode + (flutterY + liftY - 2.2) * dt;
    }

    // Constraint relaxation (3 passes for taut cloth)
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < this.cloakNodeCount - 1; i++) {
        const n1 = this.cloakNodes[i];
        const n2 = this.cloakNodes[i + 1];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const diff = (dist - this.cloakSpacing) / dist;

        if (i === 0) {
          n2.x -= dx * diff;
          n2.y -= dy * diff;
        } else {
          n1.x += dx * diff * 0.5;
          n1.y += dy * diff * 0.5;
          n2.x -= dx * diff * 0.5;
          n2.y -= dy * diff * 0.5;
        }
      }
    }

    // Update 3D Cloak Ribbon Geometry & Headband Sash Geometry
    const cloakPos = this.cloakMesh.geometry.attributes.position.array;
    const sashPos = this.sashMesh.geometry.attributes.position.array;

    for (let i = 0; i < this.cloakNodeCount; i++) {
      const node = this.cloakNodes[i];
      const u = i / (this.cloakNodeCount - 1);
      // Cloak flares out from collar (0.28) to dramatic wide billowing hem (0.68)
      const halfWidth = 0.16 + u * 0.28 + Math.sin(waveFreq - i * 0.5) * 0.04;
      const zCurve = Math.sin(u * Math.PI) * 0.12;

      const idx = i * 6;
      // Top edge of cloak
      cloakPos[idx + 0] = node.x;
      cloakPos[idx + 1] = node.y + halfWidth * 0.45;
      cloakPos[idx + 2] = -0.06 + zCurve;
      // Bottom edge of cloak
      cloakPos[idx + 3] = node.x;
      cloakPos[idx + 4] = node.y - halfWidth * 0.85;
      cloakPos[idx + 5] = 0.06 + zCurve;

      // Upper headband ribbon streaming above the cloak (like kuro_side.jpg & traversal_steps.jpg)
      const sashY = 1.44 + (node.y - 1.24) * 0.55 + Math.cos(waveFreq - i * 0.8) * 0.06;
      const sashHalfW = 0.045 * (1.0 - u * 0.5);
      sashPos[idx + 0] = node.x * 0.78;
      sashPos[idx + 1] = sashY + sashHalfW;
      sashPos[idx + 2] = 0.02;
      sashPos[idx + 3] = node.x * 0.78;
      sashPos[idx + 4] = sashY - sashHalfW;
      sashPos[idx + 5] = -0.02;
    }

    this.cloakMesh.geometry.attributes.position.needsUpdate = true;
    this.sashMesh.geometry.attributes.position.needsUpdate = true;

    // 4. Update Floating Sumi-e Ink Splatter Motes around Cloak Hem
    for (let i = 0; i < this.inkMotes.length; i++) {
      const mote = this.inkMotes[i];
      const nodeIdx = Math.min(this.cloakNodeCount - 1, 3 + i);
      const refNode = this.cloakNodes[nodeIdx];
      const angle = t * 4.5 + mote.phase;
      mote.mesh.position.set(
        refNode.x - 0.15 + Math.cos(angle) * mote.radius,
        refNode.y + Math.sin(angle * 1.3) * mote.radius,
        0.15
      );
      const s = 0.6 + 0.5 * Math.sin(angle);
      mote.mesh.scale.set(s, s, 1);
    }
  }
}
