import React from 'react';
import { Panel, SlideFrame, SlideHeader } from '@/components/SlidePrimitives';

const LessonsAndRoadmapSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="What we learned" title="Make the boundary boring—and the evidence strong" />
    <div className="mt-8 grid flex-1 grid-cols-2 gap-8">
      <Panel><p className="text-2xl font-bold text-primary">Implemented lessons</p><ul className="mt-5 space-y-3 text-lg leading-relaxed text-text"><li>Shared encoder for training and live play</li><li>Frozen vocabularies and SHA-256 hashes</li><li>Solution split discipline; final test sealed</li><li>CUDA smoke test before the model graph</li><li>Proof runs, checkpoints, and telemetry as evidence</li></ul></Panel>
      <Panel><p className="text-2xl font-bold text-accent">Next work</p><ul className="mt-5 space-y-3 text-lg leading-relaxed text-text"><li>Profile host/device boundaries and bottlenecks</li><li>Handwritten CUDA kernels where profiling justifies them</li><li>Use cgo only where the boundary earns its cost</li><li>Broader evaluation and an explicit final-test policy</li></ul><p className="mt-6 text-lg font-semibold text-muted">The custom CUDA policy is a roadmap item—not a claim about today’s implementation.</p></Panel>
    </div>
  </SlideFrame>
);

export default LessonsAndRoadmapSlide;
