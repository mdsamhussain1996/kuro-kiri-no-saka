// KURO: Kiri-no-Saka — Main Entry Point (Milestones 1-7: Full Gameplay, Sumi-e Art, Audio & UI)

import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Loop } from './core/Loop.js';
import { Input } from './core/Input.js';
import { CollisionSystem } from './physics/Collision.js';
import { combatManager } from './physics/Hitbox.js';
import { KuroController } from './player/KuroController.js';
import { InkAfterimageManager } from './fx/InkAfterimage.js';
import { InkRippleManager } from './fx/InkRipple.js';
import { InkSplashManager } from './fx/InkSplash.js';
import { RainSystem } from './fx/Rain.js';
import { InkPetalSystem } from './fx/InkPetals.js';
import { ParallaxBackground } from './level/Parallax.js';
import { PostProcessingSystem } from './render/PostFX.js';
import { Level1 } from './level/Level1.js';
import { LEVEL1_DATA } from './level/level1.data.js';
import { AudioEngine } from './audio/AudioEngine.js';
import { HUD } from './ui/HUD.js';
import { DialogueCard } from './ui/DialogueCard.js';
import { PauseMenu } from './ui/PauseMenu.js';
import { EndCard } from './ui/EndCard.js';
import { IntroInkDrop } from './cinematics/IntroInkDrop.js';
import { events } from './core/EventBus.js';

// --- Three.js Setup ---
const canvas = document.getElementById('game-canvas');
const debugOverlay = document.getElementById('debug-overlay');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color(CONFIG.PALETTE.parchment));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.PALETTE.parchment);
scene.fog = new THREE.FogExp2(new THREE.Color(CONFIG.PALETTE.parchment).getHex(), 0.022);

// 2.5D Camera per §1: Perspective FOV 38 deg, 22 units back on +Z, 7 deg downward tilt
const camera = new THREE.PerspectiveCamera(
  CONFIG.CAMERA.fov,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 4, CONFIG.CAMERA.distanceZ);
camera.rotation.x = -THREE.MathUtils.degToRad(CONFIG.CAMERA.tiltDeg);

// Camera shake state
let cameraShakeAmount = 0;
events.on('camera_shake', ({ amount }) => {
  cameraShakeAmount = Math.max(cameraShakeAmount, amount);
});

// Lighting: Directional sunlight + warm ambient wash
const ambientLight = new THREE.AmbientLight(0xfffbf0, 0.75);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffedd5, 0.85);
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
const parallax = new ParallaxBackground(scene);
const postFX = new PostProcessingSystem(renderer, scene, camera);
const audioEngine = new AudioEngine();

events.on('lightning_flash', () => {
  postFX.flashLightning();
});

// Forward declaration of loop
let loop;

// --- Initialize Level 1 Master Assembler ---
const level = new Level1({
  scene,
  collision,
  inkSplash,
});

// URL parameter overrides for rapid testing & act jumping (?act=2, ?act=3, ?boss=1)
const params = new URLSearchParams(window.location.search);
let spawnX = LEVEL1_DATA.spawn.x;
let spawnY = LEVEL1_DATA.spawn.y;
let startDashUnlocked = false;

if (params.get('act') === '2') {
  spawnX = 112;
  spawnY = 16.5;
  startDashUnlocked = true;
} else if (params.get('act') === '3' || params.get('boss') === '1') {
  spawnX = 244;
  spawnY = 50.0;
  startDashUnlocked = true;
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
player.hasInkStepUnlocked = startDashUnlocked;

// --- UI Subsystems ---
const hud = new HUD();
const dialogue = new DialogueCard();
const endCard = new EndCard();

// Target vertical camera height (platformer vertical lock per §1)
let targetCameraY = spawnY + 2.5;
camera.position.x = spawnX;
camera.position.y = targetCameraY;

// Window resize & visibility handlers
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    loop.pause();
    input.onBlur();
  } else {
    loop.resume();
  }
});

// --- Fixed Update Loop (60 Hz) ---
function onFixedUpdate(dt) {
  input.update(dt);
  collision.update(dt);
  player.fixedUpdate(dt);

  // Update Level Elements (Bamboo, Lanterns, Checkpoints, Shrine, Enemies, Boss)
  level.fixedUpdate(dt, player);

  // Update Environmental Particles & Audio
  rain.update(dt, player.aabb.x, player.aabb.y);
  petals.update(dt, player.aabb.x, player.aabb.y);
  audioEngine.update(dt, player.aabb.x);
  hud.update(player);

  // --- Combat Hitbox & Parry Collision Resolution ---
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

  // Update FX
  afterimages.update(dt);
  ripples.update(dt);
  inkSplash.update(dt);

  // Platformer-style vertical lock: only follow vertical target when grounded
  if (player.coyoteTimer > 0) {
    targetCameraY = player.aabb.y + 2.5;
  }

  input.postStep();
}

