import React from 'react';

import nsightComputeImage from '../images/44-nsight-compute-previous-talk.png';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const NsightComputeExampleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Profiling · microscope"
      title="Nsight Compute goes inside one kernel"
      subtitle="Use it after Systems identifies the interesting kernel: inspect launch shape, occupancy, memory traffic, counters, and source."
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1.4fr_0.6fr] gap-7">
      <figure className="flex min-h-0 flex-col overflow-hidden rounded-3xl border border-border bg-[#292929] shadow-2xl">
        <img
          alt="A genuine NVIDIA Nsight Compute roofline view from the speaker's previous CUDA talk."
          className="h-full min-h-0 w-full flex-1 object-contain"
          src={nsightComputeImage}
        />
        <figcaption className="border-t border-border bg-surface px-5 py-3 text-base text-muted">Sample capture from some CUDA code</figcaption>
      </figure>

      <section className="flex min-h-0 flex-col justify-center gap-4">
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Question</p>
          <p className="mt-3 text-2xl font-bold leading-snug text-text">What limits this kernel, and what could be changed?</p>
        </Panel>
        <Panel padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Our policy-kernel report</p>
          <p className="mt-3 font-mono text-xl leading-relaxed text-text">4,739 × 128 · 11.36 μs<br />40 registers / thread · no spills</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">69.89% achieved occupancy is a diagnostic metric, but not a speed score.</p>
        </Panel>
      </section>
    </div>
  </SlideFrame>
);

export default NsightComputeExampleSlide;
