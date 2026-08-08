import React from 'react';

const TitleSlide: React.FC = () => {
  return (
    <div className="relative flex h-[70vh] items-center overflow-hidden rounded-[2rem] border border-border bg-surface px-16 py-14 shadow-2xl">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl">
        <div className="mb-10 flex items-center gap-4" aria-hidden="true">
          <span className="rounded-lg bg-primary px-4 py-3 font-mono text-xl font-bold text-slate-950">
            Go
          </span>
          <span className="font-mono text-2xl text-muted">→</span>
          <span className="rounded-lg border border-accent/50 bg-accent/15 px-4 py-3 font-mono text-xl font-bold text-text">
            GPU
          </span>
        </div>

        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-primary">
          From Go to the GPU
        </p>
        <h1 className="mt-5 text-7xl font-extrabold leading-[1.02] tracking-tight text-text">
          Integrating with
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CUDA
          </span>
        </h1>

        <div className="mt-12 flex items-center gap-5 border-t border-border pt-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-elevated font-mono text-xl font-bold text-primary">
            SB
          </div>
          <div>
            <p className="text-2xl font-semibold text-text">Sam Burns</p>
            <p className="mt-1 font-mono text-base text-muted">github.com/sam-bee</p>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-12 right-14 grid grid-cols-5 gap-2 opacity-60"
      >
        {['G', 'P', 'U', '▴', '▴'].map((character, index) => (
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-md border font-mono text-lg font-bold ${
              index < 3
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'border-border bg-elevated text-muted'
            }`}
            key={`${character}-${index}`}
          >
            {character}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TitleSlide;
