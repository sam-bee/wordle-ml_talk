import React from 'react';

import { Callout, MetricCard, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const VocabularySlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The action space"
      title="An answer and a useful guess are different things"
      subtitle="The model has a stable word at every output index, so its scores are concrete and inspectable."
    />
    <div className="mt-12 grid flex-1 grid-cols-3 gap-6">
      <MetricCard label="possible solutions" value="2,309" detail="Words the game may have chosen." />
      <MetricCard label="legal guesses" value="12,947" detail="The larger Wordle dictionary." />
      <MetricCard label="fixed actions" value="4,739" detail="2,309 solutions + 2,430 additional words." />
    </div>
    <Callout tone="accent" className="mt-8">A probe can be an excellent action even when it cannot be the answer. Word IDs stay fixed across data, training, and play.</Callout>
  </SlideFrame>
);

export default VocabularySlide;
