// Kuro Player Controller — Movement FSM, Traversal & Combat Integration

import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { StateMachine } from '../core/StateMachine.js';
import { AABB } from '../physics/Collision.js';
import { events } from '../core/EventBus.js';
import { KuroCombat } from './KuroCombat.js';
import { KuroModel } from './KuroModel.js';

export class KuroController {
  constructor({ scene, collision, input, afterimages, ripples, inkSplash, loop, spawnX = 0, spawnY = 2 }) {
    this.scene = scene;
    this.collision = collision;
    this.input = input;
    this.afterimages = afterimages;
    this.ripples = ripples;
    this.inkSplash = inkSplash;
    this.loop = loop;

    // Position, Dimension & Physics
    this.aabb = new AABB(spawnX ?? 0, spawnY ?? 2, CONFIG.PLAYER.width, CONFIG.PLAYER.height);
    this.velocity = { x: 0, y: 0 };
    this.facing = 1; // 1 = right, -1 = left
    this.turnTween = 0; // for smooth 0.08s visual flip

    // Health & Vitals
    this.maxHealth = CONFIG.COMBAT.maxHealth;
    this.health = this.maxHealth;
    this.invincibilityTimer = 0;
    this.hurtTimer = 0;
    this.respawnTimer = 0;

    // Movement Timers & Flags
    this.coyoteTimer = 0;
    this.isJumpingRise = false;
    this.hasAirDash = true;
    this.dashTimer = 0;
    this.dashCooldownTimer = 0;
    this.dashDirection = { x: 1, y: 0 };
    this.afterimageTimer = 0;
    this.hasInkStepUnlocked = true; // True for testing, can be locked/unlocked via shrine

    // Wall & Ledge
    this.wallRunTimer = 0;
    this.activeWallNormal = 0; // -1 = wall is on left, 1 = wall is on right
    this.ledgeGrabCooldown = 0;
    this.ledgeCorner = null;
    this.ledgeClimbProgress = 0;
    this.ledgeClimbStart = { x: 0, y: 0 };
    this.ledgeClimbEnd = { x: 0, y: 0 };

    // Ground platform reference
    this.groundRef = null;
    this.wasGroundedLastFrame = false;

    // Checkpoint
    this.lastCheckpoint = { x: spawnX, y: spawnY };

    // Visual Mesh / Root Object3D
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.set(this.aabb.x, this.aabb.y, 0);

    // Procedural Kuro Silhouette Model (Kasa Hat, Hakama, 10-Segment Verlet Scarf)
    this.kuroModel = new KuroModel();
    this.meshGroup.add(this.kuroModel.root);

    this.scene.add(this.meshGroup);

    // Combat System Subsystem
    this.combat = new KuroCombat(this, this.inkSplash, this.loop);

    // Initialize FSM
    this.fsm = new StateMachine(this, 'Idle');
    this.setupFSM();
    this.fsm.changeState('Idle');
  }

