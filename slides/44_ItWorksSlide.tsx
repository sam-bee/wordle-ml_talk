import React from 'react';

import itWorksImage from '../images/44-it-works.jpg';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ItWorksSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The result" title="It works!" />
    <div className="mt-5 flex min-h-0 flex-1 items-center justify-center">
      <img
        alt="A Go gopher holding a graphics card and a bottle of champagne."
        className="h-full max-h-full w-full object-contain"
        src={itWorksImage}
      />
    </div>
  </SlideFrame>
);

export default ItWorksSlide;
