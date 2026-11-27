// Severed Suspension Bridge — Sagging rope-and-plank segments with frayed drop center

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';

export class SuspensionBridge {
  constructor({ scene, collision, startX = 145, startY = 32, totalWidth = 26, gapWidth = 6.0 }) {
    this.scene = scene;
    this.collision = collision;
    this.startX = startX;
    this.startY = startY;
    this.totalWidth = totalWidth;
    this.gapWidth = gapWidth;

    this.group = new THREE.Group();
    this.group.position.set(startX, startY, 0);

    const spanWidth = (totalWidth - gapWidth) * 0.5;

    // Left Span Collider (solid or one-way)
    const leftBox = new AABB(startX + spanWidth * 0.5, startY, spanWidth, 0.4);
    this.leftSolid = this.collision.addOneWay(leftBox);

    // Right Span Collider
    const rightStartX = startX + spanWidth + gapWidth;
    const rightBox = new AABB(rightStartX + spanWidth * 0.5, startY + 1.2, spanWidth, 0.4);
    this.rightSolid = this.collision.addOneWay(rightBox);

    // Visual Mesh Generation: Planks and sagged ropes
    const plankMat = new THREE.MeshStandardMaterial({
      color: 0x5a4d41,
      roughness: 0.9,
    });
    const ropeMat = new THREE.MeshStandardMaterial({
      color: 0x3d352e,
      roughness: 0.95,
    });

    // 1. Left Span Planks
    const plankCount = 7;
    for (let i = 0; i < plankCount; i++) {
      const t = i / (plankCount - 1);
      const px = t * spanWidth;
      const sagY = -Math.sin(t * Math.PI) * 0.6; // parabolic catenary sag

      const plankGeo = new THREE.BoxGeometry(0.8, 0.15, 2.2);
      const plank = new THREE.Mesh(plankGeo, plankMat);
      plank.position.set(px, sagY, 0);
      plank.rotation.z = Math.cos(t * Math.PI) * -0.12;
      plank.castShadow = true;
      this.group.add(plank);
    }

    // 2. Right Span Planks
    for (let i = 0; i < plankCount; i++) {
      const t = i / (plankCount - 1);
      const px = spanWidth + gapWidth + t * spanWidth;
      const sagY = 1.2 - Math.sin(t * Math.PI) * 0.6;

      const plankGeo = new THREE.BoxGeometry(0.8, 0.15, 2.2);
      const plank = new THREE.Mesh(plankGeo, plankMat);
      plank.position.set(px, sagY, 0);
      plank.rotation.z = Math.cos(t * Math.PI) * -0.12;
      plank.castShadow = true;
      this.group.add(plank);
    }

    // 3. Severed Frayed Ropes dangling into abyss
    const ropeGeoL = new THREE.CylinderGeometry(0.04, 0.02, 3.5, 6);
    ropeGeoL.translate(0, -1.75, 0);
    const ropeL = new THREE.Mesh(ropeGeoL, ropeMat);
    ropeL.position.set(spanWidth, -0.4, 0.9);
    ropeL.rotation.z = 0.2;
    this.group.add(ropeL);

    const ropeGeoR = new THREE.CylinderGeometry(0.04, 0.02, 4.0, 6);
    ropeGeoR.translate(0, -2.0, 0);
    const ropeR = new THREE.Mesh(ropeGeoR, ropeMat);
    ropeR.position.set(spanWidth + gapWidth, 0.8, -0.9);
    ropeR.rotation.z = -0.25;
    this.group.add(ropeR);

    this.scene.add(this.group);
  }

  dispose() {
    this.collision.removeSolid(this.leftSolid);
    this.collision.removeSolid(this.rightSolid);
    const disposedMats = new Set();
    this.group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material && !disposedMats.has(obj.material)) {
        disposedMats.add(obj.material);
        obj.material.dispose();
      }
    });
    this.group.clear();
    this.scene.remove(this.group);
  }
}
