import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SyntheticExampleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Turning search into supervision"
      title="One incomplete game state becomes a teacher target"
      subtitle="The slow Go solver deliberates offline. Training later sees the state and learns to prefer its next move."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1fr_auto_1fr_auto_0.92fr] items-center gap-4">
      <Panel className="h-full p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">state</p>
        <p className="mt-5 font-mono text-2xl font-bold text-text">turn = 1</p>
        <div className="mt-5 rounded-2xl border border-border bg-elevated/60 p-4">
          <p className="font-mono text-lg text-text">RAISE → 🟨 🟨 ⬛ 🟨 🟩</p>
        </div>
        <p className="mt-6 text-lg font-semibold text-text">remaining answers: 5</p>
        <p className="mt-2 text-lg leading-relaxed text-muted">SCARE · SHARE · SNARE · SPARE · STARE</p>
      </Panel>

      <span className="text-4xl text-primary" aria-hidden="true">→</span>

      <Panel className="flex h-full flex-col justify-center border-primary/40 bg-primary/5 p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">offline Go teacher</p>
        <p className="mt-5 text-3xl font-bold leading-tight text-text">Search every unused action</p>
        <p className="mt-4 text-lg leading-relaxed text-muted">Score each word by the worst feedback bucket it can leave behind.</p>
        <p className="mt-6 font-mono text-xl text-primary">state → ranked next actions</p>
      </Panel>

      <span className="text-4xl text-primary" aria-hidden="true">→</span>

      <Panel className="flex h-full flex-col justify-center border-accent/40 bg-accent/10 p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">training target</p>
        <p className="mt-5 text-3xl font-bold leading-tight text-text">Teacher’s preferred next action</p>
        <p className="mt-4 text-lg leading-relaxed text-muted">The top choice is the supervised label. The remaining ranked choices help us inspect agreement later.</p>
      </Panel>
    </div>
    <Callout tone="accent" className="mt-6 text-center">Generate incomplete states at several depths; pay search once, then train on the frozen examples many times.</Callout>
  </SlideFrame>
);

export default SyntheticExampleSlide;
