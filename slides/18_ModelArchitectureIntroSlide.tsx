import React from 'react';

import modelArchitectureIntroDiagram from '../images/18-model-architecture-intro.svg';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ModelArchitectureIntroSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Designing the model" title="A neural network that plays Wordle" />
    <div className="mt-4 flex min-h-0 flex-1 items-center justify-center">
      <img
        alt="A high-level diagram showing a Wordle state entering a neural network with 1,046,596 trainable weights and producing 4,739 guess scores."
        className="h-full w-full object-contain"
        src={modelArchitectureIntroDiagram}
      />
    </div>
  </SlideFrame>
);

export default ModelArchitectureIntroSlide;
