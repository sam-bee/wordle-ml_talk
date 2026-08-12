import React from 'react';

import { Callout, Panel, Reveal, SlideFrame, SlideHeader } from '../components/SlidePrimitives';

interface BackpropagationSlideProps {
  step: number;
}

const LOOP_TONES = {
  primary: {
    panel: 'border-primary/40 bg-primary/10',
    label: 'text-primary',
  },
  accent: {
    panel: 'border-accent/40 bg-accent/10',
    label: 'text-accent',
  },
  danger: {
    panel: 'border-danger/40 bg-danger/10',
    label: 'text-danger',
  },
} as const;

const LOOP_STEPS = [
  {
    label: '1. State',
    detail: 'A Wordle position enters the policy.',
    value: 'candidate set + turn',
    tone: 'primary',
  },
  {
    label: '2. Scores',
    detail: 'The network ranks 4,739 possible guesses.',
    value: 'one score / action',
    tone: 'accent',
  },
  {
    label: '3. Loss',
    detail: 'Compare that ranking with the teacher’s choice.',
    value: 'how wrong?',
    tone: 'danger',
  },
  {
    label: '4. Gradients',
    detail: 'Trace the error back to the weights that contributed.',
    value: 'which weights?',
    tone: 'accent',
  },
  {
    label: '5. Update',
    detail: 'Adam (Adaptive Moment Estimation) makes a small correction to those weights.',
    value: 'slightly better next time',
    tone: 'primary',
  },
] as const;

const BackpropagationSlide: React.FC<BackpropagationSlideProps> = ({ step }) => (
  <SlideFrame>
    <SlideHeader
      kicker="Backpropagation, simplified"
      title="Learning is a feedback loop"
      subtitle="For each labelled Wordle state, make a prediction, measure its mistake, and use that mistake to improve the next prediction."
    />

    <div className="mt-8 flex flex-1 flex-col justify-center">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-2">
        {LOOP_STEPS.map((loopStep, index) => (
          <React.Fragment key={loopStep.label}>
            <Reveal visible={step >= index} preserveLayout className="h-full">
              <Panel className={`flex h-full min-h-64 flex-col ${LOOP_TONES[loopStep.tone].panel}`} padding="compact">
                <p className={`font-mono text-base font-bold uppercase tracking-[0.15em] ${LOOP_TONES[loopStep.tone].label}`}>{loopStep.label}</p>
                <p className="mt-5 text-xl font-semibold leading-snug text-text">{loopStep.detail}</p>
                <p className="mt-auto border-t border-border pt-4 font-mono text-base leading-snug text-muted">{loopStep.value}</p>
              </Panel>
            </Reveal>
            {index < LOOP_STEPS.length - 1 && (
              <Reveal visible={step >= index + 1} preserveLayout className="flex items-center">
                <span className="text-3xl text-primary" aria-hidden="true">→</span>
              </Reveal>
            )}
          </React.Fragment>
        ))}
      </div>

      <Reveal visible={step >= 4} preserveLayout>
        <Callout className="mt-7 text-center" tone="accent">
          Weights are adjusted per batch. After 52,726 Wordle training records, we have a policy that can emulate the teacher.
        </Callout>
      </Reveal>
    </div>
  </SlideFrame>
);

export default BackpropagationSlide;
