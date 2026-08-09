import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ROWS = [
  ['normal', '3.1633', '0.501', 'full candidate state + turn + bonus'],
  ['candidate state removed', '9.7563', '0.003', 'state representation is essential'],
  ['fixed turn', '6.1600', '0.442', 'turn embedding carries useful context'],
  ['no candidate bonus', '9.0775', '0.042', 'exploit/probe bias matters'],
];

const AblationResultsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Ablation" title="Remove one ingredient—and watch the policy stumble" subtitle="All rows reload the same best checkpoint; only one input or mechanism changes at a time." />
    <Panel className="mt-8 flex-1">
      <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_1.7fr] border-b border-border pb-4 text-base font-semibold uppercase tracking-[0.15em] text-muted"><span>variant</span><span>loss</span><span>top-1</span><span>plain meaning</span></div>
      <div className="mt-2">
        {ROWS.map(([name, loss, top1, meaning], index) => <div key={name} className={`grid grid-cols-[1.4fr_0.8fr_0.8fr_1.7fr] items-center border-b border-border/70 py-5 text-xl ${index === 0 ? 'text-primary' : 'text-text'}`}><span className="font-semibold">{name}</span><span className="font-mono">{loss}</span><span className="font-mono">{top1}</span><span className="text-lg text-muted">{meaning}</span></div>)}
      </div>
      <p className="mt-7 text-lg leading-relaxed text-muted">This is component-sensitivity evidence, not a claim that each ablation generalises to every Wordle population.</p>
    </Panel>
  </SlideFrame>
);

export default AblationResultsSlide;
