import React, { useEffect, useState } from 'react';

import { formatElapsedTime, formatWallTime, getLocalTimeZone } from '../speakerTiming';
import ThemedButton from './ThemedButton';

const SpeakerTimingPanel: React.FC = () => {
  const [nowMs, setNowMs] = useState(() => Date.now());
  const [accumulatedMs, setAccumulatedMs] = useState(0);
  const [startedAtMs, setStartedAtMs] = useState<number | null>(null);
  const [timeZone] = useState(getLocalTimeZone);
  const isRunning = startedAtMs !== null;
  const elapsedMs = accumulatedMs + (startedAtMs === null ? 0 : Math.max(0, nowMs - startedAtMs));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1_000);

    return () => window.clearInterval(interval);
  }, []);

  const pause = () => {
    if (startedAtMs === null) {
      return;
    }

    const pausedAtMs = Date.now();
    setAccumulatedMs(current => current + Math.max(0, pausedAtMs - startedAtMs));
    setStartedAtMs(null);
    setNowMs(pausedAtMs);
  };

  const resume = () => {
    if (startedAtMs !== null) {
      return;
    }

    const resumedAtMs = Date.now();
    setStartedAtMs(resumedAtMs);
    setNowMs(resumedAtMs);
  };

  const reset = () => {
    setAccumulatedMs(0);
    setStartedAtMs(null);
    setNowMs(Date.now());
  };

  return (
    <section aria-label="Speaker timing" className="flex flex-col gap-4">
      <div className="rounded-lg border border-border bg-surface px-5 py-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Local time
        </p>
        <p className="mt-2 font-mono text-4xl font-semibold tabular-nums text-text">
          {formatWallTime(nowMs, timeZone)}
        </p>
        <p className="mt-2 break-words font-mono text-sm text-muted">
          {timeZone}
        </p>
      </div>

      <div className="rounded-lg border border-border bg-surface px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Speaking time
          </p>
          <span className={`rounded-full px-2 py-1 text-xs font-semibold ${isRunning ? 'bg-primary/15 text-primary' : 'bg-secondary text-muted'}`}>
            {isRunning ? 'Running' : 'Paused'}
          </span>
        </div>
        <p
          aria-label={`Elapsed speaking time ${formatElapsedTime(elapsedMs)}`}
          className="mt-2 font-mono text-4xl font-semibold tabular-nums text-text"
          role="timer"
        >
          {formatElapsedTime(elapsedMs)}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <ThemedButton onClick={pause} disabled={!isRunning}>
            Pause
          </ThemedButton>
          <ThemedButton onClick={resume} disabled={isRunning} variant="primary">
            Resume
          </ThemedButton>
          <ThemedButton onClick={reset} className="col-span-2">
            Reset
          </ThemedButton>
        </div>
      </div>
    </section>
  );
};

export default SpeakerTimingPanel;
