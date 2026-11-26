// 2D AABB Collision System for 2.5D Platforming

export class AABB {
  constructor(x = 0, y = 0, width = 1, height = 1) {
    this.x = x;       // Center X
    this.y = y;       // Center Y
    this.width = width;
    this.height = height;
  }

  get halfWidth() {
    return this.width * 0.5;
  }

  get halfHeight() {
    return this.height * 0.5;
  }

  get minX() {
    return this.x - this.halfWidth;
  }

  get maxX() {
    return this.x + this.halfWidth;
  }

  get minY() {
    return this.y - this.halfHeight;
  }

  get maxY() {
    return this.y + this.halfHeight;
  }

  overlaps(other) {
    return (
      this.minX < other.maxX &&
      this.maxX > other.minX &&
      this.minY < other.maxY &&
      this.maxY > other.minY
    );
  }

  contains(px, py) {
    return (
      px >= this.minX &&
      px <= this.maxX &&
      py >= this.minY &&
      py <= this.maxY
    );
  }
}

export class CollisionSystem {
  constructor() {
    this.solids = [];       // Array of { aabb, type, runnable, crumbling, entity }
    this.oneWays = [];      // One-way jump-through platforms
    this.triggers = [];     // Triggers (checkpoints, shrines, pits)
  }

  addSolid(box, options = {}) {
    const item = {
      aabb: box,
      type: options.type || 'solid',
      runnable: options.runnable ?? false,
      crumbling: options.crumbling ?? false,
      crumbleTimer: 0,
      crumbleState: 'idle', // 'idle' | 'collapsing' | 'collapsed'
      respawnTimer: 0,
      entity: options.entity || null,
      id: options.id || Math.random().toString(36).substring(2),
    };
    this.solids.push(item);
    return item;
  }

  addOneWay(box, options = {}) {
    const item = {
      aabb: box,
      type: 'oneWay',
      entity: options.entity || null,
    };
    this.oneWays.push(item);
    return item;
  }

  addTrigger(box, onEnter, options = {}) {
    const item = {
      aabb: box,
      type: options.type || 'trigger',
      onEnter,
      active: true,
      tag: options.tag || '',
      entity: options.entity || null,
    };
    this.triggers.push(item);
    return item;
  }

  clear() {
    this.solids.length = 0;
    this.oneWays.length = 0;
    this.triggers.length = 0;
  }

  update(dt) {
    // Update crumbling platforms
    for (let i = 0; i < this.solids.length; i++) {
      const solid = this.solids[i];
      if (solid.crumbling) {
        if (solid.crumbleState === 'collapsing') {
          solid.crumbleTimer -= dt;
          if (solid.crumbleTimer <= 0) {
            solid.crumbleState = 'collapsed';
            solid.respawnTimer = 3.0; // 3s respawn
          }
        } else if (solid.crumbleState === 'collapsed') {
          solid.respawnTimer -= dt;
          if (solid.respawnTimer <= 0) {
            solid.crumbleState = 'idle';
          }
        }
      }
    }
  }

