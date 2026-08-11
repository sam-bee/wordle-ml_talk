import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CudaPrimerShortSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="CUDA for Go developers"
      title="CPU code launches work on a separate device"
      subtitle="CUDA is NVIDIA’s programming model and API for moving data to a GPU and running kernels over many logical threads."
    />

    <div className="mt-9 grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-center gap-4 text-center">
      <Panel className="border-primary/40 bg-primary/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host · CPU</p>
        <p className="mt-3 text-2xl font-bold text-text">Go memory</p>
        <p className="mt-2 text-lg text-muted">state tensors</p>
      </Panel>
      <div>
        <p className="font-mono text-base text-muted">copy</p>
        <p className="text-4xl text-primary">→</p>
      </div>
      <Panel className="border-accent/50 bg-accent/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Device · GPU</p>
        <p className="mt-3 font-mono text-2xl font-bold text-text">kernel&lt;&lt;&lt;grid, block&gt;&gt;&gt;(...)</p>
        <p className="mt-2 text-lg text-muted">the same small function over many lanes</p>
      </Panel>
      <div>
        <p className="font-mono text-base text-muted">copy</p>
        <p className="text-4xl text-primary">→</p>
      </div>
      <Panel className="border-primary/40 bg-primary/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host · CPU</p>
        <p className="mt-3 text-2xl font-bold text-text">Go memory</p>
        <p className="mt-2 text-lg text-muted">4,739 logits</p>
      </Panel>
    </div>

    <div className="mt-8 grid grid-cols-4 gap-4">
      <Panel padding="compact"><p className="font-mono text-xl font-bold text-primary">kernel</p><p className="mt-2 text-lg leading-snug text-muted">one GPU function</p></Panel>
      <Panel padding="compact"><p className="font-mono text-xl font-bold text-primary">thread</p><p className="mt-2 text-lg leading-snug text-muted">one logical execution lane</p></Panel>
      <Panel padding="compact"><p className="font-mono text-xl font-bold text-primary">block</p><p className="mt-2 text-lg leading-snug text-muted">threads which can cooperate</p></Panel>
      <Panel padding="compact"><p className="font-mono text-xl font-bold text-primary">grid</p><p className="mt-2 text-lg leading-snug text-muted">all blocks in one launch</p></Panel>
    </div>

    <Callout tone="warning" className="mt-7 py-4 text-center text-lg">
      A CUDA thread is much smaller than a goroutine. Hardware schedules blocks in waves; they do not all run at once.
    </Callout>
  </SlideFrame>
);

export default CudaPrimerShortSlide;
