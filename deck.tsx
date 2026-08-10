import React from 'react';

import type { SlideDefinition } from './types';
import TitleSlide from './slides/01_TitleSlide';
import ContentsSlide from './slides/02_ContentsSlide';
import WordleOverviewSlide from './slides/03_WordleOverviewSlide';
import WordleExampleSlide from './slides/04_WordleExampleSlide';
import DestinationPreviewSlide from './slides/05_DestinationPreviewSlide';
import ProjectJourneySlide from './slides/06_ProjectJourneySlide';
import VocabularySlide from './slides/07_VocabularySlide';
import TeacherRuleSlide from './slides/08_TeacherRuleSlide';
import TeacherCodeSlide from './slides/09_TeacherCodeSlide';
import WorkerPoolSlide from './slides/10_WorkerPoolSlide';
import SyntheticExampleSlide from './slides/11_SyntheticExampleSlide';
import CorpusSplitSlide from './slides/12_CorpusSplitSlide';
import ModelInputsSlide from './slides/13_ModelInputsSlide';
import CandidateStatsSlide from './slides/14_CandidateStatsSlide';
import PolicyArchitectureSlide from './slides/15_PolicyArchitectureSlide';
import PolicyOutputSlide from './slides/16_PolicyOutputSlide';
import ImitationLearningSlide from './slides/17_ImitationLearningSlide';
import GoMLXTrainingSlide from './slides/18_GoMLXTrainingSlide';
import ProofStagesSlide from './slides/19_ProofStagesSlide';
import TrainingResultsSlide from './slides/20_TrainingResultsSlide';
import PivotExportSlide from './slides/21_PivotExportSlide';
import ControlPlaneCudaSlide from './slides/22_ControlPlaneCudaSlide';
import CgoCodeSlide from './slides/23_CgoCodeSlide';
import CudaHandleSlide from './slides/24_CudaHandleSlide';
import KernelSequenceSlide from './slides/25_KernelSequenceSlide';
import LaunchShapeSlide from './slides/26_LaunchShapeSlide';
import BlockReductionSlide from './slides/27_BlockReductionSlide';
import MemoryJourneySlide from './slides/28_MemoryJourneySlide';
import NsightSystemsSlide from './slides/29_NsightSystemsSlide';
import NsightComputeSlide from './slides/30_NsightComputeSlide';
import ParityBenchmarkSlide from './slides/31_ParityBenchmarkSlide';
import FinalHeldOutSlide from './slides/32_FinalHeldOutSlide';
import FinalApplicationSlide from './slides/33_FinalApplicationSlide';

