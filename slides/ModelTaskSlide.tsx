import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ModelTaskSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The model task"
      title="Turn a board state into one useful next guess"
      subtitle="The policy gives every word in its fixed action vocabulary a score, then the game chooses an unused action."
    />

    <div className="mt-10 grid flex-1 grid-cols-[0.9fr_1.1fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center">
        <p className="font-mono text-lg uppercase tracking-[0.2em] text-primary">state</p>
        <p className="mt-4 text-3xl font-semibold text-text">What we know now</p>
        <p className="mt-3 text-xl leading-relaxed text-muted">
          The feedback so far, the remaining possible answers, and which turn we are on.
        </p>
      </Panel>

      <div className="flex flex-col items-center gap-5">
        <div className="text-5xl text-primary" aria-hidden="true">→</div>
        <Panel className="w-full border-primary/40 bg-primary/10 text-center">
          <p className="font-mono text-lg uppercase tracking-[0.2em] text-primary">policy</p>
          <p className="mt-3 text-3xl font-semibold text-text">4,739 whole-word scores</p>
          <p className="mt-2 text-xl leading-relaxed text-muted">A logit is simply a learned score before we choose.</p>
        </Panel>
        <div className="text-5xl text-accent" aria-hidden="true">↓</div>
        <Callout tone="accent" className="w-full text-center">
          <strong>action:</strong> the highest-scoring available guess
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default ModelTaskSlide;
