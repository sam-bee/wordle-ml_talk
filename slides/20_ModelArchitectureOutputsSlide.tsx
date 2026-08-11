import React from 'react';

import modelArchitectureOutputsDiagram from '../images/20-model-architecture-outputs.svg';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ModelArchitectureOutputsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The policy graph" title="Model architecture: outputs" />
    <div className="mt-4 flex min-h-0 flex-1 items-center justify-center">
      <img
        alt="A processed 160-value state becomes one raw logit for each possible guess, with a learned bonus applied to guesses which remain candidate solutions."
        className="h-full w-full object-contain"
        src={modelArchitectureOutputsDiagram}
      />
    </div>
  </SlideFrame>
);

export default ModelArchitectureOutputsSlide;
