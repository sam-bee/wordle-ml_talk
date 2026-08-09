import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ParameterCountSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Count the moving parts" title="The vocabulary is part of the architecture" subtitle="The final layer has one learned score for every action word."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1.15fr_0.85fr] items-center gap-8">
      <Panel className="flex h-full flex-col justify-center">
        <p className="font-mono text-3xl leading-relaxed text-text">96S + 161A + 61,953</p>
        <p className="mt-2 font-mono text-xl text-muted">S = 2,309 solutions · A = 4,739 actions</p>
        <div className="my-7 h-px bg-border" />
        <p className="font-mono text-4xl font-extrabold text-primary">= 1,046,596</p>
        <p className="mt-2 text-xl text-muted">trainable FP32 parameters</p>
        <Callout className="mt-7" tone="accent">The output layer accounts for most of the weights: 160A + A.</Callout>
      </Panel>
      <div className="space-y-5">
        <MetricCard label="weight storage" value="3.99 MiB" detail="4,186,384 bytes at FP32" />
        <Panel className="p-7">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Why it matters</p>
          <p className="mt-4 text-2xl font-semibold leading-relaxed text-text">Changing the action vocabulary changes the last layer—and the model’s parameter count.</p>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default ParameterCountSlide;
