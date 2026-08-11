import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const Rtx5070TiSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="The device"
      title="NVIDIA GeForce RTX 5070 Ti"
      subtitle="A Blackwell desktop GPU. Large enough that this one-million-weight Wordle model is tiny by comparison."
      aside={<span className="font-mono text-primary">compute capability 12.0</span>}
    />

    <div className="mt-8 grid grid-cols-5 gap-4">
      <MetricCard padding="compact" label="CUDA cores" value="8,960" detail="parallel arithmetic lanes" />
      <MetricCard padding="compact" label="VRAM" value="16 GB" detail="GDDR7 · 256-bit" />
      <MetricCard padding="compact" label="Bandwidth" value="896 GB/s" detail="peak graphics memory bandwidth" />
      <MetricCard padding="compact" label="Constant memory" value="64 KiB" detail="small cached read-only region" />
      <MetricCard padding="compact" label="Our weights" value="3.99 MiB" detail="resident in ordinary VRAM" />
    </div>

    <div className="mt-8 grid grid-cols-[1.05fr_0.95fr] gap-6">
      <Panel className="border-primary/40 bg-primary/10" padding="compact">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What “8,960 cores” means</p>
        <p className="mt-3 text-xl leading-relaxed text-text">Lots of arithmetic lanes for similar operations—not 8,960 independent CPU cores and not 8,960 goroutines.</p>
      </Panel>
      <Panel className="border-accent/40 bg-accent/10" padding="compact">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What our model uses</p>
        <p className="mt-3 text-xl leading-relaxed text-text">Global VRAM for weights, inputs, activations, and logits. The 64 KiB constant-memory region is too small and is not used.</p>
      </Panel>
    </div>

    <Callout className="mt-6 py-4 text-center text-lg">
      The weights are uploaded once. Each Wordle guess reuses the same GPU allocation.
    </Callout>
  </SlideFrame>
);

export default Rtx5070TiSlide;
