// KURO: Kiri-no-Saka — Complete 3-Act Campaign Main Entry Point
// Integrates Custom GLSL 3-Band Sumi-e Shader, Tapered Calligraphy InkFX, CameraRig,
// Lantern Grapple Dash, Projectile Deflection, Unified Input, and Acts I, II, and III with 3 Bosses.

import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Loop } from './core/Loop.js';
import { Input } from './core/Input.js';
import { CameraRig } from './core/CameraRig.js';
import { CollisionSystem } from './physics/Collision.js';
import { combatManager } from './physics/Hitbox.js';
import { KuroController } from './player/KuroController.js';
import { InkAfterimageManager } from './fx/InkAfterimage.js';
import { InkRippleManager } from './fx/InkRipple.js';
import { InkSplashManager } from './fx/InkFX.js';
import { RainSystem } from './fx/Rain.js';
import { InkPetalSystem } from './fx/InkPetals.js';
import { InkCrowFlock } from './fx/InkCrows.js';
import { ParallaxBackground } from './level/Parallax.js';
import { PostProcessingSystem } from './render/PostFX.js';
import { Level1 } from './level/Level1.js';
import { LEVEL1_DATA } from './level/level1.data.js';
import { AudioEngine } from './audio/AudioEngine.js';
import { HUD, SUMIRO_CHAPTERS } from './ui/HUD.js';
import { DialogueCard } from './ui/DialogueCard.js';
import { PauseMenu } from './ui/PauseMenu.js';
import { EndCard } from './ui/EndCard.js';
import { IntroInkDrop } from './cinematics/IntroInkDrop.js';
import { events } from './core/EventBus.js';
import { saveSystem } from './core/SaveSystem.js';

// --- Loading Veil (prevents blank parchment flash & holds timer until player has control) ---
const loadingVeil = document.createElement('div');
loadingVeil.id = 'kuro-loading-veil';
loadingVeil.style.cssText = `
  position: fixed;
  inset: 0;
  background: #c4b798;
  color: #141413;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Palatino Linotype', Georgia, serif;
  font-style: italic;
  font-size: 20px;
  letter-spacing: 0.18em;
  z-index: 60;
  transition: opacity 0.45s ease;
`;
loadingVeil.innerText = '黒 — Preparing the ink...';
document.body.appendChild(loadingVeil);

// --- Three.js Setup ---
const canvas = document.getElementById('game-canvas');
const debugOverlay = document.getElementById('debug-overlay');

const savedSettings = saveSystem.load();
events.on('brushstroke_collected', ({ id }) => {
  saveSystem.addBrushstroke(id);
});
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setSize(window.innerWidth, window.innerHeight);

function applyQualityPreset(preset) {
  const isLow = preset === 'low';
  renderer.setPixelRatio(isLow ? 1 : Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = !isLow;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}
applyQualityPreset(savedSettings.quality || 'high');

renderer.setClearColor(new THREE.Color(CONFIG.PALETTE.parchment));

const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.PALETTE.parchment);
scene.fog = new THREE.FogExp2(new THREE.Color(CONFIG.PALETTE.parchment).getHex(), 0.004);

const camera = new THREE.PerspectiveCamera(
  CONFIG.CAMERA.fov,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 4, CONFIG.CAMERA.distanceZ);
camera.rotation.x = -THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg);

const params = new URLSearchParams(window.location.search);
const cameraRig = new CameraRig(camera, params.get('cam') === '3d' ? 1 : 0);
cameraRig.reduceShake = !!savedSettings.reduceShake;

// Lighting
const ambientLight = new THREE.AmbientLight(0xfffbf0, 0.78);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffedd5, 0.88);
dirLight.position.set(12, 28, 16);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;
dirLight.shadow.bias = -0.001;
scene.add(dirLight);

// --- Subsystems & Environmental FX ---
const input = new Input();
const collision = new CollisionSystem();
const afterimages = new InkAfterimageManager(scene);
const ripples = new InkRippleManager(scene);
const inkSplash = new InkSplashManager(scene);
const rain = new RainSystem(scene);
const petals = new InkPetalSystem(scene);
const crows = new InkCrowFlock(scene);
const parallax = new ParallaxBackground(scene);
const postFX = new PostProcessingSystem(renderer, scene, camera);
const audioEngine = new AudioEngine();

