// Parallax Mountain Background System — Infinite-Resolution Vector Sumi-e Shan-Shui Mountains
// Uses high-density vertex-colored BufferGeometry mountain silhouettes & ridge outlines
// for razor-sharp, zero-pixelation ink-wash mountains at any camera distance or resolution.

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class ParallaxBackground {
  constructor(scene) {
    this.scene = scene;
    this.layers = [];

    const parchmentColor = new THREE.Color(CONFIG.PALETTE.parchment);

    // 4 Layers of Vector Shan-Shui Mountains from distant pale ink wash to dark midground peaks
    const layerConfigs = [
      { depth: -90, factor: 0.05, peakColor: '#969288', midColor: '#c2bdb0', peaks: 18, amp: 22, baseY: -4, seed: 11 },
      { depth: -62, factor: 0.10, peakColor: '#6b6860', midColor: '#9c988c', peaks: 22, amp: 18, baseY: -6, seed: 29 },
      { depth: -38, factor: 0.16, peakColor: '#43413c', midColor: '#757269', peaks: 26, amp: 14, baseY: -7, seed: 47 },
      { depth: -20, factor: 0.24, peakColor: '#242320', midColor: '#524f49', peaks: 32, amp: 10, baseY: -8, seed: 73 },
    ];

    layerConfigs.forEach((cfg) => {
      const group = this.buildVectorMountainLayer(cfg, parchmentColor);
      group.position.set(150, cfg.baseY, cfg.depth);
      this.scene.add(group);

      this.layers.push({
        mesh: group,
        baseX: 150,
        baseY: cfg.baseY,
        factor: cfg.factor,
      });
    });
  }

  seededRandom(seed) {
    let s = seed;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  buildVectorMountainLayer(cfg, parchmentColor) {
    const group = new THREE.Group();
    const rand = this.seededRandom(cfg.seed);

    const totalWidth = 480;
    const halfW = totalWidth * 0.5;
    const segments = 640; // ~0.75 world unit per vertex: razor sharp vector ridges!
    const bottomY = -28;

    const positions = new Float32Array((segments + 1) * 2 * 3);
    const colors = new Float32Array((segments + 1) * 2 * 3);
    const indices = [];

    const ridgePoints = [];
    const peakCol = new THREE.Color(cfg.peakColor);
    const midCol = new THREE.Color(cfg.midColor);

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = -halfW + t * totalWidth;

      // Towering steep karst mountain silhouette (classical Shan-Shui profile)
      const w1 = Math.pow(Math.abs(Math.sin(t * Math.PI * cfg.peaks + cfg.seed)), 0.72) * cfg.amp;
      const w2 = Math.sin(t * Math.PI * (cfg.peaks * 2.3) + cfg.seed * 1.9) * (cfg.amp * 0.35);
      const w3 = Math.cos(t * Math.PI * (cfg.peaks * 5.7) + cfg.seed * 0.7) * (cfg.amp * 0.14);
      const crag = (rand() - 0.5) * (cfg.amp * 0.06);

      const y = 4.0 + w1 + w2 + w3 + crag;
      ridgePoints.push(new THREE.Vector3(x, y, 0.05));

      // Top vertex (Mountain Crest)
      const vTop = i * 2;
      positions[vTop * 3 + 0] = x;
      positions[vTop * 3 + 1] = y;
      positions[vTop * 3 + 2] = 0;

      // Crest color modulated slightly by peak elevation
      const elevNorm = THREE.MathUtils.clamp((y - 4.0) / (cfg.amp * 1.3), 0, 1);
      const topC = midCol.clone().lerp(peakCol, elevNorm);
      colors[vTop * 3 + 0] = topC.r;
      colors[vTop * 3 + 1] = topC.g;
      colors[vTop * 3 + 2] = topC.b;

      // Bottom vertex (Misty Valley Base blending seamlessly into parchment)
      const vBot = i * 2 + 1;
      positions[vBot * 3 + 0] = x;
      positions[vBot * 3 + 1] = bottomY;
      positions[vBot * 3 + 2] = 0;

      colors[vBot * 3 + 0] = parchmentColor.r;
      colors[vBot * 3 + 1] = parchmentColor.g;
      colors[vBot * 3 + 2] = parchmentColor.b;

      if (i < segments) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const d = (i + 1) * 2 + 1;
        indices.push(a, b, c, b, d, c);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setIndex(indices);

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });

    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Crisp Vector Calligraphic Ink Ridge Line along the crest
    const lineGeo = new THREE.BufferGeometry().setFromPoints(ridgePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: peakCol,
      fog: false,
    });
    const ridgeLine = new THREE.Line(lineGeo, lineMat);
    group.add(ridgeLine);

    return group;
  }

  update(cameraX, cameraY) {
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      layer.mesh.position.x = cameraX - (cameraX - 150) * layer.factor;
      layer.mesh.position.y = cameraY + layer.baseY - (cameraY - 12) * (layer.factor * 0.25);
    }
  }

  dispose() {
    this.layers.forEach(l => {
      this.scene.remove(l.mesh);
    });
  }
}
