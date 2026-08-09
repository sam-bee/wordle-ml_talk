import React from 'react';

export type WordleTileState = 'absent' | 'correct' | 'present';

export interface WordleGuess {
  letters: string;
  states: WordleTileState[];
}

interface WordleGuessGridProps {
  guesses: WordleGuess[];
  visibleGuessCount?: number;
}

const TILE_CLASSES: Record<WordleTileState, string> = {
  absent: 'border-zinc-600 bg-zinc-600 text-white',
  correct: 'border-emerald-600 bg-emerald-600 text-white',
  present: 'border-amber-400 bg-amber-400 text-slate-950',
};

const TILE_LABELS: Record<WordleTileState, string> = {
  absent: 'not in the word',
  correct: 'correct letter and position',
  present: 'in the word, but in another position',
};

const WordleGuessGrid: React.FC<WordleGuessGridProps> = ({
  guesses,
  visibleGuessCount = guesses.length,
}) => {
  return (
    <div aria-live="polite" className="space-y-3">
      {guesses.map((guess, guessIndex) => {
        const isVisible = guessIndex < visibleGuessCount;

        return (
          <div
            aria-hidden={!isVisible}
            className={`flex items-center gap-4 transition-all duration-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'invisible translate-y-2 opacity-0'
            }`}
            key={guess.letters}
          >
            <span className="w-6 text-right font-mono text-sm text-muted">
              {guessIndex + 1}
            </span>
            <div className="grid grid-cols-5 gap-3">
              {guess.letters.split('').map((letter, letterIndex) => {
                const state = guess.states[letterIndex];

                return (
                  <span
                    aria-label={`${letter}: ${TILE_LABELS[state]}`}
                    className={`flex h-16 w-16 items-center justify-center rounded-md border-2 text-3xl font-extrabold ${TILE_CLASSES[state]}`}
                    key={`${guess.letters}-${letterIndex}`}
                  >
                    {letter}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WordleGuessGrid;
