import React from 'react';
import { NotesIcon } from './Icons';
import ThemedButton from './ThemedButton';

interface FooterProps {
  canGoNext: boolean;
  canGoPrev: boolean;
  canUndoAutoAdvance: boolean;
  currentSlide: number;
  isControlsHidden: boolean;
  isSpeechFollowEnabled: boolean;
  openSpeakerNotesView: () => void;
  slideCount: number;
  goToPrev: () => void;
  goToNext: () => void;
  toggleFullscreen: () => void;
  toggleSpeechFollow: () => void;
  undoAutoAdvance: () => void;
}

const Footer: React.FC<FooterProps> = ({
  canGoNext,
  canGoPrev,
  canUndoAutoAdvance,
  currentSlide,
  goToNext,
  goToPrev,
  isControlsHidden,
  isSpeechFollowEnabled,
  openSpeakerNotesView,
  slideCount,
  toggleFullscreen,
  toggleSpeechFollow,
  undoAutoAdvance,
}) => {
  return (
    <footer className="relative z-20 w-full max-w-7xl py-4 flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div className={`font-semibold transition-opacity duration-300 ${isControlsHidden ? 'text-muted opacity-60' : 'text-muted'}`}>Calliope Canvas</div>

        <div className="relative flex items-center">
          <div className={`flex flex-wrap items-center gap-2 transition-opacity duration-300 ${isControlsHidden ? 'opacity-0 pointer-events-none' : ''}`}>
            <ThemedButton
              onClick={goToPrev}
              disabled={!canGoPrev}
            >
              Previous
            </ThemedButton>
            <span className="text-muted font-mono">
              {currentSlide + 1} / {slideCount}
            </span>
            <ThemedButton
              onClick={goToNext}
              disabled={!canGoNext}
              variant="primary"
            >
              Next
            </ThemedButton>
            <ThemedButton
              onClick={openSpeakerNotesView}
              title="Open speaker notes"
            >
              <NotesIcon className="h-5 w-5" />
            </ThemedButton>
            <ThemedButton
              onClick={toggleFullscreen}
              title="Toggle Fullscreen (F)"
            >
              ⛶
            </ThemedButton>
            <label
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-text"
              title="When enabled, matching phrases can advance to the next slide automatically."
            >
              <input
                type="checkbox"
                checked={isSpeechFollowEnabled}
                onChange={toggleSpeechFollow}
              />
              <span>Follow speech: {isSpeechFollowEnabled ? 'On' : 'Off'}</span>
            </label>
            <ThemedButton
              onClick={undoAutoAdvance}
              disabled={!canUndoAutoAdvance}
              title="Undo auto-advance (U)"
            >
              Undo auto-advance
            </ThemedButton>
          </div>
          <span className={`absolute inset-0 flex items-center justify-end transition-opacity duration-300 pointer-events-none font-mono text-sm text-muted ${isControlsHidden ? 'opacity-60' : 'opacity-0'}`}>
            {currentSlide + 1} / {slideCount}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