events.on('lightning_flash', () => {
  if (!cameraRig.reduceShake) postFX.flashLightning();
});

events.on('campaign_sunrise_victory', () => {
  input.blocked = true;
  input.onBlur();
  scene.background = new THREE.Color(0xfff3db);
  renderer.setClearColor(new THREE.Color(0xfff3db));
  ambientLight.color.setHex(0xffe4b5);
  ambientLight.intensity = 1.05;
});

events.on('player_died', () => {
  saveSystem.update({ deaths: (saveSystem.load().deaths || 0) + 1 });
});

let loop;
let pausedByUser = false;
let pausedByVisibility = false;
let paintCooldownTimer = 0;
let bellCooldownTimer = 0;
let firstControlFrame = false;

// --- Initialize 3-Act Campaign Master Assembler ---
const level = new Level1({
  scene,
  collision,
  inkSplash,
});

// URL parameter overrides
let spawnX = LEVEL1_DATA.spawn.x;
let spawnY = LEVEL1_DATA.spawn.y;
let startDashUnlocked = false;

const chapterParam = parseInt(params.get('chapter') || '0', 10);
const hasUrlOverride = Boolean(chapterParam || params.get('act') || params.get('boss') || params.get('debug'));
if (chapterParam >= 1 && chapterParam <= SUMIRO_CHAPTERS.length) {
  const ch = SUMIRO_CHAPTERS[chapterParam - 1];
  spawnX = ch.spawnX;
  spawnY = ch.spawnY;
  startDashUnlocked = ch.dash;
} else if (params.get('act') === '2') {
  spawnX = 312.0;
  spawnY = 53.0;
  startDashUnlocked = true;
} else if (params.get('act') === '3') {
  spawnX = 576.0;
  spawnY = 78.0;
  startDashUnlocked = true;
} else if (params.get('boss') === '1') {
  spawnX = 255.0;
  spawnY = 50.0;
  startDashUnlocked = true;
} else if (params.get('boss') === '2') {
  spawnX = 512.0;
  spawnY = 74.5;
  startDashUnlocked = true;
} else if (params.get('boss') === '3') {
  spawnX = 786.0;
  spawnY = 98.5;
  startDashUnlocked = true;
} else if (!hasUrlOverride && savedSettings.lastCheckpointId && savedSettings.checkpoint
  && Number.isFinite(savedSettings.checkpoint.x) && Number.isFinite(savedSettings.checkpoint.y)) {
  spawnX = savedSettings.checkpoint.x;
  spawnY = savedSettings.checkpoint.y;
  startDashUnlocked = !!savedSettings.hasInkStep || (savedSettings.unlockedChapter || 1) >= 2;
}

// --- Initialize Player ---
const player = new KuroController({
  scene,
  collision,
  input,
  afterimages,
  ripples,
  inkSplash,
  loop: null,
  spawnX,
  spawnY,
});
player.assistMode = !!savedSettings.assistMode;
player.hasInkStepUnlocked = startDashUnlocked;
const startChapter = SUMIRO_CHAPTERS.find(ch => spawnX >= ch.minX && spawnX < ch.maxX);
if (startChapter && startChapter.id >= 3) {
  player.hasBellUnlocked = true;
  player.hasPaintBridgeUnlocked = true;
}
if (startChapter && startChapter.id >= 5) {
  player.scrollOfFlowUnlocked = true;
  player.hasIppitsuUnlocked = true;
}
player.swingingLanternsRef = level.swingingLanterns;

cameraRig.bosses = {
  kurogane: level.boss,
  shirayuki: level.bossShirayuki,
  sumiOu: level.bossSumiOu,
};
cameraRig.snapTo(spawnX, spawnY);

