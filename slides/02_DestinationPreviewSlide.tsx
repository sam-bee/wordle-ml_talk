import React from 'react';

import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';
import browserDemoImage from '../images/cuda-cgo-browser-demo.png';

const DestinationPreviewSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Where we are going"
      title="Objective: train a model to play Wordle"
      subtitle="This preview is the destination: a real CUDA-cgo backend solving a complete Wordle game."
    />
    <div className="mt-5 flex flex-1 items-center justify-center">
      <figure className="w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
        <div className="grid h-[32vh] min-h-72 grid-cols-[1.55fr_0.85fr]">
          <div
            role="img"
            aria-label="Live replay crop showing ADEPT solved by the CUDA policy in three guesses"
            className="border-r border-border bg-elevated bg-no-repeat"
            style={{ backgroundImage: `url(${browserDemoImage})`, backgroundPosition: '50% 90%', backgroundSize: '200%' }}
          />
          <div
            role="img"
            aria-label="Backend status crop showing hand-written CUDA via cgo on an NVIDIA RTX 5070 Ti"
            className="bg-elevated bg-no-repeat"
            style={{ backgroundImage: `url(${browserDemoImage})`, backgroundPosition: '68% 24%', backgroundSize: '450%' }}
          />
        </div>
        <figcaption className="flex items-center justify-between gap-6 border-t border-border px-7 py-3 text-xl text-muted">
          <span><strong className="text-text">Live replay:</strong> ADEPT solved in 3</span>
          <span className="font-mono text-accent">realtime inference</span>
        </figcaption>
      </figure>
    </div>
  </SlideFrame>
);

export default DestinationPreviewSlide;
