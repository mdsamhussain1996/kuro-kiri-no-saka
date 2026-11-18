// Kuro Procedural Character Model — Silhouette-first sumi-e ninja with kasa hat, hakama & 10-segment verlet scarf

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { createSumieMaterial } from '../render/SumieMaterial.js';

export class KuroModel {
  constructor() {
    this.root = new THREE.Group();

    const sumieMatDark = createSumieMaterial({ inkDark: CONFIG.PALETTE.inkDark, noiseScale: 6.0 });
    const sumieMatMid = createSumieMaterial({ inkDark: CONFIG.PALETTE.inkMid, noiseScale: 6.0 });
    const woodMat = createSumieMaterial({ inkDark: 0x42382f, noiseScale: 8.0 });

    // 1. Torso & Gi
    const torsoGeo = new THREE.BoxGeometry(0.55, 0.75, 0.45);
    this.torso = new THREE.Mesh(torsoGeo, sumieMatDark);
    this.torso.position.y = 0.95;
    this.torso.castShadow = true;
    this.root.add(this.torso);

    // Belt / Obi sash
    const obiGeo = new THREE.BoxGeometry(0.58, 0.16, 0.48);
    const obiMat = createSumieMaterial({ inkDark: 0x222220 });
    const obi = new THREE.Mesh(obiGeo, obiMat);
    obi.position.y = 0.65;
    this.root.add(obi);

    // 2. Head, Hood & Mask
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.45, 0);

    const cowlGeo = new THREE.SphereGeometry(0.24, 8, 8);
    const cowl = new THREE.Mesh(cowlGeo, sumieMatDark);
    this.headGroup.add(cowl);

    // Kasa Hat (Conical woven straw hat)
    const hatGeo = new THREE.ConeGeometry(0.85, 0.28, 18);
    this.hat = new THREE.Mesh(hatGeo, woodMat);
    this.hat.position.y = 0.18;
    this.hat.castShadow = true;
    this.headGroup.add(this.hat);

    // Hat rim cord
    const cordGeo = new THREE.TorusGeometry(0.85, 0.02, 4, 18);
    cordGeo.rotateX(Math.PI / 2);
    const cord = new THREE.Mesh(cordGeo, sumieMatDark);
    cord.position.y = 0.04;
    this.headGroup.add(cord);

    this.root.add(this.headGroup);

