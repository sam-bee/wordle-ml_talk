import React from 'react';

import { Panel, SlideFrame } from '../components/SlidePrimitives';

type Chapter = 'data' | 'training' | 'inference';

interface ActDividerSlideProps {
  number: '01' | '02' | '03';
  title: string;
  promise: string;
  active: Chapter;
}

const ROUTE: Array<{ key: Chapter; label: string; number: string }> = [
  { key: 'data', label: 'Data', number: '01' },
  { key: 'training', label: 'Training', number: '02' },
  { key: 'inference', label: 'Inference', number: '03' },
];

const ActDividerSlide: React.FC<ActDividerSlideProps> = ({ active, number, promise, title }) => (
  <SlideFrame className="justify-between">
    <div className="flex items-start justify-between gap-8">
      <p className="font-mono text-2xl font-bold tracking-[0.18em] text-primary">ACT {number}</p>
      <p className="max-w-md text-right text-lg leading-relaxed text-muted">Training a model to play Wordle, with Go every step of the way</p>
    </div>

    <div className="my-auto max-w-6xl">
      <p className="font-mono text-7xl font-bold leading-none tracking-tight text-primary/30 sm:text-9xl">{number}</p>
      <h2 className="mt-4 text-6xl font-bold leading-tight tracking-tight text-text sm:text-7xl">{title}</h2>
      <p className="mt-5 max-w-4xl text-2xl leading-relaxed text-muted">{promise}</p>
    </div>

    <div>
      <p className="mb-3 text-base font-semibold uppercase tracking-[0.22em] text-muted">The route</p>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
        {ROUTE.map((chapter, index) => {
          const isActive = chapter.key === active;
          return (
            <React.Fragment key={chapter.key}>
              <Panel
                className={`flex items-center gap-4 p-5 ${
                  isActive
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-surface/50 opacity-55'
                }`}
              >
                <span className={`font-mono text-lg font-bold ${isActive ? 'text-primary' : 'text-muted'}`}>{chapter.number}</span>
                <span className="text-2xl font-semibold text-text">{chapter.label}</span>
              </Panel>
              {index < ROUTE.length - 1 && <span className="text-3xl text-primary" aria-hidden="true">→</span>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  </SlideFrame>
);

export default ActDividerSlide;
