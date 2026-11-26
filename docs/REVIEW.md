# KURO: Kiri-no-Saka — Reviewer Critique (`docs/REVIEW.md`)

## What Improved
- **Unified Input & Controls**: All bindings now live in `CONFIG.CONTROLS` (`J` Attack, `K` Parry, `L/Shift` Ink-Step Dash, `W/Up/Space` Jump, `Esc/P` Pause, `M` Mute). Gamepad edge detection, `0.25` radial deadzone, `preventDefault()` hygiene, and unscaled-dt input buffering (`Loop.onInputUpdate`) eliminated auto-repeat jumps and stuck keys.
- **Sumi-e Value Readability**: Strengthened top-ledge dry-brush highlights, silhouette pen contours, parchment rim-light on dark figures (`SumieShader.js`), brightened `PostFX` center wash, and added unaware (`○`) vs alerted (`!`) vermilion rings above Ashigaru sentries.
- **HUD & Pause Menu**: Removed the debug chapter strip from normal play, moved unlocked Chapter Select into `PauseMenu` alongside Keyboard/Gamepad control tabs, Master/Music/SFX sliders, Mute (`M`), Reduce Shake, and Quality (`High`/`Low`) toggles. Fixed mobile `390x844` touch-control overlap.
- **Audio Engine**: Eliminated all `BiquadFilterNode` warnings, added a `DynamicsCompressorNode` master limiter, replaced random `setTimeout` plucks with an `AudioContext.currentTime` lookahead scheduler, added chapter-driven rain/boss music, surface footsteps, and victory stingers.

## Review Scores
| Category | Score | Notes |
| :--- | :--- | :--- |
| **Controls** | 9 / 10 | Unified `CONFIG.CONTROLS`, edge-detected gamepad, unscaled buffers, mobile touch pad |
| **Combat** | 9 / 10 | Crisp 3-hit combo, 120ms perfect parry hitstop, late-parry clink, unaware `○` backstab cue |
| **Traversal** | 8.5 / 10 | Corner correction, fast-fall, 0.15s hold-Down drop-through, bamboo rebound peak glint |
| **Visuals / Readability** | 9 / 10 | Distinct 3-plane Sumi-e ink contrast, Voronoi stone steps, clean boss framing |
| **Audio** | 8.5 / 10 | Zero BiquadFilter warnings, lookahead pentatonic score, surface footsteps, persisted sliders |
| **UI** | 9 / 10 | Zero overlap at `1280x720` & `390x844`, clean PauseMenu with unlocked chapter select |

## Playtest Metrics
- **Frame Pacing (60 frames, visible tab)**: `avgMs = 16.46`, `maxMs = 16.70`, `61 FPS`.
- **Console Errors / Warnings**: `0` errors, `0` `BiquadFilterNode` warnings, `0` uncaught exceptions across all 8 chapters and 3 boss arenas.
