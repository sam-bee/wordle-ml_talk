import React from 'react';

import WordleGuessGrid, { type WordleGuess } from '../components/WordleGuessGrid';
import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const SHORTLIST = ['SCARE', 'SHARE', 'SNARE', 'SPARE', 'STARE'];

const FIRST_GUESS: WordleGuess = {
  letters: 'RAISE',
  states: ['present', 'present', 'absent', 'present', 'correct'],
};

interface DiagonalArrowProps {
  className: string;
}

const DiagonalArrow: React.FC<DiagonalArrowProps> = ({ className }) => (
  <svg aria-hidden="true" className={`h-14 w-14 ${className}`} fill="none" viewBox="0 0 64 64">
    <path d="M10 10 54 54M30 54h24V30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
  </svg>
);

const WorstCaseFeedbackSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="One shortlist, two actions"
      title="Protect against the feedback that carries the most words over"
      subtitle="After RAISE, five solutions remain. The next guess changes how much of that shortlist survives."
    />

    <div className="mt-7 grid flex-1 grid-cols-[0.78fr_1.22fr] items-center gap-8">
      <Panel className="flex h-full flex-col p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">Current shortlist</p>
        <div className="mt-5">
          <WordleGuessGrid guesses={[FIRST_GUESS]} />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3">
          {SHORTLIST.map(word => (
            <div key={word} className="rounded-2xl border border-border bg-elevated/60 px-5 py-3 font-mono text-2xl font-bold tracking-[0.12em] text-text">
              {word}
            </div>
          ))}
        </div>
        <Callout className="mt-auto" tone="primary">
          <strong>5 possible solutions</strong> remain.
        </Callout>
      </Panel>

      <div className="space-y-5">
        <div className="grid grid-cols-[auto_1fr_1.35fr] items-center gap-4">
          <DiagonalArrow className="text-primary" />
          <Panel className="border-primary/40 bg-primary/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">candidate guess</p>
            <p className="mt-3 font-mono text-4xl font-bold tracking-tight text-text">SCARE</p>
          </Panel>
          <Panel className="p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">worst-case feedback</p>
            <p className="mt-3 font-mono text-3xl font-bold tracking-[0.12em] text-text"><span className="text-emerald-400">G</span><span className="text-zinc-500">-</span><span className="text-emerald-400">GGG</span></p>
            <p className="mt-2 text-lg leading-relaxed text-muted">4 of 5 carry over → <strong className="text-primary">80%</strong></p>
          </Panel>
        </div>

        <div className="grid grid-cols-[auto_1fr_1.35fr] items-center gap-4">
          <DiagonalArrow className="text-accent" />
          <Panel className="border-accent/40 bg-accent/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">candidate guess</p>
            <p className="mt-3 font-mono text-4xl font-bold tracking-tight text-text">CHANT</p>
          </Panel>
          <Panel className="p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">worst-case feedback</p>
            <p className="mt-3 text-2xl font-bold text-text">tie between 5</p>
            <p className="mt-2 text-lg leading-relaxed text-muted">1 of 5 carries over → <strong className="text-accent">20%</strong></p>
          </Panel>
        </div>
      </div>
    </div>

    <p className="mt-6 text-center text-xl font-medium text-text">
      The teacher prefers the guess with the smaller worst-case carry-over: <span className="font-mono text-primary">CHANT</span>.
    </p>
  </SlideFrame>
);

export default WorstCaseFeedbackSlide;