function jumpToChapter(ch) {
  level.setArenaLocked(false);
  level.shockwaves?.clear();
  level.projectiles?.clear();
  level.clearPaintedBridges?.();
  level.clearMistPlatforms?.();

  if (level.boss && (!level.boss.isDead || ch.id <= 4)) {
    level.boss.resetForEncounter?.();
  }
  if (level.bossShirayuki && (!level.bossShirayuki.isDead || ch.id <= 6)) {
    level.bossShirayuki.resetForEncounter?.();
  }
  if (level.bossSumiOu && (!level.bossSumiOu.isDead || ch.id <= 8)) {
    level.bossSumiOu.resetForEncounter?.();
  }

  player.aabb.x = ch.spawnX;
  player.aabb.y = ch.spawnY;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.invincibilityTimer = 0;
  player.hurtTimer = 0;
  player.dashTimer = 0;
  player.dashCooldownTimer = 0;
  if (player.combat) {
    player.combat.attackPhase = null;
    player.combat.attackHitbox?.deactivate();
    player.combat.endParry();
    player.combat.hurtbox?.activate();
    player.combat.comboIndex = 0;
    player.combat.comboWindowTimer = 0;
  }
  player.fsm.changeState('Idle', null, true);

  player.scrollOfFlowUnlocked = ch.id >= 5;
  player.hasInkStepUnlocked = !!ch.dash;
  player.hasBellUnlocked = ch.id >= 3;
  player.hasPaintBridgeUnlocked = ch.id >= 3;
  player.hasIppitsuUnlocked = ch.id >= 5;
  player.hasAirDash = true;
  player.hasDoubleJump = true;
  player.setCheckpoint(ch.spawnX, ch.spawnY);
  player.health = player.maxHealth;

  hud?.hideBossBarImmediate?.();
  cameraRig.snapTo(ch.spawnX, ch.spawnY);
}

// --- UI Subsystems ---
const hud = new HUD(jumpToChapter, input);
const dialogue = new DialogueCard();
const endCard = new EndCard(() => {
  pausedByUser = true;
  loop?.pause();
});

input.onFirstGesture = () => {
  audioEngine.ensureContext();
  hud.setSoundUnlocked(true);
};

events.on('chapter_changed', (ch) => {
  if (ch.id >= 3) {
    player.hasBellUnlocked = true;
    player.hasPaintBridgeUnlocked = true;
  }
  const weather = (ch.id === 3 || ch.id === 5 || ch.id === 6) ? 'rain' : 'clear';
  const inBoss = (ch.id === 4 || ch.id === 6 || ch.id === 8);
  audioEngine.setChapterContext(ch.id, weather, inBoss);
});

const pauseMenu = new PauseMenu(null, audioEngine, {
  onResume: () => {
    pausedByUser = false;
    pauseMenu.close();
    input.blocked = false;
    if (!pausedByVisibility) loop.resume();
  },
  onRestartChapter: () => {
    pausedByUser = false;
    input.blocked = false;
    const ch = SUMIRO_CHAPTERS.find(c => c.id === (hud.currentChapterId || 1)) || SUMIRO_CHAPTERS[0];
    jumpToChapter(ch);
    if (!pausedByVisibility) loop.resume();
  },
  onSelectChapter: (ch) => {
    pausedByUser = false;
    input.blocked = false;
    jumpToChapter(ch);
    if (!pausedByVisibility) loop.resume();
  },
  onShakeChange: (reduce) => {
    cameraRig.reduceShake = !!reduce;
  },
  onQualityChange: (q) => {
    applyQualityPreset(q);
  },
  onAssistChange: (assist) => {
    player.assistMode = !!assist;
  }
});

// Window resize & visibility handlers
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  applyQualityPreset(saveSystem.load().quality || 'high');
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    pausedByVisibility = true;
    loop.pause();
    input.onBlur();
  } else {
    pausedByVisibility = false;
    if (!pausedByUser) {
      loop.resume();
    }
  }
});

// --- Unscaled Input Tick (runs before fixedUpdate so buffers use real dt) ---
function onInputUpdate(dt) {
  input.update(dt);

  if (input.pausePressed) {
    input.consumePause();
    pausedByUser = !pausedByUser;
    if (pausedByUser) {
      pauseMenu.open();
      input.onBlur();
      input.blocked = true;
      loop.pause();
    } else {
      pauseMenu.close();
      input.blocked = false;
      if (!pausedByVisibility) loop.resume();
    }
  }

  if (input.mutePressed) {
    input.consumeMute();
    audioEngine.toggleMute();
    if (pauseMenu.isOpen) pauseMenu.render();
  }
}

