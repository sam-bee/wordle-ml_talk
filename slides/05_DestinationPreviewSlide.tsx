import React from 'react';

import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';
import browserDemoImage from '../images/cuda-cgo-browser-demo.png';

const DestinationPreviewSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Where we are going"
      title="A working application at the end of the route"
      subtitle="This preview is the destination: a real CUDA-cgo backend solving a complete game, not a claim about how the training proof was produced."
    />
    <div className="mt-5 flex flex-1 items-center justify-center">
      <figure className="w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
        <img
          src={browserDemoImage}
          alt="CUDA-cgo browser demo showing ADEPT solved in three guesses"
          className="block max-h-[34vh] w-full object-contain"
        />
        <figcaption className="flex items-center justify-between gap-6 border-t border-border px-7 py-3 text-xl text-muted">
          <span><strong className="text-text">ADEPT</strong> solved in 3</span>
          <span className="font-mono text-accent">real cuda-cgo backend</span>
        </figcaption>
      </figure>
    </div>
  </SlideFrame>
);

export default DestinationPreviewSlide;
