---
name: user-review
description: Review a running Streamlit application as a real user and report behavior, usability, and spec findings without changing code.
disable-model-invocation: true
---

# User review

Review the running application through its user-facing interface. This is a
separate review from Standards and Spec review. Do not inspect implementation
details to replace using the interface.

1. Read the current spec and identify the user journeys and acceptance criteria
   that the interface must support.
2. Find the repository's documented Streamlit run command and start the app if
   it is not already running.
3. Use the configured Playwright MCP browser tools when available. Navigate to
   the local Streamlit URL and inspect the rendered interface through browser
   interactions, not source code or HTTP responses alone.
4. If Playwright MCP or another browser-capable tool is unavailable, report that
   limitation instead of claiming the UI was tested. Do not install or configure
   browser tooling as part of the review.
5. Exercise the main journey with a known neighborhood, then check the unknown
   neighborhood and no-active-incident states.
6. Check that the visible status and selected incident are understandable to an
   event coordinator and that fixture-only or internal metadata is not shown.
7. Record each finding with the steps to reproduce, expected result, actual
   result, and severity. Distinguish a product defect from a tooling or access
   limitation.

Do not edit files, change fixtures, add tests, or commit changes. End with a
short report of passed journeys, findings, and any checks that could not run.
