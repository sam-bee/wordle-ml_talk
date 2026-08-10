import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const NsightComputeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Profiling · Compute" title="The microscope finds a healthy, inspectable kernel" subtitle="Final policy kernel snapshot: diagnostic evidence, not a speed score." />
    <div className="mt-8 grid flex-1 grid-cols-[1.15fr_0.85fr] gap-8">
      <Panel className="flex flex-col justify-between">
        <div><p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">Final policy kernel</p><p className="mt-3 font-mono text-3xl font-bold text-text">4,739 × 128</p></div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{[['11.36 μs','kernel time'],['40','registers / thread'],['69.89%','achieved occupancy'],['16 B + 1.02 KiB','shared memory'],['none','spills'],['270.81 GB/s','memory throughput'],['30.83%','DRAM throughput']].map(([value,label]) => <div key={label} className="rounded-xl border border-border bg-elevated/60 p-4"><p className="font-mono text-2xl font-bold text-primary">{value}</p><p className="mt-1 text-base text-muted">{label}</p></div>)}</div>
      </Panel>
      <section className="flex flex-col justify-center"><Callout tone="accent" className="text-2xl">No spills and a bounded register footprint make the generated execution legible.</Callout><p className="mt-7 text-2xl leading-relaxed text-text">The report helps answer <span className="font-semibold text-accent">what to investigate next</span>: memory traffic, occupancy, or launch structure.</p><p className="mt-6 text-xl leading-relaxed text-muted">It is not a comparison against GoMLX, and it is not proof that this is the fastest possible implementation.</p></section>
    </div>
  </SlideFrame>
);

export default NsightComputeSlide;
