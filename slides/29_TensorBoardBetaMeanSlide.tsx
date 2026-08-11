import React from 'react';

import betaMeanImage from '../images/30-tensorboard-beta-mean.png';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardBetaMeanSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="TensorBoard · scalar"
      title="The candidate bonus becomes substantial"
      subtitle="Average beta across 2,500 validation positions: approximately 0 → +33.35."
    />
    <figure className="mt-6 flex min-h-0 flex-1 items-center overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
      <img
        alt="TensorBoard model beta mean graph rising from approximately zero to 33.35 over 10,000 updates."
        className="h-full w-full object-contain"
        src={betaMeanImage}
      />
    </figure>
  </SlideFrame>
);

export default TensorBoardBetaMeanSlide;
