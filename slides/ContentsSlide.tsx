import React from 'react';

const ContentsSlide: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col px-8 py-10">
      <h2 className="text-6xl font-bold tracking-tight text-text">Contents</h2>

      <div className="mt-16 flex items-center gap-8 border-t border-border py-7">
        <span className="font-mono text-xl font-bold text-primary">01</span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">
            The puzzle
          </p>
          <p className="mt-2 text-3xl font-semibold text-text">Wordle: rules and strategy</p>
        </div>
      </div>
    </div>
  );
};

export default ContentsSlide;
