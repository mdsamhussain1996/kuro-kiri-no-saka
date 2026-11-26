// Kuro Combat System — 3-Hit Combo, Air Slash, Perfect Parry, Backstab, Damage & Hit-Stop

import { CONFIG } from '../config.js';
import { Hitbox, combatManager } from '../physics/Hitbox.js';
import { events } from '../core/EventBus.js';

export class KuroCombat {
  constructor(player, inkSplash, loop) {
    this.player = player;
    this.inkSplash = inkSplash;
    this.loop = loop;

    // Combo State
    this.comboIndex = 0; // 0, 1, 2
    this.comboWindowTimer = 0; // Buffer window to chain next combo hit
    this.attackPhase = null; // 'windup' | 'active' | 'recovery' | null
    this.phaseTimer = 0;
    this.isAirAttack = false;

    // Parry State
    this.isParrying = false;
    this.parryTimer = 0;
    this.parryCooldownTimer = 0;

    // Slow-mo timer (for backstab / cinematic kills)
    this.slowMoTimer = 0;

    // Hitboxes
    // Hurtbox: Kuro's vulnerability area
    this.hurtbox = new Hitbox({
      owner: this.player,
      type: 'player_hurtbox',
      width: CONFIG.PLAYER.width * 0.85,
      height: CONFIG.PLAYER.height * 0.95,
      offsetX: 0,
      offsetY: 0,
    });
    this.hurtbox.activate();
    combatManager.registerPlayerHurtbox(this.hurtbox);

    // Attack Hitbox: Katana blade swing
    this.attackHitbox = new Hitbox({
      owner: this.player,
      type: 'player_attack',
      width: 1.6,
      height: 1.4,
      offsetX: 1.0,
      offsetY: 0,
      damage: 1,
    });
    combatManager.registerPlayerAttack(this.attackHitbox);

    // Provide owner references for CombatManager
    this.player.isParrying = false;
    this.player.isPerfectParryWindow = () => {
      return this.isParrying && this.parryTimer <= CONFIG.COMBAT.parryPerfectWindow;
    };
  }

  // --- Attack System ---
  startAttack(isAir = false) {
    this.isAirAttack = isAir;

    if (isAir) {
      // Air attack
      const cfg = CONFIG.COMBAT.airAttack;
      this.attackPhase = 'windup';
      this.phaseTimer = cfg.windup;
      this.attackHitbox.damage = cfg.damage;
      this.attackHitbox.aabb.width = cfg.reach;
      this.attackHitbox.offsetX = cfg.reach * 0.55;

      // Slight vertical hang / float during air slash
      if (this.player.velocity.y < 0) {
        this.player.velocity.y = Math.max(this.player.velocity.y * 0.2, -2.0);
      }
    } else {
      // Ground combo: check if chaining within combo window or canceling recovery
      if (this.comboWindowTimer > 0 || this.attackPhase === 'recovery') {
        this.comboIndex = (this.comboIndex + 1) % CONFIG.COMBAT.combo.length;
      } else {
        this.comboIndex = 0;
      }

      const cfg = CONFIG.COMBAT.combo[this.comboIndex];
      this.attackPhase = 'windup';
      this.phaseTimer = cfg.windup;
      this.attackHitbox.damage = cfg.damage;
      this.attackHitbox.aabb.width = cfg.reach;
      this.attackHitbox.offsetX = cfg.reach * 0.55;

      // Forward lunge impulse
      this.player.velocity.x += this.player.facing * cfg.lunge;
    }

    this.attackHitbox.deactivate();
  }

