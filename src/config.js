// =============================================================================
// KURO: Kiri-no-Saka — Core Configuration & Tuning Parameters
// All tuning constants live here for central adjustments.
// =============================================================================

export const CONFIG = {
  // --- Game Loop & Simulation ---
  TIME_STEP: 1 / 60,       // 60 Hz fixed physics simulation
  MAX_DELTA: 0.1,          // Maximum delta clamped to prevent tunneling on lag spikes

  // --- Palette & Sumi-e Colors (Sumiro Warm Antique Washi & Cool Slate Ink) ---
  PALETTE: {
    inkDark:      '#0e0d0a', // Deepest sumi pen-line ink black
    inkMid:       '#454849', // Cool slate-charcoal mid wash
    inkLight:     '#96968e', // Diluted stone ink wash
    parchment:    '#c4b798', // Sumiro warm antique aged silk/washi paper
    rimHighlight: '#dfd7c2', // Sunlit warm bare washi highlight
    vermilion:    '#a8321f', // Traditional hanko seal vermilion
    goldAccent:   '#ffd43b', // Profile / moving element highlight
    darkSky:      '#171e2e', // Night / storm atmosphere
    sentryBlue:   '#4dabf7', // Wall slice blue indicator
  },

  // --- Intimate 3D / 2.5D Sumiro Camera ---
  CAMERA: {
    fov: 40,                 // Sumiro 40-deg lens
    distanceZ: 12.2,         // Intimate third-person framing so Kuro & Voronoi stone steps fill the frame
    tiltDeg: 7.5,            // Slight downward pitch angle
    horizontalDeadzone: 1.4, // Dead-zone before camera pans horizontally
    lookAhead: 1.8,          // Look-ahead distance in facing direction
    followSpeedX: 4.5,       // Smooth damping rate for X
    followSpeedY: 3.5,       // Platformer vertical lock rate
    shakeDecay: 8.0,         // Camera shake decay speed
  },

  // --- Player: Kuro Traversal & Physics ---
  PLAYER: {
    width: 0.8,
    height: 1.8,
    runSpeed: 9.0,           // Units per second
    groundAccel: 70.0,       // u/s^2
    groundDecel: 60.0,       // u/s^2
    airAccel: 70.0 * 0.65,   // 65% of ground control
    jumpVelocity: 16.0,      // Initial vertical jump impulse
    gravityRising: -42.0,    // Snappy ascent
    gravityFalling: -62.0,   // Faster descent for tight arc
    maxFallSpeed: -28.0,     // Terminal velocity
    jumpCutMultiplier: 0.45, // Velocity multiplier on early jump release
    coyoteTime: 0.12,        // Seconds after leaving ledge jump is still allowed
    jumpBuffer: 0.12,        // Seconds jump input is buffered prior to landing
    apexHangVelocity: 2.0,   // Velocity threshold for apex float
    apexGravityScale: 0.5,   // Gravity multiplier at apex

    // Ledge Grab
    ledgeHandOffset: { x: 0.45, y: 0.8 },
    ledgeHangOffset: { x: 0.4, y: 0.6 },
    ledgeClimbDuration: 0.3,
    ledgeCooldown: 0.25,

    // Wall Movement
    wallRunDuration: 0.45,   // Max wall-run time
    wallRunSpeed: 10.0,      // Upward wall-run speed
    wallSlideSpeed: -4.0,    // Gentle slide speed
    wallJumpImpulse: { x: 11.0, y: 15.0 }, // Kick away from wall

    // Ink Step (Dash)
    dashSpeed: 30.0,
    dashDuration: 0.16,
    dashInvincibility: 0.12,
    dashSpeedDecay: 0.35,    // Multiplier applied to speed after dash ends
    dashCooldown: 0.6,
    afterimageInterval: 0.03,// Seconds between afterimage snapshots
    afterimageLifetime: 0.25,
  },

  // --- Player: Combat & Vitals ---
  COMBAT: {
    maxHealth: 5,            // 5 ink drops
    hurtInvincibility: 0.8,  // i-frames on damage
    hurtKnockback: { x: 7.0, y: 6.0 },
    hitStopMsNormal: 40,
    hitStopMsHeavy: 80,
    hitStopMsParry: 60,
    parryPerfectWindow: 0.15,// First 0.15s = perfect parry
    parryGuardWindow: 0.35,  // Up to 0.35s = guard
    parryCooldown: 0.5,
    riposteMultiplier: 2.0,  // Damage to staggered enemies
    backstabTimeScale: 0.20, // 20% speed slow-mo on backstab
    backstabSlowMoDuration: 0.15,

    // 3-Hit Katana Combo
    combo: [
      { windup: 0.08, active: 0.10, recovery: 0.18, damage: 1, lunge: 3.0, reach: 1.6 },
      { windup: 0.08, active: 0.10, recovery: 0.18, damage: 1, lunge: 3.5, reach: 1.7 },
      { windup: 0.10, active: 0.12, recovery: 0.24, damage: 2, lunge: 5.0, reach: 2.0 },
    ],
    airAttack: { windup: 0.06, active: 0.12, recovery: 0.16, damage: 1, reach: 1.6 },
  },

  // --- Enemies ---
  ENEMIES: {
    ashigaru: {
      width: 1.0,
      height: 2.0,
      hp: 3,
      patrolSpeed: 2.0,
      patrolPause: 1.5,
      visionRange: 7.0,
      visionAngleDeg: 25.0,
      attackTelegraph: 0.6,
      attackDuration: 0.25,
      attackRecovery: 1.0,
      attackReach: 4.0,
      attackDamage: 1,
      staggerDuration: 1.2,
    },
    tengu: {
      width: 1.2,
      height: 1.4,
      hp: 2,
      bobFrequency: 1.8,
      bobAmplitude: 0.6,
      swoopTelegraph: 0.5,
      swoopSpeed: 18.0,
      swoopDamage: 1,
      swoopCooldown: 2.5,
    },
  },

  // --- Boss: Kurogane ---
  BOSS: {
    name: 'Kurogane, the Gatekeeper',
    width: 2.2,
    height: 4.8,            // 2.6x Kuro's height
    hpMax: 40,
    weakPointMultiplier: 2.0,
    staggerDuration: 2.0,
    sweepSpeed: 14.0,        // Speed of ink wave along floor
    slamEmbedDuration: 1.6,  // Vulnerable window during embedded nodachi
    puddleLifetime: 4.0,     // Phase 3 persistent puddle damage
    chargeSpeed: 16.0,
  },

  // --- Level Elements ---
  LEVEL: {
    pitY: -15.0,             // Bottomless fog pit trigger threshold
    crumbleDelay: 0.6,       // Seconds before stone collapses
    crumbleRespawn: 3.0,     // Seconds before step reappears
    bambooSpringFreq: 6.0,   // Spring resonance frequency
    bambooDamping: 0.85,     // Spring damping factor
    bambooLaunchBoost: 1.5,  // Max velocity multiplier on launch
    lanternSwingDamping: 0.99,
  },

  // --- Audio ---
  AUDIO: {
    masterVolume: 0.8,
    sfxVolume: 0.85,
    musicVolume: 0.65,
    pentatonicNotes: [164.81, 174.61, 220.00, 246.94, 261.63], // E3, F3, A3, B3, C4 in Hz
  }
};
