// Hitbox & Hurtbox Collision System for Combat

import { AABB } from './Collision.js';

export class Hitbox {
  constructor({ owner, type, width, height, offsetX = 0, offsetY = 0, damage = 1, isParry = false }) {
    this.owner = owner;
    this.type = type; // 'player_attack' | 'player_hurtbox' | 'enemy_attack' | 'enemy_hurtbox'
    this.aabb = new AABB(0, 0, width, height);
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.damage = damage;
    this.isParry = isParry;
    this.active = false;
    this.hitEntities = new Set(); // Prevents multi-hitting same target in single swing
  }

  updatePosition(centerX, centerY, facing = 1) {
    this.aabb.x = centerX + facing * this.offsetX;
    this.aabb.y = centerY + this.offsetY;
  }

  activate() {
    this.active = true;
    this.hitEntities.clear();
  }

  deactivate() {
    this.active = false;
    this.hitEntities.clear();
  }
}

export class CombatManager {
  constructor() {
    this.playerHurtboxes = [];
    this.playerAttacks = [];
    this.enemyHurtboxes = [];
    this.enemyAttacks = [];
  }

  registerPlayerHurtbox(hb) {
    this.playerHurtboxes.push(hb);
  }

  registerPlayerAttack(hb) {
    this.playerAttacks.push(hb);
  }

  registerEnemyHurtbox(hb) {
    this.enemyHurtboxes.push(hb);
  }

  registerEnemyAttack(hb) {
    this.enemyAttacks.push(hb);
  }

  unregisterEntity(owner) {
    this.playerHurtboxes = this.playerHurtboxes.filter(h => h.owner !== owner);
    this.playerAttacks = this.playerAttacks.filter(h => h.owner !== owner);
    this.enemyHurtboxes = this.enemyHurtboxes.filter(h => h.owner !== owner);
    this.enemyAttacks = this.enemyAttacks.filter(h => h.owner !== owner);
  }

  clear() {
    this.playerHurtboxes.length = 0;
    this.playerAttacks.length = 0;
    this.enemyHurtboxes.length = 0;
    this.enemyAttacks.length = 0;
  }

  // Check all active hitboxes against opposing hurtboxes
  checkCollisions({ onPlayerHitEnemy, onEnemyHitPlayer, onParrySuccess }) {
    // 1. Player attacks vs Enemy hurtboxes
    for (const atk of this.playerAttacks) {
      if (!atk.active) continue;

      for (const hurt of this.enemyHurtboxes) {
        if (!hurt.active) continue;
        if (atk.hitEntities.has(hurt.owner)) continue;

        if (atk.aabb.overlaps(hurt.aabb)) {
          atk.hitEntities.add(hurt.owner);
          if (onPlayerHitEnemy) {
            onPlayerHitEnemy(atk, hurt);
          }
        }
      }
    }

    // 2. Enemy attacks vs Player
    for (const atk of this.enemyAttacks) {
      if (!atk.active) continue;

      // Check if Player is currently parrying
      let parried = false;
      const player = this.playerHurtboxes[0]?.owner;
      if (player && player.isParrying) {
        // Player parry active
        for (const hurt of this.playerHurtboxes) {
          if (atk.aabb.overlaps(hurt.aabb)) {
            if (onParrySuccess) {
              const perfect = player.isPerfectParryWindow();
              atk.active = false;
              onParrySuccess(atk, player, perfect);
              parried = true;
              break;
            }
          }
        }
      }
      if (parried) continue;

      // Check normal player hit
      for (const hurt of this.playerHurtboxes) {
        if (!hurt.active) continue;
        if (atk.hitEntities.has(hurt.owner)) continue;

        if (atk.aabb.overlaps(hurt.aabb)) {
          atk.hitEntities.add(hurt.owner);
          if (onEnemyHitPlayer) {
            onEnemyHitPlayer(atk, hurt);
          }
        }
      }
    }
  }
}

export const combatManager = new CombatManager();
