import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GpuPrimerSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="CUDA, just in time"
      title="Enough GPU vocabulary to read this one launch"
      subtitle="This is not a GPU architecture tour. It is the small map we need for one Wordle policy kernel."
    />

    <div className="mt-6 flex flex-1 flex-col">
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-5">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host · Go</p>
          <p className="mt-2 text-2xl font-bold text-text">Owns the game</p>
          <p className="mt-1 text-lg leading-snug text-muted">Encode the state, call the model, apply legality, choose the next guess.</p>
        </Panel>
        <div className="self-center text-4xl text-primary" aria-hidden="true">→</div>
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Device · CUDA</p>
          <p className="mt-2 font-mono text-xl font-bold text-text">policy_logits_with_bonus&lt;&lt;&lt;4,739, 128&gt;&gt;&gt;</p>
          <p className="mt-1 text-lg leading-snug text-muted">A <strong className="text-text">kernel</strong> is GPU code launched over many small, similar pieces of work.</p>
        </Panel>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">
        <Panel className="border-primary/30 bg-primary/10" padding="compact">
          <p className="font-mono text-lg font-bold text-primary">grid</p>
          <p className="mt-2 text-lg leading-snug text-text"><strong>4,739 blocks</strong><br />the complete launch</p>
        </Panel>
        <Panel className="border-accent/30 bg-accent/10" padding="compact">
          <p className="font-mono text-lg font-bold text-accent">block</p>
          <p className="mt-2 text-lg leading-snug text-text"><strong>128 threads</strong><br />one word score</p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-lg font-bold text-text">warp</p>
          <p className="mt-2 text-lg leading-snug text-text"><strong>32 threads</strong><br />scheduled together</p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-lg font-bold text-text">thread</p>
          <p className="mt-2 text-lg leading-snug text-text">Accumulates a strided slice of the dot product.</p>
        </Panel>
      </div>

      <Callout tone="warning" className="mt-4 py-3 text-center text-lg">
        This is <strong>logical work</strong>, not 606,592 CPU-like threads running at once. The GPU schedules blocks in waves.
      </Callout>
    </div>
  </SlideFrame>
);

export default GpuPrimerSlide;
