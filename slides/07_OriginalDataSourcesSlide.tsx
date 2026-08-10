import React from 'react';

import subtlexusScreenshot from '../images/subtlexus-word-frequency-source.png';
import nytimesWordmark from '../images/nytimes-wordmark.png';
import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const OriginalDataSourcesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Original data sources"
      title="Two sources shape the action vocabulary"
      subtitle="Before training, we had to decide which five-letter words the Go player could see."
    />

    <div className="mt-7 grid flex-1 grid-cols-[1fr_1.3fr] gap-7">
      <Panel className="flex h-full flex-col border-accent/40 bg-accent/5 p-6">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">Original source 1</p>
        <div className="mt-5 flex h-20 items-center rounded-2xl border border-border bg-white px-6">
          <img className="h-auto w-full max-w-[22rem]" src={nytimesWordmark} alt="The New York Times wordmark" />
        </div>
        <h3 className="mt-6 text-3xl font-bold text-text">New York Times Wordle</h3>
        <p className="mt-2 text-lg leading-relaxed text-muted">
          A browser-JavaScript snapshot supplied the historic Wordle lists that anchor the game vocabulary.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="font-mono text-3xl font-bold text-primary">2,309</p>
            <p className="mt-1 text-base text-muted">possible solutions</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-4">
            <p className="font-mono text-3xl font-bold text-accent">12,947</p>
            <p className="mt-1 text-base text-muted">historic accepted guesses</p>
          </div>
        </div>
        <p className="mt-auto pt-5 text-base leading-relaxed text-muted">
          The project’s fixed policy vocabulary keeps every solution and adds only selected probe words.
        </p>
      </Panel>

      <Panel className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">Original source 2</p>
            <h3 className="mt-2 text-3xl font-bold text-text">SUBTLEX-US</h3>
            <p className="mt-1 text-lg text-muted">Word frequency for American English</p>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-sm text-primary">51M-word corpus</span>
        </div>
        <figure className="mt-5 overflow-hidden rounded-2xl border border-border bg-white">
          <img
            className="block h-auto w-full"
            src={subtlexusScreenshot}
            alt="SUBTLEXus word frequency American English page from Ghent University"
          />
          <figcaption className="border-t border-slate-200 px-4 py-2 text-sm text-slate-600">
            Ghent University · Department of Experimental Psychology
          </figcaption>
        </figure>
        <p className="mt-auto pt-4 text-lg leading-relaxed text-muted">
          Used to rank spoken-language probe words: <strong className="text-text">2,430 additions</strong> beyond the answer list.
        </p>
      </Panel>
    </div>

    <Callout className="mt-6" tone="accent">
      These are the original data sources—not training examples. The Go pipeline turns them into a reproducible, fixed action vocabulary.
    </Callout>
  </SlideFrame>
);

export default OriginalDataSourcesSlide;
