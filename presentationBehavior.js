// @ts-check

/**
 * @typedef {'next' | 'previous' | 'startAnimation' | 'stopAnimation' | 'zoomIn' | 'zoomOut'} VoiceAction
 * @typedef {{ action: VoiceAction, label: string, phrases: string[] }} VoiceCommand
 * @typedef {{ shortcut: string, description: string }} HelpShortcutItem
 * @typedef {{ title: string, items: HelpShortcutItem[] }} HelpShortcutSection
 */

/** @type {VoiceCommand[]} */
export const VOICE_COMMANDS = [
  { action: 'next', label: 'Next Slide', phrases: ['next slide please', 'next slide'] },
  {
    action: 'previous',
    label: 'Previous Slide',
    phrases: ['previous slide please', 'previous slide', 'lets go back', 'go back'],
  },
  { action: 'startAnimation', label: 'Start Animation', phrases: ['start animation'] },
  { action: 'stopAnimation', label: 'Stop Animation', phrases: ['stop animation'] },
  { action: 'zoomOut', label: 'Zoom Out', phrases: ['zoom out'] },
  { action: 'zoomIn', label: 'Zoom In', phrases: ['zoom in'] },
];

/**
 * @param {string[]} normalizedTranscripts
 * @returns {VoiceCommand | undefined}
 */
export const matchVoiceCommand = normalizedTranscripts =>
  normalizedTranscripts
    .map(transcript =>
      VOICE_COMMANDS.find(command => command.phrases.some(phrase => phrase === transcript))
    )
    .find(Boolean);

const HELP_SHORTCUT_ITEMS = [
  { shortcut: 'ArrowRight / ArrowDown / PageDown', description: 'Next step or slide' },
  { shortcut: 'ArrowLeft / ArrowUp / PageUp', description: 'Previous step or slide' },
  { shortcut: 'Space', description: 'Pause or resume animations' },
  { shortcut: 'F', description: 'Toggle fullscreen' },
  { shortcut: 'V', description: 'Toggle voice recognition' },
  { shortcut: 'U', description: 'Undo the last automatic slide advance' },
  { shortcut: '+ / -', description: 'Zoom in or out' },
  { shortcut: '?', description: 'Open or close this help panel' },
  { shortcut: 'Esc', description: 'Close this help panel' },
  { shortcut: 'H', description: 'Hide or show controls (keeps slide counter visible)' },
];

/**
 * @returns {HelpShortcutSection[]}
 */
export const getHelpShortcutSections = () => [
  {
    title: 'Keyboard shortcuts',
    items: HELP_SHORTCUT_ITEMS,
  },
  {
    title: 'Voice commands',
    items: VOICE_COMMANDS.map(command => ({
      shortcut: command.label,
      description: command.phrases.join(' | '),
    })),
  },
];

/**
 * @param {string} key
 * @param {boolean} isHelpOpen
 */
export const isPresentationShortcutAllowed = (key, isHelpOpen) =>
  !isHelpOpen || key === '?' || key === 'Escape';

/**
 * @param {string} key
 * @returns {'next' | 'previous' | undefined}
 */
export const getPresentationNavigationDirection = key => {
  if (key === 'ArrowRight' || key === 'ArrowDown' || key === 'PageDown') {
    return 'next';
  }

  if (key === 'ArrowLeft' || key === 'ArrowUp' || key === 'PageUp') {
    return 'previous';
  }

  return undefined;
};

/**
 * @param {1 | -1} direction
 */
export const getSlideTransitionClass = direction =>
  direction === 1
    ? 'slide-transition slide-transition-forward'
    : 'slide-transition slide-transition-backward';

/**
 * @param {number | undefined} stepCount
 * @returns {number}
 */
export const getSlideStepCount = stepCount =>
  Number.isInteger(stepCount) && stepCount > 0 ? stepCount : 1;

/**
 * @param {number} slideIndex
 * @param {number} stepIndex
 * @param {number[]} slideStepCounts
 * @returns {{ slideIndex: number, stepIndex: number }}
 */
export const getNextPresentationPosition = (slideIndex, stepIndex, slideStepCounts) => {
  const currentStepCount = getSlideStepCount(slideStepCounts[slideIndex]);

  if (stepIndex < currentStepCount - 1) {
    return { slideIndex, stepIndex: stepIndex + 1 };
  }

  if (slideIndex < slideStepCounts.length - 1) {
    return { slideIndex: slideIndex + 1, stepIndex: 0 };
  }

  return { slideIndex, stepIndex };
};

/**
 * @param {number} slideIndex
 * @param {number} stepIndex
 * @param {number[]} slideStepCounts
 * @returns {{ slideIndex: number, stepIndex: number }}
 */
export const getPreviousPresentationPosition = (slideIndex, stepIndex, slideStepCounts) => {
  if (stepIndex > 0) {
    return { slideIndex, stepIndex: stepIndex - 1 };
  }

  if (slideIndex > 0) {
    const previousSlideIndex = slideIndex - 1;
    return {
      slideIndex: previousSlideIndex,
      stepIndex: getSlideStepCount(slideStepCounts[previousSlideIndex]) - 1,
    };
  }

  return { slideIndex, stepIndex };
};
