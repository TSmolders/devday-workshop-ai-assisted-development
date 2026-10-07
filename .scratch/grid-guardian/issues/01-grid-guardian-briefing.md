# Add a Grid Guardian briefing

**Type:** enhancement

**Status:** needs-triage

## User story

The Night of Lights is tonight. Extend the existing Grid Guardian dashboard with
a quick power briefing for a selected neighborhood: its current status and the
one active incident that needs attention most.

## Context

Glowtown is fictional. The repository already shows the current status of a few
neighborhoods and contains fixture incidents for the new briefing feature. The
story is ready for triage, but the behavior is not fully specified yet. The spec
checkpoint should resolve the remaining questions before implementation.

## Comments

The same story may be loaded from Jira through the Atlassian MCP during the
workshop. This local copy remains the portable source for participants.

## Existing behavior

- The Streamlit app lists Lantern Row, Copper Park, and Beacon Hill.
- A neighborhood is currently shown as `Attention needed` when it has at least
  one active incident; otherwise it is shown as `Stable`.
- The status dashboard is already runnable and is outside the scope of this
  change.
- Incident fixtures are fictional workshop input. They include active and
  resolved incidents, severity, event time, and fields that must not appear in
  the user-facing briefing.

## Change requested

Add the briefing capability on top of the existing dashboard. Do not redesign
the product or add incident management. The implementation should introduce a
small testable domain seam and keep the Streamlit layer focused on collecting a
neighborhood and rendering the result.
