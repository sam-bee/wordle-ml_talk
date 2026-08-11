import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const NsightSystemsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Profiling · Systems"
      title="Nsight Systems is the wide-angle timeline"
      subtitle="It connects one Go request to the copies, kernels, and synchronization it causes on the GPU."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.38fr_0.62fr] gap-8">
      <section className="flex min-h-0 flex-col justify-center rounded-3xl border-2 border-dashed border-primary/50 bg-primary/5 px-10 py-8 text-center">
        <p className="font-mono text-base font-semibold uppercase tracking-[0.24em] text-primary">Manual screenshot placeholder</p>
        <h3 className="mt-4 text-3xl font-bold text-text">Capture one post-warm-up <code className="font-mono text-primary">wordle_infer</code> range</h3>
        <p className="mx-auto mt-4 max-w-3xl text-xl leading-relaxed text-muted">Use a real Nsight Systems GUI capture. Do not replace this with a recreated timeline or a synthetic profiler UI.</p>
        <div className="mt-8 border-t border-dashed border-primary/30 pt-6 text-left">
          <p className="text-base font-semibold uppercase tracking-[0.18em] text-muted">Keep visible in the real capture</p>
          <p className="mt-3 text-xl leading-relaxed text-text"><span className="font-mono text-primary">wordle-gpu</span> host lane and NVTX range · 3 HtoD copies · seven named kernels · 1 DtoH copy · final synchronization</p>
        </div>
      </section>

      <section className="flex flex-col justify-center gap-5">
        <Panel className="border-accent/40 bg-accent/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The question it answers</p>
          <p className="mt-3 text-2xl font-bold leading-snug text-text">What happens, in what order, during one request?</p>
        </Panel>
        <Panel>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Read left to right</p>
          <p className="mt-3 text-xl leading-relaxed text-text">Go enters cgo → inputs cross to the device → seven kernels run in stream order → logits return → Go resumes.</p>
        </Panel>
        <Callout tone="warning" className="text-lg">
          A timeline is evidence about ordering, overlap, gaps, and waits—not a speed comparison by itself.
        </Callout>
      </section>
    </div>
  </SlideFrame>
);

export default NsightSystemsSlide;
