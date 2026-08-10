import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const VocabularySlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Choose the words the model can play"
      title="The game’s dictionary is not the model’s action space"
      subtitle="A Wordle answer and a useful information-gathering guess are different things."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1fr_auto_1.12fr] items-center gap-5">
      <Panel className="flex h-full flex-col p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">NYT browser JavaScript snapshot</p>
        <div className="mt-7 space-y-6">
          <div>
            <p className="font-mono text-5xl font-bold text-primary">2,309</p>
            <p className="mt-2 text-xl font-semibold text-text">possible solutions</p>
            <p className="mt-1 text-lg leading-relaxed text-muted">Every one must remain a possible model action.</p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="font-mono text-4xl font-bold text-text">12,947</p>
            <p className="mt-2 text-xl font-semibold text-text">legal guesses</p>
            <p className="mt-1 text-lg leading-relaxed text-muted">Too large for our model's action space</p>
          </div>
        </div>
      </Panel>

      <div className="text-5xl text-primary" aria-hidden="true">→</div>

      <Panel className="flex h-full flex-col border-accent/40 bg-accent/5 p-7">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-accent">fixed policy vocabulary</p>
        <div className="mt-7 flex items-baseline gap-4">
          <p className="font-mono text-5xl font-bold text-primary">2,309</p>
          <span className="text-3xl text-muted">+</span>
          <p className="font-mono text-5xl font-bold text-accent">2,430</p>
        </div>
        <p className="mt-3 text-xl font-semibold text-text">all solutions + additional common words</p>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          The additions are selected from <strong className="text-text">SUBTLEX-US</strong> frequencies: American film subtitles, a 51-million-word corpus.
        </p>
        <div className="mt-auto rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5">
          <p className="font-mono text-5xl font-bold text-primary">4,739</p>
          <p className="mt-2 text-xl font-semibold text-text">words in the action space</p>
        </div>
      </Panel>
    </div>
  </SlideFrame>
);

export default VocabularySlide;
