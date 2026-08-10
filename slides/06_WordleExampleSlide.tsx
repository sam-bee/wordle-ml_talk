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

interface WordleExampleSlideProps {
  visibleGuessCount: number;
}

const getRevealClasses = (isVisible: boolean) =>
  `transition-all duration-300 ${
    isVisible
      ? 'translate-y-0 opacity-100'
      : 'invisible translate-y-2 opacity-0'
  }`;

const WordleExampleSlide: React.FC<WordleExampleSlideProps> = ({ visibleGuessCount }) => {
  return (
    <div className="flex h-[70vh] flex-col px-8 py-7">
      <header>
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-primary">
          A worked game
        </p>
        <h2 className="mt-2 text-6xl font-bold tracking-tight text-text">
          Probe guesses give more information
        </h2>
      </header>

      <div className="mt-8 grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-14">
        <section className="rounded-3xl border border-border bg-surface px-10 py-8 shadow-xl">
          <WordleGuessGrid guesses={GUESSES} visibleGuessCount={visibleGuessCount} />
          <p className="mt-6 text-center text-base text-muted">
            {visibleGuessCount === GUESSES.length
              ? 'Solved in three of six attempts.'
              : `${visibleGuessCount} of 3 guesses revealed`}
          </p>
        </section>

        <section className="space-y-5">
          <div className={`${getRevealClasses(visibleGuessCount >= 1)} flex items-start gap-5 border-b border-border pb-5`}>
            <span className="font-mono text-lg font-bold text-primary">01</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">RAISE finds four letters</h3>
              <p className="mt-1 text-lg leading-relaxed text-muted">
                Five possibilities remain: SCARE, SHARE, SNARE, SPARE, and STARE.
              </p>
            </div>
          </div>

          <div
            aria-hidden={visibleGuessCount < 2}
            className={`${getRevealClasses(visibleGuessCount >= 2)} flex items-start gap-5 border-b border-border pb-5`}
          >
            <span className="font-mono text-lg font-bold text-primary">02</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">CHANT is a probe</h3>
              <p className="mt-1 text-lg leading-relaxed text-muted">
                Probe guess to test for C, H, N, T.
              </p>
            </div>
          </div>

          <div
            aria-hidden={visibleGuessCount < 3}
            className={`${getRevealClasses(visibleGuessCount >= 3)} flex items-start gap-5`}
          >
            <span className="font-mono text-lg font-bold text-primary">03</span>
            <div>
              <h3 className="text-2xl font-semibold text-text">SPARE solves it</h3>
              <p className="mt-1 text-lg text-muted">All five tiles turn green.</p>
            </div>
          </div>

          <p
            aria-hidden={visibleGuessCount < 3}
            className={`${getRevealClasses(visibleGuessCount >= 3)} rounded-xl border border-accent/30 bg-accent/10 px-5 py-4 text-lg font-medium text-text`}
          >
            A useful action need not be a possible solution.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WordleExampleSlide;
