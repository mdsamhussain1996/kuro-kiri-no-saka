# KURO: Kiri-no-Saka (黒 — 霧の坂)
### 8-Chapter, 3-Boss Sumi-e Ninja Action Platformer

A 2.5D side-scrolling action platformer rendered in traditional Japanese sumi-e (ink-wash) style with Three.js (r169) and Vite. Experience fast-paced ninja parkour, 3-hit katana combat, perfect parries, ink-brush powers, and three multi-phase boss encounters across ~800 units of elevation.

---

## 🎨 100% Procedural Sumi-e Engine
Every model, Voronoi rock texture, particle, shader pass, and musical note is generated in code with **zero external art or audio assets**:
- **3-Plane Sumi-e Ink Wash Shaders:** Cool-slate-to-warm-washi 10-stop ramp, dry-brush top-ledge highlights, parchment rim-light on dark silhouettes, and pressure-gapped calligraphic outlines.
- **Procedural WebAudio (`AudioEngine.js`):** Lookahead-scheduled shamisen/koto Karplus-Strong plucks, shakuhachi flute, adaptive taiko boss percussion, surface-aware footsteps (stone/wood/bamboo), and chapter-driven weather ambience.

---

## 🎮 Controls (`CONFIG.CONTROLS`)

| Action | Keyboard / Mouse | Gamepad | Description |
| :--- | :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` or `←` / `→` | Left Stick / D-Pad | Responsive acceleration & air control |
| **Jump / Wall Jump** | `Space` / `W` / `↑` | `A` / Cross | Variable-height jump, apex hang, coyote time |
| **Crouch / Drop** | `S` / `↓` (+ Jump or hold) | Stick Down | Fast-fall or drop through one-way platforms |
| **Katana Attack** | `J` / `Left Click` | `X` / Square | 3-hit combo & aerial slash |
| **Parry / Guard** | `K` / `Right Click` | `LB` / L1 | 0.15s Perfect Parry window (staggers enemies & bosses) |
| **Ink Step Dash** | `L` / `Shift` | `RB` / R2 | Invulnerable dash with ink afterimages |
| **Paint Bridge** | `E` | `Y` / Triangle | Conjure an ink bridge across chasms (costs 100 ink) |
| **Bell Resonance** | `F` | `LT` / L2 | Ring temple bell shockwave & reveal mist platforms (costs 100 ink) |
| **Ippitsu Finisher** | `Q` | `RT` / R1 | Full-ink (300) one-stroke slow-mo slash (unlocked after Kurogane) |
| **3D Camera** | `V` | `Back` / Select | Cycle Oblique / Over-Shoulder / Wide camera |
| **Pause / Mute** | `Esc` / `P` · `M` | `Start` | Pause menu, Assist mode, unlocked chapters, audio & quality |

---

## ⛩️ 8-Chapter Campaign & 3 Bosses
1. **Ch I — The Climb** (`?chapter=1`): Movement, wall jumps, and spring bamboo.
2. **Ch II — The Broken Pass** (`?chapter=2`): Severed suspension bridge & Ink Step Shrine.
3. **Ch III — Temple of Silent Bells** (`?chapter=3`): Monsoon rain, Ashigaru sentries, and Bell Resonance.
4. **Ch IV — Kurogane, the Gatekeeper** (`?chapter=4` / `?boss=1`): Act I Boss beneath the moonlit Torii.
5. **Ch V — The Silent Sanctuary** (`?chapter=5`): Swinging lanterns over mist chasms.
6. **Ch VI — Lady Shirayuki** (`?chapter=6` / `?boss=2`): Act II Boss — the Mist Weaver.
7. **Ch VII — The Crimson Foundry** (`?chapter=7`): Iron Brush Juggernauts and vermilion hazards.
8. **Ch VIII — Lord Sumi-Ou** (`?chapter=8` / `?boss=3`): Final Boss — Warlord of the Iron Brush.

---

## ⚡ URL Parameters
- `?chapter=1` … `?chapter=8` — Jump to any chapter
- `?boss=1` / `?boss=2` / `?boss=3` — Jump to Boss 1, 2, or 3
- `?cam=3d` — Start in 3D Over-Shoulder camera
- `?skipIntro` — Skip the opening ink drop cinematic
- `?debug` — Show debug HUD, chapter strip, and AABB state

---

## 🚀 Running Locally & Tests
```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production bundle in dist/
node src/test_m3.js && node src/test_m4.js && node src/test_m5.js && node tests/input.test.js && node tests/ledge.test.js && node tests/death_race.test.js
```
