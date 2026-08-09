import React from 'react';

import { Callout, MetricCard, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const FrozenCorpusSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Reproducible training input"
      title="Freeze the examples before optimising"
      subtitle="WDIT v3, release v0.1.0, is an offline corpus. Teacher ranking is data preparation—not part of the training hot path."
    />
    <div className="mt-10 grid flex-1 grid-cols-4 gap-5">
      <MetricCard label="train" value="52,726" detail="records" />
      <MetricCard label="mini" value="1,600" detail="records" />
      <MetricCard label="validation" value="2,500" detail="records" />
      <MetricCard label="final test" value="2,500" detail="records, sealed" />
    </div>
    <Callout className="mt-8">A frozen corpus makes a run comparable: same words, same encoded states, same labels, and a clear record of what the model actually saw.</Callout>
  </SlideFrame>
);

export default FrozenCorpusSlide;
