import React from 'react';

import type { SlideDefinition } from './types';
import TitleSlide from './slides/01_TitleSlide';
import DestinationPreviewSlide from './slides/02_DestinationPreviewSlide';
import ContentsSlide from './slides/03_ContentsSlide';
import ActDividerDataSlide from './slides/04_ActDividerSlide';
import WordleOverviewSlide from './slides/05_WordleOverviewSlide';
import WordleExampleSlide from './slides/06_WordleExampleSlide';
import OriginalDataSourcesSlide from './slides/07_OriginalDataSourcesSlide';
import VocabularySlide from './slides/08_VocabularySlide';
import StrategyGoWordleSlide from './slides/09_StrategyGoWordleSlide';
import WorstCaseFeedbackSlide from './slides/10_WorstCaseFeedbackSlide';
import ScoreGuessPseudocodeSlide from './slides/11_ScoreGuessPseudocodeSlide';
import ChooseGuessPseudocodeSlide from './slides/12_ChooseGuessPseudocodeSlide';
import GoroutineWorkerPoolSlide from './slides/13_GoroutineWorkerPoolSlide';
import CorpusSplitSlide from './slides/14_CorpusSplitSlide';
import ActDividerTrainingSlide from './slides/15_ActDividerSlide';
import TrainingFalseStartsSlide from './slides/16_TrainingFalseStartsSlide';
import ModelArchitectureIntroSlide from './slides/17_ModelArchitectureIntroSlide';
import ModelArchitectureInputsSlide from './slides/18_ModelArchitectureInputsSlide';
import ModelArchitectureOutputsSlide from './slides/19_ModelArchitectureOutputsSlide';
import PolicyArchitectureSlide from './slides/20_PolicyArchitectureSlide';
import PolicyOutputSlide from './slides/21_PolicyOutputSlide';
import GoMLXIntroSlide from './slides/22_GoMLXIntroSlide';
import GoMLXModelCodeSlide from './slides/23_GoMLXModelCodeSlide';
import BackpropagationSlide from './slides/24_BackpropagationSlide';
import GoMLXTrainingSlide from './slides/25_GoMLXTrainingSlide';
import TensorBoardIntroSlide from './slides/26_TensorBoardIntroSlide';
import TensorBoardTrainTop1Slide from './slides/27_TensorBoardTrainTop1Slide';
import TensorBoardBetaMeanSlide from './slides/28_TensorBoardBetaMeanSlide';
import TensorBoardBetaHistogramSlide from './slides/29_TensorBoardBetaHistogramSlide';
import ProofStagesSlide from './slides/30_ProofStagesSlide';
import TensorBoardSlide from './slides/31_TensorBoardSlide';
import TrainingResultsSlide from './slides/32_TrainingResultsSlide';
import ActDividerInferenceSlide from './slides/33_ActDividerSlide';
import InferenceGoalSlide from './slides/34_InferenceGoalSlide';
import InferenceRoutesSlide from './slides/35_InferenceRoutesSlide';
import CudaPrimerShortSlide from './slides/36_CudaPrimerShortSlide';
import GpuMemorySlide from './slides/37_GpuMemorySlide';
import CgoIntegrationCodeSlide from './slides/38_CgoIntegrationCodeSlide';
import InferenceRequestSlide from './slides/39_InferenceRequestSlide';
import WordleLaunchSlide from './slides/40_WordleLaunchSlide';
import NsightSystemsExampleSlide from './slides/41_NsightSystemsExampleSlide';
import NsightComputeExampleSlide from './slides/42_NsightComputeExampleSlide';
import CudaWebAppDemoSlide from './slides/43_CudaWebAppDemoSlide';
import ItWorksSlide from './slides/44_ItWorksSlide';
import ClosingSlide from './slides/45_ClosingSlide';

