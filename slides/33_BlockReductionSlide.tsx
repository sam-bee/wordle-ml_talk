import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const BlockReductionSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="CUDA vocabulary" title="A block is a small team, not a tiny CPU" subtitle="The reduction pattern is the bridge from familiar Go loops to GPU execution." />
    <div className="mt-9 grid grid-cols-4 gap-4 text-center">
      {[
        ['Thread', 'one lane\npartial sum'],
        ['Warp', '32 threads\nshuffle values'],
        ['Block', '4 warps\nshared subtotals'],
        ['Grid', '4,739 blocks\none per action'],
      ].map(([label, detail], index) => <Panel key={label} className={index === 2 ? 'border-accent/40' : ''}><p className="text-xl font-bold text-primary">{label}</p><p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-text">{detail}</p></Panel>)}
    </div>
    <div className="mt-9 flex items-center justify-center gap-3 text-lg font-semibold text-text">
      <span className="rounded-xl border border-border bg-surface px-5 py-4">register partials</span><span className="text-3xl text-muted">→</span><span className="rounded-xl border border-border bg-surface px-5 py-4">warp shuffle</span><span className="text-3xl text-muted">→</span><span className="rounded-xl border border-accent/40 bg-accent/10 px-5 py-4">four shared subtotals</span><span className="text-3xl text-muted">→</span><span className="rounded-xl border border-primary/40 bg-primary/10 px-5 py-4">one output write</span>
    </div>
    <Callout className="mt-auto">Shared memory belongs to this block only; the next block computes a different action and cannot share its subtotal.</Callout>
  </SlideFrame>
);

export default BlockReductionSlide;
