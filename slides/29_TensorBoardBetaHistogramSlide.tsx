import React from 'react';

import betaHistogramImage from '../images/31-tensorboard-beta-histogram.png';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardBetaHistogramSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="TensorBoard · histogram"
      title="Beta depends on the Wordle position"
      subtitle="Every ridge is the distribution across 2,500 validation positions at one saved checkpoint."
    />

    <div className="mt-6 grid min-h-0 flex-1 grid-cols-[1.25fr_0.75fr] gap-7">
      <figure className="flex min-h-0 items-center justify-center overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
        <img
          alt="TensorBoard histogram showing the distribution of candidate bonus beta widening and moving positive during training."
          className="h-full w-full object-contain"
          src={betaHistogramImage}
        />
      </figure>

      <div className="flex flex-col justify-center gap-5">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="font-mono text-lg font-bold text-primary">Early</p>
          <p className="mt-2 text-2xl font-semibold text-text">Narrow and close to zero</p>
        </Panel>
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="font-mono text-lg font-bold text-accent">Later</p>
          <p className="mt-2 text-2xl font-semibold text-text">Mostly positive, and much broader</p>
        </Panel>
        <p className="border-l-4 border-primary pl-5 text-xl leading-relaxed text-muted">
          Different states learn different exploit-versus-probe nudges.
        </p>
      </div>
    </div>
  </SlideFrame>
);

export default TensorBoardBetaHistogramSlide;
