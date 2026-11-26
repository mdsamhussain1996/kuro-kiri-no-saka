# KURO: Kiri-no-Saka — Verification & QA Review

**Reviewed branch:** `main` (post-fix verification pass)  
**Test environment:** Node.js unit/milestone suites + Headless Chrome CDP (`scripts/playtest.mjs`, SwiftShader WebGL) + Vite production build (`dist/`)

---

## 1. Blocker & Upgrade Verification Table

| ID | Issue / Feature | Evidence & Method | Result |
| :--- | :--- | :--- | :--- |
| **A1** | Ledge grab `NaN` softlock (`snapX`/`snapY`/`climbTargetX`/`climbTargetY`) | `node tests/ledge.test.js` + finite-coordinate guard in `KuroController.fixedUpdate` | **PASS** |
| **A2** | Campaign continuity: defeating Kurogane unlocks Scroll 1 + Ippitsu without triggering `EndCard` | `scripts/playtest.mjs` (`?chapter=4&skipIntro`, `endCardOpacity === '0'`, `hasIppitsuUnlocked === true`) | **PASS** |
| **A3** | Dead-player attack/boss-kill race condition | `node tests/death_race.test.js` (cancels combat phase, hitboxes, parry on `Dead`) | **PASS** |
| **A4** | Bosses trivially killed by mash-bot | `scripts/playtest.mjs` deterministic 60s (3600-step) mash-bot vs all 3 bosses (`Ch4`: player died, boss 4/40 HP; `Ch6`: survived 60s, boss 38/56 HP; `Ch8`: player died, boss 64/64 HP) | **PASS** |
| **A5** | Paint Bridge (`E`) & Bell Resonance (`F`) ink/unlock gating | `src/main.js` + `src/level/Level1.js` (`100` ink cost, Bell reveals mist platforms for `8s`) | **Verified in code & build** |
| **A6** | Early Ch1 checkpoint & Lost Brushstrokes | `src/level/Level1.js` (`campaignCheckpoints` at `(28, 6.2)`, 15 collectible brushstrokes) + `node src/test_m4.js` | **PASS** |
| **A7** | Zero console warnings/errors (`BiquadFilterNode`, `HUD.js`) | `scripts/playtest.mjs` CDP `Runtime.consoleAPICalled` & `exceptionThrown` listeners across Ch1, Ch4, Ch6, Ch8 | **PASS (0 errors, 0 warnings)** |
| **A8** | Responsive HUD zero-overlap (`960×540`, `1280×720`, `1920×1080`) & 3-plane Sumi-e contrast | `scripts/playtest.mjs` bounding-box overlap assertions + inspected screenshots in `media/review/` (`ch1-960x540.png`, `ch1-1280x720.png`, `ch4-boss.png`, `ch6-boss.png`, `ch8-boss.png`, `ch1-mobile.png`) | **PASS** |
| **Build** | Production bundle & dev-only `window.__game` stripping | `npm run build` (`705ms`) + `grep -rn "__game" dist/` returned 0 matches | **PASS** |

---

## 2. Automated Test Suite Results

- `node tests/ledge.test.js` — **PASS**
- `node tests/death_race.test.js` — **PASS**
- `node tests/input.test.js` — **PASS**
- `node src/test_m3.js` — **PASS**
- `node src/test_m4.js` — **PASS**
- `node src/test_m5.js` — **PASS**
- `node scripts/playtest.mjs` — **PASS** (HUD overlap 960×540 / 1280×720 / 1920×1080, A2 continuity, A4 3-boss mash-bot, A7 zero console warnings/errors)

---

## 3. Known Scope & Untested Areas

- **Full manual human playthrough:** All 8 chapters were not played end-to-end manually by a human in this session; chapter continuity, boss fights, and HUD layout were verified via automated deterministic bot stepping (`scripts/playtest.mjs`), unit tests, and visual screenshot inspection.
- **Physical Gamepad hardware:** Gamepad input mapping (`Input.js`) was verified via `tests/input.test.js` logic tests rather than a physical USB/Bluetooth controller.
- **Web Audio subjective mix:** Verified zero Web Audio API console warnings/exceptions in headless Chrome; subjective speaker listening was not performed in this headless environment.
