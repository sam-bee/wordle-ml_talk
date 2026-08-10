import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TeacherCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The real implementation"
      title="One feedback-matrix row per possible guess"
      subtitle="For each unused action, count the shortlist into feedback buckets and retain its largest bucket."
    />
    <div className="mt-5 grid flex-1 grid-cols-[1.22fr_0.78fr] items-center gap-7">
      <div className="min-w-0">
        <p className="mb-3 font-mono text-xl font-semibold text-primary">dataset/teacher.go · RankExcluding</p>
        <CodeBlock className="[&_pre]:p-4 [&_pre]:text-2xl [&_pre]:leading-[1.2]" language="Go">
{`for guessID := range t.vocab.Guesses {
    if used[uint16(guessID)] {
        continue
    }
    worstCaseSize := uint16(0)
    row := t.matrix.GuessRow(uint16(guessID))

    for _, solutionID := range shortlist {
        code := row[solutionID]
        if counts[code] == 0 {
            touched = append(touched, code)
        }
        counts[code]++
        if counts[code] > worstCaseSize {
            worstCaseSize = counts[code]
        }
    }
}`}
        </CodeBlock>
      </div>
      <div className="space-y-4">
        <Panel padding="compact">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">already computed</p>
          <p className="mt-3 text-2xl font-semibold leading-tight text-text">guess × solution → feedback code</p>
          <p className="mt-2 text-lg leading-snug text-muted">The inner loop reads a cached code instead of re-running Wordle’s letter rules.</p>
        </Panel>
        <Panel padding="compact">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">the one number that matters</p>
          <p className="mt-3 font-mono text-3xl font-bold text-primary">max(bucket size)</p>
          <p className="mt-2 text-lg leading-snug text-muted">Smaller is safer: even the least helpful clue leaves fewer candidate answers.</p>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default TeacherCodeSlide;
