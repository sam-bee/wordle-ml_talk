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
  <svg aria-hidden="true" className={`shrink-0 ${className}`} fill="none" viewBox="0 0 64 64">
    <path d="M10 10 54 54M30 54h24V30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
  </svg>
);

const WorstCaseFeedbackSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Minimaxing the shortlist"
      title="Minimise the worst-case carry-over"
      subtitle="After RAISE, five solutions remain. Let's consider a couple of possible moves."
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[0.72fr_1.28fr] items-center gap-7">
      <Panel className="flex h-full flex-col p-5">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">Current shortlist</p>
        <div className="mt-3">
          <WordleGuessGrid guesses={[FIRST_GUESS]} />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {SHORTLIST.map(word => (
            <div key={word} className="rounded-xl border border-border bg-elevated/60 px-3 py-2 text-center font-mono text-xl font-bold tracking-[0.08em] text-text">
              {word}
            </div>
          ))}
        </div>
        <Callout className="mt-auto px-4 py-3 text-lg" tone="primary">
          <strong>5 possible solutions</strong> remain.
        </Callout>
      </Panel>

      <div className="space-y-4">
        <div className="grid grid-cols-[auto_0.9fr_1.35fr] items-center gap-4">
          <DiagonalArrow className="h-12 w-12 text-primary" />
          <Panel className="border-primary/40 bg-primary/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">candidate guess</p>
            <p className="mt-2 font-mono text-3xl font-bold tracking-tight text-text">SCARE</p>
          </Panel>
          <Panel className="p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">worst-case feedback</p>
            <p className="mt-2 font-mono text-2xl font-bold tracking-[0.12em] text-text"><span className="text-emerald-400">G</span><span className="text-zinc-500">-</span><span className="text-emerald-400">GGG</span></p>
            <p className="mt-1 text-lg leading-relaxed text-muted">4 of 5 carry over → <strong className="text-primary">80%</strong></p>
          </Panel>
        </div>

        <div className="grid grid-cols-[auto_0.9fr_1.35fr] items-center gap-4">
          <DiagonalArrow className="h-12 w-12 text-accent" />
          <Panel className="border-accent/40 bg-accent/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">candidate guess</p>
            <p className="mt-2 font-mono text-3xl font-bold tracking-tight text-text">CHANT</p>
          </Panel>
          <Panel className="p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">worst-case feedback</p>
            <p className="mt-2 text-2xl font-bold text-text">5 patterns tie at 1 word</p>
            <p className="mt-1 text-lg leading-relaxed text-muted">1 of 5 carries over → <strong className="text-accent">20%</strong></p>
          </Panel>
        </div>
      </div>
    </div>

    <p className="mt-4 text-center text-xl font-medium text-text">
      The teacher prefers the guess with the smaller worst-case carry-over: <span className="font-mono text-primary">CHANT</span>.
    </p>
  </SlideFrame>
);

export default WorstCaseFeedbackSlide;