export const slides: SlideDefinition[] = [
  {
    content: <TitleSlide />,
    notes: [
      'Welcome — Sam Burns · GoCardless',
      'Practical Go/CUDA integration, via a Wordle model',
      'No Q&A slot — contact links for follow-up',
    ],
    speech: { cues: ['from Go to the GPU', 'integrating with CUDA'] },
    title: 'From Go to the GPU: Integrating with CUDA',
  },
  {
    content: <DestinationPreviewSlide />,
    notes: [
      'Quick hands — played Wordle? played this week?',
      'Destination: a neural net that plays Wordle',
      'Real Go → cgo → CUDA backend',
    ],
    title: 'A working CUDA/cgo Wordle application',
  },
  {
    content: <ContentsSlide />,
    notes: [
      'Three acts — Data → Training → Inference',
      'Data — word lists, Go teacher, training examples',
      'Training — neural net, backpropagation, GoMLX',
      'Inference — hand-written CUDA behind a Go service',
      'Go throughout',
    ],
    title: 'Contents',
  },
  {
    content: <ActDividerDataSlide active="data" number="01" title="Data" promise="Code a Wordle player in Go, and use it to generate training data" />,
    notes: [
      'Act 1 — build the training data',
      'Need valid Wordle states + strong next moves',
      'Go teacher — good enough, not perfect',
      'Timing target: ~2:52',
    ],
    speech: { cues: ['data', 'build a teacher'] },
    title: 'Data',
  },
  {
    content: <WordleOverviewSlide />,
    notes: [
      '[Quick rules] five letters · six guesses',
      'Green = right place · yellow = elsewhere',
      'Grey = no unmatched copy of that letter remains',
      'Every row narrows the candidate list',
    ],
    title: 'Wordle in 60 seconds',
  },
  {
    content: step => <WordleExampleSlide visibleGuessCount={step + 1} />,
    notes: [
      '[1 · RAISE] five possible answers remain',
      '[2 · CHANT] probe C / H / N / T',
      '[3 · SPARE] elimination → solve',
      'Useful move ≠ possible answer',
    ],
    stepCount: 3,
    title: 'Not every useful guess is an answer',
  },
  {
    content: step => <OriginalDataSourcesSlide step={step} />,
    notes: [
      '[Opening] two word-list sources — not training examples',
      '[1 · NYT] browser JavaScript word lists',
      '2,309 solutions · 12,947 legal guesses',
      '[2 · SUBTLEX-US] Ghent subtitle-frequency research',
      'Common spoken five-letter words → useful probes',
    ],
    stepCount: 3,
    title: 'Original sources for the word lists',
  },
  {
    content: <VocabularySlide />,
    notes: [
      'Game dictionary ≠ model action space',
      'All 2,309 solutions must remain playable',
      '+ 2,430 common probes from SUBTLEX-US',
      '= 4,739 fixed model actions',
      'Smaller output layer → smaller, faster model',
    ],
    title: 'Where the words came from',
  },
  {
    content: <StrategyGoWordleSlide />,
    notes: [
      'Shortlist = remaining possible answers',
      'Feedback = tile-colour pattern',
      'Worst case = largest next-turn bucket',
      'Teacher minimises that carry-over',
    ],
    title: 'Strategy for the Go Wordle Player',
  },
  {
    content: <WorstCaseFeedbackSlide />,
    notes: [
      'After RAISE — five possible answers',
      'For each guess: group answers by resulting feedback',
      'SCARE → worst bucket 4 / 5 = 80%',
      'CHANT → five one-word buckets = 20%',
      'Choose the smaller worst case',
    ],
    title: 'Minimise the worst-case carry-over',
  },
  {
    content: <ScoreGuessPseudocodeSlide />,
    notes: [
      'Try one guess against every possible answer',
      'Same feedback → same next-turn bucket',
      'Score = size of the largest bucket',
      'SCARE: 4 · CHANT: 1',
    ],
    title: 'Score a guess by its largest feedback bucket',
  },
  {
    content: <ChooseGuessPseudocodeSlide />,
    notes: [
      'Search all 4,739 unused actions — not only candidates',
      'Score each by its largest feedback bucket',
      'One-step minimax — minimise the maximum carry-over',
      'Probe words remain eligible',
      'Tie: candidate first, then lower stable word ID',
    ],
    title: 'Choose the action with the smallest worst case',
  },
  {
    content: <GoroutineWorkerPoolSlide />,
    notes: [
      'Player implementation\'s per-guess worker pool',
      'Exact player count: max(NumCPU-1, 1)',
      'Fan out guesses · local winner per worker · fan in',
      'Final WDIT generator: whole solution IDs across GOMAXPROCS workers',
      'Final WDIT generator: precomputed feedback matrix',
    ],
    title: 'Fan out guesses; fan in one winner',
  },
  {
    content: <CorpusSplitSlide />,
    notes: [
      '2,109 train · 100 validation · 100 final-test answers',
      'Final answers: sealed during selection; scored once post-selection by CUDA',
      'Final gameplay: 97 / 100 · failure-counted mean 3.75 · no tuning after',
      'Teacher-trajectory states + random internally-valid partial histories',
      '52,726 train · 1,600 mini engineering subset',
      '2,500 validation · 2,500 final WDIT records',
      '[Guardrail] Record counts are labelled positions, not complete games',
      '2,500-record final WDIT corpus remains unopened',
    ],
    title: 'Freeze the corpus; split by answer',
  },
  {
    content: <ActDividerTrainingSlide active="training" number="02" title="Training" promise="Compress the teacher into a small policy using backpropagation and GoMLX." />,
    notes: [
      'Act 2 — Training',
      'Frozen state/action examples → compact policy',
      'GoMLX + backpropagation',
      'Train, evaluate, choose checkpoint',
      'Timing target: ~18:30',
    ],
    speech: { cues: ['training', 'compact policy'] },
    title: 'Training',
  },
  {
    content: <TrainingFalseStartsSlide />,
    notes: [
      'Nearly a talk about fifteen failed architectures',
      'Normal loop — vary, train, inspect, repeat',
      'Eventually: a more complex design that works',
    ],
    title: 'Most of my models did not work',
  },
  {
    content: <ModelArchitectureIntroSlide />,
    notes: [
      'Inputs — candidates · statistics · turn',
      'Statistics — position frequencies · repetition frequencies · log shortlist size',
      'Neural net — 1,046,596 trainable weights',
      'Outputs — 4,739 possible-guess scores',
      'Input branches → trunk → output head',
    ],
    title: 'A neural network that plays Wordle',
  },
  {
    content: <ModelArchitectureInputsSlide />,
    notes: [
      'Candidate mask: surviving solution IDs · normalise → 96',
      '209 candidate statistics → 48 learned features',
      'The 209 statistics are aggregate properties of the remaining candidate answers, not a direct record of known grey, yellow and green letters.',
      'Position frequencies · repetition frequencies · candidate-count information',
      'Turn 0–5 → one learned 16-value vector',
      'Concatenate: 96 + 48 + 16 = 160',
    ],
    title: 'Model architecture: inputs',
  },
  {
    content: <ModelArchitectureOutputsSlide />,
    notes: [
      '160-value state → 4,739 base logits',
      'Logit = relative raw score, not probability',
      'Positive β boosts still-possible answers',
      'Negative β penalises those actions; probe logits unchanged',
      'Base logits still participate in deciding the winner',
      'Used-word availability mask handled separately',
    ],
    title: 'Model architecture: outputs',
  },
  {
    content: <PolicyArchitectureSlide />,
    notes: [
      'Three branches: 96 + 48 + 16 → 160',
      'ReLU = max(0, x)',
      'Two dense 160-wide layers + residual shortcut',
      'Policy head: 4,739 logits · separate β branch',
      'Diagram abbreviated — circles represent 160-wide layers',
    ],
    title: 'A compact Wordle policy',
  },
  {
    content: <PolicyOutputSlide />,
    notes: [
      'logits = baseLogits + β × remainingActionMask',
      'remainingActionMask = actions which are still possible answers',
      'Learned preference input — not a legality rule',
      'candidateMask = separate 2,309-value shortlist input',
      '1,046,596 FP32 weights · 3.99 MiB',
      'Go availability mask: used guesses → −∞ before ArgMax',
    ],
    title: '4,739 scores and one learned nudge',
  },
  {
    content: <GoMLXIntroSlide />,
    notes: [
      'Go-first machine-learning framework',
      'Ordinary Go model code',
      'Layers · autodiff · optimisers · datasets · checkpoints',
      'XLA / PJRT backend → CUDA GPU',
    ],
    title: 'GoMLX: machine learning in Go',
  },
  {
    content: <GoMLXModelCodeSlide />,
    notes: [
      'Go declarations build a computation graph',
      'DenseWithBias = learned projection',
      'ReLU = zero negative values',
      'Embedding = turn ID → 16-value lookup',
      'Concatenate: 96 + 48 + 16 → 160',
    ],
    title: 'Programming the policy with GoMLX',
  },
  {
    content: step => <BackpropagationSlide step={step} />,
    notes: [
      '[1 · State] batch of encoded Wordle positions',
      '[2 · Scores] 4,739 actions per position',
      '[3 · Loss] cross-entropy against teacher choice',
      '[4 · Backprop] gradients for each weight',
      '[5 · Adam] batch update · gradient clipping',
      'Cross-entropy measures the error, backpropagation computes gradients, and Adam uses those gradients to update a batch at a time.',
      'Repeat — batches drawn from 52,726 labelled positions',
    ],
    stepCount: 5,
    title: 'Backpropagation: blame, nudge, repeat',
  },
  {
    content: <GoMLXTrainingSlide />,
    notes: [
      'Real GoMLX: residual trunk · logits · β branch',
      'GoMLX: model · loss · autodiff · optimiser',
      'XLA / PJRT compiles the training graph',
      'CUDA GPU executes the numerical work',
      'Hand-written CUDA later = inference only',
    ],
    title: 'Go describes the graph; XLA runs it on CUDA',
  },
  {
    content: <TensorBoardIntroSlide />,
    notes: [
      'Google / TensorFlow visualisation tool',
      'Browser dashboard for training measurements',
      'Scalars over time · histograms of distributions',
      'Our Go writer emits its event-file format',
      'Graphs: seed replication · same setup, new seed',
    ],
    title: 'TensorBoard: the training dashboard',
  },
  {
    content: <TensorBoardTrainTop1Slide />,
    notes: [
      'Top-1 = model\'s first choice matches teacher\'s',
      'Training batches: 0.7% → 76.7%',
      '10,000 updates — fast rise, then slower gains',
      '[Guardrail] not Wordle win rate or held-out accuracy',
    ],
    title: 'The model learns to copy the teacher',
  },
  {
    content: <TensorBoardBetaMeanSlide />,
    notes: [
      'β = state-specific candidate logit adjustment',
      'Mean across 2,500 validation positions',
      'Approximately zero → +33.35',
      'Positive β → bias toward candidates',
      '[Guardrail] logit units — not percentage points',
    ],
    title: 'The candidate bonus becomes substantial',
  },
  {
    content: <TensorBoardBetaHistogramSlide />,
    notes: [
      'One ridge = one saved validation checkpoint',
      'Each ridge buckets 2,500 position-specific β values',
      'Early: narrow, near zero',
      'Later: mostly positive, much broader',
      'Lines = checkpoints/buckets — not games or neurons',
      '“Each of these pink ridges is a histogram of the beta value across 2,500 validation positions at one point during training. Left to right is the value of beta: negative means the model is pushing possible answers down relative to probe words, and positive means it is boosting them. Early in training those values are clustered close to zero; later the distribution becomes much broader and mostly positive. So the model hasn’t just learned one fixed preference for answers over probes — it has learned to make that trade-off differently depending on the Wordle position.”',
    ],
    title: 'Beta depends on the Wordle position',
  },
  {
    content: <ProofStagesSlide />,
    notes: [
      'Cheap failure checks before a long GPU run',
      'One-batch overfit: 400 updates · can it memorise?',
      'Mini: stop at 500, resume · preserve training state?',
      'Full proof: 2,000 updates · batch 256',
      'Fixed validation games: 97 / 100 · mean 3.65',
    ],
    title: 'Prove the loop before the long run',
  },
  {
    content: <TensorBoardSlide />,
    notes: [
      'Seed-replication validation-loss trace',
      'Minimum 3.1842 at update 2,600',
      'Training continues; loss rises to 4.6436 at 10,000',
      'Evidence of overfitting — latest ≠ best',
      'Select/export update 2,600',
    ],
    title: 'TensorBoard tells us when to stop choosing',
  },
  {
    content: <TrainingResultsSlide />,
    notes: [
      'Same fixed 100-answer validation set used during selection',
      'Initial random-weight policy: 4 / 100 · mean 5.86',
      'Proof + production: 97 / 100',
      'Fresh-seed repeat: 98 / 100 · mean 3.66',
      'The 97 and 98 results are on a fixed validation set used during selection; the separate one-time final-test result was 97/100 at 3.75 guesses.',
      'One repeat = reproducibility reassurance, not a confidence interval',
      'Repeat checkpoint exported to CUDA',
    ],
    title: 'The model learned to play',
  },
  {
    content: <ActDividerInferenceSlide active="inference" number="03" title="Inference" promise="Keep Wordle in Go; make one fixed numerical forward pass explicit in CUDA." />,
    notes: [
      'Act 3 — Inference',
      '“Can it play?” answered — now systems engineering',
      'Freeze/export the selected checkpoint',
      'Go service + one fixed CUDA forward pass',
      'Not rewriting training in CUDA',
      'Timing target: ~45:41',
    ],
    speech: { cues: ['inference', 'peel back the framework'] },
    title: 'Inference',
  },
  {
    content: <InferenceGoalSlide />,
    notes: [
      'Browser → Go → cgo → CUDA → Go',
      'Go: HTTP · game state · encoding · available moves',
      'CUDA: four inputs → seven kernels → 4,739 logits',
      'GoMLX could serve; custom CUDA exposes the boundary',
    ],
    title: 'The goal: a Go service invokes CUDA',
  },
  {
    content: <InferenceRoutesSlide />,
    notes: [
      'GoMLX → XLA → CUDA — easiest, already works',
      'Driver API binding → libcuda',
      'Driver route: contexts · modules · buffers · launches',
      'Demo route: cgo → C ABI → CUDA Runtime',
      'FFI = one language calling another\'s binary interface',
    ],
    title: 'Three ways Go could reach the GPU',
  },
  {
    content: <CudaPrimerShortSlide />,
    notes: [
      'CPU host controls a separate GPU device',
      'Separate memory — copy inputs in, outputs back',
      'Kernel = GPU function',
      'Thread = tiny lane · block = cooperating threads',
      'Grid = every block in one launch',
      '[Guardrail] CUDA thread ≠ goroutine',
    ],
    title: 'CUDA: host code launches work on a device',
  },
  {
    content: <GpuMemorySlide />,
    notes: [
      'Different scope, location, lifetime, speed',
      'Upper figures = CC 12.0 limits · bottom = this GPU',
      'Registers — compiler-managed · one thread · on-chip',
      'Shared — fast scratchpad · one block',
      'Constant — tiny read-only store · whole grid',
      'Local — per-thread spill space, physically in VRAM',
      'Global — weights / inputs / outputs in device VRAM',
      'RTX 5070 Ti: 16 GB · 896 GB/s · model only 3.99 MiB',
    ],
    title: 'GPU memory has different scopes',
  },
  {
    content: <CgoIntegrationCodeSlide />,
    notes: [
      'Four inputs in · 4,739 logits out',
      'nvcc: CUDA C++ → native library',
      'cgo sees only a plain C ABI',
      'One synchronous crossing per model guess',
      'C retains no Go pointers · KeepAlive',
    ],
    title: 'cgo gives Go a C-shaped front door',
  },
  {
    content: <InferenceRequestSlide />,
    notes: [
      'One locked worker · CUDA handle · stream',
      'Startup: persistent buffers + 3.99 MiB weights',
      'No CUDA allocation, stream creation, or weight upload per request',
      '3 H→D copies: 29,028 B total',
      '7 kernels, one stream',
      '1 D→H logits copy: 18,956 B',
      'Synchronise before returning',
      'cgo enters a C ABI; seven CUDA kernels perform only the neural-network forward pass; Go masks actions, chooses the word and plays Wordle.',
    ],
    title: 'Create once; call once per guess',
  },
  {
    content: <WordleLaunchSlide />,
    notes: [
      'Grid: 4,739 blocks — one action each',
      'Block: 128 threads — four 32-thread warps',
      'Split 160-value dot product · reduce partial sums',
      'One lane adds bias + β × remainingActionMask[action] → one logit',
      '606,592 logical lanes — scheduled in waves',
      'Go chooses the action',
    ],
    title: 'One block scores one possible word',
  },
  {
    content: <NsightSystemsExampleSlide />,
    notes: [
      'NVIDIA profiling tools',
      'Systems = wide-angle timeline',
      'Order · gaps · copies · kernels · synchronization',
      'One cgo call: 3 copies in → 7 kernels → copy out',
      '[Guardrail] prior-talk sample, not Wordle trace',
    ],
    title: 'Nsight Systems: the wide-angle view',
  },
  {
    content: <NsightComputeExampleSlide />,
    notes: [
      'Compute = one-kernel microscope',
      '[Guardrail] Screenshot = previous-talk example',
      'Right-hand figures = this Wordle policy-kernel report',
      'Nsight Systems shows the whole request; Nsight Compute examines one kernel; 11.36 microseconds is the duration of the complete final kernel, not each word.',
      '11.36 μs = entire 4,739-block policy-kernel launch',
      '69.89% occupancy = active warps / maximum supported active warps',
      'Scheduling/resource diagnostic — not CUDA-core utilisation',
      'No compiler spill traffic; shared memory still holds warp subtotals',
    ],
    title: 'Nsight Compute: the per-kernel microscope',
  },
  {
    content: <CudaWebAppDemoSlide />,
    notes: [
      'Ordinary Go web service; CUDA hidden behind scorer',
      'Fallback capture: ADEPT in three · RTX 5070 Ti',
      '[DEMO] try TRAIN / EERIE / audience word',
      '[FALLBACK] narrate the capture if live demo fails',
      'Integration evidence — not validation evidence',
    ],
    title: 'A Go web application backed by CUDA',
  },
  {
    content: <ItWorksSlide />,
    notes: [
      'Data → training → inference — working end to end',
      'Go application · GoMLX training · CUDA inference',
    ],
    title: 'It works!',
  },
  {
    content: <ClosingSlide />,
    notes: [
      'Data — Go teacher → examples',
      'Training — GoMLX → trained policy',
      'Inference — Go → cgo → CUDA',
      'End-to-end machine learning, Go throughout',
      'Thanks — leave contact details up',
    ],
    title: 'Thanks for coming',
  },
];

export const clampSlideIndex = (slideIndex: number) =>
  Math.min(slides.length - 1, Math.max(0, slideIndex));
