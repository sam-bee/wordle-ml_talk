import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ImitationLearningSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training"
      title="Teach the policy one good guess at a time"
      subtitle="We copy a frozen teacher, using the same state encoder that live play will use."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.1fr_0.9fr] gap-8">
      <Panel className="flex flex-col">
        <div className="flex items-center gap-4">
          <span className="rounded-xl bg-primary/15 px-4 py-3 font-mono text-2xl font-bold text-primary">state</span>
          <span className="text-3xl text-muted">→</span>
          <span className="rounded-xl bg-accent/15 px-4 py-3 font-mono text-2xl font-bold text-accent">same encoder</span>
          <span className="text-3xl text-muted">→</span>
          <span className="rounded-xl bg-primary/15 px-4 py-3 font-mono text-2xl font-bold text-primary">4,739 scores</span>
        </div>
        <div className="mt-8 space-y-5 text-xl leading-relaxed text-text">
          <p><strong>Target:</strong> the teacher’s top-ranked action in the frozen training corpus.</p>
          <p><strong>Availability mask:</strong> hides only actions already guessed, so the model does not learn to repeat itself.</p>
          <p><strong>Candidate state:</strong> remains an input bonus—not a hard legality rule. Probe words can still be chosen.</p>
        </div>
      </Panel>

      <Panel className="flex flex-col justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Optimisation recipe</p>
          <div className="mt-5 space-y-4 text-xl text-text">
            <p><span className="font-mono text-primary">loss</span> masked sparse categorical cross-entropy</p>
            <p><span className="font-mono text-primary">optimiser</span> FP32 Adam</p>
            <p><span className="font-mono text-primary">guardrail</span> global gradient norm ≤ 5</p>
            <p><span className="font-mono text-primary">seed</span> <span className="font-mono">20260808</span></p>
          </div>
        </div>
        <Callout className="mt-7" tone="accent">In plain language: show the network a board, then adjust its weights so the teacher’s next guess moves toward the top.</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default ImitationLearningSlide;
