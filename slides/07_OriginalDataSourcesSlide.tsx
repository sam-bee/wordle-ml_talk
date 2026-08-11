import React from 'react';

import subtlexusScreenshot from '../images/subtlexus-word-frequency-source.png';
import nytimesWordmark from '../images/nytimes-wordmark.png';
import { Panel, Reveal, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

interface OriginalDataSourcesSlideProps {
  step: number;
}

const OriginalDataSourcesSlide: React.FC<OriginalDataSourcesSlideProps> = ({ step }) => (
  <SlideFrame>
    <SlideHeader
      kicker="Original data sources"
      title="Two raw data sources"
      subtitle="Establishing a vocabulary of 5-letter words."
    />

    <div className="mt-7 grid min-h-0 flex-1 grid-cols-[1fr_1.3fr] gap-7">
      <Reveal className="h-full" visible={step >= 1}>
        <Panel className="flex h-full flex-col border-accent/40 bg-accent/5 p-6">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">Original source 1</p>
          <div className="mt-5 flex h-20 items-center rounded-2xl border border-border bg-white px-6">
            <img className="h-auto w-full max-w-[22rem]" src={nytimesWordmark} alt="The New York Times wordmark" />
          </div>
          <h3 className="mt-6 text-3xl font-bold text-text">New York Times Wordle</h3>
          <p className="mt-2 text-lg leading-relaxed text-muted">
            Allowed guesses and possible answers, taken from the NYT website
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-3xl font-bold text-primary">2,309</p>
              <p className="mt-1 text-base text-muted">possible solutions</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-3xl font-bold text-accent">12,947</p>
              <p className="mt-1 text-base text-muted">legal guesses</p>
            </div>
          </div>
        </Panel>
      </Reveal>

      <Reveal className="h-full" visible={step >= 2}>
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
              className="block h-56 w-full object-cover object-top"
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
      </Reveal>
    </div>
  </SlideFrame>
);

export default OriginalDataSourcesSlide;