  updateAttack(dt) {
    if (!this.attackPhase) return;

    this.phaseTimer -= dt;

    if (this.phaseTimer <= 0) {
      if (this.attackPhase === 'windup') {
        // Move to Active swing
        this.attackPhase = 'active';
        const cfg = this.isAirAttack ? CONFIG.COMBAT.airAttack : CONFIG.COMBAT.combo[this.comboIndex];
        this.phaseTimer = cfg.active;
        this.attackHitbox.activate();

        // Spawn visual ink slash arc
        if (this.inkSplash) {
          this.inkSplash.spawnSlashArc(
            this.player.aabb.x,
            this.player.aabb.y,
            this.player.facing,
            this.comboIndex,
            this.isAirAttack
          );
        }
        events.emit('player_attack_swing', { comboIndex: this.comboIndex, isAir: this.isAirAttack });

      } else if (this.attackPhase === 'active') {
        // Move to Recovery
        this.attackPhase = 'recovery';
        const cfg = this.isAirAttack ? CONFIG.COMBAT.airAttack : CONFIG.COMBAT.combo[this.comboIndex];
        this.phaseTimer = cfg.recovery;
        this.attackHitbox.deactivate();

      } else if (this.attackPhase === 'recovery') {
        // Attack completed
        this.attackPhase = null;
        this.attackHitbox.deactivate();

        // Start combo buffer window (0.35s to chain next hit)
        if (!this.isAirAttack) {
          this.comboWindowTimer = 0.35;
        }

        // Return to movement FSM
        if (this.player.coyoteTimer > 0) {
          this.player.fsm.changeState(this.player.input.axisX !== 0 ? 'Run' : 'Idle');
        } else {
          this.player.fsm.changeState('Fall');
        }
      }
    }
  }

  // --- Parry System ---
  startParry() {
    this.isParrying = true;
    this.player.isParrying = true;
    this.parryTimer = 0;
    this.parryCooldownTimer = CONFIG.COMBAT.parryCooldown;
  }

  updateParry(dt) {
    if (!this.isParrying) return;

    this.parryTimer += dt;

    // Parry duration ends after guard window
    if (this.parryTimer >= CONFIG.COMBAT.parryGuardWindow) {
      this.endParry();
      if (this.player.coyoteTimer > 0) {
        this.player.fsm.changeState(this.player.input.axisX !== 0 ? 'Run' : 'Idle');
      } else {
        this.player.fsm.changeState('Fall');
      }
    }
  }

  endParry() {
    this.isParrying = false;
    this.player.isParrying = false;
  }

  // --- On Parry Successful (Invoked by CombatManager) ---
  onParrySuccess(enemyAttack, isPerfect) {
    if (isPerfect) {
      // Perfect Parry: Stagger enemy for 1.2s, vermilion flash, heavy shake, 60ms hit-stop
      const enemy = enemyAttack.owner;
      if (enemy && enemy.stagger) {
        enemy.stagger(CONFIG.ENEMIES.ashigaru.staggerDuration);
      }

      if (this.inkSplash) {
        this.inkSplash.spawnParryBurst(
          this.player.aabb.x + this.player.facing * 0.8,
          this.player.aabb.y,
          true
        );
      }

      if (this.loop) {
        this.loop.triggerHitStop(120);
      }
      events.emit('camera_shake', { amount: 0.35 });
      events.emit('parry_perfect', { enemy });

      // Player can immediately cancel parry into riposte attack!
      this.endParry();
      this.player.fsm.changeState('Idle');

    } else {
      // Guard: block damage, minor knockback, 40ms hit-stop, dull clink
      events.emit('parry_late', { x: this.player.aabb.x, y: this.player.aabb.y });
      if (this.inkSplash) {
        this.inkSplash.spawnParryBurst(
          this.player.aabb.x + this.player.facing * 0.6,
          this.player.aabb.y,
          false
        );
      }
      if (this.loop) {
        this.loop.triggerHitStop(CONFIG.COMBAT.hitStopMsNormal);
      }
      events.emit('camera_shake', { amount: 0.15 });

      // Small knockback push
      this.player.velocity.x = -this.player.facing * 3.5;
    }
  }

