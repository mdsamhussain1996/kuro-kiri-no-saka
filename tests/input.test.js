// Phase 1 Input Verification Suite (Keyboard W/Up/Space, Gamepad Edge Detection & Radial Deadzone, Pause Start)
import assert from 'node:assert/strict';
import { Input } from '../src/core/Input.js';

function testKeyboardAndBuffers() {
  const input = new Input();

  // W and ArrowUp should buffer jump and trigger jumpHeld + jumpReleased
  input.onKeyDown({ code: 'KeyW', repeat: false, preventDefault: () => {} });
  assert.equal(input.jumpBuffered, true, 'KeyW should buffer jump');
  assert.equal(input.jumpHeld, true, 'KeyW should set jumpHeld');
  input.consumeJump();
  assert.equal(input.jumpBuffered, false, 'consumeJump should clear buffer');

  input.onKeyUp({ code: 'KeyW' });
  assert.equal(input.jumpReleased, true, 'Releasing KeyW should trigger jumpReleased');
  input.postStep();
  assert.equal(input.jumpReleased, false, 'postStep should clear jumpReleased');

  // Repeat keyDown should be ignored
  input.onKeyDown({ code: 'Space', repeat: true, preventDefault: () => {} });
  assert.equal(input.jumpBuffered, false, 'e.repeat must be ignored');

  // E / F / V should be ignored when blocked
  input.blocked = true;
  input.onKeyDown({ code: 'KeyE', repeat: false, preventDefault: () => {} });
  assert.equal(input.paintBridgePressed, false, 'Blocked input must ignore gameplay keys');
  input.blocked = false;
  input.dispose();
}

function testGamepadEdgeDetectionAndDeadzone() {
  const input = new Input();
  let padState = {
    connected: true,
    axes: [0.10, 0.10], // within 0.25 radial deadzone
    buttons: Array.from({ length: 18 }, () => ({ pressed: false }))
  };
  input.getGamepad = () => padState;

  // Frame 1: stick inside deadzone, A pressed
  padState.buttons[0].pressed = true;
  padState.buttons[9].pressed = true; // Start
  input.update(1 / 60);
  assert.equal(input.axisX, 0, 'Stick inside 0.25 radial deadzone must yield axisX=0');
  assert.equal(input.jumpBuffered, true, 'Gamepad A press should buffer jump');
  assert.equal(input.pausePressed, true, 'Gamepad Start press should trigger pausePressed');

  input.consumeJump();
  input.consumePause();
  input.postStep();

  // Frame 2: holding A and Start must NOT re-buffer jump or re-trigger pause
  input.update(1 / 60);
  assert.equal(input.jumpBuffered, false, 'Holding A must NOT auto-repeat jump buffer');
  assert.equal(input.pausePressed, false, 'Holding Start must NOT toggle pause every frame');
  assert.equal(input.jumpHeld, true, 'Holding A keeps jumpHeld true');

  // Frame 3: releasing A must trigger jumpReleased for variable-height jump cut
  padState.buttons[0].pressed = false;
  input.update(1 / 60);
  assert.equal(input.jumpReleased, true, 'Releasing A on gamepad must trigger jumpReleased');

  input.dispose();
}

testKeyboardAndBuffers();
testGamepadEdgeDetectionAndDeadzone();
console.log('✓ ALL INPUT TESTS PASSED (Keyboard W/Up, No Auto-Repeat, Variable Jump on Pad, Start Edge Detection)');
