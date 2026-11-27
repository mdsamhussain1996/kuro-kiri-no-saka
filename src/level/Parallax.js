// Parallax Mountain & Mist System — True 3D Multi-Faceted Shan-Shui Mountain Ranges
// Generates realistic 3D eroded mountain ridges with sunlit eastern slopes, shadowed western cliffs,
// craggy internal ridgelines, ridge-top pine silhouettes, and drifting volumetric valley clouds.

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class ParallaxBackground {
  constructor(scene) {
    this.scene = scene;
    this.layers = [];
    this.mistClouds = [];

    const parchmentColor = new THREE.Color(CONFIG.PALETTE.parchment);

    // 4 Layers of 3D Multi-Faceted Shan-Shui Mountain Ranges (~30% lighter & lower contrast for 3-plane Sumi-e hierarchy)
    const layerConfigs = [
      { depth: -92, factor: 0.05, litColor: '#d2cab6', shadowColor: '#b7b2a4', ridgeColor: '#9c988c', peaks: 14, amp: 26, baseY: -3, seed: 17 },
      { depth: -64, factor: 0.10, litColor: '#cac1ac', shadowColor: '#a7a294', ridgeColor: '#8b877c', peaks: 18, amp: 21, baseY: -5, seed: 31 },
      { depth: -38, factor: 0.16, litColor: '#c0b7a2', shadowColor: '#969184', ridgeColor: '#7a766b', peaks: 22, amp: 16, baseY: -6, seed: 53 },
      { depth: -20, factor: 0.24, litColor: '#b5ac97', shadowColor: '#848074', ridgeColor: '#69665c', peaks: 26, amp: 11, baseY: -7, seed: 79 },
    ];

    layerConfigs.forEach((cfg) => {
      const group = this.build3DFacetedMountainRange(cfg, parchmentColor);
      group.position.set(150, cfg.baseY, cfg.depth);
      this.scene.add(group);

      this.layers.push({
        mesh: group,
        baseX: 150,
        baseY: cfg.baseY,
        factor: cfg.factor,
      });
    });

    // Animated Drifting Volumetric Valley Mist Clouds between Mountain Layers
    this.buildDriftingMistClouds();
  }

  seededRandom(seed) {
    let s = seed;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  // Multi-octave craggy ridge noise (sharp eroded peaks: 1 - |sin|)
  ridgeHeight(t, peaks, amp, seed, rand) {
    const p1 = Math.pow(1.0 - Math.abs(Math.sin(t * Math.PI * peaks + seed)), 1.35) * amp;
    const p2 = Math.pow(1.0 - Math.abs(Math.sin(t * Math.PI * peaks * 2.17 + seed * 1.7)), 1.5) * (amp * 0.45);
    const p3 = Math.sin(t * Math.PI * peaks * 0.5 + seed * 0.4) * (amp * 0.35);
    const p4 = Math.cos(t * Math.PI * peaks * 5.3 + seed * 2.3) * (amp * 0.12);
    const jagged = (rand() - 0.5) * (amp * 0.05);
    return Math.max(1.5, 3.0 + p1 + p2 + p3 + p4 + jagged);
  }

  build3DFacetedMountainRange(cfg, parchmentColor) {
    const group = new THREE.Group();
    const rand = this.seededRandom(cfg.seed);

    const totalWidth = 480;
    const halfW = totalWidth * 0.5;
    const segments = 480;
    const bottomY = -26;

    const litCol = new THREE.Color(cfg.litColor);
    const shadowCol = new THREE.Color(cfg.shadowColor);
    const ridgeCol = new THREE.Color(cfg.ridgeColor);

    // Precompute crest heights & mid-slope spur vertices for 3D faceted sunlit/shadowed triangles
    const crestPts = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = -halfW + t * totalWidth;
      const y = this.ridgeHeight(t, cfg.peaks, cfg.amp, cfg.seed, rand);
      crestPts.push({ x, y });
    }

    // Build Non-Indexed Faceted Triangle Mesh so each slope facet has realistic sunlit vs shadowed face coloration
    const triPositions = [];
    const triColors = [];
    const ridgeLinePoints = [];
    const spurLines = [];

    for (let i = 0; i < segments; i++) {
      const p0 = crestPts[i];
      const p1 = crestPts[i + 1];
      ridgeLinePoints.push(new THREE.Vector3(p0.x, p0.y, 0.08));

      // Slope direction determines whether this mountain face catches sunlight (left/rising slope) or deep ink shadow (right/falling slope)
      const dy = p1.y - p0.y;
      const isSunlitFace = dy >= 0;
      const slopeSteepness = THREE.MathUtils.clamp(Math.abs(dy) / 1.2, 0.15, 1.0);

      const topC0 = isSunlitFace
        ? litCol.clone().lerp(parchmentColor, 0.18 * slopeSteepness)
        : shadowCol.clone().lerp(ridgeCol, 0.45 * slopeSteepness);
      const topC1 = topC0.clone();

      // Mid-altitude rocky spur vertex (gives 3D ridge facets down the mountain face)
      const midX = (p0.x + p1.x) * 0.5 + (dy >= 0 ? -0.35 : 0.35);
      const midY = (p0.y + p1.y) * 0.5 - cfg.amp * 0.55;
      const midC = topC0.clone().lerp(parchmentColor, 0.52);

      // Upper Facet Triangles: (p0, mid, p1)
      triPositions.push(
        p0.x, p0.y, 0,
        midX, midY, 0.25,
        p1.x, p1.y, 0
      );
      triColors.push(
        topC0.r, topC0.g, topC0.b,
        midC.r, midC.g, midC.b,
        topC1.r, topC1.g, topC1.b
      );

      // Lower Slope Triangles fading into valley mist: (p0, bot0, mid) & (mid, bot0, bot1) & (mid, bot1, p1)
      const b0x = p0.x;
      const b1x = p1.x;
      triPositions.push(
        p0.x, p0.y, 0,
        b0x, bottomY, 0,
        midX, midY, 0.25,

        midX, midY, 0.25,
        b0x, bottomY, 0,
        b1x, bottomY, 0,

        midX, midY, 0.25,
        b1x, bottomY, 0,
        p1.x, p1.y, 0
      );

      triColors.push(
        topC0.r, topC0.g, topC0.b,
        parchmentColor.r, parchmentColor.g, parchmentColor.b,
        midC.r, midC.g, midC.b,

        midC.r, midC.g, midC.b,
        parchmentColor.r, parchmentColor.g, parchmentColor.b,
        parchmentColor.r, parchmentColor.g, parchmentColor.b,

        midC.r, midC.g, midC.b,
        parchmentColor.r, parchmentColor.g, parchmentColor.b,
        topC1.r, topC1.g, topC1.b
      );

      // At local peaks, drop an internal dark ink ridge line (cunfa brush stroke) down the spur!
      if (i > 1 && i < segments - 1 && p0.y > crestPts[i - 1].y && p0.y > p1.y) {
        spurLines.push(
          new THREE.Vector3(p0.x, p0.y, 0.12),
          new THREE.Vector3(midX + (rand() - 0.5) * 1.8, midY + 1.5, 0.28)
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(triPositions, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(triColors, 3));

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    group.add(new THREE.Mesh(geo, mat));

    // Crisp Calligraphic Crest Outline
    const lineGeo = new THREE.BufferGeometry().setFromPoints(ridgeLinePoints);
    const lineMat = new THREE.LineBasicMaterial({ color: ridgeCol, fog: false });
    group.add(new THREE.Line(lineGeo, lineMat));

    // Internal Vertical Cliff Ridge Strokes (Cunfa)
    if (spurLines.length > 0) {
      const spurGeo = new THREE.BufferGeometry().setFromPoints(spurLines);
      const spurMat = new THREE.LineBasicMaterial({
        color: ridgeCol,
        transparent: true,
        opacity: 0.55,
        fog: false,
      });
      group.add(new THREE.LineSegments(spurGeo, spurMat));
    }

    return group;
  }

  buildDriftingMistClouds() {
    if (typeof document === 'undefined') return;

    // Soft radial sumi-e mist puff texture (256x256 square so radial gradient reaches 0 alpha before edges)
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 8, 128, 128, 120);
    grad.addColorStop(0.0, 'rgba(198, 190, 173, 0.72)');
    grad.addColorStop(0.55, 'rgba(186, 182, 170, 0.32)');
    grad.addColorStop(1.0, 'rgba(196, 183, 152, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const tex = new THREE.CanvasTexture(canvas);
    const cloudMat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      fog: false,
    });

    const cloudGeo = new THREE.PlaneGeometry(42, 14);
    for (let i = 0; i < 18; i++) {
      const mesh = new THREE.Mesh(cloudGeo, cloudMat);
      const z = -15 - (i % 4) * 18;
      const x = -20 + i * 22;
      const y = 2 + (i % 5) * 9;
      mesh.position.set(x, y, z);
      this.scene.add(mesh);
      this.mistClouds.push({
        mesh,
        baseX: x,
        baseY: y,
        speed: 0.6 + (i % 3) * 0.4,
        phase: i * 1.1,
      });
    }
  }

  update(cameraX, cameraY) {
    const t = performance.now() * 0.001;
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      layer.mesh.position.x = cameraX - (cameraX - 150) * layer.factor;
      layer.mesh.position.y = cameraY + layer.baseY - (cameraY - 12) * (layer.factor * 0.25);
    }

    for (let i = 0; i < this.mistClouds.length; i++) {
      const c = this.mistClouds[i];
      const drift = Math.sin(t * 0.25 + c.phase) * 6.0;
      c.mesh.position.x = c.baseX + drift + (cameraX - 150) * 0.15;
    }
  }

  dispose() {
    const disposedGeos = new Set();
    const disposedMats = new Set();
    const disposeTree = (obj) => {
      obj.traverse?.((node) => {
        if (node.geometry && !disposedGeos.has(node.geometry)) {
          disposedGeos.add(node.geometry);
          node.geometry.dispose();
        }
        if (node.material && !disposedMats.has(node.material)) {
          disposedMats.add(node.material);
          if (node.material.map) node.material.map.dispose();
          node.material.dispose();
        }
      });
      this.scene.remove(obj);
    };
    this.layers.forEach(l => disposeTree(l.mesh));
    this.mistClouds.forEach(c => disposeTree(c.mesh));
    this.layers = [];
    this.mistClouds = [];
  }
}
