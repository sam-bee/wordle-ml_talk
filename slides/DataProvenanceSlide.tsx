import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const DataProvenanceSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Data provenance"
      title="The model inherits the dictionary’s decisions"
      subtitle="Before training, ordinary text-processing choices become part of the system’s behaviour."
    />
    <div className="mt-10 grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
      <Panel className="flex flex-col justify-center">
        <p className="font-mono text-lg text-primary">source 01</p>
        <h3 className="mt-4 text-3xl font-bold text-text">Browser dictionary</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Wordle’s shipped solution and accepted-guess lists.</p>
      </Panel>
      <div className="flex items-center text-4xl text-primary" aria-hidden="true">→</div>
      <Panel className="flex flex-col justify-center border-accent/40">
        <p className="font-mono text-lg text-accent">source 02</p>
        <h3 className="mt-4 text-3xl font-bold text-text">SUBTLEX-US</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Additional words selected from 51 million film-subtitle words.</p>
      </Panel>
      <div className="flex items-center text-4xl text-primary" aria-hidden="true">→</div>
      <Panel className="flex flex-col justify-center">
        <p className="font-mono text-lg text-primary">normalise</p>
        <h3 className="mt-4 text-3xl font-bold text-text">Uppercase, unique, sorted</h3>
        <p className="mt-3 text-xl leading-relaxed text-muted">Stable rows become stable model IDs.</p>
      </Panel>
    </div>
    <Callout tone="warning" className="mt-8">Names, slang, and corpus bias travel with the vocabulary. The historic SUBTLEX frequency cutoff was not recorded—a useful reproducibility lesson.</Callout>
  </SlideFrame>
);

export default DataProvenanceSlide;
