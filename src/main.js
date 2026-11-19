// KURO: Kiri-no-Saka — Complete 3-Act Campaign Main Entry Point
// Integrates Custom GLSL 3-Band Sumi-e Shader, Tapered Calligraphy InkFX, CameraRig,
// Lantern Grapple Dash, Projectile Deflection, and Acts I, II, and III with 3 Bosses.

import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Loop } from './core/Loop.js';
import { Input } from './core/Input.js';
import { CameraRig } from './core/CameraRig.js';
import { CollisionSystem } from './physics/Collision.js';
import { combatManager } from './physics/Hitbox.js';
import { KuroController } from './entities/KuroController.js';
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
import { SoundEngine } from './audio/SoundEngine.js';
import { HUD, SUMIRO_CHAPTERS } from './ui/HUD.js';
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
const audioEngine = new SoundEngine();

events.on('lightning_flash', () => {
  postFX.flashLightning();
});

// Panoramic Sunrise Parchment Wash upon Campaign Finale Victory
events.on('campaign_sunrise_victory', () => {
  scene.background = new THREE.Color(0xfff3db);
  renderer.setClearColor(new THREE.Color(0xfff3db));
  ambientLight.color.setHex(0xffe4b5);
  ambientLight.intensity = 1.05;
});

let loop;

// --- Initialize 3-Act Campaign Master Assembler ---
const level = new Level1({
  scene,
  collision,
  inkSplash,
});

// URL parameter overrides for rapid testing & act/chapter/boss jumping
let spawnX = LEVEL1_DATA.spawn.x;
let spawnY = LEVEL1_DATA.spawn.y;
let startDashUnlocked = false;

const chapterParam = parseInt(params.get('chapter') || '0', 10);
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
player.swingingLanternsRef = level.swingingLanterns;

cameraRig.snapTo(spawnX, spawnY);

// --- UI Subsystems (with 3-Act / 8-Stage Campaign Jump Handler) ---
const hud = new HUD((ch) => {
  player.aabb.x = ch.spawnX;
  player.aabb.y = ch.spawnY;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.hasInkStepUnlocked = ch.dash;
  player.hasAirDash = true;
  player.hasDoubleJump = true;
  player.setCheckpoint(ch.spawnX, ch.spawnY);
  player.health = player.maxHealth;
  cameraRig.snapTo(ch.spawnX, ch.spawnY);
});
const dialogue = new DialogueCard();
const endCard = new EndCard();

// --- Innovative Sumi-e Powers & 3D Camera Perspective Toggle ---
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyE') {
    level.paintInkBridge(player.aabb.x, player.aabb.y, player.facing);
    events.emit('camera_shake', { amount: 0.14 });
  } else if (e.code === 'KeyF') {
    level.triggerBellResonance(player);
    events.emit('camera_shake', { amount: 0.32 });
  } else if (e.code === 'KeyV') {
    cameraRig.cyclePerspective();
  }
});

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

  level.fixedUpdate(dt, player);
  cameraRig.fixedUpdate(dt, player);

  rain.update(dt, player.aabb.x, player.aabb.y);
  petals.update(dt, player.aabb.x, player.aabb.y);
  crows.update(dt, player.aabb.x, player.aabb.y);
  audioEngine.update(dt, player.aabb.x);
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

// --- Render Loop (Interpolated) ---
function onRender(alpha) {
  player.render(alpha);
  level.render(alpha);
  cameraRig.render(player);
  parallax.update(camera.position.x, camera.position.y);

  renderer.render(scene, camera);

  if (debugOverlay && window.location.search.includes('debug')) {
    debugOverlay.style.display = 'block';
    const hpIcons = '● '.repeat(player.health) + '○ '.repeat(Math.max(0, CONFIG.COMBAT.maxHealth - player.health));
    debugOverlay.innerHTML = `
      <strong>KURO: Kiri-no-Saka [3-Act Campaign]</strong><br>
      HP: <span style="color:#b8292f;">${hpIcons}</span> | State: <span style="color:#ffd43b;">${player.fsm.currentStateName}</span><br>
      Pos: (${player.aabb.x.toFixed(1)}, ${player.aabb.y.toFixed(1)}) | Cam Mode: ${cameraRig.mode}
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

const shouldSkipIntro = window.location.search.includes('skipIntro') || window.location.search.includes('debug');
if (!shouldSkipIntro) {
  new IntroInkDrop(audioEngine, () => {
    console.log('Intro complete.');
  });
}

loop.start();
console.log('KURO: Complete 3-Act Campaign active.');
