import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ProjectJourneySlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The whole project"
      title="Go is the control plane"
      subtitle="The application stays in Go; the GPU is called for dense numerical work through a narrow boundary."
    />
    <div className="mt-9 grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3">
      <Panel className="border-primary/40 bg-primary/10 p-6">
        <p className="font-mono text-lg text-primary">GO</p>
        <h3 className="mt-4 text-2xl font-bold text-text">Game engine</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">Rules, feedback, shortlist, and evaluation.</p>
      </Panel>
      <div className="text-3xl text-primary" aria-hidden="true">→</div>
      <Panel className="border-primary/40 bg-primary/10 p-6">
        <p className="font-mono text-lg text-primary">GO</p>
        <h3 className="mt-4 text-2xl font-bold text-text">Teacher + data</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">Search, synthetic records, and shared encoding.</p>
      </Panel>
      <div className="text-3xl text-primary" aria-hidden="true">→</div>
      <Panel className="border-accent/40 bg-accent/10 p-6">
        <p className="font-mono text-lg text-accent">GPU</p>
        <h3 className="mt-4 text-2xl font-bold text-text">GoMLX + CUDA</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">Dense forward and training operations.</p>
      </Panel>
      <div className="text-3xl text-primary" aria-hidden="true">→</div>
      <Panel className="border-primary/40 bg-primary/10 p-6">
        <p className="font-mono text-lg text-primary">GO</p>
        <h3 className="mt-4 text-2xl font-bold text-text">Web application</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">Serving, legal selection, and browser response.</p>
      </Panel>
    </div>
    <Callout className="mt-7 text-center"><strong className="text-primary">Go orchestrates.</strong> <span className="text-accent">The GPU computes.</span> The game remains authoritative on the host.</Callout>
  </SlideFrame>
);

export default ProjectJourneySlide;
