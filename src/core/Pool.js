// Object Pool for zero-allocation recycling during hot loops

export class Pool {
  constructor(createFn, resetFn, initialSize = 16) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.freeList = [];
    this.activeList = [];

    for (let i = 0; i < initialSize; i++) {
      this.freeList.push(this.createFn());
    }
  }

  obtain(...args) {
    let item;
    if (this.freeList.length > 0) {
      item = this.freeList.pop();
    } else {
      item = this.createFn();
    }
    if (this.resetFn) {
      this.resetFn(item, ...args);
    }
    this.activeList.push(item);
    return item;
  }

  release(item) {
    const idx = this.activeList.indexOf(item);
    if (idx !== -1) {
      this.activeList.splice(idx, 1);
      this.freeList.push(item);
    }
  }

  releaseAll() {
    while (this.activeList.length > 0) {
      const item = this.activeList.pop();
      this.freeList.push(item);
    }
  }

  update(dt, updateFn) {
    for (let i = this.activeList.length - 1; i >= 0; i--) {
      const item = this.activeList[i];
      const alive = updateFn(item, dt);
      if (!alive) {
        this.activeList.splice(i, 1);
        this.freeList.push(item);
      }
    }
  }

  get activeCount() {
    return this.activeList.length;
  }
}