  setupFSM() {
    // ---------------- IDLE ----------------
    this.fsm.addState('Idle', {
      enter: () => {
        this.isJumpingRise = false;
        this.hasAirDash = true;
      },
      fixedUpdate: (dt) => {
        this.applyGroundMovement(dt, 0);

        if (this.checkAttackTrigger()) return;
        if (this.checkParryTrigger()) return;
        if (this.checkJumpTrigger()) return;
        if (this.checkDashTrigger()) return;

        if (this.input.axisX !== 0) {
          this.fsm.changeState('Run');
          return;
        }

        // Fall if ground lost
        if (this.coyoteTimer <= 0) {
          this.fsm.changeState('Fall');
        }
      }
    });

    // ---------------- RUN ----------------
    this.fsm.addState('Run', {
      enter: () => {
        this.hasAirDash = true;
      },
      fixedUpdate: (dt) => {
        if (this.checkAttackTrigger()) return;
        if (this.checkParryTrigger()) return;
        if (this.checkJumpTrigger()) return;
        if (this.checkDashTrigger()) return;

        if (this.input.axisX === 0) {
          this.fsm.changeState('Idle');
          return;
        }

        this.applyGroundMovement(dt, this.input.axisX * CONFIG.PLAYER.runSpeed);

        if (this.coyoteTimer <= 0) {
          this.fsm.changeState('Fall');
        }
      }
    });

    // ---------------- JUMP RISE ----------------
    this.fsm.addState('JumpRise', {
      enter: () => {
        this.velocity.y = CONFIG.PLAYER.jumpVelocity;
        this.isJumpingRise = true;
        this.coyoteTimer = 0;
      },
      fixedUpdate: (dt) => {
        if (this.checkAttackTrigger()) return;
        if (this.checkDashTrigger()) return;

        this.applyAirMovement(dt);
        this.applyGravity(dt);

        // Variable Jump Height: early release cuts vertical rise
        if (this.isJumpingRise && this.input.jumpReleased && this.velocity.y > 0) {
          this.velocity.y *= CONFIG.PLAYER.jumpCutMultiplier;
          this.isJumpingRise = false;
        }

        // Transition to Fall when rising stops
        if (this.velocity.y <= 0) {
          this.fsm.changeState('Fall');
          return;
        }

        // Check runnable wall contact while rising
        if (this.checkWallContact()) return;
      }
    });

    // ---------------- FALL ----------------
    this.fsm.addState('Fall', {
      fixedUpdate: (dt) => {
        if (this.checkAttackTrigger()) return;
        if (this.checkDashTrigger()) return;

        this.applyAirMovement(dt);
        this.applyGravity(dt);

        // Jump within coyote time
        if (this.checkJumpTrigger()) return;

        // Ledge grab check while falling
        if (this.velocity.y < 0 && this.ledgeGrabCooldown <= 0) {
          const ledge = this.collision.checkLedge(this.aabb, this.facing);
          if (ledge) {
            this.fsm.changeState('LedgeHang', ledge);
            return;
          }
        }

        // Wall contact check
        if (this.checkWallContact()) return;

        // Land on ground
        if (this.coyoteTimer > 0) {
          if (this.input.axisX !== 0) {
            this.fsm.changeState('Run');
          } else {
            this.fsm.changeState('Idle');
          }
          return;
        }
      }
    });

    // ---------------- WALL RUN ----------------
    this.fsm.addState('WallRun', {
      enter: () => {
        this.wallRunTimer = CONFIG.PLAYER.wallRunDuration;
        this.velocity.y = CONFIG.PLAYER.wallRunSpeed;
        this.velocity.x = 0;
        this.hasAirDash = true; // Wall touch refreshes air dash
      },
      fixedUpdate: (dt) => {
        this.wallRunTimer -= dt;

        // Wall jump kicks away
        if (this.input.jumpBuffered) {
          this.executeWallJump();
          return;
        }

        // Check if player lets go of wall direction
        if ((this.activeWallNormal === -1 && this.input.axisX >= 0) ||
            (this.activeWallNormal === 1 && this.input.axisX <= 0)) {
          this.fsm.changeState('Fall');
          return;
        }

        if (this.wallRunTimer <= 0) {
          this.fsm.changeState('WallSlide');
          return;
        }
      }
    });

    // ---------------- WALL SLIDE ----------------
    this.fsm.addState('WallSlide', {
      enter: () => {
        this.velocity.y = CONFIG.PLAYER.wallSlideSpeed;
        this.velocity.x = 0;
      },
      fixedUpdate: (dt) => {
        this.velocity.y = CONFIG.PLAYER.wallSlideSpeed;

        if (this.input.jumpBuffered) {
          this.executeWallJump();
          return;
        }

        if ((this.activeWallNormal === -1 && this.input.axisX >= 0) ||
            (this.activeWallNormal === 1 && this.input.axisX <= 0)) {
          this.fsm.changeState('Fall');
          return;
        }

        if (this.coyoteTimer > 0) {
          this.fsm.changeState('Idle');
        }
      }
    });

    // ---------------- LEDGE HANG ----------------
    this.fsm.addState('LedgeHang', {
      enter: (ledge) => {
        this.ledgeCorner = ledge;
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.hasAirDash = true;

        if (ledge.side === 'left') {
          this.aabb.x = ledge.x - this.aabb.width * 0.5;
          this.facing = 1;
        } else {
          this.aabb.x = ledge.x + this.aabb.width * 0.5;
          this.facing = -1;
        }
        this.aabb.y = ledge.y - this.aabb.height * 0.5;
      },
      fixedUpdate: (dt) => {
        if (this.input.axisY > 0 || this.input.jumpBuffered) {
          this.input.consumeJump();
          this.fsm.changeState('LedgeClimb');
          return;
        }

        if (this.input.axisY < 0) {
          this.ledgeGrabCooldown = 0.3;
          this.fsm.changeState('Fall');
          return;
        }
      }
    });

    // ---------------- LEDGE CLIMB ----------------
    this.fsm.addState('LedgeClimb', {
      enter: () => {
        this.ledgeClimbProgress = 0;
        this.ledgeClimbStart = { x: this.aabb.x, y: this.aabb.y };
        this.ledgeClimbEnd = {
          x: this.ledgeCorner.side === 'left' ? this.ledgeCorner.x + 0.6 : this.ledgeCorner.x - 0.6,
          y: this.ledgeCorner.y + this.aabb.height * 0.5 + 0.05,
        };
      },
      fixedUpdate: (dt) => {
        this.ledgeClimbProgress += dt / CONFIG.PLAYER.ledgeClimbDuration;
        const t = Math.min(1.0, this.ledgeClimbProgress);
        this.aabb.x = THREE.MathUtils.lerp(this.ledgeClimbStart.x, this.ledgeClimbEnd.x, t);
        this.aabb.y = THREE.MathUtils.lerp(this.ledgeClimbStart.y, this.ledgeClimbEnd.y, t);

        if (this.ledgeClimbProgress >= 1.0) {
          this.aabb.x = this.ledgeClimbEnd.x;
          this.aabb.y = this.ledgeClimbEnd.y;
          this.fsm.changeState('Idle');
        }
      }
    });

    // ---------------- INK STEP (DASH) ----------------
    this.fsm.addState('InkStep', {
      enter: () => {
        this.dashTimer = CONFIG.PLAYER.dashDuration;
        this.dashCooldownTimer = CONFIG.PLAYER.dashCooldown;
        this.hasAirDash = false;
        this.invincibilityTimer = CONFIG.PLAYER.dashInvincibility;
        this.afterimageTimer = 0;

        let dx = this.input.axisX;
        let dy = this.input.axisY;

        if (dx === 0 && dy === 0) {
          dx = this.facing;
          dy = 0;
        }

        const len = Math.hypot(dx, dy) || 1;
        this.dashDirection = { x: dx / len, y: dy / len };

        this.velocity.x = this.dashDirection.x * CONFIG.PLAYER.dashSpeed;
        this.velocity.y = this.dashDirection.y * CONFIG.PLAYER.dashSpeed;

        events.emit('player:dash', { x: this.aabb.x, y: this.aabb.y });
      },
      fixedUpdate: (dt) => {
        this.dashTimer -= dt;
        this.afterimageTimer -= dt;

        if (this.afterimageTimer <= 0) {
          this.afterimages.spawn(this.aabb.x, this.aabb.y, 0, this.facing);
          this.afterimageTimer = CONFIG.PLAYER.afterimageInterval;
        }

        if (this.dashTimer <= 0) {
          this.velocity.x *= CONFIG.PLAYER.dashSpeedDecay;
          this.velocity.y *= 0.5;

          if (this.coyoteTimer > 0) {
            this.fsm.changeState('Run');
          } else {
            this.fsm.changeState('Fall');
          }
        }
      }
    });

    // ---------------- ATTACK (GROUND 3-HIT COMBO) ----------------
    this.fsm.addState('Attack', {
      enter: () => {
        this.combat.startAttack(false);
      },
      fixedUpdate: (dt) => {
        // Apply ground lunge friction
        this.applyGroundMovement(dt, 0);

        // Allow chaining next hit if attack buffered during recovery
        if (this.input.attackBuffered && this.combat.attackPhase === 'recovery') {
          this.input.consumeAttack();
          this.combat.startAttack(false);
          return;
        }

        // Allow parrying out of recovery
        if (this.checkParryTrigger()) return;

        // Allow dashing out of recovery
        if (this.combat.attackPhase === 'recovery' && this.checkDashTrigger()) return;
      }
    });

    // ---------------- AIR ATTACK ----------------
    this.fsm.addState('AirAttack', {
      enter: () => {
        this.combat.startAttack(true);
      },
      fixedUpdate: (dt) => {
        // Milder gravity during air slash
        const g = this.velocity.y > 0 ? CONFIG.PLAYER.gravityRising : CONFIG.PLAYER.gravityFalling;
        this.velocity.y += g * 0.35 * dt;
        this.velocity.x *= 0.94;

        if (this.coyoteTimer > 0) {
          this.fsm.changeState('Idle');
        }
      }
    });

    // ---------------- PARRY ----------------
    this.fsm.addState('Parry', {
      enter: () => {
        this.combat.startParry();
      },
      fixedUpdate: (dt) => {
        this.applyGroundMovement(dt, 0);
        this.applyGravity(dt);
      }
    });

    // ---------------- HURT ----------------
    this.fsm.addState('Hurt', {
      enter: () => {
        this.hurtTimer = 0.28;
      },
      fixedUpdate: (dt) => {
        this.hurtTimer -= dt;
        this.applyAirMovement(dt);
        this.applyGravity(dt);

        if (this.hurtTimer <= 0) {
          if (this.coyoteTimer > 0) {
            this.fsm.changeState(this.input.axisX !== 0 ? 'Run' : 'Idle');
          } else {
            this.fsm.changeState('Fall');
          }
        }
      }
    });

    // ---------------- DEAD ----------------
    this.fsm.addState('Dead', {
      enter: () => {
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.respawnTimer = 1.0;
        events.emit('player_died');
      },
      fixedUpdate: (dt) => {
        this.respawnTimer -= dt;
        if (this.respawnTimer <= 0) {
          this.respawnAtCheckpoint();
        }
      }
    });
  }

