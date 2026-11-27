// Checkpoint and Progress Save System with safe LocalStorage handling

const STORAGE_KEY = 'KURO_KIRI_SAVE_V1';

export class SaveSystem {
  static getInitialData() {
    return {
      checkpoint: { x: 5, y: 1 },
      hasInkStep: false,
      deaths: 0,
      parries: 0,
      startTime: Date.now(),
      levelTime: 0,
      volumeMaster: 0.8,
      volumeMusic: 0.65,
      volumeSFX: 0.85,
      muted: false,
      reduceShake: false,
      unlockedChapter: 1,
      brushstrokes: [],
      haikus: [],
      chapterRanks: {},
      postCampaignUnlocked: false,
      assistMode: false,
      oneDropMode: false,
      quality: 'high', // 'high' | 'low'
    };
  }

  static _memSave = null;

  static load() {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const merged = { ...this.getInitialData(), ...JSON.parse(raw) };
          merged.brushstrokes = Array.isArray(merged.brushstrokes) ? merged.brushstrokes : [];
          return merged;
        }
      }
    } catch (e) {
      console.warn('SaveSystem: localStorage unavailable, using in-memory save', e);
    }
    const mem = this._memSave || this.getInitialData();
    mem.brushstrokes = Array.isArray(mem.brushstrokes) ? mem.brushstrokes : [];
    return mem;
  }

  static addBrushstroke(id) {
    if (!id) return;
    const data = this.load();
    if (!data.brushstrokes.includes(id)) {
      data.brushstrokes.push(id);
      this.save(data);
    }
  }

  static save(data) {
    try {
      this._memSave = { ...data };
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
      return true;
    } catch (e) {
      console.warn('SaveSystem: failed to write to localStorage', e);
      return false;
    }
  }

  static update(patch = {}) {
    const next = { ...this.load(), ...patch };
    this.save(next);
    return next;
  }

  static saveCheckpoint(id, pos) {
    const data = this.load();
    data.checkpoint = pos;
    data.lastCheckpointId = id;
    this.save(data);
  }

  static reset() {
    this._memSave = null;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
    return this.getInitialData();
  }
}

export const saveSystem = SaveSystem;
