import React from 'react';

import tensorBoardWebsiteImage from '../images/28-tensorboard-website.png';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardIntroSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training visibility"
      title="TensorBoard: the training dashboard"
      subtitle="A browser dashboard for the measurements recorded during model training."
    />

    <figure className="mt-6 flex min-h-0 flex-1 items-center overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
      <img
        alt="The TensorBoard overview page on the TensorFlow website, describing metrics, model graphs, histograms, embeddings, media, and profiling."
        className="h-full w-full object-contain"
        src={tensorBoardWebsiteImage}
      />
    </figure>
  </SlideFrame>
);

export default TensorBoardIntroSlide;
