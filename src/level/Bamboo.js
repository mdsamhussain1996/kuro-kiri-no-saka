// Bending Bamboo Stalks — Spring physics simulation, weight deflection, launch boost

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';

export class BambooStalk {
  constructor({ scene, collision, x = 0, y = 0, height = 7.0, width = 0.6 }) {
    this.scene = scene;
    this.collision = collision;
    this.baseX = x;
    this.baseY = y;
    this.height = height;
    this.width = width;

    // Spring Physics Variables (Angular / Tip deflection)
    this.deflection = 0;       // Horizontal tip offset
    this.velocity = 0;         // Deflection velocity
    this.angularStiffness = 55.0; // Spring resonance frequency squared
    this.damping = 0.88;       // Damping factor
    this.maxDeflection = 1.6;  // Maximum bend limit
    this.playerOnTop = false;

    // Collision Box for Top Landing Cap
    this.topAABB = new AABB(this.baseX, this.baseY + this.height, 1.2, 0.4);
    this.solidRef = this.collision.addOneWay(this.topAABB);
    this.solidRef.isBamboo = true;
    this.solidRef.stalk = this;

    // 3D Visual Mesh Hierarchy (Multi-segment bending cylinder)
    this.group = new THREE.Group();
    this.group.position.set(this.baseX, this.baseY, 0);

    this.segmentCount = 6;
    this.segments = [];
    const segHeight = this.height / this.segmentCount;

    const stalkMat = new THREE.MeshStandardMaterial({
      color: 0x484b3d, // Desaturated dark bamboo green-gray
      roughness: 0.7,
      metalness: 0.1,
    });
    const jointMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.9,
    });

    let parentNode = this.group;
    for (let i = 0; i < this.segmentCount; i++) {
      const segGroup = new THREE.Group();
      if (i > 0) {
        segGroup.position.y = segHeight;
      }

      // Cylinder segment
      const radius = THREE.MathUtils.lerp(0.18, 0.10, i / this.segmentCount);
      const segGeo = new THREE.CylinderGeometry(radius * 0.9, radius, segHeight, 8);
      segGeo.translate(0, segHeight * 0.5, 0);
      const segMesh = new THREE.Mesh(segGeo, stalkMat);
      segMesh.castShadow = true;
      segGroup.add(segMesh);

      // Ring joint node
      const jointGeo = new THREE.TorusGeometry(radius * 1.05, 0.03, 6, 12);
      jointGeo.rotateX(Math.PI / 2);
      const jointMesh = new THREE.Mesh(jointGeo, jointMat);
      segGroup.add(jointMesh);

      parentNode.add(segGroup);
      this.segments.push(segGroup);
      parentNode = segGroup;
    }

    this.scene.add(this.group);
  }

  fixedUpdate(dt, player) {
    // Check if player is standing on top
    const standing = player && (player.groundRef === this.solidRef);

    if (standing) {
      this.playerOnTop = true;
      // Weight of player applies downward and bending deflection based on player facing/movement
      const pushX = player.facing * 0.8 + player.input.axisX * 0.5;
      const targetBend = THREE.MathUtils.clamp(pushX, -this.maxDeflection, this.maxDeflection);
      this.velocity += (targetBend - this.deflection) * 40.0 * dt;

      // Spring compression
      this.deflection += this.velocity * dt;
      this.velocity *= Math.pow(this.damping, dt * 60);

      // Check if player jumps while bamboo is springing back up -> BOOST!
      if (player.input.jumpBuffered && this.deflection !== 0) {
        const springPower = Math.abs(this.deflection) / this.maxDeflection;
        const boostMultiplier = 1.0 + springPower * 0.5; // up to x1.5 boost per §6
        player.velocity.y = CONFIG.PLAYER.jumpVelocity * boostMultiplier;
        player.velocity.x += -Math.sign(this.deflection) * 4.0; // horizontal kick

        // Launch rebound vibration
        this.velocity = -Math.sign(this.deflection) * 18.0;
        events.emit('bamboo_launch', { multiplier: boostMultiplier });
      }
    } else {
      this.playerOnTop = false;
      // Free harmonic spring oscillation: a = -k*x
      const accel = -this.angularStiffness * this.deflection;
      this.velocity += accel * dt;
      this.deflection += this.velocity * dt;
      this.velocity *= Math.pow(this.damping, dt * 60);
    }

    // Clamp deflection
    this.deflection = THREE.MathUtils.clamp(this.deflection, -this.maxDeflection, this.maxDeflection);

    // Update AABB top position following bent tip
    const tipAngle = this.deflection / this.height;
    const tipX = this.baseX + Math.sin(tipAngle) * this.height;
    const tipY = this.baseY + Math.cos(tipAngle) * this.height;
    this.topAABB.x = tipX;
    this.topAABB.y = tipY;

    // Update 3D visual curvature across segments
    const curvaturePerSegment = tipAngle / this.segmentCount;
    for (let i = 0; i < this.segments.length; i++) {
      this.segments[i].rotation.z = -curvaturePerSegment;
    }
  }

  dispose() {
    this.collision.removeSolid(this.solidRef);
    this.group.clear();
    this.scene.remove(this.group);
  }
}
