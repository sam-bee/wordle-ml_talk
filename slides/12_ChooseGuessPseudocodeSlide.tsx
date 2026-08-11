import React from 'react';

import { Callout, CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ChooseGuessPseudocodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="One-step minimax · outer loop"
      title="Choose the action with the smallest worst case"
      subtitle="Search every word that could be played, not just the shortlist"
    />

    <div className="mt-4 grid min-h-0 flex-1 grid-cols-[1.35fr_0.65fr] items-center gap-7">
      <div className="min-w-0">
        <CodeBlock className="[&_pre]:px-5 [&_pre]:py-4 [&_pre]:text-[1.7rem] [&_pre]:leading-[1.22]" language="Go-shaped pseudocode">
{`func chooseGuess(shortlist, unusedActions []Word) Word {
    var bestGuess Word
    bestWorst := len(shortlist) + 1

    for _, guess := range unusedActions {
        worst := worstCaseSize(guess, shortlist)
        if worst < bestWorst {
            bestGuess = guess
            bestWorst = worst
        }
    }
    return bestGuess
}`}
        </CodeBlock>
      </div>

      <div className="flex h-full flex-col justify-center gap-4">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Search space</p>
          <p className="mt-3 text-3xl font-bold text-text">up to 4,739</p>
          <p className="mt-2 text-lg leading-relaxed text-muted">unused actions, including probe words such as <span className="font-mono text-text">CHANT</span></p>
        </Panel>
        <Panel padding="compact">
          <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2 font-mono text-2xl">
            <span className="text-text">SCARE</span><span className="text-muted">4</span>
            <span className="font-bold text-accent">CHANT</span><span className="font-bold text-accent">1 ✓</span>
          </div>
          <p className="mt-4 border-t border-border pt-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted">One-step minimax</p>
          <p className="mt-1 text-xl font-semibold text-text">Minimise the maximum.</p>
        </Panel>
        <Callout className="px-5 py-4 text-lg" tone="accent">
          Ties: prefer a possible answer, otherwise stochastic (concurrency)
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default ChooseGuessPseudocodeSlide;
