import React from 'react';
import { Callout, Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const ServingGatesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Before readiness" title="Serving starts with evidence, not optimism" subtitle="One immutable, passed full-run checkpoint is loaded and warmed." />
    <div className="mt-8 grid grid-cols-2 gap-6">
      <Panel><p className="text-xl font-bold text-primary">Load gates</p><ul className="mt-4 space-y-3 text-lg leading-relaxed text-text"><li>Passed full run and effective config</li><li>Data/split hashes and backend identity</li><li>Best checkpoint step and validation state</li><li>Materialized parameter count</li><li>Warm one validation game before ready</li></ul></Panel>
      <Panel><p className="text-xl font-bold text-accent">Request gates</p><ul className="mt-4 space-y-3 text-lg leading-relaxed text-text"><li>One serialized GoMLX request at a time</li><li>Finite, correctly sized logits</li><li>Host legality mask and authoritative engine</li><li>Only the 100 validation solutions</li><li>Identity attached to every response</li></ul></Panel>
    </div>
    <Callout className="mt-7">The final-test split stays sealed. A response can be traced to run, checkpoint, update, training commit, and validation hash.</Callout>
  </SlideFrame>
);

export default ServingGatesSlide;
