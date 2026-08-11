import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardIntroSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Monitoring training"
      title="TensorBoard: the training dashboard"
      subtitle="Our Go process records measurements. TensorBoard turns them into graphs we can inspect while the model learns."
    />

    <div className="mt-9 flex flex-1 flex-col justify-center">
      <div className="grid grid-cols-[1fr_auto_1.15fr_auto_1fr] items-center gap-5">
        <Panel className="flex min-h-44 flex-col justify-center border-primary/40 bg-primary/10 text-center">
          <p className="font-mono text-base font-bold uppercase tracking-[0.18em] text-primary">Go + GoMLX</p>
          <p className="mt-4 text-3xl font-bold text-text">Train the model</p>
          <p className="mt-3 text-xl text-muted">loss · accuracy · beta</p>
        </Panel>

        <span className="text-4xl text-primary" aria-hidden="true">→</span>

        <Panel className="flex min-h-44 flex-col justify-center border-accent/40 bg-accent/10 text-center">
          <p className="font-mono text-base font-bold uppercase tracking-[0.18em] text-accent">Event file</p>
          <p className="mt-4 font-mono text-2xl font-bold text-text">events.out.tfevents…</p>
          <p className="mt-3 text-xl text-muted">one timestamped stream</p>
        </Panel>

        <span className="text-4xl text-primary" aria-hidden="true">→</span>

        <Panel className="flex min-h-44 flex-col justify-center border-[#ff8a00]/50 bg-[#ff8a00]/10 text-center">
          <p className="font-mono text-base font-bold uppercase tracking-[0.18em] text-[#ff9d2e]">Browser UI</p>
          <p className="mt-4 text-3xl font-bold text-text">TensorBoard</p>
          <p className="mt-3 text-xl text-muted">plot · compare · inspect</p>
        </Panel>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-5">
        <Panel padding="compact">
          <p className="font-mono text-lg font-bold text-primary">Scalar</p>
          <p className="mt-2 text-xl text-muted">One number changing over time.</p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-lg font-bold text-accent">Histogram</p>
          <p className="mt-2 text-xl text-muted">A whole distribution at each checkpoint.</p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-lg font-bold text-[#ff9d2e]">Run</p>
          <p className="mt-2 text-xl text-muted">One experiment, ready to compare.</p>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default TensorBoardIntroSlide;
