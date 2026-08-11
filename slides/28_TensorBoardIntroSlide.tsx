import React from 'react';

import tensorBoardWebsiteImage from '../images/28-tensorboard-website.png';
import { SlideFrame } from '../components/SlidePrimitives';

const TensorBoardIntroSlide: React.FC = () => (
  <SlideFrame>
    <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_0.65fr] gap-9">
      <figure className="min-h-0 overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
        <img
          alt="The TensorBoard overview page on the TensorFlow website, describing metrics, model graphs, histograms, embeddings, media, and profiling."
          className="h-full w-full object-cover"
          src={tensorBoardWebsiteImage}
        />
      </figure>

      <div className="flex min-w-0 flex-col justify-center">
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          Monitoring training
        </p>
        <h2 className="mt-5 text-6xl font-bold leading-tight tracking-tight text-text">
          TensorBoard
        </h2>
        <p className="mt-5 text-2xl leading-relaxed text-muted">
          Google’s visualisation toolkit for machine-learning experiments.
        </p>

        <div className="mt-10 space-y-5 border-l-4 border-[#ff8a00] pl-6">
          <p className="text-2xl font-semibold text-text">Track metrics</p>
          <p className="text-2xl font-semibold text-text">Inspect distributions</p>
          <p className="text-2xl font-semibold text-text">Compare runs</p>
        </div>
      </div>
    </div>
  </SlideFrame>
);

export default TensorBoardIntroSlide;
