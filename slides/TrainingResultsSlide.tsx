import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TrainingResultsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Results" title="The proof worked; more training barely changed the game" subtitle="All gameplay numbers here are validation-only, on the fixed 100-game validation population." />
    <div className="mt-8 grid flex-1 grid-cols-[1.1fr_0.9fr] gap-8">
      <Panel className="flex flex-col justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Initial proof · best full checkpoint</p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <MetricCard label="games solved" value="4 / 100 → 97 / 100" detail="initial → best" />
            <MetricCard label="mean guesses" value="5.86 → 3.65" detail="initial → best" />
          </div>
          <div className="mt-5 rounded-2xl border border-border bg-elevated/40 px-6 py-5 text-xl text-text">
            Validation loss <span className="font-mono text-primary">8.3005 → 3.1633</span>
            <span className="mx-3 text-muted">·</span>
            top-1 <span className="font-mono text-primary">0.0056 → 0.5008</span>
          </div>
        </div>
        <p className="mt-6 text-lg text-muted">A clear bounded proof that the learned policy improved on this fixed validation population.</p>
      </Panel>

      <Panel className="flex flex-col justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Production continuation</p>
          <p className="mt-4 text-lg text-muted">10,000-update run · best selected at update 2,200</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <MetricCard label="validation loss" value="3.1341" detail="top-1 0.510" />
            <MetricCard label="gameplay" value="97 / 100" detail="mean 3.68 guesses" />
          </div>
        </div>
        <Callout className="mt-7" tone="accent">Better validation metrics did not improve gameplay: solved fraction stayed 97/100 and mean guesses rose slightly from 3.65 to 3.68.</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default TrainingResultsSlide;
