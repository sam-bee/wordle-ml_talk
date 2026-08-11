import React from 'react';

import WordleGuessGrid, { type WordleGuess } from '../components/WordleGuessGrid';

const GUESSES: WordleGuess[] = [
  {
    letters: 'PLANT',
    states: ['present', 'absent', 'correct', 'absent', 'absent'],
  },
  {
    letters: 'SHAPE',
    states: ['absent', 'absent', 'correct', 'correct', 'correct'],
  },
  {
    letters: 'GRAPE',
    states: ['correct', 'correct', 'correct', 'correct', 'correct'],
  },
];

const WordleOverviewSlide: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col px-8 py-7">
      <header>
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          The puzzle
        </p>
        <h2 className="mt-2 text-6xl font-bold tracking-tight text-text">
          Wordle recap
        </h2>
      </header>

      <div className="mt-8 grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-14">
        <section className="rounded-3xl border border-border bg-surface px-10 py-8 shadow-xl">
          <WordleGuessGrid guesses={GUESSES} />
          <p className="mt-6 text-center text-base text-muted">
            Each row is a valid five-letter guess.
          </p>
        </section>

        <section>
          <div className="flex items-start gap-5 border-b border-border pb-5">
            <span className="font-mono text-lg font-bold text-primary">01</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">Find the secret word</h3>
              <p className="mt-1 text-lg text-muted">You have six attempts.</p>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-5">
            <span className="font-mono text-lg font-bold text-primary">02</span>
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-text">Use the feedback</h3>
              <div className="mt-4 space-y-3 text-lg text-text">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded bg-emerald-600" aria-hidden="true" />
                  <span><strong>Green:</strong> right letter, right place</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded bg-amber-400" aria-hidden="true" />
                  <span><strong>Yellow:</strong> right letter, wrong place</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded bg-zinc-600" aria-hidden="true" />
                  <span><strong>Grey:</strong> letter is not in the word</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-7 rounded-xl border border-primary/30 bg-primary/10 px-5 py-4 text-lg font-medium text-text">
            Every result narrows the next decision.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WordleOverviewSlide;
