import React from 'react';

import { Callout, Panel, Reveal, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

interface WorkerPoolSlideProps { step: number; }

const WorkerPoolSlide: React.FC<WorkerPoolSlideProps> = ({ step }) => (
  <SlideFrame>
    <SlideHeader
      kicker="Go concurrency"
      title="Parallelise independent hidden answers"
      subtitle="The generator shares the feedback matrix, then gives each worker a different solution ID."
    />
    <div className="mt-8 grid flex-1 grid-cols-[0.9fr_1.1fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">one solution, one RNG stream</p>
        <p className="mt-5 font-mono text-xl leading-relaxed text-text">rand.New(rand.NewSource(<br />&nbsp;&nbsp;solutionSeed(config.Seed, solutionID)))</p>
        <p className="mt-5 text-lg leading-relaxed text-muted">Each hidden answer gets its own deterministic random stream, so worker count does not change its histories.</p>
        <Callout className="mt-6" tone="accent">Parallel generation; deterministic artifacts.</Callout>
      </Panel>
      <div className="space-y-4">
        <Reveal visible={step >= 0} preserveLayout>
          <div className="flex items-center gap-4">
            <div className="w-44 rounded-2xl border-2 border-primary bg-primary/10 px-4 py-4 text-center font-mono text-lg font-bold text-text">jobs<span className="mt-1 block whitespace-nowrap text-base text-primary">solution IDs</span></div>
            <div className="text-3xl text-primary">→</div>
            <div className="flex-1 rounded-2xl border border-border bg-surface p-4 text-center text-lg text-muted">channel</div>
          </div>
        </Reveal>
        <Reveal visible={step >= 1} preserveLayout>
          <div className="ml-20 grid grid-cols-3 gap-3">
            {[1, 2, 3].map(worker => <div key={worker} className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-center font-semibold text-text">worker {worker}<span className="mt-1 block text-sm font-normal text-muted">GenerateSolution</span></div>)}
          </div>
        </Reveal>
        <Reveal visible={step >= 2} preserveLayout>
          <div className="flex items-center gap-4">
            <div className="ml-20 text-3xl text-primary">↓</div>
            <div className="flex-1 rounded-2xl border-2 border-primary bg-primary/10 p-5 text-center text-lg font-semibold text-text">results → sort by solution ID → write corpus</div>
          </div>
        </Reveal>
      </div>
    </div>
  </SlideFrame>
);

export default WorkerPoolSlide;
