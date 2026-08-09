import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ValidationLimitsSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Read the result honestly" title="A passing validation proof has boundaries" subtitle="The caveats are part of the engineering result, not fine print." />
    <div className="mt-9 grid flex-1 grid-cols-2 gap-7">
      <Panel>
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">What we know</p>
        <ul className="mt-6 space-y-5 text-xl leading-relaxed text-text">
          <li><span className="mr-3 text-primary">✓</span>Validation choices were made on a fixed, bounded population.</li>
          <li><span className="mr-3 text-primary">✓</span>The final-test split remains sealed.</li>
          <li><span className="mr-3 text-primary">✓</span>Solution IDs are disjoint between training and validation.</li>
          <li><span className="mr-3 text-primary">✓</span>190 of 2,445 validation encoded states overlap training, with agreeing teacher labels.</li>
        </ul>
      </Panel>
      <Panel className="flex flex-col">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">What we do not know yet</p>
        <ul className="mt-6 space-y-5 text-xl leading-relaxed text-text">
          <li><span className="mr-3 text-danger">×</span>No final-test or broad generalisation result.</li>
          <li><span className="mr-3 text-danger">×</span>No claim of beating humans or an optimal Wordle solver.</li>
          <li><span className="mr-3 text-danger">×</span>No GPU speedup or performance claim from these metrics.</li>
        </ul>
        <Callout className="mt-auto" tone="warning">The honest headline is: “This fixed training workflow produced a much better validation policy.”</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default ValidationLimitsSlide;
