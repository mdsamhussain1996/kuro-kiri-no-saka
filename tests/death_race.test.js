// A3 Verification: Dead player cannot attack/deal damage; attack hitboxes & buffers cancel on death
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CollisionSystem, AABB } from '../src/physics/Collision.js';
import { Input } from '../src/core/Input.js';
import { KuroController } from '../src/player/KuroController.js';

function testDeadPlayerCannotAttack() {
  const scene = new THREE.Scene();
  const collision = new CollisionSystem();
  collision.addSolid(new AABB(0, -1, 40, 2));
  const input = new Input();

  const player = new KuroController({ scene, collision, input, spawnX: 5, spawnY: 1 });
  let enemyHp = 10;
  const dummyEnemy = {
    isDead: false,
    isStaggered: false,
    aabb: new AABB(6.2, 1.0, 1.0, 2.0),
    takeDamage(dmg) { enemyHp -= dmg; }
  };

  // Start an attack, then kill player on the same frame
  input.onKeyDown({ code: 'KeyJ', repeat: false, preventDefault: () => {} });
  player.fixedUpdate(1 / 60);
  player.combat.takeDamage(5, 10);

  assert.equal(player.fsm.currentStateName, 'Dead', 'Player should be in Dead state');
  assert.equal(player.combat.attackPhase, null, 'Attack phase must be cancelled on death');
  assert.equal(player.combat.attackHitbox.active, false, 'Attack hitbox must be deactivated on death');

  // Even if onHitEnemy is called while Dead, enemy must take 0 damage
  player.combat.onHitEnemy({ owner: dummyEnemy });
  assert.equal(enemyHp, 10, 'Dead player must NOT deal damage');

  // Pressing J/K/L while Dead must NOT trigger attacks
  input.onKeyDown({ code: 'KeyJ', repeat: false, preventDefault: () => {} });
  player.fixedUpdate(1 / 60);
  assert.equal(player.fsm.currentStateName, 'Dead', 'Dead player must stay Dead until respawn');
  assert.equal(player.combat.attackHitbox.active, false, 'Hitbox stays inactive while Dead');

  input.dispose();
  console.log('✓ A3 DEATH RACE TEST PASSED (Hitboxes/buffers cancelled, Dead player deals 0 damage)');
}

testDeadPlayerCannotAttack();
