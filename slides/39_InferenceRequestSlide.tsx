import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const InferenceRequestSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="Resource ownership"
      title="Load weights over PCIe bus once"
      subtitle="One locked Go worker owns one native model handle, so requests cannot race on the CUDA stream or scratch buffers."
    />

    <div className="mt-7 grid grid-cols-[0.82fr_1.18fr] gap-7">
      <Panel className="border-primary/40 bg-primary/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">At service startup</p>
        <div className="mt-5 space-y-4 text-xl leading-relaxed text-text">
          <p><span className="font-mono font-bold text-primary">1.</span> Create one CUDA stream.</p>
          <p><span className="font-mono font-bold text-primary">2.</span> Allocate persistent device buffers.</p>
          <p><span className="font-mono font-bold text-primary">3.</span> Upload 3.99 MiB of trained weights.</p>
        </div>
        <p className="mt-6 rounded-xl bg-elevated/70 px-4 py-3 text-lg text-muted">No <code>cudaMalloc</code> or weight upload in the request hot path.</p>
      </Panel>

      <Panel className="border-accent/40 bg-accent/10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">For every Wordle guess</p>
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
          <div className="rounded-xl bg-elevated/70 px-4 py-4">
            <p className="font-mono text-lg font-bold text-text">29,028 B</p>
            <p className="mt-2 text-base text-muted">three inputs copied to GPU</p>
          </div>
          <span className="text-3xl text-accent">→</span>
          <div className="rounded-xl bg-elevated/70 px-4 py-4">
            <p className="font-mono text-lg font-bold text-text">7 kernels</p>
            <p className="mt-2 text-base text-muted">one stream, fixed order</p>
          </div>
          <span className="text-3xl text-accent">→</span>
          <div className="rounded-xl bg-elevated/70 px-4 py-4">
            <p className="font-mono text-lg font-bold text-text">18,956 B</p>
            <p className="mt-2 text-base text-muted">logits copied back to Go</p>
          </div>
        </div>
        <p className="mt-6 text-xl leading-relaxed text-text">Go suppresses repeated actions, chooses the highest available score, applies Wordle feedback, and advances the game.</p>
      </Panel>
    </div>

    <Callout tone="warning" className="mt-6 py-4 text-center text-lg">
      CUDA knows numbers, not Wordle. It returns every raw score; legality and game state remain authoritative in Go.
    </Callout>
  </SlideFrame>
);

export default InferenceRequestSlide;
