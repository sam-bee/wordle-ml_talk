import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoMLXModelCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="GoMLX"
      title="The model is ordinary Go code"
      subtitle="A simplified fragment of the three input branches from our policy."
    />

    <div className="mt-6 grid flex-1 grid-cols-[1.35fr_0.65fr] gap-6">
      <CodeBlock className="[&_pre]:p-5 [&_pre]:text-xl [&_pre]:leading-[1.22]" language="Go">
{`candidateFeatures := activation.Relu(layers.DenseWithBias(
    scope.In("candidate_projection"), candidateMask, 96,
))
statsFeatures := activation.Relu(layers.DenseWithBias(
    scope.In("stats_projection"), candidateStats, 48,
))
turnFeatures := layers.Embedding(
    scope.In("turn_embedding"),
    graph.InsertAxes(turn, -1),
    dtypes.Float32, 6, 16,
)

state := graph.Concatenate(
    []*graph.Node{candidateFeatures, statsFeatures, turnFeatures}, -1,
)`}
      </CodeBlock>

      <Panel className="flex flex-col justify-center" padding="compact">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xl font-bold text-primary">DenseWithBias</p>
            <p className="mt-1 text-lg leading-snug text-muted">Create learned projections.</p>
          </div>
          <div className="border-t border-border pt-5">
            <p className="font-mono text-xl font-bold text-accent">Relu</p>
            <p className="mt-1 text-lg leading-snug text-muted">Zero negative values.</p>
          </div>
          <div className="border-t border-border pt-5">
            <p className="font-mono text-xl font-bold text-danger">Embedding</p>
            <p className="mt-1 text-lg leading-snug text-muted">Look up the turn vector.</p>
          </div>
          <div className="border-t border-border pt-5">
            <p className="font-mono text-xl font-bold text-text">Concatenate</p>
            <p className="mt-1 text-lg leading-snug text-muted">Join them into 160 values.</p>
          </div>
        </div>
      </Panel>
    </div>
  </SlideFrame>
);

export default GoMLXModelCodeSlide;
