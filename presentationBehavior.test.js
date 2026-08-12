import test from 'node:test';
import assert from 'node:assert/strict';

import {
  getNextPresentationPosition,
  getPresentationNavigationDirection,
  getPreviousPresentationPosition,
  getSlideStepCount,
  getSlideTransitionClass,
  isPresentationShortcutAllowed,
  getHelpShortcutSections,
} from './presentationBehavior.js';

test('uses a forward animation class for positive direction', () => {
  assert.equal(getSlideTransitionClass(1), 'slide-transition slide-transition-forward');
});

test('uses a backward animation class for negative direction', () => {
  assert.equal(getSlideTransitionClass(-1), 'slide-transition slide-transition-backward');
});

test('locks presentation shortcuts while help is open', () => {
  assert.equal(isPresentationShortcutAllowed('ArrowRight', false), true);
  assert.equal(isPresentationShortcutAllowed('ArrowRight', true), false);
  assert.equal(isPresentationShortcutAllowed('?', true), true);
  assert.equal(isPresentationShortcutAllowed('Escape', true), true);
});

test('maps arrow keys and presenter clicker keys to navigation', () => {
  assert.equal(getPresentationNavigationDirection('ArrowRight'), 'next');
  assert.equal(getPresentationNavigationDirection('ArrowDown'), 'next');
  assert.equal(getPresentationNavigationDirection('PageDown'), 'next');
  assert.equal(getPresentationNavigationDirection('ArrowLeft'), 'previous');
  assert.equal(getPresentationNavigationDirection('ArrowUp'), 'previous');
  assert.equal(getPresentationNavigationDirection('PageUp'), 'previous');
  assert.equal(getPresentationNavigationDirection('Enter'), undefined);
});

test('exposes keyboard and voice shortcut sections for the help modal', () => {
  const sections = getHelpShortcutSections();
  assert.equal(sections.length, 2);
  assert.equal(sections[0].title, 'Keyboard shortcuts');
  assert.match(sections[0].items[0].shortcut, /PageDown/);
  assert.match(sections[0].items[1].shortcut, /PageUp/);
  assert.equal(sections[1].title, 'Voice commands');
});

test('normalizes missing or invalid slide step counts', () => {
  assert.equal(getSlideStepCount(undefined), 1);
  assert.equal(getSlideStepCount(0), 1);
  assert.equal(getSlideStepCount(3), 3);
});

test('advances through slide steps before moving to the next slide', () => {
  const stepCounts = [1, 3, 1];

  assert.deepEqual(getNextPresentationPosition(1, 0, stepCounts), {
    slideIndex: 1,
    stepIndex: 1,
  });
  assert.deepEqual(getNextPresentationPosition(1, 1, stepCounts), {
    slideIndex: 1,
    stepIndex: 2,
  });
  assert.deepEqual(getNextPresentationPosition(1, 2, stepCounts), {
    slideIndex: 2,
    stepIndex: 0,
  });
});

test('moves backward through slide steps and returns to the final previous step', () => {
  const stepCounts = [1, 3, 1];

  assert.deepEqual(getPreviousPresentationPosition(1, 2, stepCounts), {
    slideIndex: 1,
    stepIndex: 1,
  });
  assert.deepEqual(getPreviousPresentationPosition(2, 0, stepCounts), {
    slideIndex: 1,
    stepIndex: 2,
  });
});
