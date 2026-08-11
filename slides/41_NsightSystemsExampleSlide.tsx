import React from 'react';

import nsightSystemsImage from '../images/43-nsight-systems-previous-talk.png';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const NsightSystemsExampleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Profiling · wide angle"
      title="Nsight Systems can show the whole request"
      subtitle="This genuine prior-talk capture shows one part of that wide-angle view: GPU activity and hardware metrics over time."
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1.45fr_0.55fr] gap-7">
      <figure className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-border bg-[#292929] shadow-2xl">
        <img
          alt="A genuine NVIDIA Nsight Systems GPU metrics timeline from the speaker's previous CUDA talk."
          className="h-full min-h-0 w-full flex-1 object-contain"
          src={nsightSystemsImage}
        />
        <figcaption className="border-t border-border bg-surface px-5 py-3 text-base text-muted">Sample capture from some CUDA code</figcaption>
      </figure>

      <section className="flex min-h-0 flex-col justify-center gap-4">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Question</p>
          <p className="mt-3 text-2xl font-bold leading-snug text-text">What happened, in what order, and where are the bottlenecks?</p>
        </Panel>
        <Panel padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">For our Wordle request</p>
          <p className="mt-3 text-xl leading-relaxed text-text">Follow one cgo call through three input copies, seven kernels, one output copy, and synchronization.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">Broader overview of execution ordering</p>
        </Panel>
      </section>
    </div>
  </SlideFrame>
);

export default NsightSystemsExampleSlide;
