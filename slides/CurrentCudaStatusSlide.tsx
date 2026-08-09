import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

type StatusRow = { label: string; detail: string; implemented: boolean };

const STATUS: StatusRow[] = [
  { label: 'Go orchestration', detail: 'data, state encoding, HTTP, Wordle rules', implemented: true },
  { label: 'Raw CUDA smoke', detail: 'standalone add kernel, memory copies, sm_120', implemented: true },
  { label: 'GoMLX/XLA policy on CUDA', detail: 'training and warm checkpoint inference', implemented: true },
  { label: 'Handwritten CUDA policy', detail: 'custom forward/training kernels', implemented: false },
  { label: 'Go ↔ CUDA cgo bridge', detail: 'planned boundary for bespoke kernels', implemented: false },
];

const CurrentCudaStatusSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The GPU boundary · 04"
      title="What works today—and what is next"
      subtitle="The honest architecture is already useful: GoMLX gives us CUDA execution now; bespoke CUDA/cgo is future work."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.2fr_0.8fr] items-center gap-9">
      <Panel padding="none">
        <div className="grid grid-cols-[1fr_auto] border-b border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <span>Boundary</span><span>Status</span>
        </div>
        <div className="divide-y divide-border">
          {STATUS.map((row) => (
            <div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-5 px-7 py-3">
              <div>
                <p className="text-xl font-semibold text-text">{row.label}</p>
                <p className="mt-1 text-base text-muted">{row.detail}</p>
              </div>
              <span className={`rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] ${row.implemented ? 'bg-primary/15 text-primary' : 'bg-danger/15 text-danger'}`}>
                {row.implemented ? 'Implemented' : 'Future'}
              </span>
            </div>
          ))}
        </div>
      </Panel>

      <section>
        <Callout tone="primary" className="text-2xl">
          <span className="font-bold">Today:</span> production-shaped Go + GoMLX + CUDA inference.
        </Callout>
        <div className="my-5 h-px bg-border" />
        <Callout tone="warning" className="text-2xl">
          <span className="font-bold">Next:</span> move only the performance-critical model work behind a custom CUDA/cgo boundary.
        </Callout>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          The tiny <span className="font-mono">.cu</span> smoke test proves CUDA syntax and isolation; it is not the neural network.
        </p>
      </section>
    </div>
  </SlideFrame>
);

export default CurrentCudaStatusSlide;
