import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const FinalApplicationSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader kicker="Back to the application" title="It still feels like a Go program" subtitle="The CUDA boundary is narrow enough to inspect, verify, and explain." />
    <div className="mt-8 grid flex-1 grid-cols-[1.15fr_0.85fr] gap-9 items-center">
      <Panel className="border-primary/40"><p className="text-xl font-bold text-primary">Run the direct demo</p><pre className="mt-5 overflow-hidden rounded-xl bg-elevated/70 p-5 font-mono text-base leading-relaxed text-text"><code>{'make cuda-cgo-demo \\\n  MODEL_DIR=runs/seed-replication-20260809-132505Z/exports/cuda-f32-v1/best'}</code></pre><p className="mt-5 text-xl text-text">Open <span className="font-mono text-primary">127.0.0.1:8083</span>. The browser shows the backend, model, checkpoint, and GPU identity.</p></Panel>
      <div className="space-y-5"><Callout>Go is the control plane.</Callout><Callout tone="accent">CUDA is the numerical data plane.</Callout><Callout tone="primary">A verifiable boundary beats a magical dependency.</Callout></div>
    </div>
    <p className="mt-6 text-center text-2xl font-semibold text-muted">One application. One model handle. One synchronous inference call.</p>
  </SlideFrame>
);

export default FinalApplicationSlide;
