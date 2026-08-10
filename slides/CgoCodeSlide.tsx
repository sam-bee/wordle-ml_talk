import React from 'react';

import { CodeBlock, Panel, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CgoCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 03"
      title="The cgo boundary is intentionally boring"
      subtitle="A Go slice enters. One whole forward pass runs. A logits slice comes back. The native side never keeps a Go pointer."
    />

    <div className="mt-8 grid flex-1 grid-cols-2 gap-7">
      <Panel className="flex flex-col" padding="none">
        <div className="border-b border-border px-6 py-4">
          <p className="font-mono text-lg font-bold text-primary">backend_cgo.go · 5–10</p>
          <p className="mt-1 text-base text-muted">compile and link the C ABI</p>
        </div>
        <CodeBlock className="m-5 flex-1 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-snug" language="go / cgo">
          {`/*
#cgo CFLAGS: -I${'${SRCDIR}'}/../cuda/inference
#cgo LDFLAGS: -L${'${SRCDIR}'}/../../build/cuda \\
  -L/usr/local/cuda/lib64 -lwordle_cuda \\
  -lcudart -lstdc++ -ldl -lpthread
#include "wordle_cuda.h"
*/
import "C"`}
        </CodeBlock>
      </Panel>

      <Panel className="flex flex-col" padding="none">
        <div className="border-b border-border px-6 py-4">
          <p className="font-mono text-lg font-bold text-accent">backend_cgo.go · 82–97</p>
          <p className="mt-1 text-base text-muted">one synchronous complete pass</p>
        </div>
        <CodeBlock className="m-5 flex-1 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-snug" language="go">
          {`logits := make([]float32, cudamodel.NumActions)
rc := C.wordle_cuda_model_infer(
  model.model,
  (*C.float)(unsafe.Pointer(
    unsafe.SliceData(inputs.CandidateMask))),
  (*C.float)(unsafe.Pointer(
    unsafe.SliceData(inputs.CandidateStats))),
  C.int32_t(inputs.Turn),
  (*C.float)(unsafe.Pointer(
    unsafe.SliceData(inputs.RemainingActionMask))),
  (*C.float)(unsafe.Pointer(unsafe.SliceData(logits))),
)
runtime.KeepAlive(inputs.CandidateMask)
runtime.KeepAlive(inputs.CandidateStats)
runtime.KeepAlive(inputs.RemainingActionMask)
runtime.KeepAlive(logits)`}
        </CodeBlock>
      </Panel>
    </div>
  </SlideFrame>
);

export default CgoCodeSlide;
