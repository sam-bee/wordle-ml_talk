import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const STAGES = [
  ['Browser', 'asks for a game'],
  ['Go service', 'owns Wordle'],
  ['cgo', 'crosses once'],
  ['CUDA', 'runs the model'],
  ['Go', 'chooses the word'],
] as const;

const InferenceGoalSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="Act III · the destination"
      title="The goal: a Go service invokes CUDA"
      subtitle="Keep the application and Wordle rules in Go. Send one fixed neural-network forward pass to the GPU."
    />

    <div className="mt-10 flex items-center gap-3">
      {STAGES.map(([title, detail], index) => (
        <React.Fragment key={title}>
          <Panel
            className={`flex-1 text-center ${index === 3 ? 'border-accent/50 bg-accent/10' : 'border-primary/30 bg-primary/5'}`}
            padding="compact"
          >
            <p className={`text-xl font-bold ${index === 3 ? 'text-accent' : 'text-primary'}`}>{title}</p>
            <p className="mt-2 text-base leading-snug text-muted">{detail}</p>
          </Panel>
          {index < STAGES.length - 1 && <span className="text-3xl text-primary" aria-hidden="true">→</span>}
        </React.Fragment>
      ))}
    </div>

    <div className="mt-8 grid grid-cols-2 gap-6">
      <Panel className="border-primary/40 bg-primary/10" padding="compact">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Go remains the application</p>
        <p className="mt-3 text-xl leading-relaxed text-text">HTTP · game state · encoding · legal moves · deterministic selection</p>
      </Panel>
      <Panel className="border-accent/40 bg-accent/10" padding="compact">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">CUDA becomes the numerical engine</p>
        <p className="mt-3 text-xl leading-relaxed text-text">Four inputs in · seven kernels · 4,739 raw scores out</p>
      </Panel>
    </div>

    <Callout className="mt-6 py-4 text-center text-xl">
      GoMLX could perform inference. Custom CUDA code gives more flexibility and scope for optimisation
    </Callout>
  </SlideFrame>
);

export default InferenceGoalSlide;
