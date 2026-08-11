import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoroutineWorkerPoolSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Go concurrency"
      title="Fan out guesses; fan in one winner"
      subtitle="A bounded pool of goroutines shares the expensive scoring loop."
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1.4fr_0.6fr] items-center gap-7">
      <div className="min-w-0">
        <CodeBlock className="[&_pre]:px-5 [&_pre]:py-4 [&_pre]:text-[1.55rem] [&_pre]:leading-[1.2]" language="Go-shaped pseudocode">
{`jobs := fanOut(validGuesses)
workers := max(runtime.NumCPU()-1, 1)
results := make(chan Evaluation, workers)

for range workers {
    go func() {
        best := emptyEvaluation()
        for guess := range jobs {
            best = betterOf(best, evaluateGuess(guess))
        }
        results <- best
    }()
}

return bestOf(results, workers)`}
        </CodeBlock>
      </div>

      <div className="flex h-full flex-col justify-center gap-3">
        <Panel className="p-4" padding="none">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">01 · fan out</p>
          <p className="mt-2 text-xl font-bold text-text">One jobs channel</p>
          <p className="mt-1 text-base leading-relaxed text-muted">Streams candidate guesses to whichever worker is ready.</p>
        </Panel>
        <Panel className="border-accent/40 bg-accent/10 p-4" padding="none">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">02 · workers</p>
          <p className="mt-2 text-xl font-bold text-text"><span className="font-mono">NumCPU() − 1</span> goroutines</p>
          <p className="mt-1 text-base leading-relaxed text-muted">Lightweight concurrent functions, scheduled by Go; each keeps a local winner.</p>
        </Panel>
        <Panel className="border-primary/40 bg-primary/10 p-4" padding="none">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">03 · fan in</p>
          <p className="mt-2 text-xl font-bold text-text">Reduce the winners</p>
          <p className="mt-1 text-base leading-relaxed text-muted">Compare one local winner per worker to choose the final guess.</p>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default GoroutineWorkerPoolSlide;
