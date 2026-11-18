// Milestone 4 Verification Suite — Full Level 1 Traversal, Mechanics, Checkpoints & Shrines

import { CONFIG } from './config.js';
import { CollisionSystem, AABB } from './physics/Collision.js';
import { KuroController } from './player/KuroController.js';
import { Level1 } from './level/Level1.js';
import { LEVEL1_DATA } from './level/level1.data.js';
import { BambooStalk } from './level/Bamboo.js';
import { SwingingLantern } from './level/SwingingLantern.js';
import { saveSystem } from './core/SaveSystem.js';

class MockScene {
  add() {}
  remove() {}
}

const mockScene = new MockScene();
const mockAfterimages = { spawn: () => {}, update: () => {} };
const mockRipples = { spawn: () => {}, update: () => {} };
const mockInkSplash = {
  spawnSlashArc: () => {},
  spawnHitImpact: () => {},
  spawnParryBurst: () => {},
  spawnBackstabBurst: () => {},
  spawnDeathDissolve: () => {},
  update: () => {},
};

class MockInput {
  constructor() {
    this.axisX = 0;
    this.axisY = 0;
    this.jumpBufferTimer = 0;
    this.attackBufferTimer = 0;
    this.dashBufferTimer = 0;
    this.parryBufferTimer = 0;
    this.jumpReleased = false;
  }
  get jumpBuffered() { return this.jumpBufferTimer > 0; }
  consumeJump() { this.jumpBufferTimer = 0; }
  get attackBuffered() { return this.attackBufferTimer > 0; }
  consumeAttack() { this.attackBufferTimer = 0; }
  get dashBuffered() { return this.dashBufferTimer > 0; }
  consumeDash() { this.dashBufferTimer = 0; }
  get parryBuffered() { return this.parryBufferTimer > 0; }
  consumeParry() { this.parryBufferTimer = 0; }
  update() {}
  postStep() {}
}

