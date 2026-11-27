// Regression Test: SwingingLantern grab, hold-forward no soft-lock, drop-down, jump-release, & death cleanup
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { SwingingLantern } from '../src/level/SwingingLantern.js';
import { events } from '../src/core/EventBus.js';

events.clear();
const scene = new THREE.Scene();
const collision = new CollisionSystem();
const input = new Input();
const noop = () => {};

const player = new KuroController({
  scene,
  collision,
  input,
  afterimages: { spawn: noop, update: noop },
  ripples: { spawn: noop, update: noop },
  inkSplash: { spawnParryBurst: noop, spawnHitImpact: noop, spawnSlashArc: noop, spawnDeathDissolve: noop, update: noop },
  spawnX: 20,
  spawnY: 10,
});
player.wasGroundedLastFrame = false;
player.velocity.y = 0;

const lantern = new SwingingLantern({
  scene,
  collision,
  pivotX: 20,
  pivotY: 16,
  ropeLength: 6.0,
});
player.swingingLanternsRef = [lantern];

// Step lantern once so lanternPos is computed
lantern.fixedUpdate(1 / 60, null);
player.aabb.x = lantern.lanternPos.x;
player.aabb.y = lantern.lanternPos.y;
lantern.fixedUpdate(1 / 60, player);

assert.equal(lantern.grabbedPlayer, player, 'Player must grab swinging lantern');
assert.equal(player.fsm.currentStateName, 'LedgeHang', 'Player enters LedgeHang');
assert.equal(player.ledgeCorner?.lantern, lantern, 'LedgeHang payload must carry lantern reference');

// Holding forward/up while hanging from lantern must NOT trigger LedgeClimb soft-lock
input.keysDown.add('KeyD');
input.update(1 / 60);
player.fixedUpdate(1 / 60);
lantern.fixedUpdate(1 / 60, player);
assert.equal(player.fsm.currentStateName, 'LedgeHang', 'Holding forward on lantern must NOT enter LedgeClimb');
assert.equal(lantern.grabbedPlayer, player, 'Player remains cleanly attached to lantern');
input.keysDown.delete('KeyD');

// Holding Down drops to Fall and cleanly clears grabbedPlayer
input.keysDown.add('KeyS');
input.update(1 / 60);
player.fixedUpdate(1 / 60);
assert.equal(player.fsm.currentStateName, 'Fall', 'Holding down on lantern drops to Fall');
assert.equal(lantern.grabbedPlayer, null, 'LedgeHang.exit must clear lantern.grabbedPlayer');
assert.ok(lantern.grabCooldown > 0, 'Lantern grabCooldown must be set on drop');
input.keysDown.delete('KeyS');

// Wait out cooldown and re-grab, then jump-release
for (let i = 0; i < 40; i++) {
  lantern.fixedUpdate(1 / 60, null);
}
player.aabb.x = lantern.lanternPos.x;
player.aabb.y = lantern.lanternPos.y;
player.velocity.y = 0;
player.wasGroundedLastFrame = false;
lantern.fixedUpdate(1 / 60, player);
assert.equal(lantern.grabbedPlayer, player, 'Player re-grabs lantern after cooldown');

input.onKeyDown({ code: 'Space', repeat: false, preventDefault: noop });
input.update(1 / 60);
player.fixedUpdate(1 / 60); // Must NOT consume jumpBuffered in LedgeHang
lantern.fixedUpdate(1 / 60, player);
assert.equal(lantern.grabbedPlayer, null, 'Jump release must clear grabbedPlayer');
assert.equal(player.fsm.currentStateName, 'JumpRise', 'Jump release must enter JumpRise');
assert.ok(player.velocity.y > 0, 'Jump release must apply upward velocity');

// Dying while hanging must also clear grabbedPlayer
for (let i = 0; i < 40; i++) lantern.fixedUpdate(1 / 60, null);
player.aabb.x = lantern.lanternPos.x;
player.aabb.y = lantern.lanternPos.y;
player.velocity.y = 0;
player.wasGroundedLastFrame = false;
lantern.fixedUpdate(1 / 60, player);
assert.equal(lantern.grabbedPlayer, player, 'Re-grabbed before death test');
player.fsm.changeState('Dead');
assert.equal(lantern.grabbedPlayer, null, 'Dead.enter must clear lantern.grabbedPlayer');

lantern.dispose();
player.dispose();
input.dispose();
console.log('✓ SWINGING LANTERN REGRESSION TEST PASSED');
