// Test: Chapter 3 checkpoint -> Kurogane arena entry, arena lock walls, and respawn reset
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { Level1 } from '../src/level/Level1.js';
import { events } from '../src/core/EventBus.js';

events.clear();
const scene = new THREE.Scene();
const collision = new CollisionSystem();
const input = new Input();
const level = new Level1({ scene, collision, inkSplash: null });

// 1. Arena lock walls must be absent before boss_intro_start
assert.equal(level.arenaLockRefs?.length ?? 0, 0, 'Arena walls must be absent before intro');

// 2. Put Kuro at the Chapter 3 checkpoint (226, 47.9), hold Right and jump once near x 240
const player = new KuroController({
  scene,
  collision,
  input,
  ripples: { spawn: () => {} },
  spawnX: 226,
  spawnY: 47.9,
});
player.hasInkStep = true;

let enteredLedgeHang = false;
let jumped = false;

input.keysDown.add('KeyD');
for (let step = 0; step < 300; step++) {
  if (!jumped && player.aabb.x >= 239.5) {
    input.onKeyDown({ code: 'Space', repeat: false, preventDefault: () => {} });
    jumped = true;
  }
  input.update(1 / 60);
  player.fixedUpdate(1 / 60);
  level.fixedUpdate(1 / 60, player);

  if (player.fsm.currentStateName === 'LedgeHang') {
    enteredLedgeHang = true;
  }
  assert.ok(player.aabb.y >= 46, `Player fell below y=46 at step ${step}: y=${player.aabb.y.toFixed(2)}`);
  if (player.aabb.x >= 246) break;
}

assert.equal(enteredLedgeHang, false, 'Kuro must not enter LedgeHang at Ch3->Arena transition');
assert.ok(player.aabb.x >= 246, `Kuro must reach x >= 246, got x=${player.aabb.x.toFixed(2)}`);

// 3. After boss_intro_start, arena walls must be present
assert.ok(level.arenaLockRefs.length >= 2, 'Arena walls must lock on boss_intro_start');

// 4. Forced respawn unlocks walls and returns Kurogane to Dormant with phase-checkpoint HP
level.boss.hp = Math.ceil(level.boss.maxHp * 0.55);
level.boss.phase = 2;
events.emit('player:respawn');

assert.equal(level.arenaLockRefs.length, 0, 'Arena walls must unlock on player:respawn');
assert.equal(level.boss.fsm.currentStateName, 'Dormant', 'Kurogane must return to Dormant on respawn');
assert.equal(level.boss.hp, Math.ceil(level.boss.maxHp * 0.6), 'Kurogane must keep phase-checkpoint HP');

input.dispose();
console.log('✓ ARENA ENTRY & LOCK TEST PASSED');
