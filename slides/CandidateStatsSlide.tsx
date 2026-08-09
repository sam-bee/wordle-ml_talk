import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CandidateStatsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Compressing the shortlist"
      title="Mean shape, plus the missing size"
      subtitle="A 2,309-word bitset is useful—but its raw magnitude would mostly say how many words remain."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1fr_1.05fr] items-center gap-8">
      <Panel>
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Normalize first</p>
        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center font-mono text-2xl text-text">
          <span className="text-primary">pᵢ</span> = <span className="text-accent">mᵢ</span> / Σ<span className="text-accent">mⱼ</span>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-muted">The first 96 learned features become a mean over the candidates—not a sum that grows with the shortlist.</p>
      </Panel>
      <div className="space-y-3">
        <Panel padding="compact"><p className="font-mono text-xl font-bold text-text">130</p><p className="mt-1 text-lg text-muted">26 letters × 5 positions</p></Panel>
        <Panel padding="compact"><p className="font-mono text-xl font-bold text-text">78</p><p className="mt-1 text-lg text-muted">26 letters × appears 1, 2, or 3 times</p></Panel>
        <Panel padding="compact"><p className="font-mono text-xl font-bold text-text">+ 1</p><p className="mt-1 text-lg text-muted">normalized log count: log(n) / log(2309)</p></Panel>
        <Callout tone="accent">The explicit count restores the magnitude that normalization intentionally removed.</Callout>
      </div>
    </div>
  </SlideFrame>
);

export default CandidateStatsSlide;
