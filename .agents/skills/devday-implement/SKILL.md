---
name: devday-implement
description: "Implement a DevDay workshop ticket with TDD, then stop for a separate review."
disable-model-invocation: true
---

# DevDay implementation

Implement the work described by the user in the spec or ticket. Keep the
workshop lifecycle visible to the audience.

1. Read the spec and the selected ticket. State the public seam you will test.
2. Use `/tdd` at that seam. Work in vertical red-green slices rather than
   writing all tests or all implementation first.
3. Run the relevant single test file after each slice. Run the full test suite,
   formatter, and type checks that the repository provides when implementation
   is complete.
4. Summarize the changed behavior, tests, and any known uncertainty.

Stop after implementation and local checks. The facilitator will run the
standards/spec review, the user review, and the remaining guardrails as separate
workshop steps.

Leave changes in the working tree for inspection. Do not commit, create a
branch, run `/code-review`, or fix review findings during this skill.
