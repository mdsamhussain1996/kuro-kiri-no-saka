// Regression Test: Juggernaut frontal clink + rear hit + parry stagger, Boss backstab immunity,
// Attack/Parry exit & parryTimer reset, simultaneous enemy attacks, & ShadowArcher LOS/solid collision.
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem, AABB } from '../src/physics/Collision.js';
import { combatManager, Hitbox } from '../src/physics/Hitbox.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';
import { IronBrushJuggernaut } from '../src/enemies/IronBrushJuggernaut.js';
import { ShadowArcher } from '../src/enemies/ShadowArcher.js';
import { Kurogane } from '../src/boss/Kurogane.js';
import { InkShockwaveManager } from '../src/boss/InkShockwave.js';
import { ProjectileManager } from '../src/physics/ProjectileManager.js';
import { events } from '../src/core/EventBus.js';

events.clear();
combatManager.clear();

const scene = new THREE.Scene();
const collision = new CollisionSystem();
const input = new Input();
const noop = () => {};
let clinkSparkCount = 0;
const inkSplash = {
  spawnClinkSpark: () => { clinkSparkCount++; },
  spawnHitImpact: noop,
  spawnParryBurst: noop,
  spawnBackstabBurst: noop,
  spawnSlashArc: noop,
  spawnDeathDissolve: noop,
  update: noop,
};

const player = new KuroController({
  scene,
  collision,
  input,
  afterimages: { spawn: noop, update: noop },
  ripples: { spawn: noop, update: noop },
  inkSplash,
  spawnX: 10,
  spawnY: 1,
});

// 1. IronBrushJuggernaut frontal clink (returns false) & rear hit (returns true)
const jugg = new IronBrushJuggernaut({
  scene,
  collision,
  inkSplash,
  x: 13,
  y: 1.4,
  facing: -1, // facing left toward player at x=10
  patrolMinX: 8,
  patrolMaxX: 18,
});
const startHp = jugg.hp;
player.facing = 1;
player.combat.onHitEnemy(jugg.hurtbox);
assert.equal(jugg.hp, startHp, 'Frontal hit on Juggernaut shield must deal 0 damage');
assert.ok(clinkSparkCount >= 1, 'Frontal clink must trigger clink spark');

// Flank behind Juggernaut
player.aabb.x = 16;
player.facing = -1;
player.combat.onHitEnemy(jugg.hurtbox);
assert.ok(jugg.hp < startHp, 'Rear strike on Juggernaut must deal damage');

// Parry stagger on Juggernaut
jugg.stagger(2.0);
assert.equal(jugg.isStaggered, true, 'Juggernaut.stagger must stagger enemy');

// 2. Kurogane boss immunity to instant-kill backstab
const shockwaves = new InkShockwaveManager(scene);
const boss = new Kurogane({ scene, collision, inkSplash, shockwaves, x: 260, y: 50 });
assert.equal(boss.isBoss, true, 'Kurogane must be marked isBoss = true');
boss.fsm.changeState('Staggered'); // staggered + same facing would backstab non-bosses!
player.aabb.x = 262;
player.facing = boss.facing;
const hpBefore = boss.hp;
player.combat.onHitEnemy(boss.bodyHurtbox);
assert.ok(boss.hp > 0 && boss.hp < hpBefore, 'Boss must take riposte damage, NOT instant-kill 999 backstab');
assert.equal(boss.isDead, false, 'Boss must not die from single backstab');

// 3. Attack.exit(), Parry.exit(), and parryTimer reset on endParry()
player.coyoteTimer = 1.0;
player.fsm.changeState('Attack');
player.combat.attackHitbox.activate();
player.fsm.changeState('Fall'); // Interrupt mid-attack
assert.equal(player.combat.attackPhase, null, 'Attack.exit must clear attackPhase');
assert.equal(player.combat.attackHitbox.active, false, 'Attack.exit must deactivate attackHitbox');

player.fsm.changeState('Parry');
player.combat.fixedUpdate(0.08);
assert.ok(player.combat.parryTimer > 0, 'parryTimer increments during Parry');
player.fsm.changeState('Idle');
assert.equal(player.combat.isParrying, false, 'Parry.exit must end parry');
assert.equal(player.combat.parryTimer, 0, 'endParry must reset parryTimer to 0 (no permanent auto-reflect)');

// 4. CombatManager simultaneous enemy attacks: parrying first still processes second!
const atk1 = new Hitbox({ owner: { aabb: { x: 11, y: 1 }, stagger: noop }, type: 'enemy_attack', width: 2, height: 2, damage: 1 });
const atk2 = new Hitbox({ owner: { aabb: { x: 11, y: 1 }, stagger: noop }, type: 'enemy_attack', width: 2, height: 2, damage: 1 });
atk1.updatePosition(player.aabb.x, player.aabb.y, 1);
atk2.updatePosition(player.aabb.x, player.aabb.y, 1);
atk1.activate();
atk2.activate();
combatManager.registerEnemyAttack(atk1);
combatManager.registerEnemyAttack(atk2);

player.fsm.changeState('Parry');
let parryCount = 0;
let hitCount = 0;
combatManager.checkCollisions({
  onParrySuccess: (atk, p, perfect) => {
    parryCount++;
    player.combat.onParrySuccess(atk, perfect); // ends parry on first parry
  },
  onEnemyHitPlayer: () => {
    hitCount++;
  },
});
assert.equal(parryCount, 1, 'First attack should be parried');
assert.equal(hitCount, 1, 'Second simultaneous attack must NOT be dropped by early return');

// 5. ShadowArcher LOS check & ProjectileManager solid impact destruction
const projMgr = new ProjectileManager(scene, inkSplash);
const wallCol = new CollisionSystem();
wallCol.addSolid(new AABB(5, 2, 1, 6)); // Solid wall between archer (x=10) and player (x=0)
const archer = new ShadowArcher({ scene, collision: wallCol, inkSplash, projectiles: projMgr, x: 10, y: 2 });
player.aabb.x = 0;
player.aabb.y = 2;
player.health = 5;
assert.equal(archer.hasLineOfSight(player), false, 'ShadowArcher must detect solid wall blocking LOS');

projMgr.spawnProjectile({ x: 6, y: 2, vx: -10, vy: 0, owner: archer, type: 'arrow', damage: 1 });
assert.equal(projMgr.projectiles.length, 1);
projMgr.fixedUpdate(0.1, player, [], [], wallCol);
assert.equal(projMgr.projectiles.length, 0, 'Projectile must be destroyed when hitting a solid wall');

jugg.dispose();
archer.dispose();
boss.dispose();
shockwaves.dispose();
projMgr.dispose();
player.dispose();
input.dispose();
console.log('✓ COMBAT & ENEMIES REGRESSION TEST PASSED');
