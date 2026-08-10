import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const KERNELS = [
  ['candidate_projection_relu', '96', '128'],
  ['stats_projection_relu', '48', '128'],
  ['load_turn_embedding', '1', '32'],
  ['residual_in_relu', '160', '128'],
  ['residual_out_skip_relu', '160', '128'],
  ['candidate_bonus', '1', '128'],
  ['policy_logits_with_bonus', '4,739', '128'],
] as const;

const KernelSequenceSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 05"
      title="One forward graph, seven visible kernels"
      subtitle="The launch sequence mirrors the small residual policy. CUDA returns raw logits; Go remains responsible for selection."
      aside={<span className="font-mono text-primary">one stream · FP32</span>}
    />

    <div className="mt-7 grid flex-1 grid-cols-[1.2fr_0.8fr] items-center gap-8">
      <Panel className="p-0">
        <div className="grid grid-cols-[2.2fr_0.8fr_0.8fr] border-b border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <span>Kernel</span><span>Grid</span><span>Block</span>
        </div>
        <div className="divide-y divide-border">
          {KERNELS.map(([name, grid, block], index) => (
            <div key={name} className={`grid grid-cols-[2.2fr_0.8fr_0.8fr] items-center px-7 py-3 ${index === KERNELS.length - 1 ? 'bg-accent/10' : ''}`}>
              <p className="font-mono text-lg text-text">{name}</p>
              <p className="font-mono text-lg text-muted">{grid}</p>
              <p className="font-mono text-lg text-muted">{block}</p>
            </div>
          ))}
        </div>
      </Panel>

      <section className="space-y-5">
        <Panel className="border-primary/40 bg-primary/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Inside each dense block</p>
          <p className="mt-4 text-xl leading-relaxed text-text">FP32 multiply-accumulate → warp shuffle reduction → four warp subtotals in shared memory.</p>
        </Panel>
        <Callout tone="warning" className="text-xl">
          No softmax. No argmax. No legality mask.
          <span className="mt-2 block text-lg font-normal">CUDA emits <span className="font-mono">logits[4739]</span>; Go selects the action.</span>
        </Callout>
        <p className="text-lg leading-relaxed text-muted">Each block in the final launch computes one raw logit for one possible action word.</p>
      </section>
    </div>
  </SlideFrame>
);

export default KernelSequenceSlide;
