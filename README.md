# KURO: Kiri-no-Saka (黒 — 霧の坂)
### Level 1: The Whispering Ascent

A vertical-slice 2.5D action platformer rendered in traditional Japanese sumi-e (ink-wash) style with Three.js. Experience fast-paced ninja locomotion, precise katana combat, procedural audio, and a climactic multi-phase boss encounter at the summit Torii gate.

---

## 🎨 Sumi-e Visual Target & 100% Procedural Engine

KURO contains **zero external art or audio assets**. Every model, texture, particle, sound effect, and musical note is procedurally generated in code:
- **Custom Sumi-e Ink Wash Shaders:** 3-step tonal quantization (`#141413` dark ink, `#5c5b57` mid wash, `#a8a59c` light wash, `#eae5d9` parchment paper) with world-space brush grain noise breakup and a vermilion seal (`#b8292f`) accent mask.
- **Washi Paper Post-Processing:** Canvas-generated procedural rice paper fiber grain layered with soft multiply blending and vignette.
- **Dynamic Procedural Atmosphere:** 4-layer parallax sumi-e mountain ridges, dynamic diagonal rain streaks with lightning illumination, drifting ink cherry blossoms, and reactive floor ink ripples.
- **Procedural Character & Boss Models:** Procedural kasa woven hat, cloth mask, cowl, hakama trousers, tabi boots, 10-segment Verlet physics scarf, and towering samurai heavy armor.
- **100% WebAudio Synthesis:** Karplus-Strong string physical modeling for pentatonic shamisen plucks, dual-sine taiko drums, filtered white-noise wind LFOs, bandpassed rain, and synthesized sword clangs.

---

## 🎮 Controls

