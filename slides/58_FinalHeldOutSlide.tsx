import React from 'react';
import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const FinalHeldOutSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The sealed check" title="One intentional held-out CUDA aggregate" subtitle="Run once after tuning stopped. The separate final-test corpus stayed unopened." />
    <div className="mt-9 grid flex-1 grid-cols-[1.1fr_0.9fr] gap-8"><Panel className="grid grid-cols-2 gap-5"><MetricCard label="Solved" value="97 / 100" detail="held-out solutions" /><MetricCard label="Mean guesses" value="3.75" /><MetricCard label="Failures" value="3" /><MetricCard label="Invalid selections" value="0" /></Panel><Panel><p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Guess distribution</p><div className="mt-8 flex h-56 items-end gap-4 border-b border-border px-3">{[0,0,45,41,8,6].map((count,index) => <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2"><span className="font-mono text-xl font-bold text-primary">{count}</span><div className="w-full rounded-t-lg bg-primary/70" style={{ height: `${Math.max(2, count / 45 * 170)}px` }} /><span className="font-mono text-lg text-muted">{index + 1}</span></div>)}</div><p className="mt-4 text-center text-base text-muted">scored guesses · failures count as six · [0, 0, 45, 41, 8, 6]</p></Panel></div>
    <Callout tone="warning" className="mt-7">No tuning followed this result. The separate final-test corpus—<span className="font-mono">2,500</span> records—remains unopened.</Callout>
  </SlideFrame>
);

export default FinalHeldOutSlide;
