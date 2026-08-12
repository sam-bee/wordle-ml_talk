import React from 'react';

import { Callout, MetricCard, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const PolicyOutputSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The policy output"
      title="4,739 scores - and one learned nudge"
      subtitle="The model scores every possible action, then boosts actions that are still candidate solutions."
    />

    <div className="mt-8 grid flex-1 grid-cols-[1.2fr_0.8fr] gap-8">
      <Panel className="flex flex-col justify-center">
        <div className="rounded-2xl border border-border bg-elevated/50 px-7 py-6 font-mono text-2xl leading-relaxed text-text sm:text-3xl">
          <span className="text-primary">logits</span>[action]
          <span className="text-muted"> = </span>
          <span className="text-accent">baseScore</span>[action]
          <br />
          <span className="text-muted">             + </span>
          <span className="text-primary">β</span>
          <span className="text-muted"> × </span>
          <span className="text-accent">remainingActionMask</span>[action]
        </div>
        <div className="mt-7 grid grid-cols-2 gap-4 text-lg leading-relaxed text-text">
          <div className="rounded-2xl border border-border px-5 py-4"><strong className="text-primary">4,739</strong><br /><span className="text-muted">base action logits</span></div>
          <div className="rounded-2xl border border-border px-5 py-4"><strong className="text-accent">β</strong><br /><span className="text-muted">one learned state-dependent bonus</span></div>
        </div>
        <Callout className="mt-6" tone="accent">This value is a learned preference, not a legality rule: a useful probe word keeps its ordinary score.</Callout>
      </Panel>

      <div className="grid grid-rows-[auto_1fr] gap-6">
        <MetricCard
          className="[&>p:nth-child(3)]:!text-2xl"
          label="trainable weights"
          value="1,046,596"
          detail="FP32 parameters · 3.99 MiB"
        />
        <Panel className="flex flex-col justify-between" padding="compact">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted">Action masking</p>
            <p className="mt-3 text-base leading-relaxed text-text">Used guesses become −∞ before ArgMax.</p>
            <pre className="mt-3 overflow-x-auto rounded-xl border border-border bg-elevated/60 px-4 py-3 font-mono text-xl leading-[1.2] text-text"><code>{`available := graph.GreaterThan(
    availableActions, graph.ScalarZero(...))
return graph.Where(available, logits, -Inf)`}</code></pre>
          </div>
        </Panel>
      </div>
    </div>
  </SlideFrame>
);

export default PolicyOutputSlide;
