// Level 1: "Kiri-no-Saka" (The Whispering Ascent) Master Layout Data
// 300 units long, rising ~60 units, structured in 3 Acts

export const LEVEL1_DATA = {
  name: 'Kiri-no-Saka',
  subtitle: 'The Whispering Ascent',
  totalLength: 300,
  fogPitY: -12.0,

  // Player Spawn
  spawn: { x: 0, y: 1.5 },

  // --- ACT I: The Awakening Mist (x 0 → 110) ---
  act1: {
    solids: [
      // 1. Starting sunlit plateau
      { x: 4, y: -0.5, w: 16, h: 1.0, color: 0x5c5b57 },

      // 2. Fractured stone steps rising
      { x: 15, y: 1.5, w: 6, h: 0.8, color: 0x6e6c64 },
      { x: 22, y: 3.5, w: 4, h: 0.8, color: 0x6e6c64 },
      { x: 28, y: 5.5, w: 4, h: 0.8, color: 0x6e6c64 },

      // 3. Crumbling steps over fog chasm (collapses 0.6s after touch)
      { x: 35, y: 7.0, w: 3, h: 0.8, color: 0x7a7870, crumbling: true },
      { x: 40, y: 8.5, w: 3, h: 0.8, color: 0x7a7870, crumbling: true },

      // 4. Ledge-grab teaching cliff (gap too wide to clear by jump alone)
      { x: 49, y: 11.0, w: 7, h: 1.2, color: 0x5c5b57 },

      // 5. Ink Shrine Plateau
      { x: 57, y: 12.0, w: 9, h: 1.0, color: 0x5c5b57 },

      // 6. Dash-gap landing plateau (12 units across chasm, requires Ink Step)
      { x: 74, y: 12.5, w: 8, h: 1.0, color: 0x5c5b57 },

      // 7. Ruined waystation foundation & roof terrace
      { x: 89, y: 13.0, w: 22, h: 1.2, color: 0x52504a },
      { x: 104, y: 14.5, w: 8, h: 1.0, color: 0x5c5b57 },
    ],

    oneWays: [
      // Waystation broken wooden rafters
      { x: 85, y: 16.5, w: 5, h: 0.3 },
      { x: 93, y: 17.5, w: 6, h: 0.3 },
    ],

    runnableWalls: [],

    shrine: { x: 57, y: 12.5 },

    checkpoints: [
      { id: 1, x: 74, y: 13.0 }, // Right after dash gap before waystation
    ],

    enemies: [
      // Waystation Guard 1: Facing right (unaware, backstab tutorial)
      { type: 'ashigaru', x: 86, y: 14.5, facing: 1, isStationary: true },
      // Waystation Guard 2: Patrolling between rafters
      { type: 'ashigaru', x: 96, y: 14.5, facing: -1, patrolMinX: 92, patrolMaxX: 101 },
    ],
  },

  // --- ACT II: The Bamboo Ravine (x 110 → 230, climbing) ---
  act2: {
    solids: [
      // 1. Entrance plateau before storm drop
      { x: 112, y: 15.0, w: 8, h: 1.0, color: 0x484640 },

      // 2. Ravine floor / roots under bamboo stalks
      { x: 128, y: 12.0, w: 32, h: 1.5, color: 0x3d352e },

      // 3. Wet cliff walls for vertical wall-run shaft (y: 20 → 32)
      { x: 151, y: 25.0, w: 2, h: 14.0, color: 0x141413, runnable: true },
      { x: 157, y: 27.0, w: 2, h: 14.0, color: 0x141413, runnable: true },

      // 4. Pre-bridge ledge
      { x: 163, y: 32.0, w: 6, h: 1.0, color: 0x5c5b57 },

      // 5. Far side of suspension bridge
      { x: 196, y: 34.0, w: 6, h: 1.0, color: 0x5c5b57 },

      // 6. Stepped upper cliffs
      { x: 206, y: 38.0, w: 6, h: 1.0, color: 0x5c5b57 },
      { x: 216, y: 42.5, w: 6, h: 1.0, color: 0x5c5b57 },
      { x: 226, y: 46.5, w: 8, h: 1.0, color: 0x5c5b57 },
    ],

    oneWays: [],

    // Bending spring bamboo stalks
    bambooStalks: [
      { x: 118, y: 12.5, height: 6.5 },
      { x: 126, y: 12.5, height: 7.5 },
      { x: 134, y: 12.5, height: 8.5 },
      { x: 142, y: 12.5, height: 9.5 },
    ],

    // Severed suspension bridge
    suspensionBridge: {
      startX: 166,
      startY: 32.0,
      totalWidth: 26,
      gapWidth: 6.5,
    },

    // Grabbable swinging lanterns
    swingingLanterns: [
      { pivotX: 179, pivotY: 41.0, ropeLength: 6.5 }, // over bridge gap
      { pivotX: 201, pivotY: 46.0, ropeLength: 5.5 }, // reaching upper cliff
    ],

    checkpoints: [
      { id: 2, x: 163, y: 32.5 }, // Before bridge
      { id: 3, x: 226, y: 47.0 }, // Top of ravine
    ],

    enemies: [
      // Ink-Wing Tengus guarding the chasm and upper cliffs
      { type: 'tengu', x: 179, y: 36.5 },
      { type: 'tengu', x: 206, y: 42.0 },
      { type: 'tengu', x: 218, y: 46.0 },
    ],
  },

  // --- ACT III: The Guardian of the Torii (x 240 → 290, y 48 → 50) ---
  act3: {
    solids: [
      // 1. Approach stone stairs
      { x: 236, y: 46.6, w: 12, h: 0.8, color: 0x5c5b57 }, // flush with checkpoint ledge (top 47), spans 230-242: no slot after checkpoint, no gap before arena

      // 2. Colossal Boss Arena Plateau (36 units wide)
      { x: 260, y: 48.0, w: 36, h: 2.0, color: 0x3d3a35 },

      // 3. Invisible Arena Boundary Barriers (prevent exiting arena during boss)
      { x: 241, y: 55.0, w: 1, h: 14.0, color: 0x000000, invisible: true, arenaLock: true },
      { x: 279, y: 55.0, w: 1, h: 14.0, color: 0x000000, invisible: true, arenaLock: true },
    ],

    checkpoints: [
      { id: 4, x: 243, y: 49.0 }, // Arena entrance
    ],

    toriiGate: { x: 260, y: 49.0 },
    scroll: { x: 274, y: 53.0 },
  },
};
