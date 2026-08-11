import React from 'react';

import { Callout, CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ScoreGuessPseudocodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Go pseudocode · inner loop"
      title="Score a guess by the shortlist in the worst case"
      subtitle="Consider the worst case feedback for a given guess, and the shortlist carry-over that results"
    />

    <div className="mt-6 grid min-h-0 flex-1 grid-cols-[1.35fr_0.65fr] items-center gap-7">
      <div className="min-w-0">
        <CodeBlock className="[&_pre]:p-5 [&_pre]:text-[1.7rem] [&_pre]:leading-[1.22]" language="Go-shaped pseudocode">
{`func worstCaseSize(guess Word, shortlist []Word) int {
    buckets := map[string]int{}
    worst := 0

    for _, solution := range shortlist {
        pattern := feedbackFor(solution, guess).String()
        buckets[pattern]++
        worst = max(worst, buckets[pattern])
    }
    return worst
}`}
        </CodeBlock>
      </div>

      <div className="flex h-full flex-col justify-center gap-4">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="font-mono text-3xl font-bold text-text">SCARE</p>
          <p className="mt-3 font-mono text-xl text-muted">buckets: 4 + 1</p>
          <p className="mt-2 text-2xl font-bold text-primary">worst = 4</p>
        </Panel>
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="font-mono text-3xl font-bold text-text">CHANT</p>
          <p className="mt-3 font-mono text-xl text-muted">buckets: 1 + 1 + 1 + 1 + 1</p>
          <p className="mt-2 text-2xl font-bold text-accent">worst = 1</p>
        </Panel>
        <Callout className="px-5 py-4 text-lg" tone="primary">
          The largest worst-case shortlist is the <strong>least helpful valid clue</strong>.
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default ScoreGuessPseudocodeSlide;
