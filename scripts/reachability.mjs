// Level reachability & anti-slot static/kinematic checker
// Usage: node scripts/reachability.mjs
import assert from 'node:assert/strict';
import { CONFIG } from '../src/config.js';
import { LEVEL1_DATA } from '../src/level/level1.data.js';
import { CAMPAIGN_ACTS_DATA } from '../src/levels/CampaignLevels.js';

// Real movement constants from CONFIG.PLAYER
const RUN_SPEED = CONFIG.PLAYER.runSpeed;       // 9
const JUMP_VEL = CONFIG.PLAYER.jumpVelocity;    // 16
const GRAVITY = CONFIG.PLAYER.gravity;          // -42
const DASH_DIST = CONFIG.PLAYER.dashSpeed * CONFIG.PLAYER.dashDuration; // 30 * 0.16 = 4.8

// Max jump height: v^2 / (2 * |g|)
const MAX_JUMP_H = (JUMP_VEL * JUMP_VEL) / (2 * Math.abs(GRAVITY)); // ~3.05 (plus double/wall/bamboo/lantern)
// Single jump horizontal reach on flat ground: 2 * v / |g| * runSpeed
const FLAT_JUMP_X = ((2 * JUMP_VEL) / Math.abs(GRAVITY)) * RUN_SPEED; // ~6.85
const MAX_SINGLE_GAP_X = FLAT_JUMP_X + DASH_DIST; // ~11.65

function toRect(s) {
  return {
    x: s.x,
    y: s.y,
    minX: s.x - s.w * 0.5,
    maxX: s.x + s.w * 0.5,
    minY: s.y - s.h * 0.5,
    maxY: s.y + s.h * 0.5,
    w: s.w,
    h: s.h,
    invisible: !!s.invisible,
    arenaLock: !!s.arenaLock,
  };
}

const allActSolids = [
  ...LEVEL1_DATA.act1.solids,
  ...LEVEL1_DATA.act2.solids,
  ...LEVEL1_DATA.act3.solids,
  ...CAMPAIGN_ACTS_DATA.act2Sanctuary.solids,
  ...CAMPAIGN_ACTS_DATA.act3Foundry.solids,
].map(toRect).sort((a, b) => a.minX - b.minX);

const allLanterns = [
  ...(LEVEL1_DATA.act2.lanterns || []),
  ...(CAMPAIGN_ACTS_DATA.act2Sanctuary.lanterns || []),
  ...(CAMPAIGN_ACTS_DATA.act3Foundry.lanterns || []),
];
const allBamboo = LEVEL1_DATA.act1.bamboo || [];

const slotGaps = [];
const invisibleBlocks = [];
const unreachable = [];

// 1. Flag invisible solids on main path outside arenaLock
for (const r of allActSolids) {
  if (r.invisible && !r.arenaLock) {
    invisibleBlocks.push(r);
  }
}

// 2. Check consecutive main-path walkable platforms (excluding invisible arena walls)
const walkable = allActSolids.filter(r => !r.invisible && r.w >= 2.0);
for (let i = 1; i < walkable.length; i++) {
  const prev = walkable[i - 1];
  const cur = walkable[i];
  const gapX = cur.minX - prev.maxX;
  const dy = cur.maxY - prev.maxY;

  // Narrow slot check: gap > 0 and < 1.2 units at similar height (dy >= -1.5)
  if (gapX > 0.001 && gapX < 1.2 && dy >= -1.5 && dy <= 2.0) {
    slotGaps.push({ prev, cur, gapX, dy });
  }

  // Reachability check (considering bamboo, lanterns, or painted bridges for big gaps)
  const hasHelper =
    allLanterns.some(l => l.pivotX >= prev.maxX - 4 && l.pivotX <= cur.minX + 4) ||
    allBamboo.some(b => b.x >= prev.minX && b.x <= cur.minX + 2);

  if (!hasHelper && (gapX > MAX_SINGLE_GAP_X + 6 || dy > MAX_JUMP_H + 5)) {
    unreachable.push({ prev, cur, gapX, dy });
  }
}

console.log(`Checked ${walkable.length} walkable platforms.`);
if (invisibleBlocks.length) {
  console.error('Invisible non-arenaLock solids:', invisibleBlocks);
}
if (slotGaps.length) {
  console.error('Narrow slot gaps (0 < gap < 1.2):', slotGaps.map(g => ({
    prevMaxX: g.prev.maxX, curMinX: g.cur.minX, gapX: +g.gapX.toFixed(3), dy: +g.dy.toFixed(2)
  })));
}
if (unreachable.length) {
  console.error('Unreachable platform transitions:', unreachable);
}

assert.equal(invisibleBlocks.length, 0, 'No permanent invisible solids may sit on the main path');
assert.equal(slotGaps.length, 0, 'No narrow 0 < gap < 1.2 slots may exist between neighbouring platforms');
assert.equal(unreachable.length, 0, 'Every main-path platform must be reachable');
console.log('✓ REACHABILITY & ANTI-SLOT CHECK PASSED');