// --- Render Loop (Interpolated) ---
function onRender(alpha) {
  player.render(alpha);
  level.render(alpha);

  // Horizontal camera follow with dead-zone and look-ahead per §1
  const targetCamX = player.aabb.x + player.facing * CONFIG.CAMERA.lookAhead;
  const dx = targetCamX - camera.position.x;
  if (Math.abs(dx) > CONFIG.CAMERA.horizontalDeadzone) {
    camera.position.x += (targetCamX - camera.position.x) * 0.08;
  }

  // Vertical camera follow (damped towards locked height)
  camera.position.y += (targetCameraY - camera.position.y) * 0.045;

  // Update Parallax Mountain Background
  parallax.update(camera.position.x, camera.position.y);

  // Camera Shake
  if (cameraShakeAmount > 0.001) {
    camera.position.x += (Math.random() - 0.5) * cameraShakeAmount;
    camera.position.y += (Math.random() - 0.5) * cameraShakeAmount;
    cameraShakeAmount *= Math.exp(-CONFIG.CAMERA.shakeDecay * (1 / 60));
  } else {
    cameraShakeAmount = 0;
  }

  renderer.render(scene, camera);

  // Debug HUD
  if (debugOverlay) {
    let actName = 'Act I: The Awakening Mist';
    if (player.aabb.x >= 110 && player.aabb.x < 230) {
      actName = 'Act II: The Bamboo Ravine';
    } else if (player.aabb.x >= 230) {
      actName = 'Act III: The Torii Plateau';
    }

    const hpIcons = '● '.repeat(player.health) + '○ '.repeat(Math.max(0, CONFIG.COMBAT.maxHealth - player.health));
    const aliveEnemies = level.enemies.filter(e => !e.isDead).length;
    const bossInfo = level.boss && player.aabb.x >= 235 ? `
      <div style="margin-top:4px; padding-top:4px; border-top:1px solid rgba(255,255,255,0.2);">
        <strong style="color:#ffd43b;">BOSS: Kurogane</strong> (Phase ${level.boss.phase})<br>
        HP: <span style="color:#b8292f; font-weight:bold;">${level.boss.hp}/40</span> |
        Status: <span style="color:${level.boss.isVulnerable ? '#ff6b6b; font-weight:bold;' : '#aaa;'}">${level.boss.isVulnerable ? 'VULNERABLE (×2 Weak Point)' : 'Armored'}</span>
      </div>
    ` : '';

    debugOverlay.innerHTML = `
      <strong>KURO: Kiri-no-Saka [${actName}]</strong><br>
      HP: <span style="color:#b8292f; font-weight:bold; font-size:16px;">${hpIcons}</span> (${player.health}/${CONFIG.COMBAT.maxHealth})<br>
      State: <span style="color:#ffd43b; font-weight:bold;">${player.fsm.currentStateName}</span> | Ink Step: ${player.hasInkStepUnlocked ? '<span style="color:#4dabf7;">UNLOCKED</span>' : 'Locked'}<br>
      Pos: (${player.aabb.x.toFixed(1)}, ${player.aabb.y.toFixed(1)}) | Enemies Alive: ${aliveEnemies}/${level.enemies.length}<br>
      ${bossInfo}
      <small style="color:#aaa;">
        A/D: Move | Space: Jump | J / L-Click: Katana | L / R-Click: Parry<br>
        Shift/K: Ink Step (Unlocked at Shrine x:57) | ESC: Pause Menu<br>
        Bamboo: Bounce & Jump to Launch | Lanterns: Touch to Swing, Jump to Release
      </small>
    `;
  }
}

// Start Game Loop
loop = new Loop({
  onFixedUpdate,
  onRender,
});

player.loop = loop;
player.combat.loop = loop;

const pauseMenu = new PauseMenu(loop, audioEngine);

// Intro Cinematic (skippable with any key, skipped if ?skipIntro or ?debug)
const shouldSkipIntro = window.location.search.includes('skipIntro') || window.location.search.includes('debug');
if (!shouldSkipIntro) {
  new IntroInkDrop(audioEngine, () => {
    console.log('Intro complete.');
  });
}

loop.start();
console.log('KURO: Complete vertical slice active.');
