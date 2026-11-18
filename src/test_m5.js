// Milestone 5 Verification Suite — Boss: Kurogane, the Gatekeeper (Phases, Attacks, Vulnerable Windows, Parries)

import { CONFIG } from './config.js';
import { CollisionSystem, AABB } from './physics/Collision.js';
import { combatManager } from './physics/Hitbox.js';
import { KuroController } from './player/KuroController.js';
import { Kurogane } from './boss/Kurogane.js';
import { InkShockwaveManager } from './boss/InkShockwave.js';
import { events } from './core/EventBus.js';

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

async function runM5TestSuite() {
  console.log('=== STARTING MILESTONE 5 VERIFICATION SUITE ===\n');
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

  // --- TEST 1: Boss Initialization & Intro Drop ---
  {
    console.log('[Test 1: Boss Intro & Dimensions]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const shockwaves = new InkShockwaveManager(mockScene);

    const boss = new Kurogane({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      shockwaves,
      x: 260,
      y: 48,
    });

    assert(boss.hp === CONFIG.BOSS.hpMax, 'Kurogane initializes with 40 HP');
    assert(boss.aabb.height >= 4.5, 'Kurogane is towering (2.6x player height)');
    assert(boss.fsm.currentStateName === 'Dormant', 'Starts Dormant on Torii crossbar');

    // Player crosses arena threshold at x: 248
    const mockPlayer = { aabb: { x: 248, y: 49 }, health: 5 };
    boss.fixedUpdate(1/60, mockPlayer);

    assert(boss.fsm.currentStateName === 'Intro', 'Player arena entry triggers Intro sequence');

    // Step through intro drop until landing
    for (let t = 0; t < 1.0; t += 1/60) {
      boss.fixedUpdate(1/60, mockPlayer);
    }

    assert(boss.velocity.y === 0, 'Kurogane lands firmly on arena floor');
    assert(boss.aabb.y <= boss.groundY + CONFIG.BOSS.height * 0.5 + 0.1, 'Positioned at ground level');
  }

  // --- TEST 2: Clink Protection vs Vulnerable Window Weak Point ---
  {
    console.log('\n[Test 2: Clink Protection vs Weak Point ×2 Damage]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const shockwaves = new InkShockwaveManager(mockScene);

    const boss = new Kurogane({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      shockwaves,
      x: 260,
      y: 48,
    });
    boss.fsm.changeState('Decide');

    // 1. Attack outside vulnerable window -> CLINK (0 damage)
    assert(boss.isVulnerable === false, 'Boss starts shielded outside vulnerable windows');
    let clinkEmitted = false;
    events.on('boss_clink', () => { clinkEmitted = true; });

    boss.takeDamage(1, false, 258);
    assert(boss.hp === 40, 'Basic hits clink for 0 damage when armored');
    assert(clinkEmitted === true, 'boss_clink event emitted');

    // 2. Trigger Heavy Slam -> Blade embeds in stone creating 1.6s Vulnerable Window!
    boss.fsm.changeState('Action_Slam');
    assert(boss.isVulnerable === true, 'Heavy Slam creates vulnerable window');

    // Attack during vulnerable window -> deals ×2 damage!
    boss.takeDamage(1, false, 258);
    assert(boss.hp === 40 - 2, 'Hit during vulnerable window deals ×2 damage (2 HP)');

    // Hit with combo finisher (base damage 2) -> deals 4 HP!
    boss.takeDamage(2, false, 258);
    assert(boss.hp === 40 - 2 - 4, 'Heavy combo hit in vulnerable window deals 4 HP');
  }

  // --- TEST 3: Phase Transitions at 60% and 25% HP ---
  {
    console.log('\n[Test 3: Phase Transitions at 60% and 25% HP]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const shockwaves = new InkShockwaveManager(mockScene);

    const boss = new Kurogane({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      shockwaves,
      x: 260,
      y: 48,
    });
    boss.fsm.changeState('Decide');
    boss.isVulnerable = true;

    assert(boss.phase === 1, 'Starts in Phase 1 (100% HP)');

    // Reduce HP to 60% (24 HP)
    boss.takeDamage(8, true, 258); // 8 * 2 = 16 damage -> 24 HP remaining (60%)
    assert(boss.phase === 2, 'Enters Phase 2 when HP drops to 60%');
    assert(boss.fsm.currentStateName === 'PhaseTransition', 'Triggers Phase 2 Transition roar');

    // Advance through roar
    for (let t = 0; t < 1.5; t += 1/60) boss.fixedUpdate(1/60, null);

    // Reduce HP to 25% (10 HP)
    boss.isVulnerable = true;
    boss.takeDamage(7, true, 258); // 7 * 2 = 14 damage -> 10 HP remaining (25%)
    assert(boss.phase === 3, 'Enters Phase 3 when HP drops to 25%');
    assert(boss.fsm.currentStateName === 'PhaseTransition', 'Triggers Phase 3 Transition roar');
  }

  // --- TEST 4: Phase 3 Perfect Parry Stagger & Riposte ---
  {
    console.log('\n[Test 4: Phase 3 Perfect Parry Stagger]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const shockwaves = new InkShockwaveManager(mockScene);

    const boss = new Kurogane({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      shockwaves,
      x: 260,
      y: 48,
    });
    boss.phase = 3; // In Phase 3
    boss.fsm.changeState('Action_Sweep');

    assert(boss.canBeParried === true, 'Phase 3 Sweep is parryable');

    // Player executes perfect parry
    boss.stagger(CONFIG.BOSS.staggerDuration);

    assert(boss.isStaggered === true, 'Kurogane is staggered for 2.0s upon perfect parry');
    assert(boss.isVulnerable === true, 'Stagger exposes glowing weak point');
    assert(boss.fsm.currentStateName === 'Staggered', 'Enters Staggered state');
  }

  // --- TEST 5: Boss Defeat & Death Dissolve ---
  {
    console.log('\n[Test 5: Boss Defeat & Death Sequence]');
    combatManager.clear();
    const collision = new CollisionSystem();
    const shockwaves = new InkShockwaveManager(mockScene);

    const boss = new Kurogane({
      scene: mockScene,
      collision,
      inkSplash: mockInkSplash,
      shockwaves,
      x: 260,
      y: 48,
    });
    boss.isVulnerable = true;

    let defeatedEmitted = false;
    events.on('boss_defeated', () => { defeatedEmitted = true; });

    // Deliver lethal blow
    boss.takeDamage(20, true, 258);

    assert(boss.hp === 0, 'HP reduced to 0');
    assert(boss.isDead === true, 'Boss marked as dead');
    assert(boss.fsm.currentStateName === 'Dying', 'Enters Dying state with ink smoke dissolve');
    assert(defeatedEmitted === true, 'boss_defeated event emitted');
  }

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

runM5TestSuite();
