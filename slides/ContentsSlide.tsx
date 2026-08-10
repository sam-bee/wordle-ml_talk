import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const STAGES = [
  ['01', 'Wordle', 'A state, a guess, and feedback'],
  ['02', 'Go teacher', 'Search for a useful next action'],
  ['03', 'Synthetic data', 'Turn the teacher into examples'],
  ['04', 'Model', 'A compact policy over whole words'],
  ['05', 'GoMLX training', 'Backpropagation on the GPU'],
  ['06', 'cgo / CUDA', 'Make the inference boundary explicit'],
  ['07', 'Application', 'Return to a working Go web app'],
] as const;

const ContentsSlide: React.FC = () => {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="One engineering journey"
        title="Contents"
        subtitle="Start with a word game; finish with an attributable GPU-backed service."
      />
      <div className="mt-10 flex flex-1 items-stretch gap-3">
        {STAGES.map(([number, title, detail], index) => (
          <React.Fragment key={number}>
            <Panel className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
              <p className="font-mono text-lg font-bold text-primary">{number}</p>
              <h3 className="mt-5 text-2xl font-bold leading-tight text-text">{title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{detail}</p>
            </Panel>
            {index < STAGES.length - 1 && <div className="flex items-center justify-center text-3xl text-primary" aria-hidden="true">→</div>}
          </React.Fragment>
        ))}
      </div>
      <Callout className="mt-7 text-center">One route through the talk: <strong>teach → compress → train → cross the boundary → serve.</strong></Callout>
    </SlideFrame>
  );
};

export default ContentsSlide;
