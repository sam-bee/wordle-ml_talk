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
import Rtx5070TiSlide from './slides/36_Rtx5070TiSlide';
import CudaPrimerShortSlide from './slides/37_CudaPrimerShortSlide';
import CgoIntegrationCodeSlide from './slides/38_CgoIntegrationCodeSlide';
import InferenceRequestSlide from './slides/39_InferenceRequestSlide';
import WordleLaunchSlide from './slides/40_WordleLaunchSlide';
import NsightSystemsExampleSlide from './slides/41_NsightSystemsExampleSlide';
import NsightComputeExampleSlide from './slides/42_NsightComputeExampleSlide';
import CudaWebAppDemoSlide from './slides/43_CudaWebAppDemoSlide';
import PivotExportSlide from './slides/44_PivotExportSlide';
import GpuPrimerSlide from './slides/45_GpuPrimerSlide';
import ControlPlaneCudaSlide from './slides/46_ControlPlaneCudaSlide';
import CgoCodeSlide from './slides/47_CgoCodeSlide';
import CudaHandleSlide from './slides/48_CudaHandleSlide';
import KernelSequenceSlide from './slides/49_KernelSequenceSlide';
import LaunchShapeSlide from './slides/50_LaunchShapeSlide';
import BlockReductionSlide from './slides/51_BlockReductionSlide';
import MemoryJourneySlide from './slides/52_MemoryJourneySlide';
import NsightSystemsSlide from './slides/53_NsightSystemsSlide';
import NsightComputeSlide from './slides/54_NsightComputeSlide';
import ParityBenchmarkSlide from './slides/55_ParityBenchmarkSlide';
import FinalHeldOutSlide from './slides/56_FinalHeldOutSlide';
import FinalApplicationSlide from './slides/57_FinalApplicationSlide';
import ClosingSlide from './slides/58_ClosingSlide';

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
    content: <ActDividerDataSlide active="data" number="01" title="Data" promise="Code a Wordle player in Go, and use it to generate training data" />,
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
    content: step => <OriginalDataSourcesSlide step={step} />,
    notes: [
      '[Opening] These are the two original data sources behind the word lists—not training examples.',
      '[Advance once] The New York Times Wordle browser JavaScript snapshot supplied 2,309 possible solutions and the historic 12,947 accepted-guess list.',
      '[Advance again] The SUBTLEXus resource from Ghent University supplied American-English subtitle frequencies. We used those frequencies to choose 2,430 additional probe words.',
      'The exact later action vocabulary is now a project artifact: 4,739 stable IDs made from the solution list plus those selected probes.',
    ],
    stepCount: 3,
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
    content: <GoroutineWorkerPoolSlide />,
    notes: [
      'The expensive calculation on the previous slide is independent for every legal guess, so this is an easy place to use Go concurrency.',
      'A producer goroutine fans candidate guesses out through one shared jobs channel. A bounded pool—NumCPU minus one in the linked implementation—competes to receive them.',
      'Each worker is a goroutine. It evaluates guesses sequentially and keeps only its own best result, so the workers do not need to coordinate while scoring.',
      'The fan-in step compares one local winner from each worker and chooses the overall best guess.',
      'This is a worker pool, not one goroutine per guess: concurrency is bounded and the amount of coordination stays small.',
      'Source: https://github.com/sam-bee/go-wordle/blob/main/player/player.go#L68-L121',
    ],
    title: 'Fan out guesses; fan in one winner',
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
    content: <TrainingFalseStartsSlide />,
    notes: [
      'Before showing the architecture that worked, a confession: I tried several model designs that did not learn to play Wordle usefully.',
      'There was a point when I thought this conference talk might have to become an honest account of everything I had tried and failed to make work.',
      'That is normal experimental work rather than a polished straight line: change the design, train it, inspect the evidence, and try again.',
      'Eventually I arrived at the compact architecture on the next slide. The failed attempts make that design look less inevitable than it does in hindsight.',
    ],
    title: 'Most of my models did not work',
  },
  {
    content: <ModelArchitectureIntroSlide />,
    notes: [
      'The next job is to design a neural network that can play Wordle cheaply from the current game state.',
      'At the highest level, it receives information about the remaining candidate answers, useful letter statistics, and the current turn.',
      'The letter statistics are 209 summaries of the remaining answers: 130 positional frequencies (five positions × 26 letters), 78 repetition frequencies (26 letters × at least one, two, or three copies), and one normalized log candidate-count value.',
      'For example, one positional value can say what fraction of possible answers begin with A; a repetition value can say what fraction contain at least two E’s. These are fractions of the current candidate set, not counts of guesses already played.',
      'The separate candidate-count value tells the model whether the shortlist is large or nearly solved; it is included because the candidate mask is normalized before its projection.',
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
    content: <GoMLXIntroSlide />,
    notes: [
      'GoMLX describes itself as an accelerated machine-learning and math framework for Go—roughly a PyTorch, JAX, or TensorFlow-style toolkit for Go programs.',
      'Build models from differentiable operations and familiar layers, then use automatic differentiation to calculate gradients.',
      'Train and evaluate with datasets, losses, metrics, optimisers including Adam, checkpoints, and debugging or plotting tools.',
      'Choose a portable pure-Go backend, or use OpenXLA and PJRT to JIT-compile graphs for CPUs, GPUs, and TPUs. This project used the XLA CUDA backend.',
      'It can train new models, fine-tune or combine existing models, and run inference as part of an ordinary Go application.',
      'Source: github.com/gomlx/gomlx',
    ],
    title: 'GoMLX: machine learning in Go',
  },
  {
    content: <GoMLXModelCodeSlide />,
    notes: [
      'This is simplified for the slide, but the API calls, layer widths, and scope names mirror the real Wordle policy.',
      'These calls construct nodes in a symbolic computation graph; they do not manually loop over individual floating-point values.',
      'DenseWithBias creates or reuses trainable weights under the named scope. ReLU adds the activation, and Embedding selects the learned vector for the turn.',
      'Concatenate joins the 96 candidate features, 48 statistics features, and 16 turn features into the 160-value state used by the trunk.',
      'Once the graph exists, GoMLX can differentiate it, and its training tools can use those gradients to update the weights.',
    ],
    title: 'Programming the policy with GoMLX',
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
    content: <TensorBoardIntroSlide />,
    notes: [
      'TensorBoard is Google\'s open-source visualisation toolkit from the TensorFlow ecosystem, although other frameworks can write its event-file format too.',
      'It is a browser dashboard for measurements recorded during training. It does not train the model; it makes the training process visible.',
      'A scalar is one number over time, such as loss or accuracy. A histogram records a whole distribution, such as the range of beta values across many Wordle positions.',
      'Our small standard-library Go writer emitted TensorBoard-compatible event files directly. Training did not require TensorFlow.',
      'The next three screenshots show the seed-replication run: the same production setup with a different random seed. Its event file used the corrected histogram encoding, so TensorBoard can read the complete run.',
    ],
    title: 'TensorBoard: the training dashboard',
  },
  {
    content: <TensorBoardTrainTop1Slide />,
    notes: [
      'This is a real TensorBoard capture from the seed-replication run, with the card expanded and only that run selected.',
      'Top-one accuracy asks whether the model\'s highest-scoring guess exactly matches the teacher\'s preferred guess for the current training batch.',
      'It rises from 0.664 percent at update 10 to 76.65 percent at update 10,000: a rapid early jump, followed by slower continued learning.',
      'This is a training-batch signal—not Wordle win rate and not held-out accuracy. The final validation top-one agreement was 55.44 percent.',
    ],
    title: 'The model learns to copy the teacher',
  },
  {
    content: <TensorBoardBetaMeanSlide />,
    notes: [
      'Beta is the one state-dependent value added only to guesses which remain possible answers.',
      'At each validation checkpoint, this scalar averages beta across all 2,500 validation positions.',
      'Its mean moves from minus 0.048 before training to plus 33.35 at update 10,000, so the learned candidate nudge became substantial and positive overall.',
      'Beta is a logit adjustment, not a probability or thirty-three percentage points. The average also hides large differences between positions, which the next graph reveals.',
    ],
    title: 'The candidate bonus becomes substantial',
  },
  {
    content: <TensorBoardBetaHistogramSlide />,
    notes: [
      'This is the same beta measurement shown as a histogram rather than one average.',
      'Each ridge is one saved validation checkpoint. Within that ridge, TensorBoard groups the 2,500 position-specific beta values into buckets. The many lines are time slices—not neurons and not individual games.',
      'The distribution begins tightly centred around zero, then moves right and spreads out as the model learns different exploit-versus-probe decisions for different states.',
      'At update 10,000, beta ranges from minus 31.84 to plus 172.96 with a mean of plus 33.35. Negative values remain useful in positions where the model prefers an information-gathering probe.',
    ],
    title: 'Beta depends on the Wordle position',
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
      'This is a real TensorBoard screenshot from the seed-replication run: the same production setup, repeated with seed 20260809.',
      'Validation loss falls sharply, reaches its recorded minimum of 3.1842 at update 2,600, then rises while training continues to 10,000 updates.',
      'That divergence is strong evidence consistent with overfitting and, more importantly, tells us why “latest” is not “best”. The checkpoint selector retains update 2,600.',
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
      '[Target: about 15 minutes for this alternative act, including this divider and a two-minute live demo.]',
    ],
    speech: { cues: ['inference', 'peel back the framework'] },
    title: 'Inference',
  },
  {
    content: <InferenceGoalSlide />,
    notes: [
      'Start with the destination: a browser talks to an ordinary Go service, and that service invokes CUDA once for each model decision.',
      'Go keeps the parts it is good at: HTTP, Wordle state, encoding, legal-action handling, deterministic choice, and the user-facing result.',
      'CUDA has a deliberately narrow job: accept four numeric inputs, run the fixed forward pass, and return 4,739 raw logits.',
      'GoMLX could already run this inference. The purpose of the hand-written route is to expose and understand the Go-to-GPU boundary.',
      '[About 30 seconds.]',
    ],
    title: 'The goal: a Go service invokes CUDA',
  },
  {
    content: <InferenceRoutesSlide />,
    notes: [
      'There are three sensible levels of abstraction.',
      'GoMLX is the highest level: describe the graph in Go, then XLA compiles and runs it on CUDA. That already worked and could have remained our serving route.',
      'A Go binding to the CUDA Driver API is the lower-level alternative. Go would explicitly create a context, load PTX or cubin modules, look up functions, manage buffers, and call cuLaunchKernel.',
      'The route demonstrated here is Go through cgo into a small plain-C ABI, with CUDA C++ using the higher-level Runtime API behind it.',
      'cgo is the Go interoperability mechanism, not another CUDA API. Driver-API bindings still cross into NVIDIA\'s libcuda through bindings or FFI.',
      'Official comparison: https://docs.nvidia.com/cuda/cuda-runtime-api/driver-vs-runtime-api.html',
      '[About 1 minute.]',
    ],
    title: 'Three ways Go could reach the GPU',
  },
  {
    content: <Rtx5070TiSlide />,
    notes: [
      'The desktop development device is an NVIDIA GeForce RTX 5070 Ti: Blackwell, compute capability 12.0, 8,960 CUDA cores, and 16 GB of GDDR7 on a 256-bit interface.',
      'NVIDIA quotes 896 GB per second of graphics-memory bandwidth. CUDA cores are arithmetic lanes, not independent CPU cores and not goroutines.',
      'CUDA exposes 64 KiB of constant memory: a tiny, cached, read-only region useful when many threads read the same small data. Our roughly four-mebibyte model does not fit there and does not use it.',
      'The trained FP32 weights are only 3.99 MiB, so they live comfortably in ordinary device global memory and remain resident between guesses.',
      'Sources: https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070-family/ · https://www.nvidia.com/en-us/geforce/news/rtx-50-series-graphics-cards-gpu-laptop-announcements/ · https://docs.nvidia.com/cuda/cuda-programming-guide/05-appendices/compute-capabilities.html',
      '[About 1 minute 15 seconds.]',
    ],
    title: 'The NVIDIA GeForce RTX 5070 Ti',
  },
  {
    content: <CudaPrimerShortSlide />,
    notes: [
      'CUDA is NVIDIA\'s programming model and API for heterogeneous programs: ordinary host code controls a separate GPU device.',
      'Host and device have separate memory spaces. The host copies inputs to device memory, launches a kernel, and copies results back when it needs them.',
      'A kernel is one GPU function. A thread is one logical lane running it; cooperating threads form a block; all blocks in one launch form the grid.',
      'Do not map CUDA threads to goroutines. They are much smaller execution lanes, and the hardware schedules blocks across a finite GPU in waves.',
      '[About 1 minute 15 seconds.]',
    ],
    title: 'CUDA: host code launches work on a device',
  },
  {
    content: <CgoIntegrationCodeSlide />,
    notes: [
      'This is code I wrote for the slide, not a source screenshot, but it mirrors the actual backend_cgo.go call: the same four inputs, one output allocation, one native function, and the same pointer-lifetime rule.',
      'nvcc compiles wordle_cuda.cu into the native library. cgo links that library and sees only a plain C header; the CUDA C++ implementation stays behind the C ABI.',
      'One complete forward pass crosses the language boundary once per turn. A call per layer would repeat cgo crossings and host-device coordination throughout the graph.',
      'The call is synchronous from Go\'s perspective. C finishes its device-to-host copy before returning and never retains a Go pointer. KeepAlive makes that lifetime deliberate.',
      '[About 1 minute 45 seconds.]',
    ],
    title: 'cgo gives Go a C-shaped front door',
  },
  {
    content: <InferenceRequestSlide />,
    notes: [
      'One dedicated goroutine locks to an OS thread, creates the CUDA model handle, serializes inference, and destroys the handle on the same thread.',
      'Creation allocates a stream and persistent device buffers, then uploads all 4,186,384 bytes of weights once. No cudaMalloc, cudaFree, or weight upload occurs per guess.',
      'For each guess, three arrays totalling 29,028 bytes go to the GPU. The integer turn is passed as a scalar. Seven kernels run in one stream, then 18,956 bytes of raw logits return.',
      'Go applies its separate availability mask, selects the highest available score, computes Wordle feedback, and advances the authoritative game.',
      '[About 1 minute 30 seconds.]',
    ],
    title: 'Create once; call once per guess',
  },
  {
    content: <WordleLaunchSlide />,
    notes: [
      'The final kernel is the simplest launch to explain: 4,739 blocks in the grid and 128 threads in each block.',
      'Each block owns one possible action. Its 128 threads divide the 160-value dot product, combine partial sums using four 32-thread warps and a tiny shared-memory reduction, then one lane adds the output bias and state-dependent candidate bonus.',
      'The block writes one raw logit. The grid therefore writes one score for every word in the fixed action vocabulary.',
      'Four thousand seven hundred and thirty-nine times 128 is 606,592 logical thread positions. That is a description of work, not a claim that all those lanes are resident simultaneously.',
      'There is no CUDA softmax, legality mask, or action choice. Go receives the logits and makes the decision.',
      '[About 1 minute 45 seconds.]',
    ],
    title: 'One block scores one possible word',
  },
  {
    content: <NsightSystemsExampleSlide />,
    notes: [
      'This is a genuine Nsight Systems GPU-metrics screenshot recovered from my previous Go-and-CUDA talk. It shows clock and GPU-activity tracks; it is an example of one part of the tool, not a Wordle inference trace.',
      'Nsight Systems is the wide-angle view. It puts host threads, CUDA API calls, copies, kernels, synchronization, and GPU activity on a shared timeline.',
      'For Wordle, the question is whether one cgo call visibly contains the expected three input copies, seven named kernels, one output copy, and the final wait—and where gaps or unexpected serialization appear.',
      'Use Systems first to decide which part of the request deserves closer inspection.',
      '[About 1 minute 15 seconds.]',
    ],
    title: 'Nsight Systems: the wide-angle view',
  },
  {
    content: <NsightComputeExampleSlide />,
    notes: [
      'This is a genuine Nsight Compute roofline screenshot from the previous talk. Again, it illustrates the product rather than pretending to be the Wordle capture.',
      'Nsight Compute is the microscope for one selected kernel. It reports launch statistics, registers, occupancy, memory traffic, instruction behaviour, and source correlation.',
      'The actual Wordle policy-kernel report records a 4,739-by-128 launch, 11.36 microseconds, 40 registers per thread, 69.89 percent achieved occupancy, and no local or shared spills.',
      'Occupancy is a diagnostic constraint, not a percentage score. One kernel view also cannot prove end-to-end speed.',
      '[About 1 minute 15 seconds.]',
    ],
    title: 'Nsight Compute: the per-kernel microscope',
  },
  {
    content: <CudaWebAppDemoSlide />,
    notes: [
      'Return to the application. This is a real fallback capture from the direct CUDA/cgo route: one Go process, the selected repeat-seed checkpoint, an RTX 5070 Ti, and ADEPT solved in three guesses.',
      'The browser knows nothing about CUDA. The HTTP handler knows nothing about warp reductions. Those details remain behind the scorer interface and one owned worker.',
      'Now switch to the already-running laptop demo and play another game. If the live environment misbehaves, stay on this slide and narrate the real capture.',
      'A user-chosen game demonstrates the integration route; it is not validation or final-test evidence.',
      '[About 1 minute on this slide, then allow about 2 minutes for the live demo.]',
      '[Slides 46 onward are the retained older Act III and are not part of this 15-minute alternative.]',
    ],
    title: 'A Go web application backed by CUDA',
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
