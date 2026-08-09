import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const STAGES = [
  { name: 'overfit', updates: '400', batch: '128', rate: '0.001', note: 'Can it memorise one batch?' },
  { name: 'mini', updates: '1,000', batch: '128', rate: '0.0003', note: 'Stop at 500, then resume.' },
  { name: 'full', updates: '2,000', batch: '256', rate: '0.0003', note: 'The bounded proof run.' },
];

const ProofStagesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Training stages" title="A ladder of deliberately boring experiments" subtitle="Each stage has a fixed recipe, so a green result means the same thing next time." />
    <div className="mt-9 grid flex-1 grid-cols-3 gap-6">
      {STAGES.map((stage, index) => (
        <Panel key={stage.name} className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-bold text-primary">0{index + 1}</span>
            <span className="rounded-full border border-border px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-muted">fixed</span>
          </div>
          <h3 className="mt-7 text-4xl font-bold text-text">{stage.name}</h3>
          <div className="mt-7 space-y-4 border-t border-border pt-5 text-xl text-text">
            <p><span className="text-muted">updates</span> <strong>{stage.updates}</strong></p>
            <p><span className="text-muted">batch</span> <strong>{stage.batch}</strong></p>
            <p><span className="text-muted">learning rate</span> <strong className="font-mono">{stage.rate}</strong></p>
          </div>
          <p className="mt-auto border-t border-border pt-6 text-lg leading-relaxed text-muted">{stage.note}</p>
        </Panel>
      ))}
    </div>
    <p className="mt-6 text-lg text-muted">The mini run’s required stop/resume boundary is part of the proof—not an optional demo flourish.</p>
  </SlideFrame>
);

export default ProofStagesSlide;
