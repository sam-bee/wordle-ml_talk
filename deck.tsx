import React from 'react';

import type { SlideDefinition } from './types';
import AblationResultsSlide from './slides/AblationResultsSlide';
import CandidateBonusSlide from './slides/CandidateBonusSlide';
import CandidateStatsSlide from './slides/CandidateStatsSlide';
import ClosingSlide from './slides/ClosingSlide';
import ContentsSlide from './slides/ContentsSlide';
import CudaSmokeSlide from './slides/CudaSmokeSlide';
import CurrentCudaStatusSlide from './slides/CurrentCudaStatusSlide';
import DataProvenanceSlide from './slides/DataProvenanceSlide';
import EvidencePipelineSlide from './slides/EvidencePipelineSlide';
import FourInputsSlide from './slides/FourInputsSlide';
import FrozenCorpusSlide from './slides/FrozenCorpusSlide';
import GameResultsSlide from './slides/GameResultsSlide';
import GoMLXBridgeSlide from './slides/GoMLXBridgeSlide';
import HostDeviceRolesSlide from './slides/HostDeviceRolesSlide';
import ImitationLearningSlide from './slides/ImitationLearningSlide';
import LearningProgressSlide from './slides/LearningProgressSlide';
import LessonsAndRoadmapSlide from './slides/LessonsAndRoadmapSlide';
import LiveDemoSlide from './slides/LiveDemoSlide';
import ModelTaskSlide from './slides/ModelTaskSlide';
import ParameterCountSlide from './slides/ParameterCountSlide';
import PolicyArchitectureSlide from './slides/PolicyArchitectureSlide';
import ProjectMapSlide from './slides/ProjectMapSlide';
import ProofStagesSlide from './slides/ProofStagesSlide';
import ReproEnvironmentSlide from './slides/ReproEnvironmentSlide';
import ServingFlowSlide from './slides/ServingFlowSlide';
import ServingGatesSlide from './slides/ServingGatesSlide';
import SharedEncoderSlide from './slides/SharedEncoderSlide';
import SolutionSplitSlide from './slides/SolutionSplitSlide';
import TitleSlide from './slides/TitleSlide';
import ValidationLimitsSlide from './slides/ValidationLimitsSlide';
import VocabularySlide from './slides/VocabularySlide';
import WordleExampleSlide from './slides/WordleExampleSlide';
import WordleOverviewSlide from './slides/WordleOverviewSlide';

