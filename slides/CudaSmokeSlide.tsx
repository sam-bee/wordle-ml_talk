import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CudaSmokeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The GPU boundary · 02"
      title="A CUDA kernel, end to end"
      subtitle="Before the model, prove the plumbing: host memory, device memory, launch, and the result crossing back."
      aside={<span className="font-mono text-primary">sm_120 · compute 12.0</span>}
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.3fr_0.7fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center">
        <div className="flex items-center justify-between gap-3 text-center">
          <div className="min-w-0 flex-1">
            <div className="rounded-2xl border border-primary/40 bg-primary/10 px-3 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host</p>
              <p className="mt-2 font-mono text-2xl text-text">19 + 23</p>
            </div>
            <p className="mt-3 text-base text-muted">cudaMemcpy H→D</p>
          </div>
          <span className="text-3xl text-primary">→</span>
          <div className="min-w-0 flex-1">
            <div className="rounded-2xl border border-accent/40 bg-accent/10 px-3 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Device</p>
              <p className="mt-2 font-mono text-xl text-text">add&lt;&lt;&lt;1, 1&gt;&gt;&gt;</p>
            </div>
            <p className="mt-3 text-base text-muted">one GPU thread</p>
          </div>
          <span className="text-3xl text-primary">→</span>
          <div className="min-w-0 flex-1">
            <div className="rounded-2xl border border-primary/40 bg-primary/10 px-3 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Host</p>
              <p className="mt-2 font-mono text-2xl text-text">42</p>
            </div>
            <p className="mt-3 text-base text-muted">cudaMemcpy D→H</p>
          </div>
        </div>
        <p className="mt-8 text-center text-xl font-semibold text-text">A tiny test, but every arrow is real GPU engineering.</p>
      </Panel>

      <CodeBlock language="cuda" className="self-center">
        {`__global__ void add(
  const float* left,
  const float* right,
  float* result) {
  *result = *left + *right;
}

add<<<1, 1>>>(
  device_left,
  device_right,
  device_result);`}
      </CodeBlock>
    </div>
  </SlideFrame>
);

export default CudaSmokeSlide;
