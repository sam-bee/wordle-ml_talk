import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CgoIntegrationCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The integration boundary"
      title="cgo gives Go a C-shaped front door"
      subtitle="The slide code is simplified, but its tensors, call shape, and ownership match the real Wordle inference backend."
    />

    <div className="mt-5 grid min-h-0 flex-1 grid-cols-[1.3fr_0.7fr] gap-7">
      <CodeBlock className="min-h-0 [&_pre]:p-5 [&_pre]:text-xl [&_pre]:leading-[1.2]" language="Go-shaped pseudocode">
        {`func (m *cudaModel) Score(in Inputs) ([]float32, error) {
    logits := make([]float32, 4739)
    rc := C.wordle_cuda_model_infer(
        m.handle,
        ptr(in.CandidateMask),       // 2,309 floats
        ptr(in.CandidateStats),      //   209 floats
        C.int32_t(in.Turn),          // 0 … 5
        ptr(in.RemainingActionMask), // 4,739 floats
        ptr(logits),                 // 4,739 scores back
    )
    runtime.KeepAlive(in.CandidateMask)
    runtime.KeepAlive(in.CandidateStats)
    runtime.KeepAlive(in.RemainingActionMask)
    runtime.KeepAlive(logits) // C retains no Go pointers
    return logits, check(rc)
}`}
      </CodeBlock>

      <Panel className="flex min-h-0 flex-col justify-center" padding="compact">
        <div className="border-b border-border pb-5">
          <p className="font-mono text-xl font-bold text-primary">nvcc</p>
          <p className="mt-2 text-lg leading-relaxed text-text"><code>wordle_cuda.cu</code> → native static library</p>
        </div>
        <div className="border-b border-border py-5">
          <p className="font-mono text-xl font-bold text-accent">cgo</p>
          <p className="mt-2 text-lg leading-relaxed text-text">links the plain C ABI into the Go service</p>
        </div>
        <div className="pt-5">
          <p className="font-mono text-xl font-bold text-text">one synchronous call / guess</p>
          <p className="mt-2 text-lg leading-relaxed text-muted">Logits are ready when it returns. C keeps no Go pointer.</p>
        </div>
      </Panel>
    </div>
  </SlideFrame>
);

export default CgoIntegrationCodeSlide;