export const slides: SlideDefinition[] = [
  {
    content: <TitleSlide />,
    notes: [
      'Hello, everyone.',
      "I'm Sam Burns, and today we're going from Go to the GPU.",
      'We will use a real Wordle-solving project to connect familiar Go engineering with a learned policy executing on CUDA.',
      '[Set expectations: this is a progress report grounded in the implementation and proof artifacts that exist today.]',
    ],
    speech: { cues: ['from Go to the GPU', 'integrating with CUDA'] },
    title: 'From Go to the GPU: Integrating with CUDA',
  },
  {
    content: <ContentsSlide />,
    notes: [
      'We will start with the puzzle, turn it into data and a policy model, prove that model learns, and finish at the live Go-to-GPU serving boundary.',
      '[This structure builds the machine-learning ideas gradually; no ML background is assumed.]',
    ],
    title: 'Contents',
  },
  {
    content: <WordleOverviewSlide />,
    notes: [
      'For anyone who has not played: Wordle chooses a secret five-letter word, and you have six attempts to find it.',
      'After every guess, green means the correct letter in the correct place, yellow means the letter belongs elsewhere, and grey means it is absent.',
      'PLANT gives one correctly placed letter and one misplaced letter. SHAPE uses that information, and GRAPE solves the example.',
      'The loop—choose, observe, narrow—is the decision problem our model must learn.',
    ],
    title: 'Wordle in 60 seconds',
  },
  {
    content: step => <WordleExampleSlide visibleGuessCount={step + 1} />,
    notes: [
      'Here is one more game, with SPARE as the secret answer.',
      '[First reveal] RAISE leaves five possibilities: SCARE, SHARE, SNARE, SPARE, and STARE.',
      '[Advance once] CHANT cannot be the answer because it does not end in E, but it tests four new letters and puts A in a new position.',
      '[Advance again] SPARE solves the game on the third attempt.',
      'This distinction drives the architecture: a useful action and a possible solution are not always the same thing.',
    ],
    stepCount: 3,
    title: 'Not every guess is an answer',
  },
  {
    content: <ModelTaskSlide />,
    notes: [
      'Translate Wordle into three ML words: state is what we know, action is a complete next guess, and a logit is one raw learned score.',
      'The model does not predict letters one at a time. It emits one score for every word in a fixed 4,739-action vocabulary.',
      'Go then applies availability rules and chooses the highest-scoring unused action.',
    ],
    title: 'Turn a board state into one useful next guess',
  },
  {
    content: <ProjectMapSlide />,
    notes: [
      'The project is split into ordinary Go responsibilities: an authoritative game engine, a synthetic-data generator, the policy/training module, and a web visualizer.',
      'Go owns the loop and the sources of truth. The model is a component inside that system, not the whole application.',
      'This separation lets us test game rules, generated records, model inputs, and gameplay independently.',
    ],
    title: 'Go is the conductor',
  },
  {
    content: <VocabularySlide />,
    notes: [
      'The Wordle snapshot has 2,309 possible answers and 12,947 accepted guesses.',
      'The first model deliberately scores a smaller fixed action set: every answer plus 2,430 additional words, for 4,739 actions.',
      'All answers remain selectable, while probe guesses like CHANT can also receive a score.',
      'A stable word at each output index makes checkpoints and datasets interpretable.',
    ],
    title: 'An answer and a useful guess are different things',
  },
  {
    content: <DataProvenanceSlide />,
    notes: [
      'The answer and accepted-guess lists came from Wordle browser code.',
      'Extra action words were selected using SUBTLEX-US frequencies derived from 51 million words of American film subtitles.',
      'That favours spoken vocabulary but imports names, slang, and corpus bias.',
      'The exact historic frequency cutoff was not recorded. That missing decision is now an explicit reproducibility lesson.',
    ],
    title: 'The model inherits the dictionary’s decisions',
  },
  {
    content: <SolutionSplitSlide />,
    notes: [
      'We split by hidden answer: 2,109 solutions for training, 100 for validation, and 100 held for one final test.',
      'If we split generated rows instead, many states derived from the same hidden answer could appear on both sides.',
      'There is a caveat: 190 of 2,445 unique validation states also appear in training because different answers can lead to the same encoded state. Their teacher labels agree.',
      'That is state-distribution overlap, not solution-ID leakage. The final-test solutions remain sealed.',
    ],
    title: 'Split by secret solution, not by generated state',
  },
  {
    content: <FrozenCorpusSlide />,
    notes: [
      'Training consumes WDIT v3 release v0.1.0 as a frozen offline corpus.',
      'It contains 52,726 training records, 1,600 mini records, and 2,500 records in each validation and final-test split.',
      'The teacher ranking is already in those records; it is not doing expensive search inside the training hot path.',
      'Freezing examples makes runs comparable and keeps the sealed final test out of ordinary inspection and training.',
    ],
    title: 'Freeze the examples before optimising',
  },
  {
    content: <ReproEnvironmentSlide />,
    notes: [
      'The same containerized environment is part of the experiment, not just deployment packaging.',
      'Compose exposes exactly one UUID-selected approved RTX 5070 Ti or RTX 5050, including the Laptop GPU variant.',
      'The smoke check rejects every other visible device and requires compute capability 12.0.',
      'This prevents a demo from silently running on a different card or backend.',
    ],
    title: 'Reproducibility starts with the device',
  },
  {
    content: <CudaSmokeSlide />,
    notes: [
      'Before debugging a neural network, prove the smallest CUDA path possible.',
      'Allocate three floats on the device, copy 19 and 23 from the host, launch one thread, copy 42 back, and verify it.',
      'The triple-chevron syntax describes the launch configuration: one block and one thread.',
      'The kernel compiles specifically for sm_120. Every arrow on this slide is a real boundary we may later profile.',
    ],
    title: 'A CUDA kernel, end to end',
  },
  {
    content: <GoMLXBridgeSlide />,
    notes: [
      'The second smoke test stays in Go: describe Euclidean distance as a graph and evaluate the distance from [1,2] to [4,6].',
      'GoMLX builds the symbolic graph; XLA and PJRT compile and dispatch it to the CUDA backend; the answer is 5.',
      'This is the bridge used by the current policy proof. It gives real CUDA execution without a hand-written policy kernel.',
    ],
    title: 'Go describes the graph; CUDA runs it',
  },
  {
    content: <CurrentCudaStatusSlide />,
    notes: [
      'This is the implementation status today.',
      'The Go orchestration, raw CUDA smoke test, and GoMLX/XLA policy training and inference on CUDA are implemented.',
      'The policy itself is not yet handwritten CUDA, and there is no policy cgo bridge or custom training kernel.',
      'Those are future steps to take only where profiling justifies the extra boundary and maintenance cost.',
    ],
    title: 'What works today—and what is next',
  },
  {
    content: <SharedEncoderSlide />,
    notes: [
      'The host-side boundary is intentionally tiny: a 289-byte LSB-first bitset of remaining solution IDs plus a turn from zero through five.',
      'One Go package expands that representation for both generated training records and live play.',
      'It rejects empty candidate sets and non-zero padding bits instead of passing malformed state into the model.',
      'Five fixed word lists and normalized SHA-256 hashes make every ID verifiable across repositories and runs.',
    ],
    title: 'One board state, one encoder',
  },
  {
    content: <FourInputsSlide />,
    notes: [
      'The shared encoder emits four model-facing values.',
      'CandidateMask identifies compatible answers; CandidateStats summarizes their letter patterns; Turn distinguishes early and late play; RemainingActionMask marks actions that are still possible answers.',
      'That final mask is a feature for a learned bonus. It is not a legality mask.',
      'A tensor here just means a typed, shaped block of numbers with a stable contract.',
    ],
    title: 'Four inputs, one decision',
  },
  {
    content: <CandidateStatsSlide />,
    notes: [
      'The 2,309-value candidate mask is divided by its row sum before projection.',
      'That makes each of the first 96 learned features a mean over remaining words rather than a sum that scales with shortlist size.',
      'The 209 explicit statistics preserve 130 position frequencies, 78 letter-multiplicity frequencies, and one normalized log candidate count.',
      'Normalization removes magnitude on purpose, so candidate count is added back explicitly.',
    ],
    title: 'Mean shape, plus the missing size',
  },
  {
    content: step => <PolicyArchitectureSlide step={step} />,
    notes: [
      '[First reveal] Project the candidate mask to 96 values, the 209 statistics to 48, and the six possible turns to a 16-value embedding.',
      '[Advance once] Concatenate 96 + 48 + 16 into a width-160 state, then pass it through one two-layer residual block.',
      '[Advance again] Produce 4,739 ordinary action logits and one scalar beta for the candidate bonus.',
      'This is deliberately compact: enough structure to learn useful interactions without turning the talk into a catalogue of layers.',
    ],
    stepCount: 3,
    title: 'A small network with a Wordle-shaped output',
  },
  {
    content: <CandidateBonusSlide />,
    notes: [
      'Every action receives an ordinary base logit.',
      'The model also learns one beta value for the current state and adds it only to actions that remain possible answers.',
      'A probe like CHANT has a zero remaining-action mask, but it keeps its base logit and stays playable.',
      'Legality and repeated-guess handling live in a separate availability mask outside this feature.',
    ],
    title: 'CHANT can still be a great action',
  },
  {
    content: <ParameterCountSlide />,
    notes: [
      'With 2,309 solutions and 4,739 actions, the exact count is 1,046,596 FP32 trainable parameters.',
      'That is just under four MiB of weight storage.',
      'Most weights sit in the 4,739-wide output layer, so the vocabulary is an architectural decision—not merely a data file.',
    ],
    title: 'The vocabulary is part of the architecture',
  },
  {
    content: <ImitationLearningSlide />,
    notes: [
      'This first proof uses imitation learning: frozen records say which action the teacher ranked first for each state.',
      'The shared encoder produces the four inputs, and a separate availability mask removes only guesses already used in that game.',
      'Masked sparse cross-entropy adjusts FP32 weights with Adam; global gradient norm is clipped at 5; the deterministic seed is 20260808.',
      'This is supervised copying of a teacher, not reinforcement learning and not search in the hot training loop.',
    ],
    title: 'Teach the policy one good guess at a time',
  },
  {
    content: <ProofStagesSlide />,
    notes: [
      'The proof climbs three fixed stages.',
      'Overfit asks whether 400 updates can memorize one batch. Mini exercises a 1,000-update small corpus and must stop normally at update 500, then resume the same run.',
      'Full performs 2,000 updates with batch size 256. The learning rates, batch sizes, seed, and cadence are fixed before the run.',
      'These deliberately boring gates make failures diagnosable and reruns comparable.',
    ],
    title: 'A ladder of deliberately boring experiments',
  },
  {
    content: <EvidencePipelineSlide />,
    notes: [
      'Each run saves an initial checkpoint at update zero, latest for resume, and best for the lowest validation loss.',
      'Validation and checkpointing happen every 100 updates; training telemetry is emitted every 10.',
      'Runs carry immutable config and metadata, state, logs, metrics, events, and checkpoints.',
      'The report command consumes the three run IDs, re-verifies TensorBoard events and game tags, and writes the checked-in report without rerunning training.',
    ],
    title: 'The run leaves a trail, not just a number',
  },
  {
    content: <LearningProgressSlide />,
    notes: [
      'Loss measures how surprised the model is by the teacher action; lower is better. Top-1 asks how often the highest score matches the teacher.',
      'The one-batch stage reaches 98.9 percent training top-1 but only 6.3 percent validation top-1, and validation loss gets worse. That is memorization doing exactly what the gate was designed to expose.',
      'Mini finds some signal. The best full checkpoint reaches validation loss 3.1633 and top-1 about 0.501.',
      'The result is a bounded proof that the workflow and model learn from this corpus.',
    ],
    title: 'Memorising is easy; ranking unseen states is harder',
  },
  {
    content: <GameResultsSlide />,
    notes: [
      'Metrics against a teacher are useful, but the policy must also play complete games.',
      'On the same fixed 100 validation solutions, the independently reloaded initial checkpoint solves 4 games with a mean of 5.86 guesses.',
      'The best checkpoint solves 97 with a mean of 3.65 guesses.',
      'This same-population comparison is distinct from the small run-zero baseline row in the report. It still uses validation—not the sealed final test.',
    ],
    title: 'The same 100 games, before and after',
  },
  {
    content: <AblationResultsSlide />,
    notes: [
      'An ablation reloads the same best checkpoint and removes or fixes one source of information.',
      'Removing candidate state collapses top-1 from 0.501 to 0.003. Removing the candidate bonus drops it to 0.042.',
      'Fixing turn is less catastrophic but still worsens loss and top-k agreement.',
      'These results show component sensitivity on this validation set; they are not independent generalization experiments.',
    ],
    title: 'Remove one ingredient—and watch the policy stumble',
  },
  {
    content: <ValidationLimitsSlide />,
    notes: [
      'The caveats are part of the result.',
      'Validation guided choices, so it cannot make the final generalization claim. The final-test split remains unopened by default tools.',
      'The state-overlap audit records 190 of 2,445 unique validation states in training with agreeing teacher labels, while solution IDs remain disjoint.',
      'We have not shown a human comparison, an optimal-solver comparison, or a GPU speedup. The current claim is narrower and defensible.',
    ],
    title: 'A passing validation proof has boundaries',
  },
  {
    content: <HostDeviceRolesSlide />,
    notes: [
      'Now return to the engineering boundary.',
      'Go owns HTTP, validation, model identity, Wordle rules, state encoding, action availability, deterministic selection, and evaluation.',
      'The GPU executes the GoMLX forward and training graphs: dense tensor math in, logits or gradients out.',
      'The GPU never becomes the authority on legal play. That keeps the boundary narrow and testable.',
    ],
    title: 'Go owns the game. CUDA owns the dense math.',
  },
  {
    content: <ServingFlowSlide />,
    notes: [
      'The browser makes one same-origin request through the unprivileged Go web service to the private inference service.',
      'The Go host advances the authoritative game, encodes each state, and makes up to six small policy forward calls through GoMLX on CUDA.',
      'Go checks the logits, applies availability, selects the next action, and computes feedback and shortlist transitions.',
      'The completed trajectory returns as JSON. The browser animates it locally; there is no GPU connection or streaming socket in the browser.',
    ],
    title: 'One click, one complete trajectory',
  },
  {
    content: <ServingGatesSlide />,
    notes: [
      'Serving accepts one immutable passed full-run best checkpoint.',
      'Startup rechecks data hashes, effective config, backend identity, checkpoint step, best-validation state, and exact materialized parameter count.',
      'It warms one validation game, then serializes requests because the GoMLX session and Store are not concurrency-safe.',
      'Only the 100 validation solutions are exposed, and every response carries run, checkpoint, update, training commit, and split identity.',
    ],
    title: 'Serving starts with evidence, not optimism',
  },
  {
    content: <LiveDemoSlide />,
    notes: [
      '[Before the talk, set WORDLEML_INFERENCE_RUN_ID=proof-full-20260808 and run make monitoring in the machine-learning repository.]',
      'Open http://127.0.0.1:8082 and choose one of the fixed validation solutions.',
      '[Run the game. Point out each accepted guess, feedback pattern, and the remaining-shortlist transition.]',
      'The request is attributable to the immutable best checkpoint, while the browser only receives the completed JSON trajectory.',
      '[If the live demo is unavailable, use this slide to narrate the same request path and continue.]',
    ],
    title: 'Let’s play a complete game',
  },
  {
    content: <LessonsAndRoadmapSlide />,
    notes: [
      'The most useful lessons are systems lessons: share the representation, freeze IDs and hashes, separate masks by meaning, and keep the final test sealed.',
      'Validate the smallest raw CUDA path before debugging a large graph, and make checkpoints and telemetry part of the feature rather than an afterthought.',
      'Next, profile the real host/device path and move selected work behind handwritten CUDA and cgo only where evidence justifies it.',
      'Broader evaluation and an explicit final-test release policy also remain ahead.',
    ],
    title: 'Make the boundary boring—and the evidence strong',
  },
  {
    content: <ClosingSlide />,
    notes: [
      'Go can own the system around a learned model: orchestration, state, safety, evidence, and serving.',
      'The GPU can own the dense math behind a narrow, verifiable interface.',
      'Thank you. Questions?',
    ],
    title: 'Questions',
  },
];

export const clampSlideIndex = (slideIndex: number) =>
  Math.min(slides.length - 1, Math.max(0, slideIndex));
