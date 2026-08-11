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
import WorkerPoolSlide from './slides/13_WorkerPoolSlide';
import SyntheticExampleSlide from './slides/14_SyntheticExampleSlide';
import CorpusSplitSlide from './slides/15_CorpusSplitSlide';
import ActDividerTrainingSlide from './slides/16_ActDividerSlide';
import ModelArchitectureIntroSlide from './slides/17_ModelArchitectureIntroSlide';
import ModelArchitectureInputsSlide from './slides/18_ModelArchitectureInputsSlide';
import ModelArchitectureOutputsSlide from './slides/19_ModelArchitectureOutputsSlide';
import PolicyArchitectureSlide from './slides/20_PolicyArchitectureSlide';
import PolicyOutputSlide from './slides/21_PolicyOutputSlide';
import BackpropagationSlide from './slides/22_BackpropagationSlide';
import ImitationLearningSlide from './slides/23_ImitationLearningSlide';
import GoMLXTrainingSlide from './slides/24_GoMLXTrainingSlide';
import ProofStagesSlide from './slides/25_ProofStagesSlide';
import TensorBoardSlide from './slides/26_TensorBoardSlide';
import TrainingResultsSlide from './slides/27_TrainingResultsSlide';
import ActDividerInferenceSlide from './slides/28_ActDividerSlide';
import PivotExportSlide from './slides/29_PivotExportSlide';
import GpuPrimerSlide from './slides/30_GpuPrimerSlide';
import ControlPlaneCudaSlide from './slides/31_ControlPlaneCudaSlide';
import CgoCodeSlide from './slides/32_CgoCodeSlide';
import CudaHandleSlide from './slides/33_CudaHandleSlide';
import KernelSequenceSlide from './slides/34_KernelSequenceSlide';
import LaunchShapeSlide from './slides/35_LaunchShapeSlide';
import BlockReductionSlide from './slides/36_BlockReductionSlide';
import MemoryJourneySlide from './slides/37_MemoryJourneySlide';
import NsightSystemsSlide from './slides/38_NsightSystemsSlide';
import NsightComputeSlide from './slides/39_NsightComputeSlide';
import ParityBenchmarkSlide from './slides/40_ParityBenchmarkSlide';
import FinalHeldOutSlide from './slides/41_FinalHeldOutSlide';
import FinalApplicationSlide from './slides/42_FinalApplicationSlide';
import ClosingSlide from './slides/43_ClosingSlide';

