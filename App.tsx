import React, { useEffect, useRef, useState } from 'react';

import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { slides, clampSlideIndex } from './deck';
import type { VoiceAction } from './types';
import { isSpeakerNotesRoute, SpeakerNotesView, SPEAKER_NOTES_QUERY_PARAM, SPEAKER_NOTES_CHANNEL, postSpeakerNotesState, isSpeakerNotesMessage } from './SpeakerNotes';
import HelpOverlay from './components/HelpOverlay';
import {
  getHelpShortcutSections,
  getNextPresentationPosition,
  getPresentationNavigationDirection,
  getPreviousPresentationPosition,
  getSlideStepCount,
  getSlideTransitionClass,
  isPresentationShortcutAllowed,
} from './presentationBehavior';
import { useSpeechRecognition, type FinalSpeechRecognitionResult } from './hooks/useSpeechRecognition';
import { useSpeechFollow } from './hooks/useSpeechFollow';
import { isThemeName } from './theme';

const SLIDE_STEP_COUNTS = slides.map(slide => getSlideStepCount(slide.stepCount));

const MIN_ZOOM_LEVEL = 0.8;
const MAX_ZOOM_LEVEL = 1.4;
const ZOOM_STEP = 0.1;

const clampZoomLevel = (zoomLevel: number) =>
  Number(Math.min(MAX_ZOOM_LEVEL, Math.max(MIN_ZOOM_LEVEL, zoomLevel)).toFixed(2));

