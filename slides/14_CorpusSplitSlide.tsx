import React from 'react';

import { MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const COMPACT_METRIC = 'min-h-0 p-4 [&>p:nth-child(2)]:!mt-2 [&>p:nth-child(2)]:!text-4xl [&>p:nth-child(3)]:!text-lg';

const CorpusSplitSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The frozen experiment"
      title="Keep answers, records, and evidence in separate boxes"
      subtitle="The split is by hidden solution; a versioned corpus then freezes the examples used by each stage."
    />
    <div className="mt-5 grid flex-1 grid-cols-[1fr_1.2fr] gap-6">
      <Panel className="flex flex-col" padding="compact">
        <p className="font-mono text-lg uppercase tracking-[0.18em] text-primary">secret solutions</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <MetricCard className={COMPACT_METRIC} padding="compact" label="train" value="2,109" detail="answers" />
          <MetricCard className={COMPACT_METRIC} padding="compact" label="validation" value="100" detail="answers" />
          <MetricCard className={COMPACT_METRIC} padding="compact" label="final gameplay" value="100" detail="sealed IDs" />
        </div>
        <p className="mt-4 text-lg leading-snug text-text"><strong>100 sealed IDs</strong> → one post-selection CUDA gameplay aggregate.</p>
      </Panel>
      <Panel className="flex flex-col" padding="compact">
        <p className="font-mono text-lg uppercase tracking-[0.18em] text-accent">frozen corpus · v0.1.0</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <MetricCard className={COMPACT_METRIC} padding="compact" label="train" value="52,726" detail="records" />
          <MetricCard className={COMPACT_METRIC} padding="compact" label="mini" value="1,600" detail="records" />
          <MetricCard className={COMPACT_METRIC} padding="compact" label="validation" value="2,500" detail="records" />
          <MetricCard className={COMPACT_METRIC} padding="compact" label="final-test" value="2,500" detail="sealed records" />
        </div>
        <p className="mt-4 text-lg leading-snug text-text"><strong>2,500 state/action records</strong> → remain unopened.</p>
      </Panel>
    </div>
  </SlideFrame>
);

export default CorpusSplitSlide;
