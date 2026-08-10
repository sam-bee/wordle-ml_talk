import React from 'react';

import { Callout, CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoMLXTrainingSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training boundary"
      title="Go builds the graph; XLA runs it on CUDA"
      subtitle="The successful training path used GoMLX—not the later handwritten CUDA inference backend."
    />
    <div className="mt-8 grid flex-1 grid-cols-[1.05fr_0.95fr] gap-8">
      <Panel className="flex flex-col" padding="compact">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">wordleml/policy/model.go:114–121</p>
        <CodeBlock className="[&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-snug" language="GoMLX / Go">
{`h := graph.Concatenate([]*graph.Node{candidateFeatures, statsFeatures, turnFeatures}, -1)
r := activation.Relu(layers.DenseWithBias(scope.In("residual_in"), h, trunkSize))
r = layers.DenseWithBias(scope.In("residual_out"), r, trunkSize)
h = activation.Relu(graph.Add(h, r))

baseLogits := layers.DenseWithBias(scope.In("base_logits"), h, m.config.NumActions)
beta = layers.DenseWithBias(scope.In("candidate_bonus"), h, 1)
return graph.Add(baseLogits, graph.Mul(beta, remainingActionMask)), beta`}
        </CodeBlock>
      </Panel>
      <Panel className="flex flex-col justify-between">
        <div className="space-y-4 text-xl text-text">
          <div className="flex items-center gap-4"><span className="rounded-xl bg-primary/15 px-4 py-3 font-mono text-primary">Go</span><span className="text-muted">→</span><span>define model + objective</span></div>
          <div className="flex items-center gap-4"><span className="rounded-xl bg-accent/15 px-4 py-3 font-mono text-accent">XLA / PJRT</span><span className="text-muted">→</span><span>compile graph for GPU</span></div>
          <div className="flex items-center gap-4"><span className="rounded-xl bg-primary/15 px-4 py-3 font-mono text-primary">CUDA</span><span className="text-muted">→</span><span>execute training numerics</span></div>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-muted">The trainer adds loss and backpropagation; XLA/PJRT compiles the graph for CUDA.</p>
        <Callout className="mt-5 py-3" tone="warning">Handwritten CUDA/cgo comes later: it ports inference, not training.</Callout>
      </Panel>
    </div>
  </SlideFrame>
);

export default GoMLXTrainingSlide;
