import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const TeacherCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The real implementation"
      title="It is just a minimax-shaped Go loop"
      subtitle="The expensive part is deliberate: score each unused action against the current shortlist."
    />
    <Panel className="mt-5 flex-1 overflow-hidden" padding="compact">
      <div className="mb-2 flex items-center justify-between gap-4">
        <p className="font-mono text-base font-semibold text-primary">dataset/teacher.go:64–80</p>
        <p className="text-base text-muted">fixed action IDs · feedback matrix already built</p>
      </div>
      <CodeBlock className="[&_pre]:p-3 [&_pre]:text-sm [&_pre]:leading-tight" language="Go">
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
    </Panel>
  </SlideFrame>
);

export default TeacherCodeSlide;
