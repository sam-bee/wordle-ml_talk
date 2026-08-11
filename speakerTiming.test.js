import assert from 'node:assert/strict';
import test from 'node:test';

import { formatElapsedTime, formatWallTime } from './speakerTiming.js';

test('formats wall time as a 24-hour clock with hours and minutes', () => {
  assert.equal(formatWallTime(Date.UTC(2026, 7, 11, 21, 7), 'UTC'), '21:07');
});

test('formats elapsed time as minutes and seconds below one hour', () => {
  assert.equal(formatElapsedTime(0), '0:00');
  assert.equal(formatElapsedTime(65_999), '1:05');
});

test('adds hours to elapsed time when necessary', () => {
  assert.equal(formatElapsedTime(3_723_000), '1:02:03');
});
