import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TAKEAWAYS = [
  ['01', 'Keep Go in charge', 'Go owns the application, Wordle rules, legality, orchestration, and the user-facing result.'],
  ['02', 'Make CUDA a small boundary', 'One inspectable cgo call and a persistent native handle keep the numerical work explicit.'],
  ['03', 'Measure the real shape', 'Use parity checks, benchmarks, and both Nsight views before making performance claims.'],
] as const;

const ClosingSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="Closing"
      title="From Go to the GPU—and back again"
      subtitle="A custom model does not have to turn a Go application into a black box."
    />

    <div className="mt-8 grid flex-1 grid-cols-3 gap-5">
      {TAKEAWAYS.map(([number, title, detail]) => (
        <Panel key={number} className="flex flex-col border-primary/30 bg-primary/5">
          <p className="font-mono text-lg font-bold text-primary">{number}</p>
          <h3 className="mt-5 text-3xl font-bold leading-tight text-text">{title}</h3>
          <p className="mt-4 text-xl leading-relaxed text-muted">{detail}</p>
        </Panel>
      ))}
    </div>

    <div className="mt-6 grid grid-cols-[1.15fr_0.85fr] gap-6">
      <Callout tone="accent" className="text-lg">
        <strong>Possible next steps:</strong> keep improving the supervised-imitation loop used here; explore reinforcement learning as a future alternative <em>(not done in this project)</em>; or change the serving shape with batching.
      </Callout>
      <Panel padding="compact" className="text-lg leading-relaxed text-muted">
        <p><strong className="text-text">Credits</strong></p>
        <p className="mt-2">Kirti — Calliope-Canvas slide tool</p>
        <p>Codex and Grok — research and drafting assistance</p>
      </Panel>
    </div>

    <p className="mt-6 text-center text-4xl font-bold tracking-tight text-text">Thank you · Questions?</p>
  </SlideFrame>
);

export default ClosingSlide;
