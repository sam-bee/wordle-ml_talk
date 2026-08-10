import React from 'react';

import { CodeBlock, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

const CgoCodeSlide: React.FC = () => (
  <SlideFrame>
    <SlideHeader
      kicker="The direct route · 03"
      title="The cgo boundary is intentionally boring"
      subtitle="A Go slice enters. One whole forward pass runs. A logits slice comes back. The native side never keeps a Go pointer."
    />

    <div className="mt-5 grid flex-1 grid-cols-[0.84fr_1.16fr] items-start gap-6">
      <div className="min-w-0">
        <p className="mb-2 font-mono text-lg font-bold text-primary">backend_cgo.go · 5–10</p>
        <CodeBlock className="[&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_pre]:p-4 [&_pre]:text-base [&_pre]:leading-[1.25]" language="compile and link the C ABI">
          {`/*
#cgo CFLAGS: -I${'${SRCDIR}'}/../cuda/inference
#cgo LDFLAGS: -L${'${SRCDIR}'}/../../build/cuda -L/usr/local/cuda/lib64 -lwordle_cuda -lcudart -lstdc++ -ldl -lpthread
#include "wordle_cuda.h"
*/
import "C"`}
        </CodeBlock>
        <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-lg leading-snug text-text">
          The ABI accepts pointers only for this synchronous call. Native code retains none of them.
        </div>
      </div>

      <div className="min-w-0">
        <p className="mb-2 font-mono text-lg font-bold text-accent">backend_cgo.go · 82–94</p>
        <CodeBlock className="[&_pre]:whitespace-pre-wrap [&_pre]:break-words [&_pre]:p-4 [&_pre]:text-base [&_pre]:leading-[1.2]" language="one synchronous complete pass">
          {`logits := make([]float32, cudamodel.NumActions)
rc := C.wordle_cuda_model_infer(
    model.model,
    (*C.float)(unsafe.Pointer(unsafe.SliceData(inputs.CandidateMask))),
    (*C.float)(unsafe.Pointer(unsafe.SliceData(inputs.CandidateStats))),
    C.int32_t(inputs.Turn),
    (*C.float)(unsafe.Pointer(unsafe.SliceData(inputs.RemainingActionMask))),
    (*C.float)(unsafe.Pointer(unsafe.SliceData(logits))),
)
runtime.KeepAlive(inputs.CandidateMask)
runtime.KeepAlive(inputs.CandidateStats)
runtime.KeepAlive(inputs.RemainingActionMask)
runtime.KeepAlive(logits)`}
        </CodeBlock>
      </div>
    </div>
  </SlideFrame>
);

export default CgoCodeSlide;
