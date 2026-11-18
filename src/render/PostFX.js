// Post-Processing & Washi Paper Texture Overlay

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class PostProcessingSystem {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;

    // Create a 2D Overlay Canvas for washi paper fibers and warm parchment vignette
    this.overlayCanvas = document.createElement('canvas');
    this.overlayCanvas.id = 'post-fx-overlay';
    this.overlayCanvas.style.position = 'absolute';
    this.overlayCanvas.style.top = '0';
    this.overlayCanvas.style.left = '0';
    this.overlayCanvas.style.width = '100%';
    this.overlayCanvas.style.height = '100%';
    this.overlayCanvas.style.pointerEvents = 'none';
    this.overlayCanvas.style.zIndex = '5';
    this.overlayCanvas.style.mixBlendMode = 'multiply';

    const container = document.getElementById('game-container') || document.body;
    container.appendChild(this.overlayCanvas);

    this.ctx = this.overlayCanvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.overlayCanvas.width = width;
    this.overlayCanvas.height = height;
    this.renderOverlay(width, height);
  }

  renderOverlay(w, h) {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, w, h);

    // 1. Warm Parchment Base Wash
    this.ctx.fillStyle = '#eae5d9';
    this.ctx.fillRect(0, 0, w, h);

    // 2. Procedural Washi Paper Fibers (Simulated paper pulp)
    this.ctx.fillStyle = '#141413';
    for (let i = 0; i < 240; i++) {
      const fx = Math.random() * w;
      const fy = Math.random() * h;
      const len = 4 + Math.random() * 12;
      const angle = Math.random() * Math.PI;

      this.ctx.save();
      this.ctx.translate(fx, fy);
      this.ctx.rotate(angle);
      this.ctx.globalAlpha = 0.04 + Math.random() * 0.05;
      this.ctx.fillRect(0, 0, len, 0.8);
      this.ctx.restore();
    }

    // 3. Warm Vignette (darkens edges smoothly to warm parchment tones)
    const radius = Math.hypot(w, h) * 0.55;
    const vigGrad = this.ctx.createRadialGradient(w * 0.5, h * 0.5, radius * 0.45, w * 0.5, h * 0.5, radius);
    vigGrad.addColorStop(0.0, 'rgba(234, 229, 217, 0.0)');
    vigGrad.addColorStop(0.7, 'rgba(92, 91, 87, 0.12)');
    vigGrad.addColorStop(1.0, 'rgba(20, 20, 19, 0.35)');

    this.ctx.fillStyle = vigGrad;
    this.ctx.fillRect(0, 0, w, h);
  }

  flashLightning() {
    if (!this.ctx) return;
    const w = this.overlayCanvas.width;
    const h = this.overlayCanvas.height;

    // Invert overlay briefly to bright flash
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    this.ctx.fillRect(0, 0, w, h);
    this.ctx.restore();

    setTimeout(() => {
      this.renderOverlay(w, h);
    }, 70);
  }

  dispose() {
    if (this.overlayCanvas && this.overlayCanvas.parentNode) {
      this.overlayCanvas.parentNode.removeChild(this.overlayCanvas);
    }
  }
}
