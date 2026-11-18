// Parallax Mountain Background System — Procedural Sumi-e Mountains on Layered Canvases

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class ParallaxBackground {
  constructor(scene) {
    this.scene = scene;
    this.layers = [];

    // 4 Layers of Mountains at increasing depth
    const layerConfigs = [
      { depth: -22, factor: 0.18, color: '#353430', opacity: 0.90, peakCount: 16, height: 28, y: 8 },
      { depth: -45, factor: 0.10, color: '#5c5b57', opacity: 0.75, peakCount: 12, height: 38, y: 14 },
      { depth: -80, factor: 0.05, color: '#8c8a82', opacity: 0.60, peakCount: 8,  height: 52, y: 22 },
      { depth: -130, factor: 0.02, color: '#b5b2a8', opacity: 0.45, peakCount: 6,  height: 68, y: 32 },
    ];

    layerConfigs.forEach((cfg, idx) => {
      const texture = this.generateMountainTexture(cfg.color, cfg.peakCount, cfg.height);
      const width = 450;
      const height = cfg.height * 2.2;

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: cfg.opacity,
        depthWrite: false,
      });

      const geo = new THREE.PlaneGeometry(width, height);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(150, cfg.y, cfg.depth);

      this.scene.add(mesh);
      this.layers.push({
        mesh,
        baseX: 150,
        baseY: cfg.y,
        factor: cfg.factor,
      });
    });
  }

  generateMountainTexture(colorHex, peakCount, heightScale) {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Sumi-e Jagged Ridge Path
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    const step = canvas.width / (peakCount * 2);
    for (let x = 0; x <= canvas.width; x += step) {
      // Harmonic mountain profile with organic jaggedness
      const normX = x / canvas.width;
      const h1 = Math.sin(normX * Math.PI * peakCount) * 120;
      const h2 = Math.sin(normX * Math.PI * (peakCount * 2.7)) * 45;
      const h3 = (Math.random() - 0.5) * 25; // Brush tooth jaggedness
      const y = canvas.height - 200 - h1 - h2 - h3;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();

    // Vertical Wet-Edge Ink Gradient (fades to misty parchment at base)
    const grad = ctx.createLinearGradient(0, 50, 0, canvas.height);
    grad.addColorStop(0.0, colorHex);
    grad.addColorStop(0.7, colorHex);
    grad.addColorStop(1.0, 'rgba(234, 229, 217, 0.0)');

    ctx.fillStyle = grad;
    ctx.fill();

    // Ink spatter dots along ridge
    ctx.fillStyle = colorHex;
    for (let i = 0; i < 40; i++) {
      const rx = Math.random() * canvas.width;
      const ry = 180 + Math.random() * 200;
      const r = 1 + Math.random() * 3;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }

  update(cameraX, cameraY) {
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      layer.mesh.position.x = layer.baseX + (cameraX - 150) * layer.factor;
      layer.mesh.position.y = layer.baseY + (cameraY - 20) * (layer.factor * 0.5);
    }
  }

  dispose() {
    this.layers.forEach(l => {
      this.scene.remove(l.mesh);
      l.mesh.geometry.dispose();
      l.mesh.material.dispose();
    });
  }
}
