# New platform presentation — design handoff

Start a new grill-me session for `presentation/index_platform.html`.

## Completed setup

- Copied physical slides 5 and 6 from `presentation/index.html`:
  Promise and AI Platform Team introduction, including presenter notes.
- Reuses the existing static HTML deck runtime, styles and themes.
- The original presentation remains unchanged by this setup.
- The new deck currently has only these two slides. No animation implemented.

## User's next design direction

- Start the platform explanation with the LiteLLM logo in the centre.
- Add items around that logo interactively, one step at a time.
- Advance with the right-arrow key; not autoplay or a rendered video.
- Use transitions like PowerPoint Morph: retained objects should move or
  resize smoothly between states, rather than whole slides just sliding in.
- Agree the details in the new session before building the explanation.
- Ask one grill question at a time, with a recommended answer.

## First decision to resolve

Which surrounding item should appear first, and what should the audience
understand at that point? Establish the reveal sequence before choosing the
transition implementation. Do not assume all existing platform topics remain.

Keep new experimental styling and scripts separate so changes cannot alter
the existing workshop deck. Reuse shared assets without overwriting originals.