    // 3. Hakama Trousers & Legs
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.16, 0.55, 0);
    const legGeoL = new THREE.BoxGeometry(0.26, 0.55, 0.35);
    const legL = new THREE.Mesh(legGeoL, sumieMatMid);
    legL.position.y = -0.22;
    this.leftLeg.add(legL);
    this.root.add(this.leftLeg);

    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.16, 0.55, 0);
    const legGeoR = new THREE.BoxGeometry(0.26, 0.55, 0.35);
    const legR = new THREE.Mesh(legGeoR, sumieMatMid);
    legR.position.y = -0.22;
    this.rightLeg.add(legR);
    this.root.add(this.rightLeg);

    // Tabi Boots (split toe)
    const bootGeo = new THREE.BoxGeometry(0.18, 0.14, 0.32);
    const bootL = new THREE.Mesh(bootGeo, sumieMatDark);
    bootL.position.set(0, -0.52, 0.04);
    this.leftLeg.add(bootL);

    const bootR = new THREE.Mesh(bootGeo, sumieMatDark);
    bootR.position.set(0, -0.52, 0.04);
    this.rightLeg.add(bootR);

    // 4. Katana & Saya (Scabbard)
    this.swordGroup = new THREE.Group();
    this.swordGroup.position.set(-0.15, 0.75, 0.22);

    const sayaGeo = new THREE.BoxGeometry(0.10, 0.08, 1.4);
    sayaGeo.rotateX(0.25);
    const saya = new THREE.Mesh(sayaGeo, sumieMatDark);
    this.swordGroup.add(saya);

    // Tsuka (Hilt)
    const hiltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 6);
    hiltGeo.rotateX(Math.PI / 2 + 0.25);
    const hilt = new THREE.Mesh(hiltGeo, sumieMatMid);
    hilt.position.set(0, 0.12, -0.85);
    this.swordGroup.add(hilt);

    this.root.add(this.swordGroup);

    // 5. 10-Segment Verlet Cloth Scarf & Fluttering Cape
    this.scarfNodeCount = 10;
    this.scarfNodes = [];
    this.segmentSpacing = 0.18;

    for (let i = 0; i < this.scarfNodeCount; i++) {
      this.scarfNodes.push({
        x: -i * this.segmentSpacing,
        y: 1.35,
        prevX: -i * this.segmentSpacing,
        prevY: 1.35,
      });
    }

    // Dynamic Line Mesh for Scarf
    const scarfGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.scarfNodeCount * 3);
    scarfGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const scarfMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      linewidth: 3,
    });
    this.scarfLine = new THREE.Line(scarfGeo, scarfMat);
    this.root.add(this.scarfLine);

    // Frayed brush tail ribbons at end of scarf
    const tailGeo = new THREE.PlaneGeometry(0.35, 0.15);
    const tailMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
    this.root.add(this.tailMesh);
  }

  update(dt, player) {
    const vx = player.velocity.x;
    const vy = player.velocity.y;
    const facing = player.facing;

    // Head tilt with motion
    this.headGroup.rotation.z = (vx / 14.0) * -0.15;
    this.hat.rotation.z = Math.sin(performance.now() * 0.006) * 0.04;

    // Leg running swing animation
    if (player.fsm.isInState('Run')) {
      const runCycle = performance.now() * 0.016;
      this.leftLeg.rotation.x = Math.sin(runCycle) * 0.65;
      this.rightLeg.rotation.x = -Math.sin(runCycle) * 0.65;
      this.torso.position.y = 0.95 + Math.abs(Math.sin(runCycle * 2)) * 0.06;
    } else {
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      this.torso.position.y = 0.95;
    }

    // Sword unsheathe pose during attacks
    if (player.fsm.isInState('Attack') || player.fsm.isInState('AirAttack')) {
      this.swordGroup.rotation.z = player.facing * 0.6;
      this.swordGroup.position.x = 0.4;
    } else {
      this.swordGroup.rotation.z = 0;
      this.swordGroup.position.x = -0.15;
    }

    // --- 10-Segment Verlet Scarf Simulation ---
    // Pin first node to Kuro's neck
    this.scarfNodes[0].x = 0;
    this.scarfNodes[0].y = 1.35;
    this.scarfNodes[0].prevX = 0;
    this.scarfNodes[0].prevY = 1.35;

    // Wind gust force
    const windX = -facing * (3.5 + Math.abs(vx) * 0.4);
    const windY = (Math.sin(performance.now() * 0.008) - 0.2) * 1.5;

    // Verlet integration step
    for (let i = 1; i < this.scarfNodeCount; i++) {
      const node = this.scarfNodes[i];
      const velX = (node.x - node.prevX) * 0.92;
      const velY = (node.y - node.prevY) * 0.92;

      node.prevX = node.x;
      node.prevY = node.y;

      node.x += velX + windX * dt;
      node.y += velY + windY * dt - 9.8 * 0.2 * dt; // slight cloth gravity
    }

    // Distance constraint relaxation (2 passes)
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < this.scarfNodeCount - 1; i++) {
        const n1 = this.scarfNodes[i];
        const n2 = this.scarfNodes[i + 1];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.hypot(dx, dy) || 0.001;
        const diff = (dist - this.segmentSpacing) / dist;

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

    // Update BufferGeometry positions
    const pos = this.scarfLine.geometry.attributes.position.array;
    for (let i = 0; i < this.scarfNodeCount; i++) {
      pos[i * 3 + 0] = this.scarfNodes[i].x;
      pos[i * 3 + 1] = this.scarfNodes[i].y;
      pos[i * 3 + 2] = 0.05;
    }
    this.scarfLine.geometry.attributes.position.needsUpdate = true;

    // Place tail mesh at end of scarf
    const lastNode = this.scarfNodes[this.scarfNodeCount - 1];
    const prevNode = this.scarfNodes[this.scarfNodeCount - 2];
    this.tailMesh.position.set(lastNode.x, lastNode.y, 0.05);
    this.tailMesh.rotation.z = Math.atan2(lastNode.y - prevNode.y, lastNode.x - prevNode.x);
  }
}
