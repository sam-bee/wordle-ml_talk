import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SyntheticExampleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="One synthetic example"
      title="A game state becomes a labelled row"
      subtitle="The slow teacher reasons now; training can reuse its answer later."
    />
    <div className="mt-7 grid flex-1 grid-cols-[1fr_0.95fr] items-center gap-8">
      <Panel className="p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">state</p>
          <span className="rounded-full bg-primary/15 px-4 py-1 font-mono text-sm text-primary">turn 1</span>
        </div>
        <div className="mt-5 flex items-center gap-3 font-mono text-2xl font-bold tracking-[0.16em] text-text">
          <span className="rounded-xl border border-border bg-elevated px-4 py-3">RAISE</span>
          <span className="text-primary">→</span>
          <span className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-accent">feedback</span>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-elevated p-5">
          <p className="text-base font-semibold uppercase tracking-[0.16em] text-muted">remaining answers</p>
          <p className="mt-3 font-mono text-xl text-text">SCARE · SHARE · SNARE · SPARE · STARE</p>
          <p className="mt-3 text-lg text-muted">candidate count: 5 · encoded as a 289-byte shortlist bitset</p>
        </div>
      </Panel>
      <div className="space-y-4">
        <Panel className="p-6">
          <p className="text-base font-semibold uppercase tracking-[0.16em] text-muted">teacher label</p>
          <p className="mt-3 text-lg leading-relaxed text-text">Rank every unused action and store its top 16 action IDs, reduction ratios, and worst-case sizes.</p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-sm text-primary">
            {['action 1', 'action 2', 'action 3', '…', 'action 16'].map(label => <span key={label} className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2">{label}</span>)}
          </div>
        </Panel>
        <Callout tone="accent">Teacher trajectory states come first; random valid histories fill each depth bucket. The slow search cost is paid once, offline.</Callout>
      </div>
    </div>
  </SlideFrame>
);

export default SyntheticExampleSlide;
