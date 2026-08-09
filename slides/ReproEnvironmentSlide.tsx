import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ReproEnvironmentSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The GPU boundary · 01"
      title="Reproducibility starts with the device"
      subtitle="The demo enters one known CUDA environment, with one known GPU—not whatever happens to be visible on the host."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.1fr_0.9fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Container contract</p>
          <div className="mt-5 flex items-center gap-4">
            <span className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-xl text-primary">CUDA 13.1</span>
            <span className="text-2xl text-muted">+</span>
            <span className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 font-mono text-xl text-accent">xla:cuda</span>
          </div>
          <p className="mt-6 text-xl leading-relaxed text-text">
            Compose reserves exactly one GPU by UUID. GoMLX then uses the CUDA XLA backend inside the container.
          </p>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <p className="font-mono text-lg text-muted">NVIDIA_GPU_DEVICE_ID = approved UUID</p>
          <p className="mt-2 text-lg text-muted">No <span className="font-mono">gpus: all</span>. No accidental RTX 3060.</p>
        </div>
      </Panel>

      <section className="space-y-5">
        <div className="rounded-3xl border border-primary/35 bg-primary/10 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Allowed</p>
          <p className="mt-3 text-3xl font-bold text-text">RTX 5070 Ti</p>
          <p className="text-3xl font-bold text-text">RTX 5050 <span className="text-xl font-normal text-muted">(including Laptop GPU)</span></p>
        </div>
        <div className="rounded-3xl border border-danger/40 bg-danger/10 p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-danger">Rejected</p>
          <p className="mt-3 text-3xl font-bold text-text">Every other visible device</p>
          <p className="mt-2 text-lg text-muted">The smoke check also requires compute capability 12.0.</p>
        </div>
        <Callout tone="accent" className="text-lg">
          Same source + same container + same GPU contract = a demo we can explain and rerun.
        </Callout>
      </section>
    </div>
  </SlideFrame>
);

export default ReproEnvironmentSlide;
