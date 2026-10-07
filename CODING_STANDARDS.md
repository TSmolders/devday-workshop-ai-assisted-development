# Coding standards

These standards apply to the workshop application and its tests.

- Keep domain behavior behind a small public function that tests can call
  without starting Streamlit.
- Keep Streamlit code as a thin adapter. It may collect input and render output,
  but it should not decide incident priority or expose fixture metadata.
- Keep the documented Streamlit entry point runnable as a direct file command;
  use package-safe imports for code loaded by that entry point.
- Test observable behavior through the public seam. Do not test private helpers
  or duplicate the implementation in assertions.
- Use the domain terms from the story consistently: neighborhood, incident,
  active, severity, status, and briefing.
- Return explicit results for unknown neighborhoods and neighborhoods with no
  active incidents. Do not hide these cases behind empty strings or exceptions
  that the user cannot understand.
- Keep fixture data fictional and safe to display. Never add credentials,
  internal URLs, or real operational data.
- Keep changes narrow. Do not add abstractions, output formats, or product
  features without a requirement in the spec.
- Run Ruff and the repository test suite before considering a change complete.
