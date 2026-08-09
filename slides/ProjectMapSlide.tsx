import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ProjectMapSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The project map"
      title="Go is the conductor"
      subtitle="The host owns the puzzle and the data; the GPU takes the performance-critical model work."
    />

    <div className="mt-10 grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
      <Panel className="h-full">
        <p className="font-mono text-lg text-primary">01</p>
        <h3 className="mt-5 text-3xl font-bold text-text">Go game engine</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Authoritative board state, feedback, legal guesses, and evaluation.</p>
      </Panel>
      <div className="text-4xl text-primary" aria-hidden="true">→</div>
      <Panel className="h-full border-accent/40">
        <p className="font-mono text-lg text-accent">02</p>
        <h3 className="mt-5 text-3xl font-bold text-text">Go data generator</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Frozen synthetic records, shared state encoding, and teacher labels.</p>
      </Panel>
      <div className="text-4xl text-primary" aria-hidden="true">→</div>
      <Panel className="h-full">
        <p className="font-mono text-lg text-primary">03</p>
        <h3 className="mt-5 text-3xl font-bold text-text">Policy + web</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Go calls GoMLX on CUDA; the browser animates the completed game.</p>
      </Panel>
    </div>
    <Callout className="mt-8">One end-to-end loop: <strong>Go state → model scores → Go chooses → feedback → next state.</strong></Callout>
  </SlideFrame>
);

export default ProjectMapSlide;