let _lastPaintLabel = '';
let _lastBellLabel = '';
let _lastDebugHtml = '';

// --- Fixed Update Loop (60 Hz) ---
function onFixedUpdate(dt) {
  if (!firstControlFrame && !input.blocked) {
    firstControlFrame = true;
    hud.startRunTimer();
  }

  if (paintCooldownTimer > 0) paintCooldownTimer = Math.max(0, paintCooldownTimer - dt);
  if (bellCooldownTimer > 0) bellCooldownTimer = Math.max(0, bellCooldownTimer - dt);

  // Buffered Sumi-e Powers & Camera via unified Input (blocked while paused or in dialogue)
  if (!dialogue.isVisible) {
    if (input.paintBridgePressed && paintCooldownTimer <= 0) {
      input.consumePaintBridge();
      const canPaint = player.hasPaintBridgeUnlocked || (hud.currentChapterId >= 3) || window.location.search.includes('debug');
      if (canPaint && player.spendInk(100)) {
        paintCooldownTimer = CONFIG.CONTROLS.paintBridge.cooldown;
        level.paintInkBridge(player.aabb.x, player.aabb.y, player.facing, hud.currentChapterId >= 3 && hud.currentChapterId <= 6);
        events.emit('camera_shake', { amount: 0.14 });
      }
    }
    if (input.bellPressed && bellCooldownTimer <= 0) {
      input.consumeBell();
      const canBell = player.hasBellUnlocked || (hud.currentChapterId >= 3) || window.location.search.includes('debug');
      if (canBell && player.spendInk(100)) {
        bellCooldownTimer = CONFIG.CONTROLS.bell.cooldown;
        level.triggerBellResonance(player);
        events.emit('camera_shake', { amount: 0.32 });
      }
    }
    if (input.ippitsuPressed && player.hasIppitsuUnlocked && player.spendInk(300)) {
      input.consumeIppitsu();
      // Ippitsu One-Stroke Finisher: 15% slow-mo via simulation slowMoTimer
      loop.setTimeScale(0.15);
      if (player.combat) {
        player.combat.slowMoTimer = 0.04;
      }
      events.emit('camera_shake', { amount: 0.45 });
      events.emit('ippitsu_strike', { x: player.aabb.x, y: player.aabb.y });
      if (level.enemies) {
        for (const en of level.enemies) {
          if (!en.isDead && Math.abs(en.aabb.x - player.aabb.x) < 12 && Math.abs(en.aabb.y - player.aabb.y) < 5.0) {
            en.takeDamage(6, true, player.aabb.x);
          }
        }
      }
      for (const b of [level.boss, level.bossShirayuki, level.bossSumiOu]) {
        if (b && !b.isDead && Math.abs(b.aabb.x - player.aabb.x) < 12 && Math.abs(b.aabb.y - player.aabb.y) < 6.0) {
          b.takeDamage(6, true, player.aabb.x);
        }
      }
    }
    if (input.cameraPressed) {
      input.consumeCamera();
      cameraRig.cyclePerspective();
    }
  }

  // Update power button cooldown labels (cached to avoid redundant DOM writes)
  if (hud.powerBtns?.paint) {
    const nextPaint = paintCooldownTimer > 0
      ? `Bridge (${paintCooldownTimer.toFixed(1)}s)`
      : `Paint Bridge [${CONFIG.CONTROLS.paintBridge.display}]`;
    if (nextPaint !== _lastPaintLabel) {
      _lastPaintLabel = nextPaint;
      hud.powerBtns.paint.innerText = nextPaint;
    }
  }
  if (hud.powerBtns?.bell) {
    const nextBell = bellCooldownTimer > 0
      ? `Bell (${bellCooldownTimer.toFixed(1)}s)`
      : `Bell [${CONFIG.CONTROLS.bell.display}]`;
    if (nextBell !== _lastBellLabel) {
      _lastBellLabel = nextBell;
      hud.powerBtns.bell.innerText = nextBell;
    }
  }

  collision.update(dt);
  player.fixedUpdate(dt);

  level.fixedUpdate(dt, player);
  cameraRig.fixedUpdate(dt, player);

  rain.update(dt, player.aabb.x, player.aabb.y);
  petals.update(dt, player.aabb.x, player.aabb.y);
  crows.update(dt, player.aabb.x, player.aabb.y);
  audioEngine.update(dt);
  hud.update(player);

  // Combat Hitbox & Parry Collision Resolution
  combatManager.checkCollisions({
    onPlayerHitEnemy: (atk, hurt) => {
      player.combat.onHitEnemy(hurt);
    },
    onEnemyHitPlayer: (atk, hurt) => {
      player.combat.takeDamage(atk.damage, atk.owner.aabb.x);
    },
    onParrySuccess: (atk, p, perfect) => {
      player.combat.onParrySuccess(atk, perfect);
    },
  });

  afterimages.update(dt);
  ripples.update(dt);
  inkSplash.update(dt);

  input.postStep();
}

