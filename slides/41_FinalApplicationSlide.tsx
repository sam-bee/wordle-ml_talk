import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';
import browserDemoImage from '../images/cuda-cgo-browser-demo.png';

const FinalApplicationSlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="Back to the application"
      title="The GPU boundary disappears behind a Go web app"
      subtitle="A direct, playable route: Go owns the Wordle game while hand-written CUDA via cgo returns its policy scores."
    />

    <div className="mt-7 grid flex-1 grid-cols-[1.35fr_0.65fr] items-center gap-8">
      <figure className="overflow-hidden rounded-3xl border border-border bg-elevated shadow-2xl">
        <div className="grid h-[34vh] min-h-72 grid-cols-[1.45fr_0.8fr]">
          <div
            role="img"
            aria-label="Live replay crop showing ADEPT solved by the CUDA policy in three guesses"
            className="border-r border-border bg-elevated bg-no-repeat"
            style={{ backgroundImage: `url(${browserDemoImage})`, backgroundPosition: '50% 90%', backgroundSize: '200%' }}
          />
          <div
            role="img"
            aria-label="Backend status crop showing hand-written CUDA via cgo on an NVIDIA RTX 5070 Ti"
            className="bg-elevated bg-no-repeat"
            style={{ backgroundImage: `url(${browserDemoImage})`, backgroundPosition: '68% 24%', backgroundSize: '450%' }}
          />
        </div>
        <figcaption className="flex items-center justify-between gap-4 border-t border-border px-6 py-3 text-lg text-muted">
          <span><strong className="text-text">ADEPT</strong> solved in 3 guesses</span>
          <span className="font-mono text-accent">cuda-cgo direct route</span>
        </figcaption>
      </figure>

      <section className="space-y-5">
        <Panel className="border-primary/40 bg-primary/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Visible in the real UI</p>
          <p className="mt-3 text-xl leading-relaxed text-text">Hand-written CUDA via cgo, CUDA readiness, the loaded checkpoint, and GPU identity.</p>
        </Panel>
        <Panel className="border-accent/40 bg-accent/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">What the user sees</p>
          <p className="mt-3 text-xl leading-relaxed text-text">One ordinary browser game. The server still owns state, legality, and the completed trajectory.</p>
        </Panel>
        <Callout tone="warning" className="text-lg">
          This is a live <strong>demo</strong>, not validation evidence. The direct UI does not load final-test split membership.
        </Callout>
      </section>
    </div>
  </SlideFrame>
);

export default FinalApplicationSlide;
