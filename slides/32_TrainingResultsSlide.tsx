import React from 'react';

import { Callout, MetricCard, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TrainingResultsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Results" title="Starting with a new random seed gave almost identical results" subtitle="Every number here is validation-only, on the same fixed 100-game population." />
    <div className="mt-7 grid flex-1 grid-cols-4 gap-5">
      <MetricCard className="border-danger/35" padding="compact" label="initial policy" value="4 / 100" detail="5.86 mean guesses" />
      <MetricCard className="border-primary/40" padding="compact" label="proof best · 2,000" value="97 / 100" detail="3.65 mean · seed 20260808" />
      <MetricCard className="border-primary/40" padding="compact" label="production · 2,200" value="97 / 100" detail="3.68 mean · seed 20260808" />
      <MetricCard className="border-accent/40 bg-accent/5" padding="compact" label="repeat · 2,600" value="98 / 100" detail="3.66 mean · CUDA export" />
    </div>
    <Callout className="mt-5 py-3 text-lg" tone="accent">
      One fresh repeat supports the conclusion; it is not a statistical study. Its selected checkpoint is the model exported to CUDA.
    </Callout>
  </SlideFrame>
);

export default TrainingResultsSlide;
