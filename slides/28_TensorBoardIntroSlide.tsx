import React from 'react';

import tensorBoardWebsiteImage from '../images/28-tensorboard-website.png';

const TensorBoardIntroSlide: React.FC = () => (
  <div className="flex h-[70vh] min-h-[560px] w-full max-w-[120rem] items-center justify-center overflow-hidden bg-canvas">
    <img
      alt="The TensorBoard overview page on the TensorFlow website, describing metrics, model graphs, histograms, embeddings, media, and profiling."
      className="h-full w-full object-contain"
      src={tensorBoardWebsiteImage}
    />
  </div>
);

export default TensorBoardIntroSlide;