export const slides: SlideDefinition[] = [
  {
    content: <TitleSlide />,
    notes: [
      'Hello, everyone. I am Sam Burns.',
      'This is the story of a Go program that reasons about Wordle, turns that reasoning into data, trains a compact policy on a GPU, and serves the fixed model through hand-written CUDA.',
      'One distinction matters from the first minute: GoMLX, XLA, and CUDA produced the successful trained model. The hand-written CUDA and cgo work later in the talk implements inference only.',
      '[Aim for about 52 minutes, leaving a real question buffer.]',
    ],
    speech: { cues: ['from Go to the GPU', 'integrating with CUDA'] },
    title: 'From Go to the GPU: Integrating with CUDA',
  },
  {
    content: <DestinationPreviewSlide />,
    notes: [
      'Start with the destination. This is a real capture of one Go process serving the direct CUDA/cgo backend on an RTX 5070 Ti. It solves ADEPT in three guesses.',
      'The GPU has never heard of Wordle. Once per turn it receives numbers and returns 4,739 scores; Go still owns the game.',
      'This screen is a demonstration, not validation evidence, and it does not imply that training used hand-written CUDA.',
    ],
    title: 'A working CUDA/cgo Wordle application',
  },
  {
    content: <ContentsSlide />,
    notes: [
      'The talk has three acts: Data, Training, and Inference.',
      'In Data, Go becomes the Wordle expert and manufactures examples. In Training, GoMLX and backpropagation compress those decisions into a small neural network. In Inference, we remove the framework from serving and follow one request through cgo into CUDA.',
      'The route is linear: Wordle, teacher, examples, policy, GPU inference, application. The act dividers are our “you are here” checkpoints.',
    ],
    title: 'Contents',
  },
  {
    content: <ActDividerDataSlide active="data" number="01" title="Data" promise="Code a wordle player in Go, and use it to generate training data" />,
    notes: [
      'Act one is Data.',
      'On the full route, we are moving from the Go game engine through the teacher to a frozen corpus.',
      'We need an authoritative Wordle state, an expert that can choose a useful next action, and enough examples to teach a much cheaper policy.',
      '[Target: about 13 minutes for this act.]',
    ],
    speech: { cues: ['data', 'build a teacher'] },
    title: 'Data',
  },
  {
    content: <WordleOverviewSlide />,
    notes: [
      'For anyone who has not played: Wordle chooses a secret five-letter word, and you have six attempts to find it.',
      'Green means the right letter in the right place, yellow means the letter belongs elsewhere, and grey means it is absent—subject to the usual duplicate-letter accounting.',
      'Each row gives us a new constraint. The useful machine state is the set of answers that still agree with every constraint.',
    ],
    title: 'Wordle in 60 seconds',
  },
  {
    content: step => <WordleExampleSlide visibleGuessCount={step + 1} />,
    notes: [
      '[First reveal] RAISE leaves five possible answers: SCARE, SHARE, SNARE, SPARE, and STARE.',
      '[Advance once] CHANT cannot be the answer, but it probes four fresh letters and moves A. It can separate the five answers more effectively than simply naming one of them.',
      '[Advance again] SPARE solves the game.',
      'This is why the action vocabulary must include useful probes as well as possible answers.',
    ],
    stepCount: 3,
    title: 'Not every useful guess is an answer',
  },
  {
    content: <OriginalDataSourcesSlide />,
    notes: [
      'These are the two original data sources behind the word lists—not training examples.',
      'The New York Times Wordle browser JavaScript snapshot supplied 2,309 possible solutions and the historic 12,947 accepted-guess list.',
      'The SUBTLEXus resource from Ghent University supplied American-English subtitle frequencies. We used those frequencies to choose 2,430 additional probe words.',
      'The exact later action vocabulary is now a project artifact: 4,739 stable IDs made from the solution list plus those selected probes.',
    ],
    title: 'Original sources for the word lists',
  },
  {
    content: <VocabularySlide />,
    notes: [
      'The starting dictionaries came from the JavaScript shipped with the New York Times-era Wordle game: 2,309 possible solutions and 12,947 historically accepted guesses.',
      'The model does not score all 12,947. Its fixed 4,739-action vocabulary contains every solution plus 2,430 additional five-letter words chosen using SUBTLEX-US frequencies derived from 51 million words of American film subtitles.',
      'That is a product decision disguised as a data decision: it favours recognisable spoken vocabulary, carries the source corpus biases, and still permits probe words.',
      'One reproducibility lesson: the exact historical frequency cutoff was not retained, so the final lists and their stable IDs became the artifact of record.',
    ],
    title: 'Where the words came from',
  },
  {
    content: <StrategyGoWordleSlide />,
    notes: [
      'Before the teacher loop, define the three terms we will use for the rest of the data story.',
      'A shortlist is the remaining possible solution set. Feedback is the green, yellow, and grey tile pattern for a guess.',
      'Worst-case feedback is the pattern whose bucket carries the largest share of the shortlist into the next state.',
      'The teacher chooses actions by protecting against that largest carry-over.',
    ],
    title: 'Strategy for the Go Wordle Player',
  },
  {
    content: <WorstCaseFeedbackSlide />,
    notes: [
      'Start with the RAISE feedback and the five-word shortlist: SCARE, SHARE, SNARE, SPARE, and STARE.',
      'For each candidate guess, the teacher groups those five possible solutions by the feedback pattern they would return. Each group is a feedback bucket.',
      'SCARE has a bad worst case: G-GGG is shared by four answers, so four of five possibilities—eighty percent—carry into the next turn.',
      'CHANT produces five tied feedback buckets of one answer each. Even in its worst case, only one of five possibilities—twenty percent—carries over.',
      'CHANT is the better guess because its worst-case carry-over is lower: one remaining possibility, not four.',
    ],
    title: 'Minimise the worst-case carry-over',
  },
  {
    content: <ScoreGuessPseudocodeSlide />,
    notes: [
      'Here is the whole inner loop in Go-shaped pseudocode. Take one proposed guess and imagine that each word in the shortlist is the hidden answer.',
      'Each possible answer produces one feedback pattern. Answers that produce the same pattern enter the same bucket, because that is exactly the shortlist we would carry into the next turn if we received that clue.',
      'The score is the largest bucket: the least helpful feedback that can validly happen. SCARE has buckets of four and one, so its worst case is four.',
      'CHANT produces five different feedback patterns, each with one answer. Five patterns tie, but the worst-case size is still only one.',
    ],
    title: 'Score a guess by its largest feedback bucket',
  },
  {
    content: <ChooseGuessPseudocodeSlide />,
    notes: [
      'Now put that scoring function inside one outer loop. Evaluate every unused action and retain the action with the smallest worst-case shortlist.',
      'The loop searches unused actions, not just the shortlist. That distinction is why CHANT remains eligible even though it cannot be the answer.',
      'This is a one-step minimax-shaped rule: minimise the maximum next-turn shortlist. It is not a recursive search over the rest of the game, and the answer is not an adversary; we simply plan for the least helpful valid clue.',
      'The production teacher retains the top sixteen actions. Exact ties prefer an action that is still a possible answer, then the lower stable word ID.',
      'At this point we have built a deliberately slow expert in Go: given a Wordle state, we know exactly what it will choose and why.',
    ],
    title: 'Choose the action with the smallest worst case',
  },
  {
    content: step => <WorkerPoolSlide step={step} />,
    notes: [
      '[First reveal] A jobs channel supplies hidden solution IDs.',
      '[Advance once] A fixed worker pool independently generates the states for different solutions. The large feedback matrix and teacher are immutable after construction.',
      '[Advance again] The collector sorts by solution ID before writing. Each solution derives randomness from the global seed and its own ID, so changing the worker count does not change the corpus.',
      'This is where Go concurrency helps: expensive deliberation is parallel, while the artifact remains deterministic.',
    ],
    stepCount: 3,
    title: 'Parallel work, deterministic data',
  },
  {
    content: <SyntheticExampleSlide />,
    notes: [
      'This is the contract for one example: an incomplete but internally consistent state, plus the teacher actions that are best from that state.',
      'The generator keeps positions from ordinary teacher games and also creates valid histories at different depths, so later turns are not starved of examples.',
      'The important idea is distillation: the slow teacher can think once, offline. Training reads the frozen answer instead of running search in the hot path.',
    ],
    title: 'A state becomes a labelled example',
  },
  {
    content: <CorpusSplitSlide />,
    notes: [
      'We split by hidden answer, not by generated row: 2,109 answers for training, 100 for validation while making choices, and 100 sealed solution IDs for one post-selection CUDA gameplay aggregate.',
      'That sealed gameplay list is distinct from the frozen record corpus. Generator release v0.1.0 contains 52,726 training records, 1,600 mini records, and 2,500 records in each validation and final-test corpus; the 2,500 final-test records remain unopened.',
      'There is one honest caveat: 190 of 2,445 unique encoded validation states also appear in training, with the same teacher label. The solution IDs remain disjoint, so this is state-distribution overlap, not solution-split leakage.',
      'Freezing the corpus separates data generation from training and makes every later result attributable.',
    ],
    title: 'Freeze the corpus; split by answer',
  },
  {
    content: <ActDividerTrainingSlide active="training" number="02" title="Training" promise="Compress the teacher into a small policy using backpropagation and GoMLX." />,
    notes: [
      'Act two is Training.',
      'On the full route, the corpus is frozen; we are now compressing its teacher decisions into a policy and selecting a checkpoint.',
      'We have state-and-target pairs. Now we need a model small enough to understand, an optimisation loop that can learn, and evidence that the result really plays the game.',
      '[Target: about 15 minutes for this act.]',
    ],
    speech: { cues: ['training', 'compact policy'] },
    title: 'Training',
  },
  {
    content: <ModelArchitectureIntroSlide />,
    notes: [
      'The next job is to design a neural network that can play Wordle cheaply from the current game state.',
      'At the highest level, it receives information about the remaining candidate answers, useful letter statistics, and the current turn.',
      'It produces 4,739 scores—one for every guess in the model vocabulary—and the highest available score becomes the next move.',
      'The finished design contains exactly 1,046,596 trainable weights: small enough to inspect and explain, but large enough to learn the teacher\'s strategy.',
    ],
    title: 'A neural network that plays Wordle',
  },
  {
    content: <ModelArchitectureInputsSlide />,
    notes: [
      'The candidate mask has one value per possible solution. Divide it by the number of remaining candidates, then use a dense layer to learn 96 useful summaries of which words remain.',
      'The 209 candidate statistics are facts calculated by Go: letter frequencies by position, repeated-letter frequencies, and candidate count. A dense layer mixes and compresses them into 48 learned features.',
      'The turn integer selects one of six trainable 16-value vectors. Concatenating 96, 48, and 16 gives the model its 160-value state.',
      'Here, projection simply means a learned weighted combination that changes one vector size into another.',
    ],
    title: 'Model architecture: inputs',
  },
  {
    content: <ModelArchitectureOutputsSlide />,
    notes: [
      'After the residual trunk, the policy head turns 160 state values into 4,739 base logits: one raw score per possible guess.',
      'A logit is not a percentage and has no fixed range. Only its size relative to the other logits matters: higher means the model prefers that guess.',
      'The candidate-bonus branch produces beta and adds it only to guesses which could still be the answer. Beta can be positive or negative.',
      'The displayed word scores are illustrative. In play, Go later suppresses already-used actions and selects the highest remaining logit.',
    ],
    title: 'Model architecture: outputs',
  },
  {
    content: <PolicyArchitectureSlide />,
    notes: [
      'Project candidate identity to 96 features, candidate statistics to 48, and the turn to a learned 16-value embedding.',
      'Concatenate 96, 48, and 16 into a width-160 state. Pass it through one two-layer residual block, whose skip connection lets the trunk retain the original state features.',
      'Produce 4,739 base scores and one scalar candidate bonus, then add that bonus only to actions which remain possible solutions.',
      'This is about a million parameters—no attention, no transformer, no giant language model. The whole architecture fits on one slide and later becomes seven CUDA kernels.',
    ],
    title: 'A compact Wordle policy',
  },
  {
    content: <PolicyOutputSlide />,
    notes: [
      'Every action receives an ordinary base logit. The model also learns one beta for the state and adds it only to actions that remain possible solutions.',
      'That gives the network an explicit exploit-versus-probe control. A probe such as CHANT receives no candidate bonus, but keeps its base score and remains selectable.',
      'The model contains exactly 1,046,596 FP32 trainable parameters—4,186,384 bytes, about 3.99 MiB. Most live in the 160-by-4,739 output layer.',
      'Do not confuse this candidate mask with legality: the separate availability mask suppresses already-used actions later.',
    ],
    title: '4,739 scores and one learned nudge',
  },
  {
    content: step => <BackpropagationSlide step={step} />,
    notes: [
      '[Reveal 1] Feed one batch of encoded states into the policy and obtain a score for every action.',
      '[Reveal 2] Compare the scores with the teacher\'s preferred action. Cross-entropy turns that disagreement into one loss value.',
      '[Reveal 3] Backpropagation works backwards through the recorded operations, applying the chain rule to ask how each weight affected the loss.',
      '[Reveal 4] Adam uses those gradients to nudge the 1.05 million weights. Global gradient norm is clipped at five.',
      '[Reveal 5] Repeat with another batch. Backpropagation is not the model; it is the procedure for adjusting the model from examples.',
      'No calculus derivation is required for the rest of the talk—the important contract is state in, error measured, weights updated.',
    ],
    stepCount: 5,
    title: 'Backpropagation: blame, nudge, repeat',
  },
  {
    content: <ImitationLearningSlide />,
    notes: [
      'This is supervised imitation, not reinforcement learning. The frozen teacher top-one action is the target; the stored top sixteen are evaluation signals.',
      'Before computing loss, a separate availability mask turns only actions already used in that history into negative infinity. It prevents duplicate guesses without changing the candidate-bonus semantics.',
      'The opening position is sampled deliberately, because it otherwise appears only once in a corpus dominated by later states.',
      'The goal is not to reproduce the teacher\'s search procedure. It is to learn a cheap policy that chooses useful actions from the same state.',
    ],
    title: 'Teach one good action at a time',
  },
  {
    content: <GoMLXTrainingSlide />,
    notes: [
      'GoMLX lets Go code declare this graph directly. The shown lines are the real residual trunk, output logits, and candidate-bonus branch.',
      'The trainer adds masked cross-entropy, automatic differentiation, Adam, and gradient clipping. XLA and PJRT compile and execute the graph on the CUDA backend.',
      'This was the fastest route to answer the important question: can this model and objective actually learn?',
      'The hand-written CUDA path later in the talk is a second implementation of the fixed forward pass. It did not produce these trained weights.',
    ],
    title: 'Go describes the graph; XLA runs it on CUDA',
  },
  {
    content: <ProofStagesSlide />,
    notes: [
      'Before spending time on a long run, climb a fixed ladder.',
      'First, overfit one batch for 400 updates. If that fails, the graph, objective, or optimizer is broken. Second, train the mini corpus for 1,000 updates with a mandatory stop and resume at 500. Third, run the full proof for 2,000 updates.',
      'Validation and checkpoints occur every 100 updates; scalar telemetry is written every 10. Each run retains initial, latest, and best checkpoints plus immutable configuration and evaluation artifacts.',
      'These gates turn “it seems to train” into a repeatable engineering claim.',
    ],
    title: 'Prove the loop before the long run',
  },
  {
    content: <TensorBoardSlide />,
    notes: [
      'TensorBoard reads ordinary event files written by a small Go writer. This chart is rebuilt from the recorded validation scalars for the separate seed-20260808 production run; it is not a fabricated TensorBoard screenshot.',
      'Validation loss falls sharply, reaches its recorded minimum of 3.1341 at update 2,200, then rises while training continues to 10,000 updates.',
      'That divergence is strong evidence consistent with overfitting and, more importantly, tells us why “latest” is not “best”. The checkpoint selector retains update 2,200.',
      'Top-one agreement can keep moving while probability calibration worsens, which is why one metric never tells the whole story.',
    ],
    title: 'TensorBoard tells us when to stop choosing',
  },
  {
    content: <TrainingResultsSlide />,
    notes: [
      'Lead with the user-visible measure. On the same 100 validation solutions, the first proof moved from 4 solved games at initialization to 97 at the best checkpoint. Mean guesses fell from 5.86 to 3.65.',
      'Validation loss fell from 8.3005 to 3.1633, and teacher top-one agreement rose from 0.0056 to 0.5008.',
      'The separate fresh 10,000-update production run selected update 2,200, but still solved 97 games and averaged 3.68. A lower validation loss did not improve the gameplay success rate.',
      'A second fresh run with seed 20260809 selected update 2,600 and solved 98 at 3.66. One repeat is reassurance, not a confidence interval or broad statistical study.',
      'That repeat-seed checkpoint is the exact model later exported for CUDA. These remain validation results used during selection—not final-test claims.',
    ],
    title: 'The model learned to play',
  },
  {
    content: <ActDividerInferenceSlide active="inference" number="03" title="Inference" promise="Keep Wordle in Go; make one fixed numerical forward pass explicit in CUDA." />,
    notes: [
      'At this point the question “can the model play?” is answered. Now the problem changes from machine learning to systems engineering.',
      'On the full route, the checkpoint is fixed; we are moving through export, cgo, and CUDA into the Go web application.',
      'We will keep the successful GoMLX training path, export the selected weights, and implement inference directly behind a narrow cgo boundary.',
      'We are not rewriting training in CUDA. We are peeling back the abstraction for one fixed forward pass.',
      '[Target: about 18 minutes for this act, including profiler evidence and the demo.]',
    ],
    speech: { cues: ['inference', 'peel back the framework'] },
    title: 'Inference',
  },
  {
    content: <PivotExportSlide />,
    notes: [
      'A trained network is a sequence of known operations plus a file of numbers.',
      'The offline exporter is allowed to understand GoMLX checkpoints. The serving application imports no GoMLX, PJRT, or XLA.',
      'For the selected seed-replication run, the best checkpoint is update 2,600. The exporter writes a manifest, exactly 4,186,384 bytes of FP32 weights in documented CUDA-friendly order, and golden positions and games.',
      'Vocabulary hashes, shapes, finite values, payload size, and SHA-256 are validated before a native model is created.',
    ],
    title: 'A trained model becomes weights plus operations',
  },
  {
    content: <GpuPrimerSlide />,
    notes: [
      'A just-in-time vocabulary check before looking at the implementation.',
      'The CPU is the host; the GPU is the device. Memory is separate, so data crosses explicitly. A kernel is one GPU function launched over a grid of blocks. A block contains warps, and one warp schedules 32 CUDA threads together.',
      'Those threads are logical lanes, not goroutines. The GPU schedules blocks onto a finite set of streaming multiprocessors in waves.',
      'We will attach every term to the actual Wordle output kernel rather than detouring into a general GPU architecture lecture.',
    ],
    title: 'Enough GPU vocabulary for one inference',
  },
  {
    content: <ControlPlaneCudaSlide />,
    notes: [
      'One ordinary Go process owns HTTP, the authoritative Wordle engine, vocabulary identity, state encoding, duplicate suppression, deterministic tie-breaking, progression, errors, and shutdown.',
      'A dedicated goroutine locks to one OS thread, owns one native model handle, and serializes requests so HTTP handlers cannot race on CUDA scratch buffers.',
      'CUDA receives the four model inputs and returns 4,739 raw FP32 logits. It does not receive Wordle rules, an availability mask, or an argmax instruction.',
      'Go applies availability and selects the move after the native call returns. That is the control-plane and numerical-data-plane boundary.',
    ],
    title: 'One process, two jobs',
  },
  {
    content: <CgoCodeSlide />,
    notes: [
      'These are real excerpts from backend_cgo.go, not rewritten pseudo-code.',
      'The preamble tells cgo where the plain C header and CUDA-built static library live. The second pane allocates the Go output slice and makes one C call for the complete model.',
      'C never retains a pointer into Go memory. The call is synchronous from Go\'s perspective and returns only after the logits copy and stream synchronization. Runtime KeepAlive makes the slice lifetimes explicit.',
      'Crossing once per layer would create repeated language and coordination boundaries. Crossing once per inference keeps ownership and profiling coherent.',
    ],
    title: 'The whole forward pass crosses cgo once',
  },
  {
    content: <CudaHandleSlide />,
    notes: [
      'cgo speaks a stable C ABI even though the implementation behind it is compiled as CUDA C++.',
      'Go sees an opaque wordle_cuda_model pointer. Creation allocates one stream, persistent input and activation buffers, and a contiguous device weight allocation. It uploads weights once.',
      'Inference reuses all of that state. There is no cudaMalloc or cudaFree in the hot path. Destruction releases the resources on the same locked worker thread.',
      'Long-lived memory is C/CUDA-owned; short-lived input and output slices remain Go-owned for the duration of the call.',
    ],
    title: 'The handle owns the GPU state',
  },
  {
    content: <KernelSequenceSlide />,
    notes: [
      'The same model graph now becomes seven explicitly named kernels in one CUDA stream.',
      'Candidate and statistics projections, turn embedding, the two residual operations, the candidate bonus, and the final action logits directly mirror the architecture we already understand.',
      'There is no softmax because Go needs only the ordering of raw logits. There is no CUDA argmax and no legality rule.',
      'Readable kernel names are not cosmetic: they make the profiler timeline explain itself.',
    ],
    title: 'The neural network becomes seven kernels',
  },
  {
    content: <LaunchShapeSlide />,
    notes: [
      'The final policy kernel launches one block for each of the 4,739 possible actions.',
      'Each 128-thread block cooperatively computes one raw logit, including the reduction over the 160-wide hidden state.',
      'The logical grid contains 606,592 thread positions, but the GPU schedules those blocks in waves across its streaming multiprocessors.',
      'This is a launch-shape explanation, not a claim that all of those threads run simultaneously.',
    ],
    title: 'Launch shape: one block per action',
  },
  {
    content: <BlockReductionSlide />,
    notes: [
      'Inside one block, 128 threads take strided portions of the 160-value dot product and accumulate partial sums in registers.',
      'Each warp combines its 32 partials using shuffle instructions. Four warp leaders place four subtotals in shared memory. The first warp reduces those four values.',
      'One lane adds the output bias and the learned candidate bonus, then writes one raw logit.',
      'This gives every term a job: a thread computes part, a warp reduces 32 parts, a block produces one action, and the grid covers all actions. Shared memory belongs only to its block.',
    ],
    title: 'A block cooperates on one dot product',
  },
  {
    content: <MemoryJourneySlide />,
    notes: [
      'Go owns the logical inputs, but the turn travels as a scalar argument, so each inference performs three host-to-device input copies.',
      'Weights, input buffers, activations, residual scratch, beta, and logits live in device global memory. Hardware caches repeated global reads where useful.',
      'A thread keeps its running accumulator in registers; four warp subtotals use block-shared memory. Local memory would generally indicate a spill into device memory, not a tiny fast stack.',
      'One device-to-host copy returns the 4,739 logits, then the synchronous call hands control back to Go for availability and action selection.',
    ],
    title: 'Copy state in; keep weights resident; copy scores out',
  },
  {
    content: <NsightSystemsSlide />,
    notes: [
      'This is deliberately a placeholder for a future real Nsight Systems GUI crop. It must not be mistaken for profiler evidence that we do not yet have in the deck.',
      'Nsight Systems is the wide-angle lens. The final capture should follow one warm wordle_infer range on the wordle-gpu thread from the cgo call through three host-to-device copies, all seven kernels, the logits copy, and synchronization.',
      'The question is “what happened across one complete request, and in what order?” Hide unrelated rows and annotate only the host boundary, copies, kernels, and wait.',
    ],
    title: 'Nsight Systems: the whole request',
  },
  {
    content: <NsightComputeSlide />,
    notes: [
      'This is also deliberately a placeholder for a future genuine Nsight Compute GUI crop.',
      'Nsight Compute is the microscope for one kernel. The final capture should select policy_logits_with_bonus and show launch statistics, occupancy, memory workload, and the source-correlated multiply-accumulate and reduction.',
      'The collected report records 4,739 by 128, 11.36 microseconds, 40 registers per thread, 69.89 percent achieved occupancy, and no local or shared spills.',
      'Those are observations about one replayed kernel, not a universal optimum or a speedup claim. Occupancy is a diagnostic constraint, not a score where 100 percent automatically means fast.',
    ],
    title: 'Nsight Compute: inside one kernel',
  },
  {
    content: <ParityBenchmarkSlide />,
    notes: [
      'Correctness comes before performance. Thirty-two golden positions agree on top one, the top-five set, and the action selected after Go applies availability.',
      'Across 151,648 compared logits, the maximum absolute GoMLX-to-CUDA error is about 7.63e-06. All 100 validation trajectories match exactly; the selected repeat-seed checkpoint solves 98 with a 3.66 mean through both paths.',
      'The batch-one CUDA call measured 421,870 nanoseconds cold. Across 200 warm calls, mean was 94,945 nanoseconds, p50 94,010, and p95 111,400.',
      'There is no directly comparable GoMLX benchmark under the same conditions, so there is no speedup claim. The result is an explicit, verifiable implementation boundary.',
    ],
    title: 'The CUDA path agrees with the reference',
  },
  {
    content: <FinalHeldOutSlide />,
    notes: [
      'Only after the model and implementation were selected did the claim-guarded evaluator score the 100 final solution IDs once through CUDA/cgo.',
      'It solved 97, failed three, averaged 3.75 guesses with failures counted as six, and made zero invalid selections.',
      'The sanitized artifact contains aggregate facts only: no answer words, trajectories, or failure list. No tuning followed.',
      'The separate 2,500-record final-test corpus remained unopened. This is one bounded held-out aggregate, not a sweeping generalization claim.',
    ],
    title: 'One intentional held-out aggregate',
  },
  {
    content: <FinalApplicationSlide />,
    notes: [
      'Return to the same application from the opening.',
      'It is still one ordinary Go web service. The browser and HTTP handler do not know how a warp reduction works. The Go game engine constructs state, one worker makes one synchronous inference call per turn, CUDA returns scores, and Go chooses and applies the move.',
      'If time and stage setup permit, switch to the already-running port-8083 demo and type ADEPT. Otherwise this real capture is the rehearsed fallback.',
      'A user-chosen game demonstrates the route; it is not validation or final-test evidence.',
    ],
    title: 'Back to the application',
  },
  {
    content: <ClosingSlide />,
    notes: [
      'Three lessons: Go is excellent for building and operating the surrounding system. GoMLX was the quickest path to prove the model and backpropagation. cgo and CUDA made the fixed numerical boundary visible enough to own, test, and profile.',
      'The next experiments could be batching, reduced precision, kernel fusion, or reinforcement learning instead of pure teacher imitation—but none is part of the result shown today.',
      'Credit Kirti for Calliope Canvas, and Codex and Grok for assistance. Thank the audience.',
      'The point was never to replace Go with CUDA. It was to give each side the work it is good at, behind a boundary small enough to understand.',
      '[Questions.]',
    ],
    speech: { cues: ['three lessons', 'thank you', 'questions'] },
    title: 'What the boundary bought us',
  },
];

export const clampSlideIndex = (slideIndex: number) =>
  Math.min(slides.length - 1, Math.max(0, slideIndex));
