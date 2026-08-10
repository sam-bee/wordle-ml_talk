import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CHAPTERS = [
  {
    number: '01',
    title: 'Data',
    route: ['Wordle state', 'Go teacher', 'Synthetic examples'],
    detail: 'Make a slow, deliberate solver explain its next move.',
  },
  {
    number: '02',
    title: 'Training',
    route: ['Compact policy', 'Backpropagation', 'GoMLX on CUDA'],
    detail: 'Turn those examples into a model that can choose a word.',
  },
  {
    number: '03',
    title: 'Inference',
    route: ['Export weights', 'cgo + CUDA', 'Profile and serve'],
    detail: 'Peel back the framework and follow one real GPU request.',
  },
] as const;

const ContentsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="One linear route"
      title="Contents"
      subtitle="We will build one system from a Wordle decision to a CUDA-backed Go application."
    />
    <div className="mt-9 grid flex-1 grid-cols-3 gap-5">
      {CHAPTERS.map(chapter => (
        <Panel key={chapter.number} className="flex min-w-0 flex-col border-primary/30 bg-primary/5 p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-xl font-bold text-primary">{chapter.number}</p>
            <p className="text-lg font-semibold text-muted">chapter</p>
          </div>
          <h3 className="mt-7 text-4xl font-bold tracking-tight text-text">{chapter.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{chapter.detail}</p>
          <ol className="mt-auto space-y-3 pt-8">
            {chapter.route.map((stage, index) => (
              <li key={stage} className="flex items-center gap-3 text-lg text-text">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 font-mono text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <span>{stage}</span>
              </li>
            ))}
          </ol>
        </Panel>
      ))}
    </div>
  </SlideFrame>
);

export default ContentsSlide;
