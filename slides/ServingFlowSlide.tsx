import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const Box: React.FC<{ children: React.ReactNode; tone?: string }> = ({ children, tone = 'border-border' }) => <div className={`rounded-2xl border ${tone} bg-surface px-5 py-4 text-center text-lg font-semibold text-text`}>{children}</div>;

const ServingFlowSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Live request" title="One click, one complete trajectory" subtitle="The browser receives JSON only after Go has finished the game." />
    <div className="mt-10 grid grid-cols-7 items-center gap-3 text-muted">
      <Box tone="border-primary/40">Browser<br /><span className="font-mono text-sm">:8082</span></Box><span className="text-3xl">→</span>
      <Box>same-origin<br />Go web proxy</Box><span className="text-3xl">→</span>
      <Box tone="border-accent/40">private Go<br />inference :8090</Box><span className="text-3xl">→</span>
      <Box>engine +<br />encoder</Box>
    </div>
    <div className="my-7 flex items-center justify-center gap-4 text-3xl text-muted"><span>↘</span><span className="rounded-2xl border border-accent/40 bg-accent/10 px-7 py-4 text-xl font-bold text-text">up to six GoMLX / CUDA forwards</span><span>↗</span></div>
    <div className="grid grid-cols-3 items-center gap-4"><Box>legal mask<br />+ selected guess</Box><span className="text-center text-3xl text-muted">→</span><Box tone="border-primary/40">complete JSON<br />→ local animation</Box></div>
    <Callout tone="accent" className="mt-auto">Feedback and shortlist sizes are computed on the host, then rendered turn-by-turn in the browser.</Callout>
  </SlideFrame>
);

export default ServingFlowSlide;
