import React from 'react';

import trainTop1Image from '../images/29-tensorboard-train-top1.png';
import { SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TensorBoardTrainTop1Slide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="TensorBoard · scalar"
      title="The model learns to copy the teacher"
      subtitle="Training top-1 agreement: 0.7% → 76.7% over 10,000 updates."
    />
    <figure className="mt-6 flex min-h-0 flex-1 items-center overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
      <img
        alt="TensorBoard train top-one accuracy graph rising from almost zero to 0.7665 over 10,000 updates."
        className="h-full w-full object-contain"
        src={trainTop1Image}
      />
    </figure>
  </SlideFrame>
);

export default TensorBoardTrainTop1Slide;
