import React from 'react';
import { Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const MemoryJourneySlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Memory journey" title="Copy the state in. Keep the model resident. Copy logits out." subtitle="Batch-one inference makes transfer and launch costs visible." />
    <div className="mt-8 grid flex-1 grid-cols-[1.05fr_auto_1fr_auto_1.18fr_auto_0.9fr_auto_1fr] items-center gap-3">
      <Panel className="border-primary/40" padding="compact">
        <p className="text-lg font-bold text-primary">Host Go</p>
        <p className="mt-3 text-lg leading-snug text-text">candidate mask<br />candidate stats<br />turn + action mask</p>
      </Panel>
      <span className="text-3xl text-muted" aria-hidden="true">→</span>
      <Panel padding="compact">
        <p className="text-lg font-bold text-accent">3 HtoD</p>
        <p className="mt-3 text-lg leading-snug text-text">copy into persistent input buffers</p>
      </Panel>
      <span className="text-3xl text-muted" aria-hidden="true">→</span>
      <Panel className="border-accent/40" padding="compact">
        <p className="text-lg font-bold text-accent">Device</p>
        <p className="mt-3 text-lg leading-snug text-text">resident weights<br />registers + shared memory<br />seven kernels, one stream</p>
      </Panel>
      <span className="text-3xl text-muted" aria-hidden="true">→</span>
      <Panel className="border-primary/40 text-center" padding="compact">
        <p className="text-lg font-bold text-primary">1 DtoH</p>
        <p className="mt-3 text-lg leading-snug text-text">4,739 raw logits</p>
      </Panel>
      <span className="text-3xl text-muted" aria-hidden="true">→</span>
      <Panel className="bg-primary/5" padding="compact">
        <p className="text-lg font-bold text-text">Host Go</p>
        <p className="mt-3 text-lg leading-snug text-text">legality mask<br />Wordle rules<br />choose action</p>
      </Panel>
    </div>
  </SlideFrame>
);

export default MemoryJourneySlide;
