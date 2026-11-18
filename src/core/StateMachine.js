// Finite State Machine used by Player, Enemies, and Boss

export class StateMachine {
  constructor(owner, initialName = '') {
    this.owner = owner;
    this.states = new Map();
    this.currentState = null;
    this.currentStateName = '';
    this.previousStateName = '';
    this.timeInState = 0;

    if (initialName) {
      this.initialName = initialName;
    }
  }

  addState(name, config) {
    this.states.set(name, {
      enter: config.enter || (() => {}),
      update: config.update || (() => {}),
      fixedUpdate: config.fixedUpdate || (() => {}),
      exit: config.exit || (() => {}),
    });
    return this;
  }

  changeState(name, payload = null) {
    if (this.currentStateName === name) return;
    if (!this.states.has(name)) {
      console.warn(`StateMachine: state "${name}" not registered.`);
      return;
    }

    if (this.currentState) {
      this.currentState.exit.call(this.owner);
    }

    this.previousStateName = this.currentStateName;
    this.currentStateName = name;
    this.currentState = this.states.get(name);
    this.timeInState = 0;

    this.currentState.enter.call(this.owner, payload);
  }

  update(dt, ...args) {
    this.timeInState += dt;
    if (this.currentState) {
      this.currentState.update.call(this.owner, dt, ...args);
    }
  }

  fixedUpdate(dt, ...args) {
    if (this.currentState) {
      this.currentState.fixedUpdate.call(this.owner, dt, ...args);
    }
  }

  isInState(name) {
    return this.currentStateName === name;
  }
}
