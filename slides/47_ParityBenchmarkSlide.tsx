import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ParityBenchmarkSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Correctness before speed"
      title="The CUDA path agrees with the reference"
      subtitle="Verify decisions first; report the batch-one timing without inventing a speedup comparison."
    />
    <div className="mt-7 grid grid-cols-4 gap-4">
      <MetricCard padding="compact" label="golden decisions" value="32 / 32" detail="top-1 · top-5 · selected" />
      <MetricCard padding="compact" label="trajectories" value="100 / 100" detail="exact validation matches" />
      <MetricCard padding="compact" label="reference games" value="98 / 100" detail="3.66 mean guesses" />
      <MetricCard padding="compact" label="max absolute error" value="7.629e−06" detail="GoMLX ↔ CUDA" />
    </div>
    <Panel className="mt-5" padding="compact">
      <div className="grid grid-cols-[1fr_1fr_1.7fr] items-center gap-5">
        <div className="rounded-xl bg-elevated/60 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">cold call</p>
          <p className="mt-2 font-mono text-2xl font-bold text-primary">421,870 ns</p>
        </div>
        <div className="rounded-xl bg-elevated/60 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">200 warm calls</p>
          <p className="mt-2 font-mono text-xl font-bold text-primary">p50 94,010 ns</p>
          <p className="font-mono text-xl font-bold text-primary">p95 111,400 ns</p>
        </div>
        <Callout className="py-3">No GoMLX timing was collected under comparable conditions, so this is <strong>not</strong> a speedup claim.</Callout>
      </div>
    </Panel>
  </SlideFrame>
);

export default ParityBenchmarkSlide;