  // Move an entity's AABB by (vx * dt, vy * dt) resolving X then Y
  moveAndSlide(entityAABB, velocity, dt, dropThroughOneWay = false) {
    const skin = 0.002;
    const oldMinY = entityAABB.minY;

    const result = {
      grounded: false,
      ceiling: false,
      wallLeft: false,
      wallRight: false,
      runnableWall: false,
      groundSolid: null,
      hitHazard: false,
    };

    // --- X Axis Movement & Resolution ---
    const moveX = velocity.x * dt;
    entityAABB.x += moveX;

    for (let i = 0; i < this.solids.length; i++) {
      const solid = this.solids[i];
      if (solid.crumbleState === 'collapsed') continue;

      if (entityAABB.overlaps(solid.aabb)) {
        if (velocity.x > 0) {
          // Moving Right -> hit Left face of solid
          entityAABB.x = solid.aabb.minX - entityAABB.halfWidth - skin;
          velocity.x = 0;
          result.wallRight = true;
          if (solid.runnable) result.runnableWall = true;
        } else if (velocity.x < 0) {
          // Moving Left -> hit Right face of solid
          entityAABB.x = solid.aabb.maxX + entityAABB.halfWidth + skin;
          velocity.x = 0;
          result.wallLeft = true;
          if (solid.runnable) result.runnableWall = true;
        }
      }
    }

    // --- Y Axis Movement & Resolution ---
    const moveY = velocity.y * dt;
    entityAABB.y += moveY;

    // Check Solids first
    for (let i = 0; i < this.solids.length; i++) {
      const solid = this.solids[i];
      if (solid.crumbleState === 'collapsed') continue;

      if (entityAABB.overlaps(solid.aabb)) {
        if (velocity.y <= 0) {
          // Falling down onto solid
          entityAABB.y = solid.aabb.maxY + entityAABB.halfHeight + skin;
          velocity.y = 0;
          result.grounded = true;
          result.groundSolid = solid;

          // Trigger crumbling step
          if (solid.crumbling && solid.crumbleState === 'idle') {
            solid.crumbleState = 'collapsing';
            solid.crumbleTimer = 0.6; // 0.6s collapse per §6
          }
        } else if (velocity.y > 0) {
          // Head-bump corner correction (within 0.22u of a solid edge, nudge around instead of stopping)
          const overlapRight = entityAABB.maxX - solid.aabb.minX;
          const overlapLeft = solid.aabb.maxX - entityAABB.minX;
          if (overlapRight > 0 && overlapRight <= 0.22) {
            entityAABB.x = solid.aabb.minX - entityAABB.halfWidth - skin;
          } else if (overlapLeft > 0 && overlapLeft <= 0.22) {
            entityAABB.x = solid.aabb.maxX + entityAABB.halfWidth + skin;
          } else {
            // Jumping up into solid ceiling
            entityAABB.y = solid.aabb.minY - entityAABB.halfHeight - skin;
            velocity.y = 0;
            result.ceiling = true;
          }
        }
      }
    }

    // Check One-Way Platforms (only if moving downward and not dropping through)
    if (!dropThroughOneWay && velocity.y <= 0) {
      for (let i = 0; i < this.oneWays.length; i++) {
        const ow = this.oneWays[i];
        // Only land if player's feet were at or above the platform before this frame's moveY
        if (oldMinY >= ow.aabb.maxY - 0.05 && entityAABB.minY <= ow.aabb.maxY) {
          // Check horizontal overlap
          if (entityAABB.maxX > ow.aabb.minX && entityAABB.minX < ow.aabb.maxX) {
            entityAABB.y = ow.aabb.maxY + entityAABB.halfHeight + skin;
            velocity.y = 0;
            result.grounded = true;
            result.groundSolid = ow;
            break;
          }
        }
      }
    }

    // Ground raycast check for micro-slopes / edge stability
    if (!result.grounded && velocity.y <= 0) {
      const probeBox = new AABB(entityAABB.x, entityAABB.minY - 0.04, entityAABB.width * 0.9, 0.08);
      for (let i = 0; i < this.solids.length; i++) {
        const solid = this.solids[i];
        if (solid.crumbleState === 'collapsed') continue;
        if (probeBox.overlaps(solid.aabb)) {
          result.grounded = true;
          result.groundSolid = solid;
          break;
        }
      }
    }

    return result;
  }

  // Check ledge corner availability for Ledge Grab
  // Hand box: offset in facing direction at shoulder height
  checkLedge(playerAABB, facing) {
    const handX = playerAABB.x + facing * (playerAABB.halfWidth + 0.15);
    const handY = playerAABB.maxY - 0.1;

    for (let i = 0; i < this.solids.length; i++) {
      const solid = this.solids[i];
      if (solid.crumbleState === 'collapsed') continue;

      // Solid must be facing the player
      const cornerX = facing > 0 ? solid.aabb.minX : solid.aabb.maxX;
      const cornerY = solid.aabb.maxY;

      // Corner must be near hand position
      const distSq = (handX - cornerX) ** 2 + (handY - cornerY) ** 2;
      if (distSq < 0.35 * 0.35) {
        // Open space check above corner (need 1.8u clearance for Kuro to stand)
        const clearanceBox = new AABB(
          cornerX + facing * (playerAABB.halfWidth + 0.05),
          cornerY + playerAABB.halfHeight + 0.1,
          playerAABB.width * 0.9,
          playerAABB.height
        );

        let spaceBlocked = false;
        for (let j = 0; j < this.solids.length; j++) {
          if (j !== i && clearanceBox.overlaps(this.solids[j].aabb)) {
            spaceBlocked = true;
            break;
          }
        }

        if (!spaceBlocked) {
          return {
            cornerX,
            cornerY,
            snapX: cornerX - facing * (playerAABB.halfWidth + 0.02),
            snapY: cornerY - playerAABB.halfHeight + 0.25,
            climbTargetX: cornerX + facing * (playerAABB.halfWidth + 0.4),
            climbTargetY: cornerY + playerAABB.halfHeight + 0.05,
          };
        }
      }
    }
    return null;
  }

  // Test triggers and report overlapping active triggers
  checkTriggers(entityAABB, entity = null) {
    const hits = [];
    for (let i = 0; i < this.triggers.length; i++) {
      const tr = this.triggers[i];
      if (tr.active && tr.aabb.overlaps(entityAABB)) {
        hits.push(tr);
        if (tr.onEnter) {
          tr.onEnter(entity || entityAABB, tr);
        }
      }
    }
    return hits;
  }
}
