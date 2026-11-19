// Murder of Sumi-e Ink Crows (Inspired by Sumiro's fx_crows.js)
// Perched ink crows on stone ledges, pine branches, and torii gates burst into staggered flight
// with two-jointed flapping wings and trailing wet-ink flecks when Kuro approaches.

import * as THREE from 'three';

export class InkCrowFlock {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'sumiro_ink_crows';
    this.scene.add(this.group);

    this.crowMat = new THREE.MeshBasicMaterial({
      color: 0x0e0d0a,
      side: THREE.DoubleSide,
    });

    this.fleckMat = new THREE.MeshBasicMaterial({
      color: 0x13171a,
      transparent: true,
      opacity: 0.82,
      side: THREE.DoubleSide,
    });

    this.crows = [];
    this.flecks = [];

    this.initFlock();
    this.initFleckPool();
  }

  buildCrowMesh() {
    const root = new THREE.Group();

    // Spindle body + head + beak + fanned tail
    const bodyGeo = new THREE.ConeGeometry(0.11, 0.44, 5);
    bodyGeo.rotateX(Math.PI * 0.5);
    const body = new THREE.Mesh(bodyGeo, this.crowMat);
    root.add(body);

    const headGeo = new THREE.SphereGeometry(0.08, 6, 5);
    const head = new THREE.Mesh(headGeo, this.crowMat);
    head.position.set(0, 0.05, 0.22);
    root.add(head);

    const beakGeo = new THREE.ConeGeometry(0.032, 0.13, 4);
    beakGeo.rotateX(Math.PI * 0.5);
    const beak = new THREE.Mesh(beakGeo, this.crowMat);
    beak.position.set(0, 0.04, 0.31);
    root.add(beak);

    const tailGeo = new THREE.PlaneGeometry(0.20, 0.24);
    tailGeo.rotateX(-Math.PI * 0.42);
    const tail = new THREE.Mesh(tailGeo, this.crowMat);
    tail.position.set(0, -0.02, -0.26);
    root.add(tail);

    // Two-jointed articulated wings (inner arm + outer primary feathers)
    const makeWing = (sign) => {
      const innerPivot = new THREE.Group();
      innerPivot.position.set(sign * 0.07, 0.04, 0.04);

      const armGeo = new THREE.BufferGeometry();
      const armVerts = new Float32Array([
        0, 0, 0.10,
        0, 0, -0.10,
        sign * 0.28, 0, -0.06,
        0, 0, 0.10,
        sign * 0.28, 0, -0.06,
        sign * 0.26, 0, 0.09,
      ]);
      armGeo.setAttribute('position', new THREE.BufferAttribute(armVerts, 3));
      armGeo.computeVertexNormals();
      innerPivot.add(new THREE.Mesh(armGeo, this.crowMat));

      const outerPivot = new THREE.Group();
      outerPivot.position.set(sign * 0.27, 0, 0.01);

      const handGeo = new THREE.BufferGeometry();
      const handVerts = new Float32Array([
        0, 0, 0.08,
        0, 0, -0.07,
        sign * 0.32, 0, -0.11,
        0, 0, 0.08,
        sign * 0.32, 0, -0.11,
        sign * 0.24, 0, 0.04,
      ]);
      handGeo.setAttribute('position', new THREE.BufferAttribute(handVerts, 3));
      handGeo.computeVertexNormals();
      outerPivot.add(new THREE.Mesh(handGeo, this.crowMat));

      innerPivot.add(outerPivot);
      root.add(innerPivot);
      return { innerPivot, outerPivot };
    };

    const wingL = makeWing(-1);
    const wingR = makeWing(1);

    return { root, head, wingL, wingR };
  }

  initFlock() {
    // Perch points distributed along the stone stairs, bridge posts, pines, and sanctuaries
    const perches = [
      { x: 7.5,   y: 2.3,  z: 0.45 },
      { x: 8.2,   y: 2.3,  z: -0.55 },
      { x: 16.5,  y: 4.5,  z: 0.55 },
      { x: 25.0,  y: 6.5,  z: -0.45 },
      { x: 34.5,  y: 8.5,  z: 0.6 },
      { x: 56.5,  y: 15.2, z: 0.0 },
      { x: 74.5,  y: 12.6, z: -0.6 },
      { x: 112.0, y: 12.6, z: 0.5 },
      { x: 173.0, y: 23.2, z: -0.5 },
      { x: 244.0, y: 49.2, z: 0.6 },
      { x: 326.0, y: 55.6, z: -0.5 },
      { x: 588.0, y: 80.5, z: 0.5 },
    ];

    perches.forEach((p, idx) => {
      const rig = this.buildCrowMesh();
      rig.root.position.set(p.x, p.y, p.z);
      rig.root.rotation.y = (idx % 2 === 0 ? 0.6 : -0.8);
      this.group.add(rig.root);

      this.crows.push({
        rig,
        perch: new THREE.Vector3(p.x, p.y, p.z),
        state: 'perched', // 'perched' | 'takeoff' | 'orbit'
        timer: idx * 0.7,
        delay: (idx % 3) * 0.14,
        vel: new THREE.Vector3(),
        flapPhase: idx * 1.9,
        orbitCenter: new THREE.Vector3(p.x, p.y + 8.5, p.z - 5.5),
        orbitRadius: 4.5 + (idx % 4) * 1.4,
        orbitSpeed: (idx % 2 === 0 ? 1 : -1) * (0.45 + (idx % 3) * 0.12),
        orbitAngle: idx * 1.2,
      });
    });

    // Also add 4 ambient circling crows above the initial climb & bridge so the sky feels alive right away
    for (let i = 0; i < 4; i++) {
      const rig = this.buildCrowMesh();
      const cx = 14 + i * 18;
      const cy = 9.5 + (i % 2) * 3.5;
      const cz = -4.5 - (i % 3) * 2.5;
      rig.root.position.set(cx, cy, cz);
      this.group.add(rig.root);

      this.crows.push({
        rig,
        perch: new THREE.Vector3(cx, cy, cz),
        state: 'orbit',
        timer: i * 1.3,
        delay: 0,
        vel: new THREE.Vector3(2.5, 0.2, 0),
        flapPhase: i * 2.1,
        orbitCenter: new THREE.Vector3(cx, cy, cz),
        orbitRadius: 5.5 + i * 1.2,
        orbitSpeed: (i % 2 === 0 ? 1 : -1) * 0.52,
        orbitAngle: i * 1.57,
      });
    }
  }

  initFleckPool() {
    const geo = new THREE.PlaneGeometry(0.11, 0.055);
    for (let i = 0; i < 36; i++) {
      const mesh = new THREE.Mesh(geo, this.fleckMat.clone());
      mesh.visible = false;
      this.group.add(mesh);
      this.flecks.push({
        mesh,
        active: false,
        life: 0,
        maxLife: 0.7,
        vel: new THREE.Vector3(),
      });
    }
  }

  spawnInkFleck(pos) {
    for (let i = 0; i < this.flecks.length; i++) {
      const f = this.flecks[i];
      if (!f.active) {
        f.active = true;
        f.life = 0;
        f.maxLife = 0.55 + Math.random() * 0.45;
        f.mesh.position.copy(pos);
        f.mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
        f.vel.set((Math.random() - 0.5) * 1.8, -0.6 - Math.random() * 0.8, (Math.random() - 0.5) * 1.2);
        f.mesh.visible = true;
        return;
      }
    }
  }

  update(dt, playerX, playerY) {
    for (let i = 0; i < this.crows.length; i++) {
      const c = this.crows[i];
      c.timer += dt;
      const pos = c.rig.root.position;

      if (c.state === 'perched') {
        // Folded wings while perched, curious head twitches
        c.rig.wingL.innerPivot.rotation.set(0.12, 0.35, 1.18);
        c.rig.wingL.outerPivot.rotation.set(0, 0, 0.42);
        c.rig.wingR.innerPivot.rotation.set(0.12, -0.35, -1.18);
        c.rig.wingR.outerPivot.rotation.set(0, 0, -0.42);
        c.rig.head.rotation.y = Math.sin(c.timer * 2.8) * 0.35;

        // Check player proximity -> scatter into flight!
        const dist = Math.hypot(playerX - pos.x, playerY - pos.y);
        if (dist < 8.5) {
          c.state = 'takeoff';
          c.timer = -c.delay;
          const awayX = pos.x >= playerX ? 1 : -1;
          c.vel.set(awayX * (3.8 + Math.random() * 2.2), 4.8 + Math.random() * 1.8, -1.6 - Math.random() * 1.5);
          for (let k = 0; k < 4; k++) this.spawnInkFleck(pos);
        }
      } else if (c.state === 'takeoff') {
        if (c.timer < 0) continue;

        pos.addScaledVector(c.vel, dt);
        c.flapPhase += dt * 11.5 * Math.PI * 2;
        const s = Math.sin(c.flapPhase);
        const c1 = Math.cos(c.flapPhase);
        const innerAngle = s * 0.72 + 0.14;
        const outerAngle = s * 0.48 + Math.max(0, -c1) * 0.65;

        c.rig.wingL.innerPivot.rotation.set(0, 0, innerAngle);
        c.rig.wingL.outerPivot.rotation.set(0, 0, outerAngle);
        c.rig.wingR.innerPivot.rotation.set(0, 0, -innerAngle);
        c.rig.wingR.outerPivot.rotation.set(0, 0, -outerAngle);

        c.rig.root.rotation.y = Math.atan2(c.vel.x, c.vel.z);

        if (Math.random() < 0.25) {
          this.spawnInkFleck(pos);
        }

        if (c.timer > 2.2) {
          c.state = 'orbit';
          c.orbitCenter.set(pos.x, pos.y + 1.5, pos.z);
        }
      } else if (c.state === 'orbit') {
        c.orbitAngle += c.orbitSpeed * dt;
        const tx = c.orbitCenter.x + Math.cos(c.orbitAngle) * c.orbitRadius;
        const tz = c.orbitCenter.z + Math.sin(c.orbitAngle) * c.orbitRadius * 0.65;
        const ty = c.orbitCenter.y + Math.sin(c.orbitAngle * 2.0) * 0.85;

        const dx = tx - pos.x;
        const dz = tz - pos.z;
        pos.set(tx, ty, tz);
        c.rig.root.rotation.y = Math.atan2(dx, dz);

        // Glide + occasional wing beat
        c.flapPhase += dt * 4.2 * Math.PI * 2;
        const glideCycle = Math.sin(c.timer * 1.4);
        const amp = glideCycle > 0.2 ? 0.55 : 0.12;
        const s = Math.sin(c.flapPhase) * amp;
        c.rig.wingL.innerPivot.rotation.set(0, 0, s + 0.08);
        c.rig.wingL.outerPivot.rotation.set(0, 0, s * 0.7);
        c.rig.wingR.innerPivot.rotation.set(0, 0, -s - 0.08);
        c.rig.wingR.outerPivot.rotation.set(0, 0, -s * 0.7);
      }
    }

    // Update falling ink flecks
    for (let i = 0; i < this.flecks.length; i++) {
      const f = this.flecks[i];
      if (!f.active) continue;
      f.life += dt;
      if (f.life >= f.maxLife) {
        f.active = false;
        f.mesh.visible = false;
        continue;
      }
      f.mesh.position.addScaledVector(f.vel, dt);
      f.mesh.scale.setScalar(1.0 - f.life / f.maxLife);
    }
  }
}
