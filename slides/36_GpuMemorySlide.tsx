import React from 'react';

import { Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const MEMORY_SPACES = [
  {
    detail: 'Per-thread working values, placed here by the compiler.',
    limit: '64K × 32-bit / SM',
    name: 'Registers',
    scope: 'one thread · on-chip',
    secondary: 'up to 255 / thread',
  },
  {
    detail: 'Fast scratchpad shared by one block’s threads.',
    limit: '100 KiB / SM',
    name: 'Shared',
    scope: 'one block · on-chip',
    secondary: 'up to 99 KiB / block',
  },
  {
    detail: 'Small, read-only data shared by every thread in a grid.',
    limit: '64 KiB / device',
    name: 'Constant',
    scope: 'whole grid · device',
    secondary: '8 KiB cache / SM',
  },
  {
    detail: 'Private spill space for large locals or exhausted registers.',
    limit: '512 KiB / thread',
    name: 'Local',
    scope: 'one thread · in VRAM',
    secondary: '“local” describes scope—not location',
  },
] as const;

const GpuMemorySlide: React.FC = () => (
  <SlideFrame variant="surface">
    <SlideHeader
      kicker="GPU memory"
      title="Different memory, different jobs"
      subtitle="Who can see it, where it lives, and how long it lasts all matter."
      aside={<span className="font-mono text-primary">compute capability 12.0 limits</span>}
    />

    <div className="mt-6 flex min-h-0 flex-1 flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-4">
        {MEMORY_SPACES.map((memory, index) => (
          <Panel
            key={memory.name}
            className={`flex min-h-0 flex-col ${index < 2 ? 'border-primary/40 bg-primary/10' : ''}`}
            padding="compact"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{memory.scope}</p>
            <h3 className={`mt-2 text-2xl font-bold ${index < 2 ? 'text-primary' : 'text-text'}`}>{memory.name}</h3>
            <p className="mt-3 font-mono text-xl font-bold leading-tight text-text">{memory.limit}</p>
            <p className="mt-3 text-lg leading-snug text-muted">{memory.detail}</p>
            <p className="mt-auto pt-3 text-base font-semibold text-text">{memory.secondary}</p>
          </Panel>
        ))}
      </div>

      <Panel className="mt-5 grid grid-cols-[1.15fr_0.85fr] items-center gap-7 border-accent/50 bg-accent/10" padding="compact">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">all threads · device VRAM</p>
          <div className="mt-2 flex items-baseline justify-between gap-5">
            <h3 className="text-2xl font-bold text-text">Global / device memory</h3>
            <p className="shrink-0 font-mono text-base font-semibold text-accent">size is GPU-specific</p>
          </div>
          <p className="mt-2 text-lg leading-snug text-muted">Large, persistent storage for weights, inputs, activations, and results. All threads can access it.</p>
        </div>

        <div className="border-l border-accent/40 pl-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">this card · not a CC 12.0 guarantee</p>
          <p className="mt-2 text-xl font-bold text-text">GeForce RTX 5070 Ti</p>
          <p className="mt-2 font-mono text-2xl font-bold text-accent">16 GB GDDR7 · 896 GB/s</p>
        </div>
      </Panel>

      <p className="mt-3 text-center text-base text-muted">
        Caches sit between them: on CC 12.0, L1 and shared memory divide a 128 KiB on-chip pool per SM; L2 is device-wide.
      </p>
    </div>
  </SlideFrame>
);

export default GpuMemorySlide;
