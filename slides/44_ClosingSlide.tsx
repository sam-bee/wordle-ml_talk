import React from 'react';

import gocardlessSymbol from '../images/gocardless-symbol-primary.svg';
import speakerPortrait from '../images/sam-burns-gophercon-uk.webp';

const PROFILE_LINKS = [
  { href: 'https://sam-burns.com', label: 'sam-burns.com' },
  { href: 'https://github.com/sam-bee', label: 'github.com/sam-bee' },
  { href: 'https://x.com/samb_tech', label: 'x.com/samb_tech' },
];

const ClosingSlide: React.FC = () => (
  <div className="relative flex h-[70vh] items-center overflow-hidden rounded-[2rem] border border-border bg-surface px-16 py-14 shadow-2xl">
    <div
      aria-hidden="true"
      className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
    />

    <div className="relative z-10 grid w-full grid-cols-[minmax(0,1fr)_20rem] items-center gap-14">
      <div className="min-w-0">
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
          Thanks for
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            coming.
          </span>
        </h1>

        <div className="mt-12 border-t border-border pt-7">
          <p className="text-2xl font-semibold text-text">Sam Burns</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-2xl text-muted">
            {PROFILE_LINKS.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && <span aria-hidden="true" className="text-border">•</span>}
                <a
                  className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <aside className="relative pb-8" aria-label="Speaker">
        <div aria-hidden="true" className="absolute inset-4 rounded-[3rem] bg-primary/20 blur-2xl" />
        <img
          alt="Sam Burns"
          className="relative aspect-square w-full rounded-[2.5rem] border border-border object-cover shadow-2xl"
          src={speakerPortrait}
        />
        <div className="absolute -bottom-1 -left-6 flex items-center gap-4 rounded-2xl border border-border bg-surface/95 p-3 pr-5 shadow-xl backdrop-blur">
          <img
            alt="GoCardless logo"
            className="h-16 w-16 shrink-0 rounded-full"
            src={gocardlessSymbol}
          />
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">Employer</p>
            <p className="mt-1 text-xl font-bold text-text">GoCardless</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
);

export default ClosingSlide;
