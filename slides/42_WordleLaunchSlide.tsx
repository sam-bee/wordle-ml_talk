import React from 'react';

import { Callout, CodeBlock, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const WordleLaunchSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="One concrete CUDA launch"
      title="One block scores one possible word"
      subtitle="The final kernel turns the 160-value hidden state into 4,739 action logits."
    />

    <div className="mt-6 grid grid-cols-[1.15fr_0.85fr] gap-7">
      <section className="space-y-5">
        <CodeBlock className="[&_pre]:p-5 [&_pre]:text-2xl [&_pre]:leading-snug" language="CUDA-shaped pseudocode">
          {`policy_logits_with_bonus<<<4739, 128, 0, stream>>>(
    hidden160, remainingActionMask,
    weights, bias, beta, logits);`}
        </CodeBlock>

        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Inside one block</p>
          <p className="mt-3 text-xl leading-relaxed text-text">128 threads split the 160 multiplications, reduce their partial sums, then one lane adds the bias and candidate bonus.</p>
        </Panel>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <MetricCard padding="compact" label="Grid" value="4,739" detail="blocks · one per action" />
        <MetricCard padding="compact" label="Block" value="128" detail="threads · four warps" />
        <MetricCard padding="compact" label="Warp" value="32" detail="threads scheduled together" />
        <MetricCard padding="compact" label="Output" value="1" detail="raw logit per block" />
      </section>
    </div>

    <div className="mt-6 flex items-center justify-center gap-3">
      {['action 0', 'action 1', 'action 2', '…', 'action 4,738'].map((action, index) => (
        <React.Fragment key={action}>
          <div className={`rounded-xl border px-5 py-3 font-mono text-lg ${action === '…' ? 'border-transparent text-muted' : 'border-primary/40 bg-primary/10 text-text'}`}>{action}</div>
          {index < 4 && action !== '…' && <span className="text-xl text-muted">·</span>}
        </React.Fragment>
      ))}
    </div>

    <Callout tone="warning" className="mt-6 py-3 text-center text-lg">
      4,739 × 128 describes 606,592 logical thread positions. The GPU schedules them in waves; they are not all resident at once.
    </Callout>
  </SlideFrame>
);

export default WordleLaunchSlide;
