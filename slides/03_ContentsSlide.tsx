import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CHAPTERS = [
  {
    number: '01',
    title: 'Data',
    route: ['Get wordlists', 'Build Wordle player in Go', 'Generate data for training model'],
    detail: 'Build a Go programme to play Wordle and generate examples.',
  },
  {
    number: '02',
    title: 'Training',
    route: ['Neural net', 'Backpropagation', 'Use GoMLX library'],
    detail: 'Turn those examples into a model that can choose a word.',
  },
  {
    number: '03',
    title: 'Inference',
    route: ['Export weights', 'Run inference in CUDA', 'Go service → Cgo → CUDA'],
    detail: 'Peel back the framework and follow one real GPU request.',
  },
] as const;

const ContentsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="A story in 3 acts"
      title="Contents"
      subtitle="We will build one system from data processing, training, and model inference, using Go at each step."
    />
    <div className="mt-9 grid flex-1 grid-cols-3 gap-5">
      {CHAPTERS.map(chapter => (
        <Panel key={chapter.number} className="flex min-w-0 flex-col border-primary/30 bg-primary/5 p-7">
          <p className="font-mono text-xl font-bold text-primary">{chapter.number}</p>
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
