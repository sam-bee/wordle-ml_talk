import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const PivotExportSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 01"
      title="Train with GoMLX. Serve without it."
      subtitle="The framework remains the reference and training path; inference gets a small, validated portable artifact."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-8">
      <section className="space-y-5">
        <div className="flex items-center gap-4">
          <Panel className="flex-1 border-primary/40 bg-primary/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Training</p>
            <p className="mt-3 text-2xl font-bold text-text">GoMLX / XLA</p>
            <p className="mt-1 text-lg text-muted">restore the best checkpoint</p>
          </Panel>
          <span className="text-4xl text-primary">→</span>
          <Panel className="flex-1 border-accent/40 bg-accent/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Export once</p>
            <p className="mt-3 font-mono text-2xl font-bold text-text">wordle-cuda-f32-v1</p>
            <p className="mt-1 text-lg text-muted">fixed little-endian FP32</p>
          </Panel>
        </div>
        <Callout tone="primary" className="text-xl">
          Manifest validation checks dimensions, vocabulary hashes, tensor layout, finite weights, and SHA-256 before anything reaches C.
        </Callout>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <MetricCard padding="compact" label="Weights" value="1,046,596" detail="FP32 parameters" />
        <MetricCard padding="compact" label="Payload" value="4,186,384 B" detail="one contiguous buffer" />
        <MetricCard padding="compact" label="Checkpoint" value="best" detail="update 2,600" />
        <Panel padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Portable artifact</p>
          <p className="mt-3 font-mono text-lg leading-relaxed text-text">manifest<br />weights<br />golden vectors<br />golden games</p>
        </Panel>
      </section>
    </div>
  </SlideFrame>
);

export default PivotExportSlide;
