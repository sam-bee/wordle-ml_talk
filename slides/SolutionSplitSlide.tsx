import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SolutionSplitSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Evaluation design"
      title="Split by secret solution, not by generated state"
      subtitle="Every state for one answer stays in one split, so the answer itself cannot leak across train and validation."
    />
    <div className="mt-10 grid flex-1 grid-cols-3 gap-6">
      <MetricCard label="training" value="2,109" detail="secret solutions" />
      <MetricCard label="validation" value="100" detail="tune and compare" />
      <MetricCard label="final test" value="100" detail="sealed until the end" />
    </div>
    <Panel className="mt-8">
      <p className="text-xl leading-relaxed text-text"><strong>One answer, one home:</strong> all of its generated board states remain in the same split.</p>
      <p className="mt-3 text-xl leading-relaxed text-muted">Audit caveat: 190 of 2,445 unique validation encoded states also occur in training with agreeing teacher labels. That is state-distribution overlap, not solution-ID leakage.</p>
    </Panel>
    <Callout tone="accent" className="mt-6">The final-test list is kept sealed; repeatedly consulting it would turn judgement into another form of overfitting.</Callout>
  </SlideFrame>
);

export default SolutionSplitSlide;