const DeckView: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [animationsPaused, setAnimationsPaused] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFooterHidden, setIsFooterHidden] = useState(false);
  const { setTheme, theme } = useTheme();

  const currentSlideRef = useRef(currentSlide);
  const currentStepRef = useRef(currentStep);
  const themeRef = useRef(theme);
  const speakerNotesChannelRef = useRef<BroadcastChannel | null>(null);
  const speechFollowResultHandlerRef = useRef<(result: FinalSpeechRecognitionResult) => void>(() => undefined);
  const helpSections = getHelpShortcutSections();

  const setPresentationPosition = (slideIndex: number, stepIndex: number) => {
    currentSlideRef.current = slideIndex;
    currentStepRef.current = stepIndex;
    setCurrentSlide(slideIndex);
    setCurrentStep(stepIndex);
  };

  const goToNext = () => {
    const nextPosition = getNextPresentationPosition(
      currentSlideRef.current,
      currentStepRef.current,
      SLIDE_STEP_COUNTS
    );

    if (nextPosition.slideIndex !== currentSlideRef.current) {
      setSlideDirection(1);
    }

    setPresentationPosition(nextPosition.slideIndex, nextPosition.stepIndex);
  };

  const goToPrev = () => {
    const previousPosition = getPreviousPresentationPosition(
      currentSlideRef.current,
      currentStepRef.current,
      SLIDE_STEP_COUNTS
    );

    if (previousPosition.slideIndex !== currentSlideRef.current) {
      setSlideDirection(-1);
    }

    setPresentationPosition(previousPosition.slideIndex, previousPosition.stepIndex);
  };

  const goToSlide = (nextSlide: number) => {
    const clampedSlide = clampSlideIndex(nextSlide);
    const currentSlideValue = currentSlideRef.current;

    if (clampedSlide !== currentSlideValue) {
      setSlideDirection(clampedSlide > currentSlideValue ? 1 : -1);
      const nextStep = clampedSlide < currentSlideValue
        ? SLIDE_STEP_COUNTS[clampedSlide] - 1
        : 0;
      setPresentationPosition(clampedSlide, nextStep);
    }
  };

  const closeHelp = () => {
    setIsHelpOpen(false);
  };

  const toggleHelp = () => {
    setIsHelpOpen(prev => !prev);
  };

  const zoomIn = () => {
    setZoomLevel(prev => clampZoomLevel(prev + ZOOM_STEP));
  };

  const zoomOut = () => {
    setZoomLevel(prev => clampZoomLevel(prev - ZOOM_STEP));
  };

  const startAnimations = () => {
    setAnimationsPaused(false);
  };

  const stopAnimations = () => {
    setAnimationsPaused(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const openSpeakerNotesView = () => {
    const speakerNotesUrl = new URL(window.location.href);
    speakerNotesUrl.searchParams.set(SPEAKER_NOTES_QUERY_PARAM, '1');

    const speakerNotesWindow = window.open(
      speakerNotesUrl.toString(),
      'calliope-speaker-notes',
      'popup,width=1000,height=760'
    );

    speakerNotesWindow?.focus();

    window.setTimeout(() => {
      postSpeakerNotesState(
        speakerNotesChannelRef.current,
        currentSlideRef.current,
        currentStepRef.current,
        theme
      );
    }, 100);
  };

  useEffect(() => {
    if (typeof BroadcastChannel === 'undefined') {
      return undefined;
    }

    const channel = new BroadcastChannel(SPEAKER_NOTES_CHANNEL);
    speakerNotesChannelRef.current = channel;

    channel.onmessage = (event: MessageEvent<unknown>) => {
      if (!isSpeakerNotesMessage(event.data)) {
        return;
      }

      if (event.data.type === 'speaker-notes-request-state') {
        postSpeakerNotesState(
          channel,
          currentSlideRef.current,
          currentStepRef.current,
          themeRef.current
        );
        return;
      }

      if (event.data.type === 'speaker-notes-navigate') {
        if (event.data.direction === 'next') {
          goToNext();
        } else {
          goToPrev();
        }
        return;
      }

      if (event.data.type === 'speaker-notes-set-theme' && isThemeName(event.data.theme)) {
        setTheme(event.data.theme);
      }
    };

    postSpeakerNotesState(
      channel,
      currentSlideRef.current,
      currentStepRef.current,
      themeRef.current
    );

    return () => {
      channel.close();

      if (speakerNotesChannelRef.current === channel) {
        speakerNotesChannelRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
    currentStepRef.current = currentStep;
    themeRef.current = theme;
    postSpeakerNotesState(speakerNotesChannelRef.current, currentSlide, currentStep, theme);
  }, [currentSlide, currentStep, theme]);

  const commandHandlers: Record<VoiceAction, () => void> = {
    next: goToNext,
    previous: goToPrev,
    startAnimation: startAnimations,
    stopAnimation: stopAnimations,
    zoomIn,
    zoomOut,
  };

  const {
    isVoiceEnabled,
    requestMicrophonePermission,
    setVoiceControlsEnabled,
  } = useSpeechRecognition({
    onFinalResult: result => speechFollowResultHandlerRef.current(result),
  });
  const {
    canUndoAutoAdvance,
    isSpeechFollowEnabled,
    onFinalRecognitionResult,
    setIsSpeechFollowEnabled,
    undoAutoAdvance,
  } = useSpeechFollow({
    commandHandlers,
    currentSlide,
    isMatchingBlocked: isHelpOpen,
    isRecognitionAvailable: isVoiceEnabled,
    onGoToSlide: goToSlide,
    slides,
  });
  speechFollowResultHandlerRef.current = onFinalRecognitionResult;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isHelpOpen && !isPresentationShortcutAllowed(e.key, true)) {
        e.preventDefault();
        return;
      }

      if (e.key === '?') {
        e.preventDefault();
        toggleHelp();
        return;
      }

      if (e.key === 'Escape' && isHelpOpen) {
        e.preventDefault();
        closeHelp();
        return;
      }

      if (isHelpOpen) {
        return;
      }

      const navigationDirection = getPresentationNavigationDirection(e.key);

      if (navigationDirection === 'next') {
        e.preventDefault();
        goToNext();
      } else if (navigationDirection === 'previous') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setIsFooterHidden(prev => !prev);
      } else if (e.key === '+') {
        e.preventDefault();
        zoomIn();
      } else if (e.key === '-') {
        e.preventDefault();
        zoomOut();
      } else if (e.key === ' ') {
        e.preventDefault();
        if (animationsPaused) {
          startAnimations();
        } else {
          stopAnimations();
        }
      } else if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        if (isVoiceEnabled) {
          setVoiceControlsEnabled(false);
        } else {
          void requestMicrophonePermission();
        }
      } else if (e.key === 'u' || e.key === 'U') {
        e.preventDefault();
        undoAutoAdvance();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [animationsPaused, isHelpOpen, isVoiceEnabled, requestMicrophonePermission, setVoiceControlsEnabled, undoAutoAdvance]);

  const currentSlideDefinition = slides[currentSlide];
  const currentSlideContent = typeof currentSlideDefinition.content === 'function'
    ? currentSlideDefinition.content(currentStep)
    : currentSlideDefinition.content;
  const currentSlideStepCount = SLIDE_STEP_COUNTS[currentSlide];
  const canGoNext = currentSlide < slides.length - 1 || currentStep < currentSlideStepCount - 1;
  const canGoPrev = currentSlide > 0 || currentStep > 0;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-canvas font-sans text-text relative">
      <div className="progress-bar w-full" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
      <main className="relative z-0 flex w-full max-w-[120rem] flex-grow flex-col items-center justify-center">
        <div
          className={`presentation-stage w-full ${animationsPaused ? 'animations-paused' : ''}`}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <div className="slide-container w-full">
            <div key={currentSlide} className={getSlideTransitionClass(slideDirection)}>
              {currentSlideContent}
            </div>
          </div>
        </div>
      </main>
      <Footer
        canGoNext={canGoNext}
        canGoPrev={canGoPrev}
        currentSlide={currentSlide}
        goToNext={goToNext}
        goToPrev={goToPrev}
        isControlsHidden={isFooterHidden}
        isSpeechFollowEnabled={isSpeechFollowEnabled}
        canUndoAutoAdvance={canUndoAutoAdvance}
        openSpeakerNotesView={openSpeakerNotesView}
        slideCount={slides.length}
        toggleFullscreen={toggleFullscreen}
        toggleSpeechFollow={() => setIsSpeechFollowEnabled(enabled => !enabled)}
        undoAutoAdvance={undoAutoAdvance}
      />
      <HelpOverlay isOpen={isHelpOpen} onClose={closeHelp} sections={helpSections} />
    </div>
  );
};

const RoutedApp: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme} className="min-h-screen bg-canvas text-text">
      {isSpeakerNotesRoute() ? <SpeakerNotesView /> : <DeckView />}
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <RoutedApp />
  </ThemeProvider>
);

export default App;