  // --- Handle Kuro Attacking Enemy ---
  onHitEnemy(enemyHurtbox) {
    const enemy = enemyHurtbox.owner;
    if (!enemy || enemy.isDead) return;

    // Check for Backstab:
    // If enemy is unaware OR staggered, AND Kuro is striking from behind (facing matches enemy facing)
    const isBackstab = (enemy.isUnaware || enemy.isStaggered) && (this.player.facing === enemy.facing);

    if (isBackstab) {
      // BACKSTAB INSTANT KILL!
      const damage = 999;
      enemy.takeDamage(damage, true, this.player.aabb.x);

      // 0.15s 20% slow-motion
      if (this.loop) {
        this.loop.setTimeScale(CONFIG.COMBAT.backstabTimeScale);
        this.slowMoTimer = CONFIG.COMBAT.backstabSlowMoDuration;
        this.loop.triggerHitStop(120);
      }

      if (this.inkSplash) {
        this.inkSplash.spawnBackstabBurst(enemy.aabb.x, enemy.aabb.y);
      }

      events.emit('camera_shake', { amount: 0.45 });
      events.emit('backstab_kill', { enemy });
      return;
    }

    // Normal Combo or Air Hit
    const isHeavy = this.comboIndex === 2 && !this.isAirAttack;
    const damage = isHeavy ? 2 : 1;
    const hitStop = isHeavy ? CONFIG.COMBAT.hitStopMsHeavy : CONFIG.COMBAT.hitStopMsNormal;

    // Riposte multiplier if enemy is staggered
    const finalDamage = enemy.isStaggered ? damage * CONFIG.COMBAT.riposteMultiplier : damage;

    enemy.takeDamage(finalDamage, false, this.player.aabb.x);

    // If Kuro is airborne and hit an airborne enemy (Tengu), refresh air dash!
    if (!this.player.wasGroundedLastFrame && enemy.isAirborne) {
      this.player.hasAirDash = true;
      events.emit('air_dash_refreshed');
    }

    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(
        enemy.aabb.x,
        enemy.aabb.y,
        this.player.facing,
        isHeavy ? 18 : 8,
        isHeavy
      );
    }

    if (this.loop) {
      this.loop.triggerHitStop(hitStop);
    }

    events.emit('camera_shake', { amount: isHeavy ? 0.25 : 0.12 });
  }

  // --- Take Damage (Invoked when enemy attack hits player) ---
  takeDamage(amount = 1, sourceX = 0) {
    if (this.player.invincibilityTimer > 0 || this.player.fsm.currentStateName === 'Dead') {
      return;
    }

    this.player.health = Math.max(0, this.player.health - amount);
    this.player.invincibilityTimer = CONFIG.COMBAT.hurtInvincibility;

    // Knockback away from damage source
    const knockbackDir = this.player.aabb.x >= sourceX ? 1 : -1;
    this.player.velocity.x = knockbackDir * CONFIG.COMBAT.hurtKnockback.x;
    this.player.velocity.y = CONFIG.COMBAT.hurtKnockback.y;

    if (this.inkSplash) {
      this.inkSplash.spawnHitImpact(
        this.player.aabb.x,
        this.player.aabb.y,
        -knockbackDir,
        12,
        true,
        true // Vermilion blood/ink spark
      );
    }

    if (this.loop) {
      this.loop.triggerHitStop(CONFIG.COMBAT.hitStopMsHeavy);
    }
    events.emit('camera_shake', { amount: 0.35 });
    events.emit('player_damaged', { health: this.player.health });

    if (this.player.health <= 0) {
      this.player.fsm.changeState('Dead');
    } else {
      this.player.fsm.changeState('Hurt');
    }
  }

  // --- Fixed Update ---
  fixedUpdate(dt) {
    // Decrement combo window timer
    if (this.comboWindowTimer > 0) {
      this.comboWindowTimer -= dt;
      if (this.comboWindowTimer <= 0) {
        this.comboIndex = 0;
      }
    }

    // Decrement parry cooldown
    if (this.parryCooldownTimer > 0) {
      this.parryCooldownTimer -= dt;
    }

    // Handle Slow-Mo recovery
    if (this.slowMoTimer > 0) {
      this.slowMoTimer -= dt;
      if (this.slowMoTimer <= 0) {
        if (this.loop) {
          this.loop.setTimeScale(1.0);
        }
      }
    }

    // Update ongoing attack or parry
    if (this.attackPhase) {
      this.updateAttack(dt);
    }
    if (this.isParrying) {
      this.updateParry(dt);
    }

    // Update Hurtbox & Hitbox world positions
    this.hurtbox.updatePosition(this.player.aabb.x, this.player.aabb.y, this.player.facing);
    this.attackHitbox.updatePosition(this.player.aabb.x, this.player.aabb.y, this.player.facing);
  }
}
