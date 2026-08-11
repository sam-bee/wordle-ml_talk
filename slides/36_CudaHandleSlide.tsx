import React from 'react';

import { Callout, CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CudaHandleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 04"
      title="Make the handle own the expensive state"
      subtitle="Creation uploads weights and allocates buffers once. Inference reuses them; destruction releases them on the same worker thread."
    />

    <div className="mt-8 grid flex-1 grid-cols-[0.9fr_1.1fr] items-center gap-9">
      <CodeBlock className="[&_pre]:p-5 [&_pre]:text-2xl [&_pre]:leading-snug" language="wordle_cuda.h">
        {`typedef struct wordle_cuda_model
    wordle_cuda_model;

int wordle_cuda_model_infer(
    wordle_cuda_model* model,
    const float* candidate_mask,
    const float* candidate_stats, int32_t turn,
    const float* remaining_action_mask,
    float* logits_out);`}
      </CodeBlock>

      <section className="space-y-6">
        <div className="grid grid-cols-3 items-center gap-4 text-center">
          <Panel className="border-primary/40 bg-primary/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Create</p>
            <p className="mt-3 text-xl font-bold text-text">cudaStreamCreate</p>
            <p className="mt-1 text-base text-muted">then cudaMalloc weights + buffers</p>
          </Panel>
          <span className="text-4xl text-primary">→</span>
          <Panel className="border-accent/40 bg-accent/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Infer × N</p>
            <p className="mt-3 text-xl font-bold text-text">reuse everything</p>
            <p className="mt-1 text-base text-muted">no device-allocation hot path</p>
          </Panel>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <p className="font-mono text-base text-muted">same locked OS thread</p>
          <span className="h-px flex-1 bg-border" />
        </div>
        <Panel className="border-danger/40 bg-danger/10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-danger">Destroy</p>
          <p className="mt-3 text-xl font-bold text-text">cudaFree · stream destroy · cudaDeviceReset</p>
          <p className="mt-1 text-base text-muted">teardown only; never part of a forward call</p>
        </Panel>
        <Callout tone="accent" className="py-3 text-lg">
          Opaque to Go. C owns every device allocation; Go owns the request and receives raw FP32 logits.
        </Callout>
      </section>
    </div>
  </SlideFrame>
);

export default CudaHandleSlide;
