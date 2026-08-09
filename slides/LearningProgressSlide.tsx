import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ROWS = [
  ['untrained baseline', '8.3005', '0.006', 'No useful ranking'],
  ['one-batch overfit', '17.2894', '0.063', 'Memorises train batch; validation suffers'],
  ['mini', '13.1943', '0.120', 'Small step toward signal'],
  ['full / best', '3.1633', '0.501', 'Useful bounded validation result'],
];

const LearningProgressSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader kicker="Learning curve" title="Memorising is easy; ranking unseen states is harder" subtitle="Validation metrics expose the difference between fitting examples and learning a reusable policy." />
    <Panel className="mt-8 flex-1">
      <div className="grid grid-cols-[1.2fr_0.65fr_0.65fr_1.6fr] border-b border-border pb-4 text-base font-semibold uppercase tracking-[0.16em] text-muted">
        <span>stage</span><span>val loss</span><span>top-1</span><span>what it tells us</span>
      </div>
      <div className="mt-2">
        {ROWS.map(([stage, loss, top1, note], index) => (
          <div key={stage} className={`grid grid-cols-[1.2fr_0.65fr_0.65fr_1.6fr] items-center border-b border-border/70 py-5 text-xl ${index === ROWS.length - 1 ? 'text-primary' : 'text-text'}`}>
            <span className="font-semibold">{stage}</span><span className="font-mono">{loss}</span><span className="font-mono">{top1}</span><span className="text-lg text-muted">{note}</span>
          </div>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-5 text-lg text-muted"><span className="h-3 w-3 rounded-full bg-danger" /> one-batch train top-1 was 0.989, but validation top-1 was only 0.063 <span className="text-text">→</span> classic overfit warning</div>
    </Panel>
  </SlideFrame>
);

export default LearningProgressSlide;
