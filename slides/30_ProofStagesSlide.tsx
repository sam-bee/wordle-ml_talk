import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const STAGES = [
  { name: 'one-batch overfit', updates: '400', batch: '128', rate: '0.001', result: 'training top-1 0.989', note: 'Can optimisation deliberately memorise one batch?' },
  { name: 'mini stop / resume', updates: '1,000', batch: '128', rate: '0.0003', result: 'stopped at 500, then resumed', note: 'Can the run preserve all its state and keep going?' },
  { name: 'full proof', updates: '2,000', batch: '256', rate: '0.0003', result: '97 / 100 · 3.65 guesses', note: 'Does the fixed validation population show a real playing policy?' },
];

const ProofStagesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Training stages" title="A proof ladder: small failures first" subtitle="Ruling out common problems with model architecture cheaply." />
    <div className="mt-6 grid flex-1 grid-cols-3 gap-6">
      {STAGES.map((stage, index) => (
        <Panel key={stage.name} className="flex flex-col" padding="compact">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-primary">0{index + 1}</span>
            <span className="rounded-full border border-border px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-muted">fixed</span>
          </div>
          <h3 className="mt-4 text-3xl font-bold leading-tight text-text">{stage.name}</h3>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-lg text-text">
            <p><span className="text-muted">updates</span> <strong>{stage.updates}</strong></p>
            <p><span className="text-muted">batch</span> <strong>{stage.batch}</strong></p>
            <p><span className="text-muted">learning rate</span> <strong className="font-mono">{stage.rate}</strong></p>
          </div>
          <p className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-mono text-base font-semibold text-primary">{stage.result}</p>
          <p className="mt-4 border-t border-border pt-4 text-lg leading-snug text-muted">{stage.note}</p>
        </Panel>
      ))}
    </div>
  </SlideFrame>
);

export default ProofStagesSlide;
