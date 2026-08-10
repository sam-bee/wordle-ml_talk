import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CandidateShortlistSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The authoritative Go state"
      title="Feedback narrows a shortlist, one Go slice at a time"
      subtitle="The game keeps the remaining solutions and ordered guess history. Each accepted clue filters that same list."
    />
    <div className="mt-6 grid flex-1 grid-cols-[0.9fr_1.1fr] items-center gap-7">
      <Panel className="flex flex-col" padding="compact">
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">game.State</p>
          <span className="rounded-full bg-primary/15 px-4 py-1 font-mono text-lg font-bold text-primary">turn 1</span>
        </div>
        <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 font-mono text-xl">
          <span className="text-muted">history</span>
          <span className="text-text">[]Turn&#123;RAISE → 🟨 🟨 ⬛ 🟨 🟩&#125;</span>
          <span className="text-muted">candidates</span>
          <span className="text-text">[]words.Word</span>
        </div>
        <div className="mt-5 rounded-2xl border border-border bg-elevated/60 p-4">
          <p className="font-mono text-xl font-bold text-text">2,309 → 5</p>
          <p className="mt-2 text-lg leading-relaxed text-muted">SCARE · SHARE · SNARE · SPARE · STARE</p>
        </div>
      </Panel>

      <div className="min-w-0">
        <p className="mb-3 font-mono text-xl font-semibold text-primary">game/state.go · ApplyGuess</p>
        <CodeBlock className="[&_pre]:p-5 [&_pre]:text-2xl [&_pre]:leading-snug" language="Go">
{`updatedCandidates := make([]words.Word, 0, len(s.candidates))
for _, candidate := range s.candidates {
    candidateFeedback := GetFeedback(candidate, guess)
    if !candidateFeedback.Equals(feedback) {
        continue
    }
    updatedCandidates = append(updatedCandidates, candidate)
}
s.candidates = updatedCandidates`}
        </CodeBlock>
      </div>
    </div>
  </SlideFrame>
);

export default CandidateShortlistSlide;
