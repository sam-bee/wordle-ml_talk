import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TERMS = [
  {
    number: '01',
    term: 'Shortlist',
    definition: 'the remaining possible solutions at a point in the game',
    tone: 'border-primary/40 bg-primary/10',
    accent: 'text-primary',
  },
  {
    number: '02',
    term: 'Feedback',
    definition: 'the green, yellow, and grey tiles returned by a guess',
    tone: 'border-accent/40 bg-accent/10',
    accent: 'text-accent',
  },
  {
    number: '03',
    term: 'Worst-case feedback',
    definition: 'the feedback pattern that leaves the largest carry-over shortlist',
    tone: 'border-danger/40 bg-danger/10',
    accent: 'text-danger',
  },
] as const;

const StrategyGoWordleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The teacher’s vocabulary"
      title="Strategy for the Go Wordle Player"
      subtitle="Three terms are enough to describe how the slow teacher chooses a useful next guess."
    />

    <ul className="mt-9 grid flex-1 grid-cols-3 gap-6" aria-label="Wordle strategy terms">
      {TERMS.map(({ accent, definition, number, term, tone }) => (
        <li key={term} className="list-none">
          <Panel className={`flex h-full flex-col ${tone}`}>
            <div className="flex items-center justify-between">
              <span className={`font-mono text-2xl font-bold ${accent}`}>{number}</span>
              <span className={`h-3 w-3 rounded-full bg-current ${accent}`} aria-hidden="true" />
            </div>
            <h3 className="mt-10 text-3xl font-bold text-text">{term}</h3>
            <p className="mt-5 text-xl leading-relaxed text-muted">{definition}</p>
          </Panel>
        </li>
      ))}
    </ul>

    <p className="mt-7 text-center text-xl text-muted">
      The teacher tries every unused action, then protects against the feedback that leaves the most work behind.
    </p>
  </SlideFrame>
);

export default StrategyGoWordleSlide;
