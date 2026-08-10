import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ModelInputsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The model contract"
      title="One compact Go state becomes four exact tensors"
      subtitle="The same encoder feeds generated training records and live play, so the model cannot learn one representation and serve another."
    />
    <div className="mt-10 grid flex-1 grid-cols-[0.85fr_auto_1.5fr] items-center gap-7">
      <Panel className="border-primary/40 bg-primary/10">
        <p className="font-mono text-lg uppercase tracking-[0.18em] text-primary">input</p>
        <p className="mt-5 text-3xl font-bold text-text">289-byte bitset</p>
        <p className="mt-2 text-xl text-muted">2,309 solution IDs · LSB-first</p>
        <p className="mt-6 border-t border-border pt-5 text-3xl font-bold text-text">+ turn 0…5</p>
      </Panel>
      <div className="text-5xl text-primary" aria-hidden="true">→</div>
      <div className="grid grid-cols-2 gap-4">
        <Panel className="border-primary/30 p-6"><p className="font-mono text-lg text-primary">[2309]</p><h3 className="mt-3 text-2xl font-bold text-text">CandidateMask</h3><p className="mt-2 text-lg leading-relaxed text-muted">Which answers still fit.</p></Panel>
        <Panel className="border-accent/30 p-6"><p className="font-mono text-lg text-accent">[209]</p><h3 className="mt-3 text-2xl font-bold text-text">CandidateStats</h3><p className="mt-2 text-lg leading-relaxed text-muted">Letter positions, multiplicities, count.</p></Panel>
        <Panel className="border-primary/30 p-6"><p className="font-mono text-lg text-primary">int32 · 0…5</p><h3 className="mt-3 text-2xl font-bold text-text">Turn</h3><p className="mt-2 text-lg leading-relaxed text-muted">Where we are in six guesses.</p></Panel>
        <Panel className="border-accent/30 p-6"><p className="font-mono text-lg text-accent">[4739]</p><h3 className="mt-3 text-2xl font-bold text-text">RemainingActionMask</h3><p className="mt-2 text-lg leading-relaxed text-muted">Candidate bonus feature, not legality.</p></Panel>
      </div>
    </div>
  </SlideFrame>
);

export default ModelInputsSlide;
