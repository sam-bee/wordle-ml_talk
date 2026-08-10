import React from 'react';

import { Panel, Reveal, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

interface PolicyArchitectureSlideProps { step: number; }

const PolicyArchitectureSlide: React.FC<PolicyArchitectureSlideProps> = ({ step }) => (
  <SlideFrame>
    <SlideHeader kicker="The policy graph" title="A small network with a Wordle-shaped output" subtitle="Reveal the computation from state features to a ranked action." />
    <div className="mt-8 flex flex-1 flex-col justify-center gap-5">
      <div className="grid grid-cols-3 gap-5">
        <Panel className="text-center"><p className="font-mono text-lg text-primary">CandidateMask</p><p className="mt-2 text-3xl font-extrabold text-text">→ 96</p></Panel>
        <Panel className="text-center"><p className="font-mono text-lg text-accent">CandidateStats</p><p className="mt-2 text-3xl font-extrabold text-text">→ 48</p></Panel>
        <Panel className="text-center"><p className="font-mono text-lg text-danger">Turn 0…5</p><p className="mt-2 text-3xl font-extrabold text-text">→ 16</p></Panel>
      </div>
      <Reveal visible={step >= 1} className="space-y-4 text-center" preserveLayout>
        <div className="mx-auto w-fit rounded-2xl border-2 border-primary bg-primary/10 px-12 py-5 text-2xl font-bold text-text shadow-lg">concat → 160 features</div>
        <div className="mx-auto w-fit rounded-2xl border border-accent/40 bg-accent/10 px-10 py-4 text-xl text-text">Dense(160) → ReLU → Dense(160) → add skip → ReLU</div>
      </Reveal>
      <Reveal visible={step >= 2} className="grid grid-cols-2 gap-5" preserveLayout>
        <Panel className="text-center"><p className="font-semibold text-text">baseLogits</p><p className="mt-2 font-mono text-3xl font-extrabold text-primary">4,739 scores</p><p className="mt-1 text-muted">one per action word</p></Panel>
        <Panel className="text-center"><p className="font-semibold text-text">β</p><p className="mt-2 font-mono text-3xl font-extrabold text-accent">one scalar</p><p className="mt-1 text-muted">candidate bonus per state</p></Panel>
      </Reveal>
    </div>
  </SlideFrame>
);

export default PolicyArchitectureSlide;
