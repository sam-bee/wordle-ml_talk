import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CandidateBonusSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Exploit or probe?" title="CHANT can still be a great action" subtitle="The candidate bonus prefers possible answers without banning useful experiments."
    />
    <div className="mt-8 grid flex-1 grid-cols-2 items-center gap-8">
      <Panel className="relative overflow-hidden p-8">
        <div className="absolute right-6 top-5 rounded-full bg-accent/20 px-4 py-1 text-sm font-bold uppercase tracking-[0.18em] text-accent">probe</div>
        <p className="font-mono text-5xl font-extrabold tracking-[0.18em] text-text">CHANT</p>
        <p className="mt-4 text-xl leading-relaxed text-muted">It may not be the hidden answer, but it tests four new letters.</p>
        <div className="mt-7 flex items-center gap-3 text-lg"><span className="font-mono text-muted">base logit</span><span className="text-2xl text-primary">→</span><span className="font-bold text-text">still playable</span></div>
      </Panel>
      <Panel className="p-8">
        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center font-mono text-xl text-text">logit(word) = baseLogit(word) + β × remainingActionMask(word)</div>
        <div className="mt-6 space-y-3 text-lg text-text">
          <p><span className="font-mono text-primary">mask = 1</span> → possible solution gets β added.</p>
          <p><span className="font-mono text-muted">mask = 0</span> → probe keeps its ordinary base score.</p>
        </div>
        <Callout className="mt-6" tone="warning">This is not a legality mask and not hard mode. Nothing is replaced with −∞.</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default CandidateBonusSlide;
