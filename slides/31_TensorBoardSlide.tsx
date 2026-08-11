import React from 'react';

import validationLossImage from '../images/31-tensorboard-validation-loss.png';
import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training telemetry"
      title="Choose the checkpoint, not the last update"
      subtitle="The real TensorBoard trace from the 10,000-update seed-replication run."
    />

    <div className="mt-7 grid flex-1 grid-cols-[1.45fr_0.85fr] gap-7">
      <figure className="flex min-h-0 items-center justify-center overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
        <img
          alt="TensorBoard validation loss graph falling to its minimum around update 2,600, then rising through update 10,000."
          className="h-full w-full object-contain"
          src={validationLossImage}
        />
      </figure>

      <div className="flex flex-col gap-4">
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-accent">model selection</p>
          <p className="mt-3 text-2xl font-bold text-text">Best checkpoint: update 2,600</p>
          <p className="mt-2 text-lg leading-relaxed text-muted">Lowest recorded validation loss: <span className="font-mono text-text">3.1842</span></p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-primary">why not the final weights?</p>
          <p className="mt-3 text-lg leading-relaxed text-text">Training kept running to update 10,000, while validation loss rose to <span className="font-mono">4.6436</span>.</p>
        </Panel>
        <Callout className="mt-auto text-lg" tone="warning">
          A validation minimum followed by a rise while training continues is clear overfitting. Take the best one, not the last one.
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default TensorBoardSlide;
