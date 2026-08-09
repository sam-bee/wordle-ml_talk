import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const LiveDemoSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader kicker="Demo" title="Let’s play a complete game" subtitle="Choose one of the 100 fixed validation solutions." />
    <div className="mt-10 grid flex-1 grid-cols-2 gap-10 items-center">
      <Panel className="border-primary/40"><p className="text-lg uppercase tracking-[0.2em] text-muted">Open locally</p><p className="mt-4 font-mono text-4xl font-bold text-primary">127.0.0.1:8082</p><p className="mt-6 text-xl leading-relaxed text-text">Select a solution and watch each guess, feedback pattern, and shortlist transition appear.</p></Panel>
      <div className="space-y-5"><Callout>make monitoring</Callout><Callout tone="accent">Browser has no GPU access.</Callout><p className="text-lg leading-relaxed text-muted">The web server proxies one same-origin request; Go returns the finished trajectory and the browser animates it.</p></div>
    </div>
  </SlideFrame>
);

export default LiveDemoSlide;
