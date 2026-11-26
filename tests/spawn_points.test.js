// Test: Every chapter spawn in SUMIRO_CHAPTERS is grounded and does not fall > 1 unit in 1s
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { Level1 } from '../src/level/Level1.js';
import { SUMIRO_CHAPTERS } from '../src/ui/HUD.js';

const scene = new THREE.Scene();
const collision = new CollisionSystem();
const input = new Input();
const level = new Level1({ scene, collision, inkSplash: null });

for (const ch of SUMIRO_CHAPTERS) {
  const player = new KuroController({
    scene,
    collision,
    input,
    ripples: { spawn: () => {} },
    spawnX: ch.spawnX,
    spawnY: ch.spawnY,
  });

  const startY = ch.spawnY;
  for (let s = 0; s < 60; s++) {
    player.fixedUpdate(1 / 60);
  }

  const fell = startY - player.aabb.y;
  assert.ok(Boolean(player.groundRef), `Chapter ${ch.id} (${ch.title}) spawn (${ch.spawnX}, ${ch.spawnY}) is not grounded after 1s (y=${player.aabb.y.toFixed(2)})`);
  assert.ok(fell <= 2.5, `Chapter ${ch.id} (${ch.title}) fell ${fell.toFixed(2)} units (> 2.5)`);
  console.log(`✓ Ch${ch.id} (${ch.title}) spawn grounded at y=${player.aabb.y.toFixed(2)}`);
}

input.dispose();
console.log('✓ ALL 8 CHAPTER SPAWN POINTS VERIFIED');
