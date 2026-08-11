import React from 'react';

import browserDemoImage from '../images/cuda-cgo-browser-demo.png';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CudaWebAppDemoSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="Back to the application"
      title="The result is an ordinary Go web service"
      subtitle="The browser asks Go to play. One CUDA-backed inference call supplies the scores for each turn."
      aside={<span className="font-mono text-accent">live demo next</span>}
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1.45fr_0.55fr] gap-7">
      <figure className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-border bg-[#0b100d] shadow-2xl">
        <img
          alt="The real Wordle web application using the hand-written CUDA via cgo backend and solving ADEPT in three guesses."
          className="h-full min-h-0 w-full flex-1 object-contain"
          src={browserDemoImage}
        />
        <figcaption className="border-t border-border bg-surface px-5 py-3 text-base text-muted">Real fallback capture · ADEPT solved in three guesses</figcaption>
      </figure>

      <section className="flex min-h-0 flex-col justify-center gap-4">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">One Go process</p>
          <p className="mt-3 text-xl leading-relaxed text-text">HTTP, Wordle, encoding, the cgo boundary, and GPU ownership.</p>
        </Panel>
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Visible proof of the route</p>
          <p className="mt-3 text-xl leading-relaxed text-text">“hand-written CUDA via cgo” · loaded checkpoint · RTX 5070 Ti.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">Real fallback capture if the live demo misbehaves.</p>
        </Panel>
      </section>
    </div>
  </SlideFrame>
);

export default CudaWebAppDemoSlide;
