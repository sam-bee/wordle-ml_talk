import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SharedEncoderSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The contract"
      title="One board state, one encoder"
      subtitle="The Go game engine and the training reader speak the same small language."
    />
    <div className="mt-8 grid flex-1 grid-cols-[0.95fr_1.05fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Go input</p>
        <div className="mt-5 rounded-2xl border border-primary/30 bg-primary/10 p-5 font-mono text-xl text-text">
          <div>remaining solutions</div>
          <div className="mt-2 text-primary">289-byte bitset</div>
          <div className="mt-1 text-lg text-muted">2,309 bits · LSB-first</div>
          <div className="mt-5 border-t border-border pt-4 text-accent">turn: 0 … 5</div>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The bitset says which answer words still fit every colour clue. Empty sets and stray padding bits are rejected.
        </p>
      </Panel>
      <div className="flex flex-col items-center gap-5">
        <div className="rounded-full border-2 border-primary bg-primary/10 px-8 py-5 text-center text-xl font-bold text-text shadow-lg">
          wordleml/modelstate
          <span className="mt-1 block text-base font-normal text-muted">shared Go encoder</span>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          <Panel className="p-5 text-center"><p className="font-semibold text-text">training records</p><p className="mt-1 text-sm text-muted">synthetic examples</p></Panel>
          <Panel className="p-5 text-center"><p className="font-semibold text-text">live play</p><p className="mt-1 text-sm text-muted">authoritative game state</p></Panel>
        </div>
        <Callout className="w-full text-center" tone="accent">
          Fixed word IDs + normalized SHA-256 hashes make “word 17” verifiable.
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default SharedEncoderSlide;