  // --- Helper Methods ---

  checkAttackTrigger() {
    if (this.input.attackBuffered) {
      this.input.consumeAttack();
      if (this.coyoteTimer > 0) {
        this.fsm.changeState('Attack');
      } else {
        this.fsm.changeState('AirAttack');
      }
      return true;
    }
    return false;
  }

  checkParryTrigger() {
    if (this.input.parryBuffered && this.combat.parryCooldownTimer <= 0) {
      this.input.consumeParry();
      this.fsm.changeState('Parry');
      return true;
    }
    return false;
  }

  checkJumpTrigger() {
    if (this.input.jumpBuffered && (this.coyoteTimer > 0)) {
      this.input.consumeJump();
      this.fsm.changeState('JumpRise');
      return true;
    }
    return false;
  }

  checkDashTrigger() {
    if (!this.hasInkStepUnlocked) return false;
    if (this.input.dashBuffered && this.dashCooldownTimer <= 0 && this.hasAirDash) {
      this.input.consumeDash();
      this.fsm.changeState('InkStep');
      return true;
    }
    return false;
  }

  checkWallContact() {
    if (this.activeWallNormal !== 0) {
      if (this.activeWallNormal === -1 && this.input.axisX < 0) {
        this.facing = 1;
        this.fsm.changeState('WallRun');
        return true;
      } else if (this.activeWallNormal === 1 && this.input.axisX > 0) {
        this.facing = -1;
        this.fsm.changeState('WallRun');
        return true;
      }
    }
    return false;
  }