// Auto-quality frame-time monitor (switches to 'low' if avg frame time > 20ms over first 3s)
let perfSampleFrames = 0;
let perfSampleElapsed = 0;
let perfLastMs = 0;
let perfChecked = false;

let _lastRenderMs = 0;

// --- Render Loop (Interpolated) ---
function onRender(alpha) {
  const nowMs = performance.now();
  const renderDt = _lastRenderMs > 0 ? Math.min(0.1, Math.max(0.001, (nowMs - _lastRenderMs) * 0.001)) : 1 / 60;
  _lastRenderMs = nowMs;

  if (!perfChecked && !pausedByUser && !pausedByVisibility && perfLastMs > 0) {
    const dMs = nowMs - perfLastMs;
    if (dMs > 1 && dMs < 150) {
      perfSampleElapsed += dMs;
      perfSampleFrames++;
      if (perfSampleElapsed >= 3000 && perfSampleFrames >= 20) {
        perfChecked = true;
        if (perfSampleElapsed / perfSampleFrames > 20.0) {
          applyQualityPreset('low');
          saveSystem.save({ ...saveSystem.load(), quality: 'low' });
        }
      }
    }
  }
  perfLastMs = nowMs;

  cameraRig.orbitBlocked = pausedByUser || pausedByVisibility || input.blocked;
  player.render(alpha, renderDt);
  level.render(alpha);
  cameraRig.render(player, alpha);
  parallax.update(camera.position.x, camera.position.y);

  renderer.render(scene, camera);

  if (debugOverlay && window.location.search.includes('debug')) {
    debugOverlay.style.display = 'block';
    const hpIcons = '● '.repeat(player.health) + '○ '.repeat(Math.max(0, CONFIG.COMBAT.maxHealth - player.health));
    const nextDebugHtml = `
      <strong>KURO: Kiri-no-Saka [3-Act Campaign]</strong><br>
      HP: <span style="color:#b8292f;">${hpIcons}</span> | State: <span style="color:#ffd43b;">${player.fsm.currentStateName}</span><br>
      Pos: (${player.aabb.x.toFixed(1)}, ${player.aabb.y.toFixed(1)}) | Cam Mode: ${cameraRig.mode}
    `;
    if (nextDebugHtml !== _lastDebugHtml) {
      _lastDebugHtml = nextDebugHtml;
      debugOverlay.innerHTML = nextDebugHtml;
    }
  }
}

// Start Game Loop (pass onInputUpdate for unscaled buffer timing!)
loop = new Loop({
  onInputUpdate,
  onFixedUpdate,
  onRender,
});

pauseMenu.loop = loop;
player.loop = loop;
player.combat.loop = loop;

const shouldSkipIntro = window.location.search.includes('skipIntro') || window.location.search.includes('debug');
if (!shouldSkipIntro) {
  input.blocked = true;
  new IntroInkDrop(audioEngine, () => {
    if (!pauseMenu.isOpen && !pausedByUser) {
      input.blocked = false;
      hud.startRunTimer();
    }
  });
}

loop.start();

// Dev-only deterministic test hook (never shipped in production)
if (import.meta.env.DEV) {
  window.__game = { player, level, loop, input, hud, cameraRig, audioEngine };
}

// Dismiss loading veil cleanly
requestAnimationFrame(() => {
  loadingVeil.style.opacity = '0';
  setTimeout(() => loadingVeil.remove(), 450);
});
