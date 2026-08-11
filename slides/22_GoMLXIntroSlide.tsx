import React from 'react';

import gomlxGithubCard from '../images/23-gomlx-github-card.png';
import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const GoMLXIntroSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The training framework"
      title="GoMLX: machine learning in Go"
      subtitle="The Go library we used to describe and train the policy."
    />

    <div className="mt-7 flex flex-1 items-center justify-center">
      <Panel className="w-full max-w-[88rem] overflow-hidden border-primary/40" padding="none">
        <div className="grid grid-cols-[0.86fr_1.14fr]">
          <img
            alt="GoMLX project artwork showing the Go gopher teaching neural-network concepts at a whiteboard."
            className="h-[24rem] w-full object-cover"
            src={gomlxGithubCard}
          />
          <div className="flex flex-col justify-center p-10">
            <p className="text-base font-semibold uppercase tracking-[0.24em] text-muted">GitHub repository</p>
            <h3 className="mt-4 text-5xl font-extrabold tracking-tight text-text">
              <span className="text-primary">gomlx</span> / gomlx
            </h3>
            <p className="mt-5 max-w-3xl text-2xl leading-relaxed text-text">
              GoMLX: An Accelerated Machine Learning Framework For Go
            </p>
            <div className="mt-7 w-fit rounded-xl border border-border bg-elevated/60 px-5 py-3 font-mono text-xl text-muted">
              github.com/gomlx/gomlx
            </div>
            <div className="mt-6 flex gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-base text-primary">Go</span>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-base text-accent">Apache-2.0</span>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  </SlideFrame>
);

export default GoMLXIntroSlide;
