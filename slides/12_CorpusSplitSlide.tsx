import React from 'react';

import { MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CorpusSplitSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The frozen experiment"
      title="Keep answers, records, and evidence in separate boxes"
      subtitle="The split is by hidden solution; WDIT v3 then freezes the generated examples used by each training stage."
    />
    <div className="mt-6 grid flex-1 grid-cols-[1fr_1.2fr] gap-6">
      <Panel padding="compact">
        <p className="font-mono text-lg uppercase tracking-[0.18em] text-primary">secret solutions</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <MetricCard className="min-h-0" padding="compact" label="train" value="2,109" detail="answers" />
          <MetricCard className="min-h-0" padding="compact" label="validation" value="100" detail="answers" />
          <MetricCard className="min-h-0" padding="compact" label="final test" value="100" detail="sealed" />
        </div>
        <p className="mt-4 text-lg leading-relaxed text-text"><strong>One answer, one split:</strong> all generated states for that answer stay together.</p>
      </Panel>
      <Panel padding="compact">
        <p className="font-mono text-lg uppercase tracking-[0.18em] text-accent">WDIT v3 · v0.1.0</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <MetricCard className="min-h-0" padding="compact" label="train" value="52,726" detail="records" />
          <MetricCard className="min-h-0" padding="compact" label="mini" value="1,600" detail="records" />
          <MetricCard className="min-h-0" padding="compact" label="validation" value="2,500" detail="records" />
          <MetricCard className="min-h-0" padding="compact" label="final test" value="2,500" detail="sealed records" />
        </div>
      </Panel>
    </div>
    <div className="mt-3 rounded-xl border border-danger/40 bg-danger/10 px-5 py-2 text-base leading-snug text-text">
      Caveat: 190 of 2,445 unique validation encoded states also occur in training with agreeing labels. This is state overlap, not solution-ID leakage.
    </div>
  </SlideFrame>
);

export default CorpusSplitSlide;
