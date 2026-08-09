import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const INPUTS = [
  ['CandidateMask', '[2309]', 'Which possible answers still fit?', 'primary'],
  ['CandidateStats', '[209]', 'Letter patterns in the remaining set', 'accent'],
  ['Turn', '[batch]', 'Guess number: 0 through 5', 'warning'],
  ['RemainingActionMask', '[4739]', 'Which actions are also remaining answers', 'primary'],
] as const;

const FourInputsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The state tensor"
      title="Four inputs, one decision"
      subtitle="Raw coloured tiles become shapes the policy can compare."
    />
    <div className="mt-8 grid flex-1 grid-cols-2 gap-5">
      {INPUTS.map(([name, shape, meaning, tone], index) => (
        <Panel key={name} className="flex items-start gap-5 p-6">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold ${tone === 'accent' ? 'bg-accent/20 text-accent' : tone === 'warning' ? 'bg-danger/20 text-danger' : 'bg-primary/20 text-primary'}`}>
            {index + 1}
          </div>
          <div className="min-w-0">
            <p className="font-mono text-xl font-bold text-text">{name}</p>
            <p className="mt-1 font-mono text-lg text-primary">{shape}</p>
            <p className="mt-3 text-lg leading-relaxed text-muted">{meaning}</p>
          </div>
        </Panel>
      ))}
    </div>
    <p className="mt-6 text-center text-xl font-medium text-text">The batch dimension can vary; the vocabulary dimensions do not.</p>
  </SlideFrame>
);

export default FourInputsSlide;
