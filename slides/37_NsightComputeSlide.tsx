import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const FACTS = [
  ['4,739 × 128', 'launch shape'],
  ['11.36 μs', 'duration'],
  ['40', 'registers / thread'],
  ['69.89%', 'achieved occupancy'],
  ['no spills', 'local or shared'],
] as const;

const NsightComputeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Profiling · Compute"
      title="Nsight Compute is the microscope"
      subtitle="Zoom from the whole request into the final policy kernel—and ask a narrower question."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.22fr_0.78fr] gap-8">
      <section className="flex min-h-0 flex-col justify-center rounded-3xl border-2 border-dashed border-accent/50 bg-accent/5 px-10 py-8 text-center">
        <p className="font-mono text-base font-semibold uppercase tracking-[0.24em] text-accent">Manual screenshot placeholder</p>
        <h3 className="mt-4 font-mono text-3xl font-bold text-text">policy_logits_with_bonus</h3>
        <p className="mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-muted">Insert a real Nsight Compute GUI capture. Do not fabricate a profiler dashboard or source pane for this slide.</p>
        <div className="mt-8 border-t border-dashed border-accent/30 pt-6 text-left">
          <p className="text-base font-semibold uppercase tracking-[0.18em] text-muted">Show these linked views</p>
          <p className="mt-3 text-xl leading-relaxed text-text">source correlation · launch statistics · occupancy · memory workload analysis</p>
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Verified report facts</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {FACTS.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-border bg-surface p-4 shadow-xl">
              <p className="font-mono text-2xl font-bold text-primary">{value}</p>
              <p className="mt-1 text-base leading-snug text-muted">{label}</p>
            </div>
          ))}
        </div>
        <Callout tone="warning" className="mt-5 text-lg">
          Occupancy is a diagnostic, not a score: 100% is not automatically faster, and one kernel cannot prove end-to-end performance.
        </Callout>
      </section>
    </div>
  </SlideFrame>
);

export default NsightComputeSlide;
