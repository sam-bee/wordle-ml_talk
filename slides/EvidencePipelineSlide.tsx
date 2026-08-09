import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const EvidencePipelineSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Evidence" title="The run leaves a trail, not just a number" subtitle="A checkpoint can be inspected, resumed, and independently reloaded."
      aside={<span className="font-mono">proof-full-20260808</span>} />
    <div className="mt-9 grid flex-1 grid-cols-[1fr_1fr] gap-8">
      <Panel>
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Every 100 updates</p>
        <div className="mt-6 flex items-center justify-between gap-3 text-center">
          {['initial', 'latest', 'best'].map((name, index) => (
            <React.Fragment key={name}>
              <div className="flex-1 rounded-2xl border border-primary/30 bg-primary/10 px-3 py-5">
                <p className="font-mono text-xl font-bold text-primary">{name}</p>
                <p className="mt-2 text-sm text-muted">{index === 0 ? 'update 0' : index === 1 ? 'resume point' : 'lowest val loss'}</p>
              </div>
              {index < 2 && <span className="text-2xl text-muted">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-7 text-lg leading-relaxed text-muted">Validation and checkpoint snapshots arrive every 100 updates; scalar telemetry arrives every 10.</p>
      </Panel>
      <Panel className="flex flex-col justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Self-contained run</p>
          <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-lg text-text">
            {['config.json', 'metadata.json', 'run-state.json', 'final-metrics.json', 'training.log', 'events/'].map((item) => <div key={item} className="rounded-xl bg-elevated/60 px-4 py-3">{item}</div>)}
          </div>
        </div>
        <Callout className="mt-7" tone="accent">Go’s standard-library TensorBoard writer records ordinary scalar and histogram event files. The report re-verifies the artifacts and game-summary tags.</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default EvidencePipelineSlide;
