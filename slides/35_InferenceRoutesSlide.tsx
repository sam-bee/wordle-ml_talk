import React from 'react';

import { Callout, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const ROUTES = [
  {
    label: 'Highest level',
    name: 'GoMLX',
    path: 'Go graph → XLA → CUDA',
    detail: 'Already worked. Portable, differentiable, and the easiest route.',
  },
  {
    label: 'Lower level',
    name: 'CUDA Driver API',
    path: 'Go binding → libcuda.so → PTX / cubin',
    detail: 'Explicit contexts, modules, functions, buffers, and launches.',
  },
  {
    label: 'The route we built',
    name: 'cgo + CUDA Runtime',
    path: 'Go → cgo → C ABI → CUDA C++',
    detail: 'A tiny Go boundary around a hand-written fixed forward pass.',
  },
] as const;

const InferenceRoutesSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="Choosing the boundary"
      title="Three ways Go could reach the GPU"
      subtitle="They run the same trained model. There are various ways of integrating Go with CUDA"
    />

    <div className="mt-9 grid flex-1 grid-cols-3 gap-6">
      {ROUTES.map((route, index) => (
        <Panel
          key={route.name}
          className={`flex flex-col ${index === 2 ? 'border-accent bg-accent/10 ring-2 ring-accent/20' : 'border-primary/30 bg-primary/5'}`}
        >
          <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${index === 2 ? 'text-accent' : 'text-primary'}`}>{route.label}</p>
          <h3 className="mt-5 text-3xl font-bold leading-tight text-text">{route.name}</h3>
          <p className="mt-5 rounded-xl bg-elevated/70 px-4 py-3 font-mono text-lg leading-snug text-text">{route.path}</p>
          <p className="mt-5 text-xl leading-relaxed text-muted">{route.detail}</p>
          {index === 2 && <p className="mt-auto pt-5 text-lg font-bold text-accent">Demo this route →</p>}
        </Panel>
      ))}
    </div>

    <Callout tone="warning" className="mt-6 py-4 text-center text-lg">
      “Driver API from Go” still means bindings or FFI. It removes our C++ host wrapper; it does not make the NVIDIA driver a Go library.
    </Callout>
  </SlideFrame>
);

export default InferenceRoutesSlide;
