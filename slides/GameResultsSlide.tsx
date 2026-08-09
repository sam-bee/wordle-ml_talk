import React from 'react';

import { Callout, MetricCard, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GameResultsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Play the game" title="The same 100 games, before and after" subtitle="The best full checkpoint is compared with the full run’s immutable initial checkpoint." />
    <div className="mt-10 grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-7">
      <MetricCard label="initial checkpoint" value="4 / 100" detail="wins · mean 5.86 guesses" />
      <div className="text-center"><p className="font-mono text-5xl font-bold text-accent">→</p><p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted">same population</p></div>
      <MetricCard label="best checkpoint" value="97 / 100" detail="wins · mean 3.65 guesses" className="border-primary/50" />
    </div>
    <Callout className="mt-8" tone="accent">Bounded validation proof: the model got dramatically better at this fixed population. The final-test split stayed sealed.</Callout>
  </SlideFrame>
);

export default GameResultsSlide;
