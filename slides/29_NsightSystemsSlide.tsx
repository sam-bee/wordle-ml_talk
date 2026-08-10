import React from 'react';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const NsightSystemsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Profiling · Systems" title="The wide-angle trace shows the shape of a request" subtitle="Reconstructed from the captured report: 41 inferences, each with three input copies, seven kernels, one output copy, and a synchronization." />
    <Panel className="mt-8 flex-1">
      <div className="flex items-center justify-between text-base font-semibold uppercase tracking-[0.2em] text-muted">
        <span>Nsight Systems-style timeline</span><span>41 inferences · all kernels 41×</span>
      </div>
      <div className="mt-7 space-y-5">
        <div className="grid grid-cols-[10rem_1fr] items-center gap-5">
          <span className="font-mono text-xl text-primary">Host</span>
          <div className="flex h-14 gap-2 rounded-xl bg-elevated p-2">
            <span className="flex-[1] rounded-lg bg-primary/70 px-4 py-3 text-center font-mono text-lg text-canvas">3× H→D</span>
            <span className="flex-[7] rounded-lg bg-accent/70 px-4 py-3 text-center font-mono text-lg text-text">7 CUDA kernels × 41</span>
            <span className="flex-[1] rounded-lg bg-primary/70 px-4 py-3 text-center font-mono text-lg text-canvas">D→H</span>
            <span className="flex-[1] rounded-lg border border-border px-4 py-3 text-center font-mono text-lg text-text">sync</span>
          </div>
        </div>
        <div className="grid grid-cols-[10rem_1fr] gap-5 text-muted">
          <span className="font-mono text-xl text-accent">Repeat</span>
          <div className="grid grid-cols-5 gap-2 text-center font-mono text-lg"><span className="rounded-lg border border-border py-3">01</span><span className="rounded-lg border border-border py-3">02</span><span className="rounded-lg border border-border py-3">…</span><span className="rounded-lg border border-border py-3">40</span><span className="rounded-lg border border-accent/50 bg-accent/10 py-3 text-accent">41</span></div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5 text-center"><div className="rounded-2xl border border-primary/30 bg-primary/10 p-5"><p className="text-4xl font-extrabold text-primary">3 in · 1 out</p><p className="mt-2 text-lg text-muted">memory copies per inference</p></div><div className="rounded-2xl border border-accent/30 bg-accent/10 p-5"><p className="text-4xl font-extrabold text-accent">7</p><p className="mt-2 text-lg text-muted">kernels per inference</p></div><div className="rounded-2xl border border-border bg-elevated/60 p-5"><p className="text-4xl font-extrabold text-text">41</p><p className="mt-2 text-lg text-muted">inference repeats</p></div></div>
    </Panel>
  </SlideFrame>
);

export default NsightSystemsSlide;