| Action | Primary Key | Alternate Key | Description |
| :--- | :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` | `Left` / `Right` Arrow | Responsive acceleration with ground decel friction |
| **Jump / Wall Jump** | `Space` | `W` / `Up` Arrow | Variable-height jump with apex float and coyote time |
| **Drop Down** | `S` | `Down` Arrow | Drop through one-way wooden platforms |
| **Attack (Katana)** | `J` | `Left Click` | 3-hit combo (`1 -> 1 -> 2` dmg) or aerial downward slash |
| **Parry / Guard** | `K` | `Right Click` | 0.15s Perfect Parry window (staggers enemies & boss) |
| **Ink Step Dash** | `L` | `Left Shift` | 8-directional invulnerable dash with ink afterimages |
| **Pause Menu** | `Escape` | `P` | Audio volume controls and restart options |

---

## ⚔️ Mechanics & Gameplay Systems

### Locomotion & Parkour
- **Wall-Run & Wall-Slide:** Hold toward a wall while airborne to scale vertical cliffs or friction-slide downward. Jump off the wall for horizontal thrust.
- **Ledge Grab & Climb:** Kuro automatically grips ledge corners within reach. Press `Jump` or `Up` to vault up, or `Down` to drop.
- **Harmonic Spring Bamboo:** Stalks bend realistically when stood upon, storing spring energy. Jump at the rebound peak to launch with up to $1.5\times$ normal vertical velocity.
- **Swinging Lanterns:** Leap toward lanterns swinging in the wind to grab them, swinging in an arc before dismounting with tangential momentum.
- **Ink Step Dash:** Unlocked at the Act I stone shrine. Grants 0.25s of invulnerability, breaks through enemy lines, and can be directed in 8 directions. Hitting airborne enemies immediately refreshes your air dash.

### Combat & Stealth
- **3-Hit Katana Combo:** Smooth chained strikes with forward lunges. Strike 1 and 2 deal 1 HP; the spinning finisher deals 2 HP with heavy knockback.
- **Perfect Parry:** Time `K` within 0.15s of an incoming strike to completely negate damage, emit a vermilion shockwave ring, and stagger sentries for 1.2s (or stagger Boss Phase 3 for 2.0s).
- **Stealth Backstab:** Strike an unaware sentry from behind for an instant execution accompanied by a cinematic 20% slow-motion hitstop.

---

## ⛩️ Level 1 Walkthrough: The Whispering Ascent

The level spans ~300 horizontal units climbing +60 units of elevation across three acts:

1. **Act I — The Whispering Bamboo ($x: 0 \to 95$):**
   - Introduce movement, wall jumps, and spring bamboo stalks.
   - Toro Stone Lantern Checkpoint 1 ($x: 20$).
   - First Ashigaru Sentry with vision cone patrol.
   - Ancient Ink Shrine ($x: 57$): Unlocks the **Ink Step** dash ability.
2. **Act II — The Broken Ridge ($x: 95 \to 210$):**
   - Weather turns to slanted rain, wind, and lightning flashes.
   - Checkpoint 2 ($x: 105$).
   - Severed catenary rope suspension bridge with a perilous gap.
   - Ink-Wing Tengu swooping aerial enemies.
   - Swinging lanterns over bottomless chasms.
   - Checkpoint 3 ($x: 195$).
3. **Act III — The Gatekeeper's Plateau ($x: 210 \to 300$):**
   - Mountain summit plateau with glowing full pale moon and great Torii gate.
   - Checkpoint 4 ($x: 212$).
   - **Boss Encounter: Kurogane, The Gatekeeper.**

---

## 👹 Boss Guide: Kurogane, The Gatekeeper

Kurogane stands 4.8 units tall, wielding an oversized nodachi dripping with wet ink.

### Defense & Weak Point
- **Armored Shell:** Kurogane is impervious to frontal attacks (`Clink` sound with zero damage) during normal movement.
- **Vermilion Weak Point:** At the recovery of **Heavy Slam** or during **Parry Stagger**, his armor splits open, exposing a glowing vermilion core. Attacks during this window deal **double damage** ($\times 2$).

### Phases
- **Phase 1 (100% $\to$ 60% HP):**
  - *Floor Ink Sweep:* Traveling floor wave (14 u/s); jump over it.
  - *Heavy Slam:* Kurogane leaps and smashes down, leaving his blade lodged in the stone for 1.6s. **Dash behind and strike his weak point!**
  - *Shoulder Charge:* Telegraphed dash across the arena.
- **Phase 2 (60% $\to$ 25% HP):**
  - *Roar:* Knocks player back and increases attack speed by 25%.
  - *Triple Shockwave:* Three cascading floor waves in rapid succession.
  - *Crossbar Leap:* Jumps to the Torii crossbar, dropping floor ink hazards before crashing down.
- **Phase 3 (< 25% HP):**
  - Enraged flurry leaving persistent tar puddles that slow movement.
  - Ink Sweep can now be **Perfect Parried**, instantly staggering Kurogane for 2.0s and exposing his weak point.
  - Defeat Kurogane to dissolve him into black ink smoke and reveal **Scroll 1 of 7**.

---

## ⚡ URL Act Jumping & Debug Commands

You can jump to any section of the game directly via browser URL query parameters:

- `http://localhost:3000/?act=1` — Start at Act I: The Whispering Bamboo
- `http://localhost:3000/?act=2` — Jump to Act II: The Broken Ridge
- `http://localhost:3000/?act=3` or `?boss=1` — Jump directly to Kurogane boss plateau
- `http://localhost:3000/?debug` — Show AABB collision bounding boxes, camera anchors, and physics state
- `http://localhost:3000/?skipIntro` — Bypass the opening ink drop calligraphy cinematic

---

## 🛠️ Tech Stack & Architecture

- **Renderer:** Three.js (r169) using `PerspectiveCamera` (FOV 38°) locked to the $X-Y$ plane ($z = 0$ for gameplay).
- **Physics:** Custom deterministic 2D AABB platformer collision with discrete sweeping, coyote time, jump buffering, and one-way platform drop-throughs.
- **Loop:** Fixed 60 Hz accumulator simulation (`fixedUpdate(dt)`) with decoupled frame render interpolation (`update(dt, alpha)`).
- **Memory:** Zero-GC object pools for particles, slash arcs, and audio voices.
- **Build & Deploy:** Vite with relative base resolution (`base: './'`) and GitHub Actions Pages deployment.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run milestone automated verification tests
node src/test_m3.js
node src/test_m4.js
node src/test_m5.js

# Start local development server
npm run dev

# Build for production
npm run build
```
