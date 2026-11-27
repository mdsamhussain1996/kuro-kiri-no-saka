// Regression Test: Pit triggers across Acts I, II, III; non-lethal pit damage preserves HP;
// lethal pit damage enters Dead; y < -25 safety pit; & rising double-jump in JumpRise.
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { Level1 } from '../src/level/Level1.js';
import { CONFIG } from '../src/config.js';
import { events } from '../src/core/EventBus.js';

events.clear();
const scene = new THREE.Scene();
const collision = new CollisionSystem();
const input = new Input();
const level = new Level1({ scene, collision, inkSplash: null });

const rippleSpawns = [];
const player = new KuroController({
  scene,
  collision,
  input,
  afterimages: { spawn: () => {}, update: () => {} },
  ripples: { spawn: (x, y, z, intensity) => rippleSpawns.push({ x, y, z, intensity }), update: () => {} },
  inkSplash: { spawnSlashArc: () => {}, spawnHitImpact: () => {}, spawnParryBurst: () => {}, spawnBackstabBurst: () => {}, spawnDeathDissolve: () => {}, update: () => {} },
  spawnX: 5,
  spawnY: 1,
});

// 1. Verify pit triggers exist for Act I, Act II, Act III Molten River
const checkPitAt = (x, y, label) => {
  player.aabb.x = x;
  player.aabb.y = y;
  const hits = collision.checkTriggers(player.aabb, player);
  assert.ok(hits.some(t => t.type === 'pit'), `Pit trigger must exist at ${label} (${x}, ${y})`);
};
checkPitAt(100, -12, 'Act I fog pit');
checkPitAt(420, 36, 'Act II sanctuary pit');
checkPitAt(700, 68.5, 'Act III molten ink river');

// 2. Non-lethal pit damage must decrement HP and NOT restore to full HP
player.setCheckpoint(5, 1);
player.health = 3;
player.takeDamage(1, 0, true);
assert.equal(player.health, 2, 'Non-lethal pit fall must leave HP at 2 (not healed to 5)');
assert.equal(player.fsm.currentStateName, 'Idle', 'Non-lethal pit fall respawns in Idle');

// 3. Lethal pit damage (health -> 0) must enter Dead state instead of respawning
player.health = 1;
player.takeDamage(1, 0, true);
assert.equal(player.health, 0, 'Lethal pit fall reduces HP to 0');
assert.equal(player.fsm.currentStateName, 'Dead', 'Lethal pit fall must enter Dead state');

// 4. Safety check for aabb.y < -25 even outside trigger zones
player.respawnAtCheckpoint({ x: 5, y: 1 }, { restoreHealth: true });
assert.equal(player.health, 5);
player.aabb.x = 1200; // far outside triggers
player.aabb.y = -26;
player.fixedUpdate(1 / 60);
assert.equal(player.health, 4, 'y < -25 safety check must apply pit damage');

// 5. Rising double-jump while already in JumpRise
player.aabb.x = 5;
player.aabb.y = 1.5;
player.coyoteTimer = 0.1;
player.hasDoubleJump = true;
input.onKeyDown({ code: 'Space', repeat: false, preventDefault: () => {} });
input.update(1 / 60);
player.fixedUpdate(1 / 60);
assert.equal(player.fsm.currentStateName, 'JumpRise', 'First jump enters JumpRise');
input.postStep();

// Simulate rising slowly, then press Space again mid-rise
player.velocity.y = 4.0;
player.coyoteTimer = 0;
input.onKeyDown({ code: 'Space', repeat: false, preventDefault: () => {} });
input.update(1 / 60);
player.fixedUpdate(1 / 60);
assert.equal(player.hasDoubleJump, false, 'Double jump must be consumed while rising in JumpRise');
assert.ok(player.velocity.y > 10.0, 'Rising double jump must re-apply full jumpVelocity');
assert.ok(rippleSpawns.length >= 1, 'Double jump must spawn ripple');
assert.ok(Number.isFinite(rippleSpawns[0].y), 'Double jump ripple y must be finite (no aabb.halfH NaN)');

level.dispose();
player.dispose();
input.dispose();
console.log('✓ PITS & RISING DOUBLE JUMP REGRESSION TEST PASSED');
