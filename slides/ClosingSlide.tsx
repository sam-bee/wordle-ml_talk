import React from 'react';
import { Callout, SlideFrame } from '@/components/SlidePrimitives';

const ClosingSlide: React.FC = () => (
  <SlideFrame variant="surface" className="items-center justify-center text-center">
    <p className="text-base font-semibold uppercase tracking-[0.3em] text-primary">From Go to the GPU</p>
    <h2 className="mt-5 text-6xl font-bold tracking-tight text-text">Go owns the system.<br /><span className="text-accent">The GPU owns dense math.</span></h2>
    <Callout className="mt-10 max-w-3xl">A narrow, verifiable boundary turns a hard-to-explain ML system into ordinary engineering decisions.</Callout>
    <p className="mt-12 text-3xl font-semibold text-text">Questions?</p>
    <p className="mt-4 text-lg text-muted">Sam Burns · github.com/sam-bee · X @samb_tech</p>
  </SlideFrame>
);

export default ClosingSlide;
