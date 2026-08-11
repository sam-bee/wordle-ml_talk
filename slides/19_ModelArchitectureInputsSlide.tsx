import React from 'react';

import modelArchitectureInputsDiagram from '../images/19-model-architecture-inputs.svg';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ModelArchitectureInputsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The policy graph" title="Model architecture: inputs" />
    <div className="mt-4 flex min-h-0 flex-1 items-center justify-center">
      <img
        alt="The candidate mask, candidate statistics, and turn number pass through separate learned transformations and concatenate into a 160-value state vector."
        className="h-full w-full object-contain"
        src={modelArchitectureInputsDiagram}
      />
    </div>
  </SlideFrame>
);

export default ModelArchitectureInputsSlide;
