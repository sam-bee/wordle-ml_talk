import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SECTIONS = [
  ['01', 'The puzzle', 'Rules, feedback, and probe guesses'],
  ['02', 'Data in Go', 'Vocabulary, provenance, and split discipline'],
  ['03', 'Model on CUDA', 'GPU foothold, encoding, and policy design'],
  ['04', 'Prove it learns', 'Training gates, results, and caveats'],
  ['05', 'Serve the result', 'Host/device boundary, demo, and next work'],
] as const;

const ContentsSlide: React.FC = () => {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="One engineering journey"
        title="Contents"
        subtitle="Start with a word game; finish with an attributable GPU-backed service."
      />
      <div className="mt-12 grid flex-1 grid-cols-5 gap-5">
        {SECTIONS.map(([number, title, detail]) => (
          <Panel className="flex flex-col" key={number}>
            <p className="font-mono text-xl font-bold text-primary">{number}</p>
            <h3 className="mt-7 text-3xl font-bold leading-tight text-text">{title}</h3>
            <p className="mt-4 text-xl leading-relaxed text-muted">{detail}</p>
          </Panel>
        ))}
      </div>
    </SlideFrame>
  );
};

export default ContentsSlide;
