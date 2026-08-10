# Main Talk Repo - Instructions to Agents

You are to assist in creating the slideshow for a talk.



## Tools

Use the playwright-cli skill if you want to look at the website.



## Talk Overview

This is a one-hour talk. The audience is to be a large group of Go developers. No prior knowledge of machine learning or
data science can be assumed.



## Talk Abstract

### Title

From Go to the GPU: Integrating with CUDA

### Abstract

Go is an appealing choice machine learning projects, with a fast, efficient systems programming approach and a mature
concurrency model. Integrating Go with CUDA for GPU programming allows developers to connect conventional software with
bespoke AI/ML tooling.

In this talk, a real example project will be used to explore that journey. Join us as we solve word puzzles with Go
code, design a machine learning model from scratch in CUDA, and connect the two via cgo to train our model with
synthetic data.

Using a concrete case study, the talk will show how Go can handle orchestration, data generation, and evaluation -
calling CUDA code inline to take over the performance-critical work of running and training our model. We will look
closely at the components and architecture of a custom-built ML model, and the engineering boundary between on-host Go
code and on-device GPU workloads in CUDA.

Along the way, the talk will cover practical lessons from building a mixed Go/CUDA project from scratch - including code
structure, profiling with NVIDIA’s tools, and the role that Go libraries in the machine learning space can play as the
project evolves.

This isn't a how-to guide on running a popular Python library or using the latest cloud tools. But if you want to look
at the nuts and bolts of how Go and CUDA combine to build and train a custom neural net from scratch, join us as we move
from Go to the GPU.



## Version Control

Do not use merge commits. Feature branches going into `master` must be rebased and fast-forward merged. Conflicts with
upstreams are to be resolved by rebase pulls and force-with-lease pushes as appropriate.

Commit messages for smaller commits should resemble the following structure where sensible:

```
To/For/Because/So that [reason for change], [what is changed]
```

For larger commits, use bullet points instead of the above structure where appropriate.

We should, as a general rule, be committing and pushing changes whenever a feature or task has been completed.

In general, the `master` branch should be used for everything. Feature branches should be used only when requested, or
in exceptional cases.

If you are told to use pull requests, you **must** go away and research the Github 'stacked pull request' feature. It is
very new - you won't have heard of it - but it is the correct way to manage several PRs which are to be merged in a
specific order.

You are to keep the `origin` remote up-to-date. If you can see one called `gitlab` and connectivity to it is working,
keep that in sync with `origin` at all times.





## Systems Administration

In general, agents should not be doing systems administration on the laptop or desktop. If a Linux utility or something
else you need is missing, stop and ask.



## Project Goals

The main goal of the project is to produce a talk for a conference: a 1 hour talk, given to a group of Go developers, on
machine learning.



## Other Repos

There are other repos in the parent directory of this repository's root folder. The ones entitled
`wordle-ml_[something]` are part of this project. The are the actual code, not the slideshow. In particular, you must
read the markdown files at `../wordle-ml_machine-learning/talk/`. There you will find a copy of the talk abstract, and
notes about the project written specifically for the talk.



## Slides

Slides are allowed to have animated or interactive content where it is appropriate. You will usually be asked to do this
specifically if it is needed. Figure out the necessary coding details yourself, I'm not your mother.

Slide numbers should be reflected in the filenames of the slides, to make them easier to find.




* * *



# Calliope-Canvas Agent Guide

This section is the original `AGENTS.md` file of the Calliope-Canvas slideshow project. It is a tool for making
presentations. We have taken a copy of the original repo here, and added our own talk-specific content.

## Project Overview

Calliope-Canvas is a React + TypeScript presentation framework. Slides are React components; the app is a Vite-bundled SPA.

## Key Files

- `App.tsx` — deck orchestrator: slide array, navigation, voice control, zoom, keyboard shortcuts
- `SpeakerNotes.tsx` — speaker-notes popup, synced to main deck via BroadcastChannel
- `types.ts` — shared types (`SlideDefinition`, `AnimationState`, `DataPacket`, `VoiceAction`)
- `components/Footer.tsx` — footer bar
- `components/HelpOverlay.tsx` — shift+? help overlay
- `components/Icons.tsx` — SVG icons
- `slides/` — individual slide components
- `presentationBehavior.js` — pure animation/behavior logic (testable, no React)
- `speech-recognition.d.ts` — ambient Web Speech API types

## Adding Slides

1. Create a component in `slides/MySlide.tsx`
2. Register it in the `slides` array in `App.tsx`:

```tsx
{
  content: <MySlide />,
  notes: ['Speaker note one.', '[Italicized note in brackets.]'],
  title: 'My Slide',
}
```

Notes in `[square brackets]` are automatically italicized in the speaker-notes window.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Type check only | `npx tsc --noEmit` |

Dev server runs on **http://localhost:3000**.

## Conventions

- Functional components, arrow function style, typed props interfaces
- PascalCase for components/types; camelCase for functions/variables; SCREAMING_SNAKE_CASE for module-level constants
- `@/` alias resolves to project root
- No CSS framework — plain `index.css`
- No linter or formatter configured
- No test runner configured in `package.json`; `presentationBehavior.test.js` is standalone

## Architecture Notes

- `SlideDefinition` in `types.ts` is the contract for all slide entries
- Speaker-notes sync uses the `BroadcastChannel` API (channel name in `SPEAKER_NOTES_CHANNEL`)
- Voice control uses the Web Speech API; microphone permission is requested on deck load
- `AnimationState` enum drives per-slide animation state machines
- `@/` path alias configured in both `vite.config.ts` and `tsconfig.json`
