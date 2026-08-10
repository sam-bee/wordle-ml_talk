import React from 'react';
import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const LaunchShapeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="One kernel" title="One block computes one word score" subtitle="The final policy launch turns the fixed action vocabulary into a visible CUDA grid." />
    <div className="mt-9 grid flex-1 grid-cols-3 gap-6">
      <MetricCard label="Grid" value="4,739 blocks" detail="one block per possible action" />
      <MetricCard label="Block" value="128 threads" detail="four warps cooperate" />
      <MetricCard label="Output" value="1 logit" detail="one raw score per word" />
    </div>
    <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-5">
      <Panel><p className="text-xl font-bold text-primary">Logical work</p><p className="mt-3 text-3xl font-semibold text-text">4,739 × 128 = 606,592 thread positions</p></Panel>
      <p className="text-4xl text-muted">→</p>
      <Panel className="border-accent/40"><p className="text-xl font-bold text-accent">Physical reality</p><p className="mt-3 text-xl leading-relaxed text-text">Not 606,592 CPU threads at once: the GPU schedules blocks in waves across its SMs.</p></Panel>
    </div>
    <Callout className="mt-7">The grid shape is a teaching map: each block owns one action logit, then the host chooses the legal guess.</Callout>
  </SlideFrame>
);

export default LaunchShapeSlide;
