// Swinging Lantern — Pendulum physics, vermilion glow, grabbable aerial swing point

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';

export class SwingingLantern {
  constructor({ scene, collision, pivotX = 0, pivotY = 12, ropeLength = 5.0 }) {
    this.scene = scene;
    this.collision = collision;
    this.pivotX = pivotX;
    this.pivotY = pivotY;
    this.ropeLength = ropeLength;

    // Pendulum State
    this.angle = 0.25;            // Radians
    this.angularVelocity = 0;
    this.gravity = 9.8;
    this.damping = 0.994;
    this.maxAngle = 0.65;         // ~37 degrees

    // Player Grab State
    this.grabbedPlayer = null;
    this.grabCooldown = 0;

    // Grab Detection Zone (AABB around lantern head)
    this.grabRadius = 1.2;
    this.lanternPos = { x: pivotX, y: pivotY - ropeLength };

    // 3D Visual Mesh
    this.group = new THREE.Group();
    this.group.position.set(pivotX, pivotY, 0);

    // Hanging Rope (Line)
    const ropeMat = new THREE.LineBasicMaterial({ color: 0x3d352e, linewidth: 2 });
    const ropeGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -ropeLength, 0),
    ]);
    this.ropeLine = new THREE.Line(ropeGeo, ropeMat);
    this.group.add(this.ropeLine);

    // Lantern Head Group at bottom of rope
    this.lanternMesh = new THREE.Group();
    this.lanternMesh.position.set(0, -ropeLength, 0);

    // Hexagonal Lantern Cage
    const cageGeo = new THREE.CylinderGeometry(0.35, 0.45, 0.8, 6);
    const cageMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(CONFIG.PALETTE.inkDark),
      roughness: 0.8,
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    this.lanternMesh.add(cage);

    // Vermilion Glowing Core
    const coreGeo = new THREE.CylinderGeometry(0.25, 0.32, 0.6, 6);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CONFIG.PALETTE.vermilion),
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    this.lanternMesh.add(core);

    // Vermilion Point Light
    this.pointLight = new THREE.PointLight(0xb8292f, 1.8, 8.0, 1.5);
    this.lanternMesh.add(this.pointLight);

    // Grabbable cross-bar handle at top of lantern
    const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6);
    barGeo.rotateZ(Math.PI / 2);
    const barMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const bar = new THREE.Mesh(barGeo, barMat);
    bar.position.y = 0.45;
    this.lanternMesh.add(bar);

    this.group.add(this.lanternMesh);
    this.scene.add(this.group);
  }

  fixedUpdate(dt, player) {
    if (this.grabCooldown > 0) {
      this.grabCooldown -= dt;
    }

    // Pendulum differential equation: d^2θ/dt^2 = -(g/L)*sin(θ)
    const angularAccel = -(this.gravity / this.ropeLength) * Math.sin(this.angle);
    this.angularVelocity += angularAccel * dt;

    // Ambient wind impulse (gentle sinusoidal gusts)
    const wind = Math.sin(performance.now() * 0.0015) * 0.4;
    this.angularVelocity += wind * dt;

    this.angle += this.angularVelocity * dt;
    this.angularVelocity *= Math.pow(this.damping, dt * 60);

    // Update 3D visual rotation
    this.group.rotation.z = this.angle;

    // Calculate world position of lantern handle
    const worldX = this.pivotX + Math.sin(this.angle) * this.ropeLength;
    const worldY = this.pivotY - Math.cos(this.angle) * this.ropeLength;
    this.lanternPos.x = worldX;
    this.lanternPos.y = worldY;

    // Check interaction with Kuro
    if (player && !player.fsm.isInState('Dead')) {
      if (this.grabbedPlayer) {
        // Kuro is currently hanging from lantern
        player.aabb.x = worldX;
        player.aabb.y = worldY - player.aabb.height * 0.4;
        player.velocity.x = this.angularVelocity * this.ropeLength * Math.cos(this.angle);
        player.velocity.y = this.angularVelocity * this.ropeLength * Math.sin(this.angle);

        // Jump to release with preserved swing momentum
        if (player.input.jumpBuffered) {
          player.input.consumeJump();
          this.releasePlayer(player);
        }
      } else if (this.grabCooldown <= 0) {
        // Check contact between player and lantern
        const dx = player.aabb.x - worldX;
        const dy = player.aabb.y - worldY;
        const dist = Math.hypot(dx, dy);

        if (dist <= this.grabRadius && !player.wasGroundedLastFrame && player.velocity.y < 2.0) {
          this.grabPlayer(player);
        }
      }
    }
  }

  grabPlayer(player) {
    this.grabbedPlayer = player;
    player.hasAirDash = true; // Refresh air dash on grab
    player.fsm.changeState('LedgeHang', {
      side: 'lantern',
      lantern: this,
      x: this.lanternPos.x,
      y: this.lanternPos.y,
    });
    events.emit('lantern_grabbed', { x: this.lanternPos.x, y: this.lanternPos.y });
  }

  releasePlayer(player) {
    // Tangential launch velocity
    const tangentialSpeed = this.angularVelocity * this.ropeLength;
    const launchVx = Math.cos(this.angle) * tangentialSpeed + player.facing * 5.0;
    const launchVy = Math.max(8.0, CONFIG.PLAYER.jumpVelocity * 0.9);

    this.grabbedPlayer = null;
    this.grabCooldown = 0.5;

    player.fsm.changeState('JumpRise');
    player.velocity.x = launchVx;
    player.velocity.y = launchVy;

    // Lantern kicks back
    this.angularVelocity -= Math.sign(launchVx) * 0.6;
    events.emit('lantern_released');
  }

  dispose() {
    this.grabbedPlayer = null;
    this.group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    this.group.clear();
    this.scene.remove(this.group);
  }
}
