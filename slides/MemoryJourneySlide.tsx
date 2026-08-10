import React from 'react';
import { Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const MemoryJourneySlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Memory journey" title="Copy the state in. Keep the model resident. Copy logits out." subtitle="Batch-one inference makes transfer and launch costs visible." />
    <div className="mt-9 grid grid-cols-5 items-center gap-3">
      <Panel className="border-primary/40"><p className="text-lg font-bold text-primary">Host Go</p><p className="mt-3 text-lg leading-relaxed text-text">candidate mask<br />candidate stats<br />turn + action mask</p></Panel><span className="text-3xl text-muted">→</span>
      <Panel><p className="text-lg font-bold text-accent">3 HtoD copies</p><p className="mt-3 text-lg leading-relaxed text-text">persistent input buffers<br />no per-call device allocation</p></Panel><span className="text-3xl text-muted">→</span>
      <Panel className="border-accent/40"><p className="text-lg font-bold text-accent">Device</p><p className="mt-3 text-lg leading-relaxed text-text">weights in global memory<br />registers + block shared memory<br />seven kernels, one stream</p></Panel>
    </div>
    <div className="my-8 flex items-center justify-center gap-5"><span className="text-xl text-muted">→</span><Panel className="w-72 border-primary/40 text-center"><p className="text-lg font-bold text-primary">1 DtoH copy</p><p className="mt-2 text-lg text-text">4,739 raw logits</p></Panel><span className="text-xl text-muted">→</span><p className="text-xl font-semibold text-text">Go legality + Wordle rules</p></div>
  </SlideFrame>
);

export default MemoryJourneySlide;