async function runM4TestSuite() {
  console.log('=== STARTING MILESTONE 4 VERIFICATION SUITE ===\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, name) {
    if (condition) {
      console.log(`✓ PASS: ${name}`);
      passed++;
    } else {
      console.error(`✗ FAIL: ${name}`);
      failed++;
    }
  }

  // --- TEST 1: Level 1 Master Structure Verification ---
  {
    console.log('[Test 1: Level 1 Structure]');
    const collision = new CollisionSystem();
    const level = new Level1({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
    });

    assert(LEVEL1_DATA.totalLength >= 300, 'Level 1 length is >= 300 units');
    assert(level.solidMeshes.length >= 15, 'Level 1 has all structural solid platforms');
    assert(level.checkpoints.length === 4, 'Level 1 contains exactly 4 Checkpoint Lanterns');
    assert(level.bambooStalks.length >= 4, 'Level 1 contains interactive Bamboo stalks');
    assert(level.swingingLanterns.length >= 2, 'Level 1 contains swinging lanterns');
    assert(level.enemies.length >= 5, 'Level 1 contains all Act I & Act II enemies');
    assert(level.shrine !== null, 'Level 1 contains the Ink Shrine');
    assert(level.bridge !== null, 'Level 1 contains the severed suspension bridge');
  }

  // --- TEST 2: Ink Shrine Unlocks Ink Step ---
  {
    console.log('\n[Test 2: Ink Shrine Unlock]');
    const collision = new CollisionSystem();
    const input = new MockInput();
    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop: null,
      spawnX: 50,
      spawnY: 12.5,
    });
    player.hasInkStepUnlocked = false;

    const level = new Level1({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
    });

    assert(player.hasInkStepUnlocked === false, 'Player starts with Ink Step locked');

    // Move player into Shrine trigger area at x: 57
    player.aabb.x = 57.0;
    player.aabb.y = 12.5;

    // Run fixedUpdate to process trigger
    collision.checkTriggers(player.aabb, player);

    assert(player.hasInkStepUnlocked === true, 'Touching Ink Shrine unlocks Ink Step!');
    assert(level.shrine.isUnlocked === true, 'Ink Shrine marked as unlocked');
  }

  // --- TEST 3: Bamboo Spring Physics & Launch Boost ---
  {
    console.log('\n[Test 3: Bamboo Spring & Launch Boost]');
    const collision = new CollisionSystem();
    const input = new MockInput();
    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop: null,
      spawnX: 118,
      spawnY: 19.5,
    });

    const bamboo = new BambooStalk({
      scene: mockScene,
      collision,
      x: 118,
      y: 12.5,
      height: 7.0,
    });

    // Player lands on top of stalk
    player.groundRef = bamboo.solidRef;
    player.facing = 1;
    input.axisX = 1;

    // Step bamboo with player on top -> should bend/deflect
    for (let i = 0; i < 20; i++) {
      bamboo.fixedUpdate(1/60, player);
    }

    assert(bamboo.deflection > 0, 'Bamboo stalk bends under player weight');

    // Player jumps while bamboo is bent -> should trigger boost launch
    input.jumpBufferTimer = 0.12;
    bamboo.fixedUpdate(1/60, player);

    assert(player.velocity.y > CONFIG.PLAYER.jumpVelocity, 'Bamboo launches player with jump boost (> normal jump velocity)');
  }

  // --- TEST 4: Swinging Lantern Grab & Momentum Release ---
  {
    console.log('\n[Test 4: Swinging Lantern Grab & Release]');
    const collision = new CollisionSystem();
    const input = new MockInput();
    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop: null,
      spawnX: 179,
      spawnY: 35.0,
    });
    player.wasGroundedLastFrame = false; // in air
    player.velocity.y = 0;

    const lantern = new SwingingLantern({
      scene: mockScene,
      collision,
      pivotX: 179,
      pivotY: 41.0,
      ropeLength: 6.5,
    });

    // Step pendulum to build swing angle
    for (let i = 0; i < 60; i++) {
      lantern.fixedUpdate(1/60, null);
    }
    assert(Math.abs(lantern.angularVelocity) > 0 || Math.abs(lantern.angle) > 0, 'Lantern swings with pendulum physics');

    // Place player at lantern head -> auto grab
    player.aabb.x = lantern.lanternPos.x;
    player.aabb.y = lantern.lanternPos.y;
    lantern.fixedUpdate(1/60, player);

    assert(lantern.grabbedPlayer === player, 'Player grabs swinging lantern on contact');
    assert(player.fsm.currentStateName === 'LedgeHang', 'Player enters hang state on lantern');

    // Jump to release
    input.jumpBufferTimer = 0.12;
    lantern.fixedUpdate(1/60, player);

    assert(lantern.grabbedPlayer === null, 'Player dismounts lantern on Jump');
    assert(player.fsm.currentStateName === 'JumpRise', 'Player transitions to JumpRise');
    assert(player.velocity.y > 0, 'Player gains upward release impulse');
  }

  // --- TEST 5: Checkpoints & SaveSystem Progression ---
  {
    console.log('\n[Test 5: Checkpoints & SaveSystem]');
    const collision = new CollisionSystem();
    const input = new MockInput();
    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop: null,
      spawnX: 0,
      spawnY: 1,
    });
    player.health = 2; // Damaged

    const level = new Level1({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
    });

    const cp1 = level.checkpoints[0];
    assert(cp1.isLit === false, 'Checkpoint 1 starts unlit');

    // Player reaches Checkpoint 1 at x: 74
    cp1.activate(player);

    assert(cp1.isLit === true, 'Checkpoint 1 flame ignites on contact');
    assert(player.health === CONFIG.COMBAT.maxHealth, 'Checkpoint fully restores player HP to 5');
    assert(player.lastCheckpoint.x === cp1.x, 'Player respawn position updated to checkpoint');

    const saved = saveSystem.load();
    assert(saved.lastCheckpointId === cp1.id, 'Checkpoint saved to SaveSystem storage');
  }

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

runM4TestSuite();
