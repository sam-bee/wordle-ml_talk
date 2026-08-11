import React from 'react';

import policyArchitectureDiagram from '../images/21-policy-architecture.svg';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const PolicyArchitectureSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The policy graph" title="Big Wordle brain" />
    <div className="mt-4 flex min-h-0 flex-1 items-center justify-center">
      <img
        alt="Diagram of the Wordle policy model: candidate, statistics, and turn branches feed a dense residual trunk, policy head, candidate bonus, and 4,739 logits."
        className="h-full w-full object-contain"
        src={policyArchitectureDiagram}
      />
    </div>
  </SlideFrame>
);

export default PolicyArchitectureSlide;
