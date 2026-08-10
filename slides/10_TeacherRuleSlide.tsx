import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TeacherRuleSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The Go teacher"
      title="Choose the guess with the safest worst case"
      subtitle="For every unused action, ask how large the largest feedback bucket would be."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1fr_1.05fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">One candidate guess</p>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center font-mono text-lg">
          <div className="rounded-xl border border-border bg-elevated p-4"><p className="text-muted">G----</p><p className="mt-2 text-2xl font-bold text-text">3</p></div>
          <div className="rounded-xl border border-border bg-elevated p-4"><p className="text-muted">-YY--</p><p className="mt-2 text-2xl font-bold text-text">1</p></div>
          <div className="rounded-xl border border-border bg-elevated p-4"><p className="text-muted">---G-</p><p className="mt-2 text-2xl font-bold text-text">1</p></div>
        </div>
        <p className="mt-5 text-lg leading-relaxed text-muted">The teacher groups every remaining answer by its complete feedback pattern—one of 3⁵ = 243 possible codes.</p>
      </Panel>
      <div className="space-y-5">
        <Panel className="p-6">
          <p className="font-mono text-2xl text-text">worstCaseSize = max(bucket sizes)</p>
          <p className="mt-3 text-lg text-muted">Smaller means no possible clue leaves a huge shortlist behind.</p>
        </Panel>
        <Panel className="p-6">
          <p className="font-mono text-2xl text-primary">reduction = 1 − worstCase / shortlist</p>
          <p className="mt-3 text-lg text-muted">Rank every unused word in the fixed 4,739-action vocabulary.</p>
        </Panel>
        <Callout tone="accent">Ties: prefer a word still capable of being the answer; then use the lower canonical word ID.</Callout>
      </div>
    </div>
  </SlideFrame>
);

export default TeacherRuleSlide;