export const slides: SlideDefinition[] = [
  {
    content: <TitleSlide />,
    notes: [
      'Hello, everyone. I am Sam Burns.',
      'This is the story of a Go program that teaches a compact model to play Wordle, trains it on a GPU, and then runs the fixed forward pass through hand-written CUDA behind cgo.',
      'The important distinction up front: the successful training path used GoMLX, XLA, and CUDA. The later hand-written CUDA work replaces inference only.',
      '[The target running time is 55 minutes, leaving five minutes for questions.]',
    ],
    speech: { cues: ['from Go to the GPU', 'integrating with CUDA'] },
    title: 'From Go to the GPU: Integrating with CUDA',
  },
  {
    content: <ContentsSlide />,
    notes: [
      'There is one linear route through the talk: Wordle, a Go teacher, synthetic examples, a compact model, GoMLX training, an explicit cgo/CUDA inference path, and finally the application.',
      'Go will own the rules, data, orchestration, validation, selection, and serving. The GPU will own the dense numerical work.',
      'By the end, we will follow one real inference request across the language and device boundary.',
    ],
    title: 'Contents',
  },
  {
    content: <WordleOverviewSlide />,
    notes: [
      'For anyone who has not played: Wordle chooses a secret five-letter word, and you have six attempts to find it.',
      'Green means the right letter in the right place, yellow means the letter belongs elsewhere, and grey means it is absent.',
      'Every feedback pattern narrows the remaining candidate solutions. That choose, observe, narrow loop is the decision problem.',
    ],
    title: 'Wordle in 60 seconds',
  },
  {
    content: step => <WordleExampleSlide visibleGuessCount={step + 1} />,
    notes: [
      'Here is the idea that shapes the rest of the project.',
      '[First reveal] RAISE leaves five possible answers: SCARE, SHARE, SNARE, SPARE, and STARE.',
      '[Advance once] CHANT cannot be the answer, but it probes four fresh letters and places A somewhere new.',
      '[Advance again] SPARE solves the game.',
      'A useful next action is not always a possible answer. The model must be able to score both.',
    ],
    stepCount: 3,
    title: 'Not every guess is an answer',
  },
  {
    content: <DestinationPreviewSlide />,
    notes: [
      'This checked-in browser capture is where the story ends: ADEPT solved in three guesses through the direct CUDA/cgo backend on an RTX 5070 Ti.',
      'It is a demo of the finished application, not training evidence and not a claim that the model was trained in hand-written CUDA.',
      'Now we will build every part of the path behind this screen.',
    ],
    title: 'A working CUDA/cgo Wordle application',
  },
  {
    content: <ProjectJourneySlide />,
    notes: [
      'Keep this map in mind; we will return to it at the end.',
      'The Go game engine is authoritative for feedback and the candidate shortlist. The Go teacher turns that state into ranked actions and the generator turns those decisions into examples.',
      'GoMLX builds and trains the policy graph on CUDA. Later, the exported fixed model is served through one explicit cgo boundary.',
      'The project is still a Go system. The GPU is a deliberately narrow numerical component.',
    ],
    title: 'Go is the control plane',
  },
  {
    content: <VocabularySlide />,
    notes: [
      'The Wordle snapshot contains 2,309 possible solutions and 12,947 accepted guesses.',
      'The policy uses a fixed 4,739-action vocabulary: every solution plus 2,430 additional words selected using SUBTLEX-US frequencies from 51 million words of American film subtitles.',
      'That choice admits probes while keeping every real answer selectable. It also imports the corpus biases, and the exact historical frequency cutoff was not recorded.',
      'Stable IDs make datasets, checkpoints, exported tensors, and returned logits refer to the same words.',
    ],
    title: 'Answers and useful guesses are different sets',
  },
  {
    content: <TeacherRuleSlide />,
    notes: [
      'The teacher evaluates every unused action against the current shortlist.',
      'For a candidate guess, it groups the remaining solutions by their complete five-tile feedback pattern. There are three states per tile, so 3 to the fifth power gives 243 patterns.',
      'The largest bucket is the worst case. The teacher prefers the guess with the smallest worst-case bucket.',
      'Equal worst cases prefer a word that could still be the answer, then the lower canonical action ID. This remains deterministic while allowing probe guesses.',
    ],
    title: 'Choose the guess with the safest worst case',
  },
  {
    content: <TeacherCodeSlide />,
    notes: [
      'This is the actual core loop from the synthetic-data repository.',
      'The feedback matrix has already calculated the pattern for every action and possible solution, so ranking reuses one row instead of recomputing Wordle rules.',
      'For each unused guess, the loop counts the shortlist into feedback buckets and remembers the largest count.',
      'The following code converts that value into the reduction ratio and inserts the action into the deterministic top 16.',
    ],
    title: 'The Go teacher loop',
  },
  {
    content: step => <WorkerPoolSlide step={step} />,
    notes: [
      '[First reveal] A jobs channel supplies hidden solution IDs.',
      '[Advance once] A fixed worker pool generates all states for different solutions in parallel. The shared feedback matrix and teacher are immutable after construction.',
      '[Advance again] Results are collected and sorted before writing. Each solution derives its random stream from the fixed seed and its solution ID, so changing worker count does not change the histories.',
      'This is Go concurrency accelerating corpus construction; it is not parallel model inference.',
    ],
    stepCount: 3,
    title: 'Parallel generation, deterministic artifacts',
  },
  {
    content: <SyntheticExampleSlide />,
    notes: [
      'One generated example represents an incomplete, internally consistent game state.',
      'It stores the history, a 289-byte bitset of remaining solution IDs, and the teacher top 16 with reduction ratios and worst-case sizes.',
      'The generator keeps states from normal teacher trajectories, then fills each depth bucket with random valid histories for the same hidden answer.',
      'The teacher can deliberate expensively once. Training later reads a frozen target without running search in its hot path.',
    ],
    title: 'A state becomes a labelled example',
  },
  {
    content: <CorpusSplitSlide />,
    notes: [
      'Split by hidden solution, not by generated row: 2,109 answers for training, 100 for validation, and 100 held for the final check.',
      'WDIT v3 release v0.1.0 freezes 52,726 training records, 1,600 mini records, and 2,500 records in each validation and final-test corpus.',
      'One caveat is retained honestly: 190 of 2,445 unique encoded validation states also occur in training, with agreeing teacher labels. That is state-distribution overlap, not solution-ID leakage.',
      'The separate 2,500-record final WDIT corpus remains unopened throughout the project described here.',
    ],
    title: 'Freeze the corpus and split by hidden answer',
  },
  {
    content: <ModelInputsSlide />,
    notes: [
      'One shared Go encoder consumes the 289-byte LSB-first candidate bitset and a turn from zero through five.',
      'It emits the 2,309-value candidate mask, 209 candidate statistics, the integer turn, and the 4,739-value remaining-action mask.',
      'That final mask identifies actions which are still possible solutions. It is a learned feature, not the availability or legality mask.',
      'The same package expands generated records and live board states, preventing representation drift between training and serving.',
    ],
    title: 'One compact state becomes four tensors',
  },
  {
    content: <CandidateStatsSlide />,
    notes: [
      'The candidate mask is divided by its row sum before projection, so its 96 learned outputs become a mean over remaining words.',
      'The 209 explicit statistics contain 130 positional frequencies, 78 letter-multiplicity frequencies, and one normalized log candidate count.',
      'The explicit count restores the magnitude that normalization intentionally removed.',
    ],
    title: 'Mean shape, plus the missing size',
  },
  {
    content: step => <PolicyArchitectureSlide step={step} />,
    notes: [
      '[First reveal] Project the candidate mask to 96 features, the statistics to 48, and the turn through a 16-value embedding.',
      '[Advance once] Concatenate them into a width-160 state, then run one two-layer residual block with an identity skip.',
      '[Advance again] Produce 4,739 base action logits plus one scalar candidate bonus.',
      'This is deliberately small: no attention, dropout, normalization, value head, or giant language model.',
    ],
    stepCount: 3,
    title: 'A compact Wordle policy',
  },
  {
    content: <PolicyOutputSlide />,
    notes: [
      'Each action keeps an ordinary base logit. The network also learns one beta for the current state and adds it only where the action remains a candidate solution.',
      'A probe like CHANT receives no candidate bonus but keeps its base score and remains playable.',
      'The exact architecture has 1,046,596 FP32 trainable parameters, occupying 4,186,384 bytes, or about 3.99 MiB.',
      'The 4,739-wide output layer contains most of the weights, so the action vocabulary is part of the architecture.',
    ],
    title: '4,739 scores and one learned nudge',
  },
  {
    content: <ImitationLearningSlide />,
    notes: [
      'Training is supervised imitation, not reinforcement learning.',
      'The frozen teacher top-one action is the loss target. The stored top 16 is used for agreement metrics, not as sixteen simultaneous targets.',
      'A separate availability mask turns only already-used actions into negative infinity before selection and loss. It must not be confused with the candidate-bonus input.',
      'Adam updates FP32 weights; global gradient norm is clipped at five; the deterministic seed is 20260808.',
    ],
    title: 'Teach the policy one good guess at a time',
  },
  {
    content: <GoMLXTrainingSlide />,
    notes: [
      'This is real code from the policy graph: concatenate the branches, run the residual trunk, then produce base logits and beta.',
      'GoMLX lets Go describe the graph. The trainer adds masked cross-entropy and backpropagation, and XLA/PJRT compiles the graph for the CUDA backend.',
      'This was the route that produced the successful checkpoint. The hand-written CUDA code we will see later implements only the fixed forward pass.',
    ],
    title: 'Go builds the graph; XLA runs it on CUDA',
  },
  {
    content: <ProofStagesSlide />,
    notes: [
      'The proof climbs a fixed ladder: overfit one batch for 400 updates, exercise a 1,000-update mini corpus with a required stop and resume at 500, then run the 2,000-update full stage.',
      'Validation and checkpointing happen every 100 updates, while TensorBoard telemetry is written every 10.',
      'Each run retains immutable configuration, initial, latest, and best checkpoints, logs, events, and evaluation artifacts.',
      'These deliberately boring gates make the result reproducible and failures diagnosable.',
    ],
    title: 'A ladder of fixed experiments',
  },
  {
    content: <TrainingResultsSlide />,
    notes: [
      'Lead with gameplay: on the same 100 validation solutions, the proof moved from 4 solved games to 97, and mean guesses fell from 5.86 to 3.65.',
      'Validation loss fell from 8.3005 to 3.1633 and teacher top-one agreement rose from 0.0056 to 0.5008.',
      'The fixed 10,000-update production continuation selected update 2,200. Its validation metrics improved slightly, but it still solved 97 games and mean guesses rose to 3.68.',
      'A better proxy metric did not produce a better gameplay success rate. These are still validation-only results.',
    ],
    title: 'The model learned to play',
  },
  {
    content: <PivotExportSlide />,
    notes: [
      'At this point the model works. Training and inference are now separate engineering problems.',
      'The offline exporter is allowed to understand GoMLX checkpoints. The direct serving binary is not.',
      'The selected export is seed-replication-20260809-132505Z, best update 2,600: one manifest, a 4,186,384-byte FP32 weight payload, and golden vectors and games.',
      'Dense matrices are transposed once into documented output-major rows, then dimensions, vocabulary hashes, finite values, payload size, and SHA-256 are validated.',
    ],
    title: 'Train with GoMLX; serve a portable model',
  },
  {
    content: <ControlPlaneCudaSlide />,
    notes: [
      'One Go process owns HTTP, the authoritative Wordle engine, vocabulary identity, state encoding, action availability, tie-breaking, and progression.',
      'A dedicated goroutine is locked to one OS thread and serializes requests to one native model handle.',
      'CUDA receives the four model tensors and returns 4,739 raw logits. It does not receive the availability mask and does not know Wordle rules.',
      'Go applies duplicate suppression and deterministic legal selection after the numerical call returns.',
    ],
    title: 'Go control plane, CUDA numerical data plane',
  },
  {
    content: <CgoCodeSlide />,
    notes: [
      'The left crop is the real cgo preamble linking the CUDA-built library and runtime. The right crop is the one call that crosses the boundary.',
      'All four input slices and the output slice are flat and fixed in shape. Runtime KeepAlive makes their Go lifetime explicit.',
      'C never retains a Go pointer. The native call is synchronous and returns only after the device-to-host logits copy and stream synchronization.',
      'One call for the whole model avoids repeated language crossings and keeps stream ordering and profiling coherent.',
    ],
    title: 'The whole forward pass crosses cgo once',
  },
  {
    content: <CudaHandleSlide />,
    notes: [
      'cgo speaks a plain C ABI even though the implementation behind it is CUDA C++.',
      'The opaque handle owns one stream, one contiguous device allocation for every weight, persistent input and activation buffers, residual scratch, beta, logits, and error metadata.',
      'Creation allocates and uploads. Inference reuses those allocations. Destruction frees them on the same locked worker thread.',
      'There is no cudaMalloc, cudaFree, stream creation, or stream destruction in the inference hot path.',
    ],
    title: 'The opaque handle owns the GPU state',
  },
  {
    content: <KernelSequenceSlide />,
    notes: [
      'The fixed GoMLX graph becomes seven readable CUDA kernels in one stream.',
      'The host has already checked that the candidate set is non-empty and passes its reciprocal, avoiding an eighth normalization kernel.',
      'There is no softmax because Go only needs an ordering of raw logits. There is no CUDA argmax or legality rule.',
      'The final launch has one block for every action. That one kernel is enough to explain CUDA execution vocabulary.',
    ],
    title: 'The neural network became seven kernels',
  },
  {
    content: <LaunchShapeSlide />,
    notes: [
      'The real final launch is policy_logits_with_bonus with 4,739 blocks and 128 threads in each block.',
      'A thread is one logical execution lane, not a goroutine. Thirty-two lanes form a warp, and 128 threads form four warps in the block.',
      'Each block computes one action logit, so the complete grid contains 606,592 logical thread positions.',
      'They are not all physically resident at once. The GPU schedules blocks in waves across its finite streaming multiprocessors.',
    ],
    title: 'A kernel launch has a shape',
  },
  {
    content: <BlockReductionSlide />,
    notes: [
      'Within one block, threads take strided portions of the 160-value dot product and accumulate partial sums in registers.',
      'Each warp reduces its 32 partials using shuffle instructions. Four warp leaders then place four subtotals in block shared memory.',
      'The first warp reduces those four values; one lane adds the bias and candidate bonus, then writes the action logit.',
      'Shared memory belongs to one block. Blocks cannot use it to share their subtotals with one another.',
    ],
    title: 'One block cooperates to calculate one score',
  },
  {
    content: <MemoryJourneySlide />,
    notes: [
      'Go owns the four logical inputs, but turn travels as a scalar kernel argument, so each inference performs three host-to-device copies.',
      'Weights, inputs, activations, residual scratch, beta, and logits live in device global memory. Hardware caches repeated reads where useful.',
      'One thread keeps its running accumulator in registers; four warp subtotals use the small block-shared allocation.',
      'One logits buffer returns to Go through a device-to-host copy. CUDA local memory would mean spills into device memory, not a fast local stack.',
    ],
    title: 'GPU memory has scope',
  },
  {
    content: <NsightSystemsSlide />,
    notes: [
      'Nsight Systems is the wide-angle lens: CPU thread, CUDA API calls, copies, launches, and synchronization over time.',
      'This slide-native timeline is explicitly reconstructed from the captured report; it is not a fabricated GUI screenshot.',
      'The report contains 41 complete inference ranges: one cold call, 20 warm-ups, and 20 measured calls. Every named kernel appears 41 times.',
      'Across the whole capture there are 124 host-to-device copies: one weight upload plus three per inference, and 41 device-to-host logits copies.',
    ],
    title: 'Nsight Systems: the whole request',
  },
  {
    content: <NsightComputeSlide />,
    notes: [
      'Nsight Compute is the microscope: detailed measurements for one kernel.',
      'For policy_logits_with_bonus it reports the expected 4,739 by 128 launch, 11.36 microseconds, 40 registers per thread, and no local or shared-memory spills.',
      'It measured 16 bytes static plus 1.02 KiB driver shared memory per block, 69.89 percent achieved occupancy, 270.81 GB per second memory throughput, and 30.83 percent DRAM throughput.',
      'Occupancy is a constraint and diagnostic, not a score where 100 percent automatically means fast. This is one observed kernel, not a universal performance claim.',
    ],
    title: 'Nsight Compute: inside one kernel',
  },
  {
    content: <ParityBenchmarkSlide />,
    notes: [
      'Correctness comes before speed. Thirty-two golden positions agree on top one, top five, and the selected action.',
      'Across 151,648 compared logits, the maximum absolute GoMLX-to-CUDA error is 7.62939453125e-06, with no tolerance failure or documented near tie.',
      'All 100 validation-game trajectories match exactly for this exported checkpoint; both paths solve 98 with a 3.66 mean.',
      'The batch-one CUDA call measured 421,870 nanoseconds cold. Across 200 warm calls the mean was 94,945 ns, p50 94,010 ns, and p95 111,400 ns.',
      'There is no comparable GoMLX timing here, so there is no speedup claim. The achievement is explicit ownership, visibility, and parity.',
    ],
    title: 'The CUDA path agrees with the reference',
  },
  {
    content: <FinalHeldOutSlide />,
    notes: [
      'Only after checkpoint and implementation selection did the claim-guarded evaluator score the 100 held-out solution IDs once through CUDA/cgo.',
      'It solved 97, failed three, averaged 3.75 guesses with failures counted as six, and made zero invalid selections.',
      'The sanitized artifact contains only aggregate facts—no words, guesses, trajectories, or failed-solution list.',
      'No tuning followed. The distinct 2,500-record final WDIT corpus remains unopened, so do not overstate this as a broad generalization result.',
    ],
    title: 'One intentional held-out aggregate',
  },
  {
    content: <FinalApplicationSlide />,
    notes: [
      'Return to the application from the opening preview.',
      'The direct demo is one Go process at port 8083. The browser shows the cuda-cgo backend, selected model, checkpoint, update, and device identity.',
      'The serving binary imports no GoMLX, PJRT, or XLA. Go remains responsible for the game and action choice; the native side runs only the fixed numerical forward pass.',
      'The three lessons are: Go is excellent for the surrounding system; GoMLX was the fastest route to proving the model and backpropagation; cgo and CUDA made the interesting numerical boundary explicit.',
      '[A user-chosen browser game is a demo, not validation or final-test evidence.]',
    ],
    title: 'Back to the application',
  },
];

export const clampSlideIndex = (slideIndex: number) =>
  Math.min(slides.length - 1, Math.max(0, slideIndex));
