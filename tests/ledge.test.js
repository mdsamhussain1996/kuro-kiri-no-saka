// A1 Verification: Ledge grab uses snapX/snapY & climbTargetX/climbTargetY (no NaN softlock)
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem, AABB } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';

function testLedgeGrabAndClimb() {
  const scene = new THREE.Scene();
  const collision = new CollisionSystem();
  const input = new Input();

  // Solid platform with top at y = 4.0, minX = 5.0
  collision.addSolid(new AABB(7.0, 2.0, 4.0, 4.0));

  const player = new KuroController({
    scene,
    collision,
    input,
    spawnX: 4.45,
    spawnY: 3.2, // handY = maxY - 0.1 = 4.0, right at corner (5.0, 4.0)
  });
  player.facing = 1;
  player.velocity.y = 2.0;

  // Step 1: checkLedge should return finite snapX/snapY/climbTargetX/climbTargetY
  const ledge = collision.checkLedge(player.aabb, player.facing);
  assert.ok(ledge, 'checkLedge should detect corner');
  assert.ok(Number.isFinite(ledge.snapX) && Number.isFinite(ledge.snapY), 'snapX/snapY must be finite');

  // Step 2: Enter LedgeHang and verify finite coordinates
  player.fsm.changeState('LedgeHang', ledge);
  assert.equal(player.fsm.currentStateName, 'LedgeHang', 'Should enter LedgeHang');
  assert.ok(Number.isFinite(player.aabb.x) && Number.isFinite(player.aabb.y), 'Player coords in LedgeHang must stay finite (no NaN)');

  // Step 3: Press Jump -> LedgeClimb -> standing on top of platform (y >= 4.0 + halfHeight)
  input.onKeyDown({ code: 'Space', repeat: false, preventDefault: () => {} });
  player.fixedUpdate(1 / 60);
  assert.equal(player.fsm.currentStateName, 'LedgeClimb', 'Jump from LedgeHang should enter LedgeClimb');

  for (let i = 0; i < 30 && player.fsm.currentStateName === 'LedgeClimb'; i++) {
    player.fixedUpdate(1 / 60);
    assert.ok(Number.isFinite(player.aabb.x) && Number.isFinite(player.aabb.y), 'Coords during LedgeClimb must stay finite');
  }

  assert.equal(player.fsm.currentStateName, 'Idle', 'Should finish LedgeClimb in Idle');
  assert.ok(player.aabb.minY >= 3.95 && player.aabb.x > 5.0, `Should stand on top of ledge, got (${player.aabb.x}, ${player.aabb.minY})`);

  input.dispose();
  console.log('✓ A1 LEDGE GRAB & CLIMB TEST PASSED (No NaN, clean hang -> climb -> stand)');
}

testLedgeGrabAndClimb();
