import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoMLXTrainingSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training boundary"
      title="Training was GoMLX → XLA → CUDA"
      subtitle="The successful model was trained through GoMLX and compiled for the GPU; the hand-written CUDA path comes later and runs inference only."
    />
    <div className="mt-6 flex flex-1 flex-col gap-5">
      <Panel padding="compact">
        <p className="text-lg font-semibold uppercase tracking-[0.2em] text-muted">Exact GoMLX source excerpt · wordleml/policy/model.go:114–121</p>
        <CodeBlock className="mt-3 [&_pre]:p-4 [&_pre]:text-2xl [&_pre]:leading-[1.2]" language="GoMLX / Go">
{`h := graph.Concatenate([]*graph.Node{candidateFeatures, statsFeatures, turnFeatures}, -1)
r := activation.Relu(layers.DenseWithBias(scope.In("residual_in"), h, trunkSize))
r = layers.DenseWithBias(scope.In("residual_out"), r, trunkSize)
h = activation.Relu(graph.Add(h, r))

baseLogits := layers.DenseWithBias(scope.In("base_logits"), h, m.config.NumActions)
beta = layers.DenseWithBias(scope.In("candidate_bonus"), h, 1)
return graph.Add(baseLogits, graph.Mul(beta, remainingActionMask)), beta`}
        </CodeBlock>
      </Panel>
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="font-mono text-xl font-bold text-primary">GoMLX</p>
          <p className="mt-2 text-lg leading-snug text-text">model, loss, autodiff, optimiser</p>
        </Panel>
        <span className="self-center text-3xl text-muted" aria-hidden="true">→</span>
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="font-mono text-xl font-bold text-accent">XLA / PJRT</p>
          <p className="mt-2 text-lg leading-snug text-text">compile the training graph</p>
        </Panel>
        <span className="self-center text-3xl text-muted" aria-hidden="true">→</span>
        <Panel className="border-primary/40 bg-primary/10" padding="compact">
          <p className="font-mono text-xl font-bold text-primary">CUDA GPU</p>
          <p className="mt-2 text-lg leading-snug text-text">execute the compiled numerical work</p>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default GoMLXTrainingSlide;
