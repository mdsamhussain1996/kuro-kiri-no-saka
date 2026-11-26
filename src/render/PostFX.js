// Post-Processing — Sumiro Warm Antique Silk/Washi Grade, Peach-Red Sky Cloud Wash & Corner-Burn Vignette
// Matches Sumiro's paperBase [195.8, 183.2, 152], subtle red watercolor cloud wash,
// cool grey-cream valley mist strata, and warm brown corner burn (k: [0.253, 0.325, 0.400]).

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export class PostProcessingSystem {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;

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
    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);

    // 1. Sumiro Vertical Sky-to-Valley Silk Wash Gradient (kept bright in center to preserve 3-plane contrast)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0.0, '#eae0ca');  // Upper sky warm antique silk
    bgGrad.addColorStop(0.35, '#efe6d2'); // Horizon golden-peach glow
    bgGrad.addColorStop(0.70, '#e5dcc6'); // Mid valley mist wash
    bgGrad.addColorStop(1.0, '#d7ccb2');  // Lower valley floor tone
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Sumiro Peach-Red Watercolor Cloud Wash in Upper Sky (redWash)
    const redCloud1 = ctx.createRadialGradient(w * 0.32, h * 0.22, 10, w * 0.32, h * 0.22, w * 0.42);
    redCloud1.addColorStop(0.0, 'rgba(214, 138, 126, 0.22)');
    redCloud1.addColorStop(0.55, 'rgba(224, 165, 152, 0.11)');
    redCloud1.addColorStop(1.0, 'rgba(230, 216, 192, 0.0)');
    ctx.fillStyle = redCloud1;
    ctx.fillRect(0, 0, w, h);

    const redCloud2 = ctx.createRadialGradient(w * 0.74, h * 0.18, 10, w * 0.74, h * 0.18, w * 0.36);
    redCloud2.addColorStop(0.0, 'rgba(208, 132, 122, 0.18)');
    redCloud2.addColorStop(0.6, 'rgba(220, 162, 148, 0.08)');
    redCloud2.addColorStop(1.0, 'rgba(230, 216, 192, 0.0)');
    ctx.fillStyle = redCloud2;
    ctx.fillRect(0, 0, w, h);

    // 3. Procedural Silk Weave & Aged Washi Paper Fibers (Deterministic Seed)
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Subtle tea/water stain blotches on antique scroll
    for (let i = 0; i < 14; i++) {
      const sx = rand() * w;
      const sy = rand() * h;
      const sr = 60 + rand() * 160;
      const stain = ctx.createRadialGradient(sx, sy, sr * 0.15, sx, sy, sr);
      stain.addColorStop(0.0, 'rgba(155, 138, 108, 0.04)');
      stain.addColorStop(0.75, 'rgba(142, 124, 96, 0.065)');
      stain.addColorStop(1.0, 'rgba(196, 183, 152, 0.0)');
      ctx.fillStyle = stain;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }

    // Fine organic mulberry fibers
    ctx.fillStyle = '#2a241b';
    for (let i = 0; i < 340; i++) {
      const fx = rand() * w;
      const fy = rand() * h;
      const len = 3 + rand() * 13;
      const angle = rand() * Math.PI;
      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(angle);
      ctx.globalAlpha = 0.025 + rand() * 0.045;
      ctx.fillRect(0, 0, len, 0.75);
      ctx.restore();
    }

    // 4. Sumiro Warm Brown Corner-Burn Vignette (k: [0.253, 0.325, 0.400], p: 2.258)
    const radius = Math.hypot(w, h) * 0.54;
    const vigGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, radius * 0.36, w * 0.5, h * 0.5, radius);
    vigGrad.addColorStop(0.0, 'rgba(230, 218, 194, 0.0)');
    vigGrad.addColorStop(0.58, 'rgba(138, 118, 92, 0.14)');
    vigGrad.addColorStop(0.84, 'rgba(84, 68, 50, 0.32)');
    vigGrad.addColorStop(1.0, 'rgba(42, 32, 22, 0.54)');

    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, w, h);
  }

  flashLightning() {
    if (!this.ctx) return;
    const w = this.overlayCanvas.width;
    const h = this.overlayCanvas.height;

    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 250, 240, 0.85)';
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
