import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const HostDeviceRolesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="The boundary" title="Go owns the game. CUDA owns the dense math." subtitle="A narrow interface keeps the system understandable and testable." />
    <div className="mt-8 grid flex-1 grid-cols-2 gap-8">
      <Panel className="border-primary/40">
        <p className="text-2xl font-bold text-primary">Go host</p>
        <ul className="mt-6 space-y-4 text-xl leading-relaxed text-text">
          <li>HTTP, input validation, and model identity</li><li>Authoritative Wordle rules and feedback</li><li>State encoding and candidate shortlist</li><li>Legality mask and deterministic action selection</li>
        </ul>
      </Panel>
      <Panel className="border-accent/40">
        <p className="text-2xl font-bold text-accent">GPU device</p>
        <ul className="mt-6 space-y-4 text-xl leading-relaxed text-text">
          <li>GoMLX policy graph on <span className="font-mono">xla:cuda</span></li><li>Forward pass: state tensors → 4,739 logits</li><li>Training graph: backward pass and updates</li><li>No game rules, HTTP, or browser access</li>
        </ul>
      </Panel>
    </div>
    <Callout className="mt-7">The host asks for scores; it remains the source of truth about what a legal guess is.</Callout>
  </SlideFrame>
);

export default HostDeviceRolesSlide;
