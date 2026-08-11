import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ControlPlaneCudaSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 02"
      title="Go is the control plane"
      subtitle="CUDA is deliberately narrow: one synchronous numerical call, then Go owns what the player sees and what happens next."
    />

    <div className="mt-10 flex flex-1 flex-col justify-center gap-7">
      <div className="grid grid-cols-[1fr_auto_1.45fr_auto_1fr] items-center gap-4 text-center">
        <Panel className="border-primary/40 bg-primary/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Browser</p>
          <p className="mt-3 text-xl font-bold text-text">HTTP game request</p>
        </Panel>
        <span className="text-4xl text-primary">→</span>
        <Panel className="border-primary/40">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Go control plane</p>
          <p className="mt-3 text-xl font-bold text-text">HTTP · game · encoder · legality</p>
          <p className="mt-2 text-base text-muted">authoritative state + availability mask</p>
        </Panel>
        <span className="text-4xl text-accent">→</span>
        <Panel className="border-accent/40 bg-accent/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Locked worker</p>
          <p className="mt-3 text-xl font-bold text-text">one cgo call</p>
          <p className="mt-2 text-base text-muted">one OS thread, serialized</p>
        </Panel>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="h-px w-24 bg-border" />
        <Panel className="min-w-[30rem] border-accent/40 bg-accent/10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">CUDA numerical data plane</p>
          <p className="mt-3 font-mono text-xl text-text">inputs → persistent model → logits[4739]</p>
        </Panel>
        <div className="h-px w-24 bg-border" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-5 text-center">
        <Panel><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Back in Go</p><p className="mt-3 text-xl font-bold text-text">mask + tie-break</p></Panel>
        <Panel><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Then Go</p><p className="mt-3 text-xl font-bold text-text">select action</p></Panel>
        <Panel><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Finally Go</p><p className="mt-3 text-xl font-bold text-text">advance Wordle</p></Panel>
      </div>
    </div>
  </SlideFrame>
);

export default ControlPlaneCudaSlide;
