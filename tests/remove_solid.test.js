// Test: CollisionSystem.removeSolid() for Paint Bridges (max 3, 8s expiry) and Bell mist platforms (8s expiry)
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { Level1 } from '../src/level/Level1.js';
import { events } from '../src/core/EventBus.js';

const origErr = console.error;
const errors = [];
console.error = (...args) => { errors.push(args.join(' ')); };

try {
  events.clear();
  const scene = new THREE.Scene();
  const collision = new CollisionSystem();
  const input = new Input();
  const level = new Level1({ scene, collision, inkSplash: null });
  const player = new KuroController({ scene, collision, input, ripples: { spawn: () => {} }, spawnX: 10, spawnY: 2.5 });

  assert.equal(typeof collision.removeSolid, 'function', 'CollisionSystem.removeSolid must exist');

  // 1. Paint 5 bridges -> only 3 exist
  for (let i = 0; i < 5; i++) {
    level.paintInkBridge(10 + i * 5, 2.5, 1);
  }
  assert.equal(level.paintedBridges.length, 3, 'Only 3 painted bridges may exist at once');

  // Wait 8s -> 0 remain
  for (let s = 0; s < 480; s++) {
    level.fixedUpdate(1 / 60, player);
  }
  assert.equal(level.paintedBridges.length, 0, 'All painted bridges must expire after 8s');

  // 2. Ring Bell -> 3 invisible-ink mist platforms become solid, then 0 after 8s
  level.triggerBellResonance(player);
  const activeAfterBell = level.mistPlatforms.filter(mp => mp.solidRef !== null).length;
  assert.equal(activeAfterBell, 3, 'Bell must solidify 3 mist platforms');

  for (let s = 0; s < 490; s++) {
    level.fixedUpdate(1 / 60, player);
  }
  const activeAfterExpiry = level.mistPlatforms.filter(mp => mp.solidRef !== null).length;
  assert.equal(activeAfterExpiry, 0, 'All mist platforms must lose solidRef after 8s');

  assert.equal(errors.length, 0, `Unexpected console.error: ${errors.join('; ')}`);
  input.dispose();
  console.log('✓ REMOVE SOLID (PAINT BRIDGE & BELL MIST PLATFORMS) TEST PASSED');
} finally {
  console.error = origErr;
}
