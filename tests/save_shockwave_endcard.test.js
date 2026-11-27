// Regression Test: SaveSystem.update, EndCard victory persistence & pause callback,
// InkShockwaveManager pool opacity reset + clear() + dispose(), Collision.removeTrigger, & Level1.dispose()
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { saveSystem } from '../src/core/SaveSystem.js';
import { events } from '../src/core/EventBus.js';
import { CollisionSystem, AABB } from '../src/physics/Collision.js';
import { combatManager } from '../src/physics/Hitbox.js';
import { InkShockwaveManager } from '../src/boss/InkShockwave.js';
import { Level1 } from '../src/level/Level1.js';

// 1. SaveSystem.update
saveSystem.reset();
const updated = saveSystem.update({ postCampaignUnlocked: true, deaths: 3 });
assert.equal(updated.postCampaignUnlocked, true, 'SaveSystem.update must merge patch');
assert.equal(updated.deaths, 3);
assert.equal(saveSystem.load().postCampaignUnlocked, true, 'SaveSystem.update must persist patch');

// 2. EndCard with minimal DOM stub
function makeEl(tag) {
  return {
    tagName: tag.toUpperCase(),
    id: '',
    style: {},
    innerText: '',
    innerHTML: '',
    children: [],
    parentNode: null,
    appendChild(c) { this.children.push(c); c.parentNode = this; return c; },
    removeChild(c) { const i = this.children.indexOf(c); if (i !== -1) this.children.splice(i, 1); c.parentNode = null; },
    addEventListener() {},
  };
}
const rootEl = makeEl('div');
globalThis.document = {
  createElement: (t) => makeEl(t),
  getElementById: (id) => (id === 'ui-root' ? rootEl : null),
  body: rootEl,
};
globalThis.window = { location: { reload() {}, search: '' } };

const { EndCard } = await import('../src/ui/EndCard.js');
events.clear();
saveSystem.reset();
let onShowCalled = false;
const endCard = new EndCard(() => { onShowCalled = true; });
events.emit('campaign_sunrise_victory');
assert.equal(saveSystem.load().postCampaignUnlocked, true, 'campaign_sunrise_victory must set postCampaignUnlocked without throwing');
endCard.show();
assert.equal(onShowCalled, true, 'EndCard.show() must invoke onShow callback');
assert.equal(endCard.container.style.opacity, '1');
endCard.dispose();
assert.equal(rootEl.children.length, 0, 'EndCard.dispose() must remove container');

delete globalThis.document;
delete globalThis.window;

// 3. InkShockwaveManager pool opacity reset, clear(), & dispose()
events.clear();
combatManager.clear();
const scene = new THREE.Scene();
const sw = new InkShockwaveManager(scene);

sw.spawnFloorWave(10, 0, 1, 10, 1);
const waveItem = sw.wavePool.activeList[0];
waveItem.mesh.material.opacity = 0.05; // Simulate end-of-life fade
sw.clear();
assert.equal(sw.wavePool.activeList.length, 0, 'clear() must release active waves');
assert.equal(waveItem.hitbox.active, false, 'clear() must deactivate wave hitbox');

sw.spawnFloorWave(12, 0, 1, 10, 1);
assert.equal(sw.wavePool.activeList[0].mesh.material.opacity, 0.95, 'Reused wave must restore opacity to 0.95');

sw.spawnRingShockwave(10, 0, 1);
sw.spawnPuddle(10, 0);
sw.dispose();
assert.equal(combatManager.enemyAttacks.length, 0, 'InkShockwaveManager.dispose() must unregister all hitboxes');
assert.equal(scene.children.length, 0, 'InkShockwaveManager.dispose() must remove all meshes from scene');

// 4. CollisionSystem.removeTrigger & Level1.dispose()
const collision = new CollisionSystem();
const tr = collision.addTrigger(new AABB(0, 0, 2, 2), null, { type: 'pit' });
assert.equal(collision.triggers.length, 1);
assert.equal(collision.removeTrigger(tr), true);
assert.equal(collision.triggers.length, 0);

const levelScene = new THREE.Scene();
const levelCol = new CollisionSystem();
const level = new Level1({ scene: levelScene, collision: levelCol, inkSplash: null });
level.paintInkBridge(10, 2, 1);
level.triggerBellResonance(null);
level.setArenaLocked(true, 'kurogane');
level.dispose();
assert.equal(levelCol.solids.length, 0, 'Level1.dispose() must remove all solids (including arena locks and mist platforms)');
assert.equal(levelCol.oneWays.length, 0, 'Level1.dispose() must remove all oneWays (including painted bridges & bridge)');
assert.equal(levelCol.triggers.length, 0, 'Level1.dispose() must remove all triggers');
assert.equal(levelScene.children.length, 0, 'Level1.dispose() must remove all meshes from scene');

console.log('✓ SAVE / ENDCARD / SHOCKWAVE / LEVEL DISPOSE REGRESSION TEST PASSED');
