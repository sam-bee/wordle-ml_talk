import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const LOSS_POINTS = [
  { update: 0, loss: 8.3005, x: 76, y: 58, label: '8.3005' },
  { update: 2200, loss: 3.1341, x: 255, y: 286, label: '3.1341' },
  { update: 10000, loss: 4.6103, x: 890, y: 221, label: '4.6103' },
] as const;

const TensorBoardSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Training telemetry"
      title="Choose the checkpoint, not the last update"
      subtitle="Selected validation-loss values exported from TensorBoard / recorded telemetry for the fresh 10,000-update production run (seed 20260808)."
    />

    <div className="mt-7 grid flex-1 grid-cols-[1.45fr_0.85fr] gap-7">
      <Panel className="flex min-h-0 flex-col" padding="compact">
        <div className="flex items-baseline justify-between gap-5">
          <p className="font-mono text-base font-semibold uppercase tracking-[0.16em] text-primary">validation/loss</p>
          <p className="text-sm text-muted">Rendered from telemetry — not a TensorBoard screenshot</p>
        </div>
        <svg className="mt-2 min-h-0 w-full flex-1" viewBox="0 0 960 350" role="img" aria-label="Validation loss is 8.3005 at update zero, reaches 3.1341 at update 2200, then rises to 4.6103 at update 10000.">
          <rect x="0" y="0" width="960" height="350" rx="18" fill="rgb(var(--color-elevated) / 0.28)" />
          {[58, 144, 230, 286].map((y, index) => (
            <line key={y} x1="76" x2="890" y1={y} y2={y} stroke="rgb(var(--color-border))" strokeDasharray={index === 3 ? undefined : '6 8'} strokeWidth="1" />
          ))}
          <line x1="76" x2="76" y1="35" y2="286" stroke="rgb(var(--color-muted))" strokeWidth="1.5" />
          <line x1="76" x2="890" y1="286" y2="286" stroke="rgb(var(--color-muted))" strokeWidth="1.5" />
          <text x="20" y="63" fill="rgb(var(--color-muted))" fontSize="18">8.3</text>
          <text x="20" y="149" fill="rgb(var(--color-muted))" fontSize="18">6.0</text>
          <text x="20" y="235" fill="rgb(var(--color-muted))" fontSize="18">4.0</text>
          <text x="20" y="292" fill="rgb(var(--color-muted))" fontSize="18">3.1</text>
          <polyline points={LOSS_POINTS.map(point => `${point.x},${point.y}`).join(' ')} fill="none" stroke="rgb(var(--color-primary))" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />
          {LOSS_POINTS.map(point => (
            <g key={point.update}>
              <circle cx={point.x} cy={point.y} r="10" fill="rgb(var(--color-canvas))" stroke="rgb(var(--color-primary))" strokeWidth="6" />
              <text x={point.x} y={point.y - 20} textAnchor="middle" fill="rgb(var(--color-text))" fontSize="19" fontWeight="700">{point.label}</text>
              <text x={point.x} y="321" textAnchor="middle" fill="rgb(var(--color-muted))" fontSize="18">{point.update.toLocaleString()}</text>
            </g>
          ))}
          <line x1="255" x2="255" y1="35" y2="286" stroke="rgb(var(--color-accent))" strokeDasharray="5 6" strokeWidth="2" />
          <text x="274" y="88" fill="rgb(var(--color-accent))" fontSize="18" fontWeight="700">selected best checkpoint</text>
          <text x="483" y="344" textAnchor="middle" fill="rgb(var(--color-muted))" fontSize="18">training update</text>
        </svg>
        <p className="mt-2 text-sm leading-relaxed text-muted">The line joins only the three labelled recorded snapshots; it does not invent values between them.</p>
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel className="border-accent/40 bg-accent/10" padding="compact">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-accent">model selection</p>
          <p className="mt-3 text-2xl font-bold text-text">Best checkpoint: update 2,200</p>
          <p className="mt-2 text-lg leading-relaxed text-muted">Lowest recorded validation loss: <span className="font-mono text-text">3.1341</span></p>
        </Panel>
        <Panel padding="compact">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-primary">why not the final weights?</p>
          <p className="mt-3 text-lg leading-relaxed text-text">Training kept running to update 10,000, while validation loss rose to <span className="font-mono">4.6103</span>.</p>
        </Panel>
        <Callout className="mt-auto text-lg" tone="warning">
          A validation minimum followed by a rise while training continues is strong evidence consistent with overfitting—not a reason to call the final update “best.”
        </Callout>
      </div>
    </div>
  </SlideFrame>
);

export default TensorBoardSlide;
