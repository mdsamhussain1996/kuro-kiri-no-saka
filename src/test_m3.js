// Milestone 3 Verification Suite — Combat Mechanics, Hitboxes, Combos, Parries, Backstabs & Enemy Behaviors

import { CONFIG } from './config.js';
import { CollisionSystem, AABB } from './physics/Collision.js';
import { combatManager } from './physics/Hitbox.js';
import { KuroController } from './player/KuroController.js';
import { KuroCombat } from './player/KuroCombat.js';
import { AshigaruSentry } from './enemies/AshigaruSentry.js';
import { InkWingTengu } from './enemies/InkWingTengu.js';
import { events } from './core/EventBus.js';
import { Loop } from './core/Loop.js';

// Mock Scene & Mesh
class MockGroup {
  constructor() {
    this.position = { x: 0, y: 0, z: 0, set(x,y,z){ this.x=x;this.y=y;this.z=z; } };
    this.scale = { x: 1, y: 1, z: 1, set(x,y,z){ this.x=x;this.y=y;this.z=z; } };
    this.rotation = { x: 0, y: 0, z: 0 };
    this.visible = true;
  }
  add() {}
  clear() {}
}

class MockScene {
  add() {}
  remove() {}
}

const mockScene = new MockScene();

// Mock FX Managers
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

// Mock Input
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

async function runM3TestSuite() {
  console.log('=== STARTING MILESTONE 3 VERIFICATION SUITE ===\n');
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

  // --- TEST 1: 3-Hit Katana Combo Sequencing ---
  {
    console.log('[Test 1: 3-Hit Katana Combo]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const input = new MockInput();
    const loop = new Loop({});

    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop,
      spawnX: 0,
      spawnY: 1,
    });
    player.coyoteTimer = 1.0; // on ground

    // Hit 1: Trigger Attack
    input.attackBufferTimer = 0.12;
    player.checkAttackTrigger();
    assert(player.fsm.currentStateName === 'Attack', 'Enters Attack state on input');
    assert(player.combat.comboIndex === 0, 'First attack is Combo Index 0');
    assert(player.combat.attackPhase === 'windup', 'Attack begins in windup phase');

    // Step through windup (0.08s) -> active
    for (let t = 0; t < 0.10; t += 1/60) player.combat.fixedUpdate(1/60);
    assert(player.combat.attackPhase === 'active', 'Transitions to active hit phase');
    assert(player.combat.attackHitbox.active === true, 'Attack hitbox becomes active');

    // Step through active (0.10s) -> recovery
    for (let t = 0; t < 0.12; t += 1/60) player.combat.fixedUpdate(1/60);
    assert(player.combat.attackPhase === 'recovery', 'Transitions to recovery phase');
    assert(player.combat.attackHitbox.active === false, 'Attack hitbox deactivated in recovery');

    // Chain Hit 2 during recovery
    input.attackBufferTimer = 0.12;
    player.fsm.currentState.fixedUpdate(1/60);
    assert(player.combat.comboIndex === 1, 'Chains into Combo Index 1');

    // Step through Hit 2 (windup 0.08 + active 0.10) -> recovery
    for (let t = 0; t < 0.22; t += 1/60) player.combat.fixedUpdate(1/60);
    assert(player.combat.attackPhase === 'recovery', 'Hit 2 enters recovery phase');

    // Chain Hit 3 (Finisher)
    input.attackBufferTimer = 0.12;
    player.fsm.currentState.fixedUpdate(1/60);
    assert(player.combat.comboIndex === 2, 'Chains into Combo Index 2 (Finisher)');
    assert(player.combat.attackHitbox.damage === 2, 'Combo Finisher deals heavy damage (2 HP)');
  }

  // --- TEST 2: Backstab Instant Kill & Slow-Mo on Unaware Guard ---
  {
    console.log('\n[Test 2: Backstab Instant Kill & Slow-Mo]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const input = new MockInput();
    const loop = new Loop({});

    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop,
      spawnX: 0,
      spawnY: 1,
    });
    player.facing = 1; // Facing right

    // Sentry facing right (away from player)
    const sentry = new AshigaruSentry({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      x: 1.5,
      y: 1,
      facing: 1, // facing away
      isStationary: true,
    });

    assert(sentry.isUnaware === true, 'Sentry starts unaware');
    assert(player.facing === sentry.facing, 'Player is behind sentry');

    let backstabEmitted = false;
    events.on('backstab_kill', () => { backstabEmitted = true; });

    // Kuro swings at sentry from behind
    player.combat.onHitEnemy(sentry.hurtbox);

    assert(sentry.isDead === true, 'Backstab deals instant lethal damage');
    assert(backstabEmitted === true, 'backstab_kill event emitted');
    assert(loop.timeScale === CONFIG.COMBAT.backstabTimeScale, '20% slow-motion scale triggered on backstab');
  }

  // --- TEST 3: Perfect Parry vs Spear Thrust ---
  {
    console.log('\n[Test 3: Perfect Parry & Stagger]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const input = new MockInput();
    const loop = new Loop({});

    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop,
      spawnX: 0,
      spawnY: 1,
    });

    const sentry = new AshigaruSentry({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      x: 2.0,
      y: 1,
      facing: -1,
      isStationary: true,
    });

    // Player inputs parry
    input.parryBufferTimer = 0.12;
    player.checkParryTrigger();
    assert(player.fsm.currentStateName === 'Parry', 'Player enters Parry state');
    assert(player.combat.isParrying === true, 'Parry is active');
    assert(player.isPerfectParryWindow() === true, 'First 0.15s is perfect parry window');

    let parryEmitted = false;
    events.on('parry_perfect', () => { parryEmitted = true; });

    // Sentry attacks player while parry window is active
    sentry.attackHitbox.activate();
    combatManager.checkCollisions({
      onParrySuccess: (atk, p, perfect) => {
        player.combat.onParrySuccess(atk, perfect);
      },
    });

    assert(parryEmitted === true, 'parry_perfect event emitted');
    assert(sentry.isStaggered === true, 'Sentry is staggered for 1.2s');
    assert(sentry.staggerTimer > 0, 'Sentry stagger timer is running');
    assert(player.health === CONFIG.COMBAT.maxHealth, 'Player took 0 damage on parry');
  }

  // --- TEST 4: Tengu Airborne Hit Refreshes Air-Dash ---
  {
    console.log('\n[Test 4: Tengu Air Combat & Dash Refresh]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const input = new MockInput();
    const loop = new Loop({});

    const player = new KuroController({
      scene: mockScene,
      collision,
      input,
      afterimages: mockAfterimages,
      ripples: mockRipples,
      inkSplash: mockInkSplash,
      loop,
      spawnX: 0,
      spawnY: 6,
    });
    player.hasAirDash = false; // Air dash already used
    player.wasGroundedLastFrame = false; // In mid-air

    const tengu = new InkWingTengu({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      x: 1.5,
      y: 6,
    });

    assert(tengu.isAirborne === true, 'Tengu is recognized as airborne enemy');

    let refreshEmitted = false;
    events.on('air_dash_refreshed', () => { refreshEmitted = true; });

    // Kuro slashes Tengu in air
    player.combat.onHitEnemy(tengu.hurtbox);

    assert(player.hasAirDash === true, 'Air dash successfully refreshed upon hitting Tengu!');
    assert(refreshEmitted === true, 'air_dash_refreshed event emitted');
    assert(tengu.hp === CONFIG.ENEMIES.tengu.hp - 1, 'Tengu took slash damage');
  }

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

runM3TestSuite();
