import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoMLXBridgeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The GPU boundary · 03"
      title="Go describes the graph; CUDA runs it"
      subtitle="GoMLX turns ordinary Go operations into a graph, then XLA/PJRT compiles that graph for the CUDA backend."
    />

    <div className="mt-8 grid flex-1 grid-cols-[0.9fr_1.1fr] items-center gap-10">
      <CodeBlock language="go">
        {`func euclideanDistance(a, b *Node) *Node {
  return Sqrt(
    ReduceAllSum(
      Square(Sub(a, b))))
}

// [1, 2] → [4, 6] → 5`}
      </CodeBlock>

      <section className="space-y-5">
        <Panel className="relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-center">
              <p className="font-mono text-xl text-text">Go graph</p>
              <p className="mt-1 text-base text-muted">Sub · Square · Sum · Sqrt</p>
            </div>
            <span className="text-3xl text-primary">→</span>
            <div className="rounded-2xl border border-accent/40 bg-accent/10 px-5 py-4 text-center">
              <p className="font-mono text-xl text-text">XLA / PJRT</p>
              <p className="mt-1 text-base text-muted">compile + dispatch</p>
            </div>
            <span className="text-3xl text-primary">→</span>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-center">
              <p className="font-mono text-xl text-text">CUDA GPU</p>
              <p className="mt-1 text-base text-muted">result: 5</p>
            </div>
          </div>
        </Panel>
        <p className="px-2 text-2xl leading-relaxed text-text">
          This is the current bridge: no cgo required for the GoMLX path, and no hand-written model kernel yet.
        </p>
      </section>
    </div>
  </SlideFrame>
);

export default GoMLXBridgeSlide;