  executeWallJump() {
    this.input.consumeJump();
    const kickDir = -this.activeWallNormal;
    this.facing = kickDir;
    this.velocity.x = kickDir * CONFIG.PLAYER.wallJumpImpulse.x;
    this.velocity.y = CONFIG.PLAYER.wallJumpImpulse.y;
    this.isJumpingRise = true;
    this.activeWallNormal = 0;
    this.fsm.changeState('JumpRise');
    events.emit('player:walljump', { kickDir });
  }

  applyGroundMovement(dt, targetVx) {
    const accel = Math.abs(targetVx) > 0.01 ? CONFIG.PLAYER.groundAccel : CONFIG.PLAYER.groundDecel;
    const factor = 1.0 - Math.exp(-accel * dt);
    this.velocity.x += (targetVx - this.velocity.x) * factor;
  }

  applyAirMovement(dt) {
    if (this.input.axisX !== 0) {
      const targetVx = this.input.axisX * CONFIG.PLAYER.runSpeed;
      const factor = 1.0 - Math.exp(-CONFIG.PLAYER.airAccel * dt);
      this.velocity.x += (targetVx - this.velocity.x) * factor;
    } else {
      const factor = 1.0 - Math.exp(-CONFIG.PLAYER.groundDecel * 0.3 * dt);
      this.velocity.x += (0 - this.velocity.x) * factor;
    }
  }

  applyGravity(dt) {
    let g = this.velocity.y > 0 ? CONFIG.PLAYER.gravityRising : CONFIG.PLAYER.gravityFalling;
    if (Math.abs(this.velocity.y) < CONFIG.PLAYER.apexHangVelocity) {
      g *= CONFIG.PLAYER.apexGravityScale;
    }
    this.velocity.y += g * dt;
    if (this.velocity.y < CONFIG.PLAYER.maxFallSpeed) {
      this.velocity.y = CONFIG.PLAYER.maxFallSpeed;
    }
  }

