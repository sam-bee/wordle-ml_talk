import React from 'react';

import WordleGuessGrid, { type WordleGuess } from '../components/WordleGuessGrid';

const GUESSES: WordleGuess[] = [
  {
    letters: 'RAISE',
    states: ['present', 'present', 'absent', 'present', 'correct'],
  },
  {
    letters: 'CHANT',
    states: ['absent', 'absent', 'correct', 'absent', 'absent'],
  },
  {
    letters: 'SPARE',
    states: ['correct', 'correct', 'correct', 'correct', 'correct'],
  },
];

const WordleExampleSlide: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col px-8 py-7">
      <header>
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          A worked game
        </p>
        <h2 className="mt-2 text-6xl font-bold tracking-tight text-text">
          Not every guess is an answer
        </h2>
      </header>

      <div className="mt-8 grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-14">
        <section className="rounded-3xl border border-border bg-surface px-10 py-8 shadow-xl">
          <WordleGuessGrid guesses={GUESSES} />
          <p className="mt-6 text-center text-base text-muted">
            Solved in three of six attempts.
          </p>
        </section>

        <section className="space-y-5">
          <div className="flex items-start gap-5 border-b border-border pb-5">
            <span className="font-mono text-lg font-bold text-primary">01</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">RAISE finds four letters</h3>
              <p className="mt-1 text-lg text-muted">Only the final E is in place.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 border-b border-border pb-5">
            <span className="font-mono text-lg font-bold text-primary">02</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">CHANT is a probe</h3>
              <p className="mt-1 text-lg leading-relaxed text-muted">
                It cannot be the answer—but it tests four new letters.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <span className="font-mono text-lg font-bold text-primary">03</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">SPARE solves it</h3>
              <p className="mt-1 text-lg text-muted">All five tiles turn green.</p>
            </div>
          </div>

          <p className="rounded-xl border border-accent/30 bg-accent/10 px-5 py-4 text-lg font-medium text-text">
            A useful action need not be a possible solution.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WordleExampleSlide;
