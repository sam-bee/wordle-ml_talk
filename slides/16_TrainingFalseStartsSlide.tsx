import React from 'react';

import failedModelsImage from '../images/17-failed-model-architectures.png';
import { SlideFrame } from '../components/SlidePrimitives';

const TrainingFalseStartsSlide: React.FC = () => (
  <SlideFrame>
    <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_0.75fr] gap-9">
      <figure className="min-h-0 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
        <img
          alt="A wreckage-filled workshop scattered with equations and the remains of a neural network."
          className="h-full w-full object-cover"
          src={failedModelsImage}
          style={{ objectPosition: '50% 56%' }}
        />
      </figure>

      <div className="flex min-w-0 flex-col justify-center">
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          The research phase
        </p>
        <h2 className="mt-5 text-6xl font-bold leading-[1.05] tracking-tight text-text">
          Most model architectures
          <span className="mt-2 block text-accent">don’t work.</span>
        </h2>
        <p className="mt-9 border-l-4 border-primary pl-6 text-2xl leading-relaxed text-muted">
          For a while, that was almost the whole talk.
        </p>
      </div>
    </div>
  </SlideFrame>
);

export default TrainingFalseStartsSlide;