  // --- Fixed Update Loop (Called at 60 Hz) ---
  fixedUpdate(dt) {
    // Decrement timers
    if (this.dashCooldownTimer > 0) this.dashCooldownTimer -= dt;
    if (this.ledgeGrabCooldown > 0) this.ledgeGrabCooldown -= dt;
    if (this.invincibilityTimer > 0) this.invincibilityTimer -= dt;

    // Check one-way drop through
    const dropThrough = (this.input.axisY < 0) && this.input.jumpBuffered;

    // Run FSM update
    this.fsm.fixedUpdate(dt);

    // Update combat subsystem
    this.combat.fixedUpdate(dt);

    // Apply collision move & slide (unless climbing ledge or dead)
    if (!this.fsm.isInState('LedgeClimb') && !this.fsm.isInState('LedgeHang') && !this.fsm.isInState('Dead')) {
      const col = this.collision.moveAndSlide(this.aabb, this.velocity, dt, dropThrough);

      // Track ground
      if (col.grounded) {
        this.coyoteTimer = CONFIG.PLAYER.coyoteTime;
        this.groundRef = col.groundSolid;
        this.hasAirDash = true; // Landing refreshes air dash

        // Landing ink ripple effect
        if (!this.wasGroundedLastFrame && Math.abs(this.velocity.y) > 2) {
          this.ripples.spawn(this.aabb.x, this.aabb.minY, 0, Math.min(1.5, Math.abs(this.velocity.y) / 12));
          events.emit('player:land', { yVel: this.velocity.y });
        }
        this.wasGroundedLastFrame = true;
      } else {
        this.coyoteTimer = Math.max(0, this.coyoteTimer - dt);
        this.wasGroundedLastFrame = false;
      }

      // Track runnable walls
      if (col.runnableWall) {
        if (col.wallLeft) this.activeWallNormal = -1;
        else if (col.wallRight) this.activeWallNormal = 1;
      } else {
        this.activeWallNormal = 0;
      }
    }

    // Update facing
    const canFlipFacing = !this.fsm.isInState('WallRun') &&
                          !this.fsm.isInState('WallSlide') &&
                          !this.fsm.isInState('LedgeHang') &&
                          !this.fsm.isInState('Attack') &&
                          !this.fsm.isInState('Parry');
    if (this.input.axisX !== 0 && canFlipFacing) {
      this.facing = this.input.axisX > 0 ? 1 : -1;
    }

    // Check level hazard/triggers
    const triggers = this.collision.checkTriggers(this.aabb, this);
    for (const tr of triggers) {
      if (tr.type === 'pit') {
        this.takeDamage(1, 0, true);
      }
    }
  }

  takeDamage(amount = 1, sourceX = 0, isPit = false) {
    if (isPit) {
      this.health = Math.max(0, this.health - amount);
      if (this.health <= 0) {
        this.respawnAtCheckpoint();
      } else {
        this.respawnAtCheckpoint(this.lastCheckpoint);
      }
      return;
    }
    this.combat.takeDamage(amount, sourceX);
  }

  setCheckpoint(x, y) {
    this.lastCheckpoint = { x, y };
  }

  respawnAtCheckpoint(checkpoint = this.lastCheckpoint) {
    this.aabb.x = checkpoint.x;
    this.aabb.y = checkpoint.y;
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.health = this.maxHealth;
    this.invincibilityTimer = 1.0;
    this.fsm.changeState('Idle');
    events.emit('player:respawn', { x: checkpoint.x, y: checkpoint.y });
  }

  // --- Render Interpolation ---
  render(alpha) {
    this.meshGroup.position.x = this.aabb.x;
    this.meshGroup.position.y = this.aabb.y;

    // Smooth turn flip (0.08s) per §3 bug 5
    const targetScaleX = this.facing;
    this.meshGroup.scale.x += (targetScaleX - this.meshGroup.scale.x) * 0.35;

    // Subtle squash & stretch driven by vertical velocity
    const vy = this.velocity.y;
    const stretchY = THREE.MathUtils.clamp(1.0 + vy * 0.015, 0.75, 1.3);
    const stretchX = 1.0 / Math.sqrt(stretchY);
    this.kuroModel.root.scale.set(stretchX, stretchY, 1.0);

    // Update procedural Kuro Model (running legs, 10-segment verlet cloth scarf)
    this.kuroModel.update(1/60, this);
  }

  dispose() {
    this.meshGroup.clear();
    this.scene.remove(this.meshGroup);
  }
}
