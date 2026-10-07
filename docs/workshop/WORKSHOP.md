# Enexis DevDay: AI-Assisted Development

Working brief for the workshop by Tuur (GenAI Usecase Team) and Jeffrey (GenAI
Platform Team).

## Workshop Promise

AI-assisted development is not one large prompt that writes an application. It
is a development loop in which AI helps with the work while developers keep
ownership of the problem, the decisions, and the quality bar:

> **Triage -> Specify -> Implement -> Verify**, with **guards** applied at every
> step, **review** at several points (spec, code, product), and a **retro** that
> improves the cycle each time.

The full software lifecycle is larger: Monitor and Ship are also part of it.
Triage is demonstrated by the facilitator, not practised. The workshop shows how
an agent could handle Monitor and Triage (a Datadog alert feeding a triage
agent) with no hands-on exercise. Ship is optional hands-on: participants with
the GitHub CLI can let the agent open a mock PR with `/pr` and `gh`, then inspect
the PR body. Fixing repository checks and handling review comments are shown
only.

By the end of the workshop, participants should have experienced this loop on a
small but realistic change and understand which Enexis platform tools support
each step.

## Audience

- Approximately 75 developers at Enexis DevDay.
- The workshop language is English.
- Developers with mixed experience using coding agents and MCPs.
- Participants work individually by default. They may work in pairs or groups
  if that helps them get unstuck.
- Participants should be able to clone a repository, run its checks, and use the
  AI platform tooling before the hands-on section starts.

The exercise must work for people who are new to agentic development as well as
people who already use coding agents. The basic path should be achievable in
one session; optional challenges should reward experienced participants without
blocking everyone else.

## Proposed Format

The full workshop slot is 150 minutes, including one 15-minute break between
platform onboarding and AI-assisted development. Platform onboarding needs
about 45 minutes.

The core workshop must stand on its own; the video activity is an optional
extension only if the main exercise finishes early.

### Core schedule

| Part | Owner | Time | Purpose |
| --- | --- | ---: | --- |
| 1. Intro | Tuur | 10 min | Set expectations, explain the story, and show the development loop |
| 2. AI Platform onboarding | Jeffrey | 45 min | Explain the platform tools, how they are used, and the platform roadmap |
| Setup + break | Everyone | 30 min | Complete the setup gate before taking the 15-minute break |
| 3. AI-assisted development | Tuur | 55 min | Work through a small mock use case and the full development loop |
| Wrap-up | Both | 10 min | Close the loop, discuss outcomes, and collect final questions |

Total: **150 minutes**, including the break.

Break budget: **15 minutes**, inside the combined 30-minute block. There is no additional break time outside the
150-minute workshop slot.

The combined block starts with a setup gate. Participants should complete the
gate before taking the break:

1. Confirm that the assigned key works with the AI platform. This may be a
   personal developer API key or a temporary workshop key.
2. Clone the workshop repository.
3. Open the repository in OpenCode V1.
4. Restart OpenCode so the project-level `opencode.json` is loaded. This file
   supplies the Context7 MCP for the workshop.
5. Confirm that Context7 is available without adding it to a personal config.
6. Run the repository's smoke test and confirm the expected test command.

Platform engineers can help with approvals and setup during this block. RTK and
DCP are useful platform capabilities, but they are not part of the setup gate
for participants. They can be introduced or configured later without blocking
the exercise.

### Preparation before DevDay

Participants receive the Enexis preparation guide before the event. It remains
the source of truth for private access instructions and prerequisites. The final
key process depends on license availability and the participant's completed
GitHub Copilot training. If personal developer API keys are available, eligible
participants can request one. Otherwise, platform engineers provide temporary
workshop keys.

The public repository should not copy private URLs, credentials, or internal
setup details from that guide. The live setup block exists to verify the parts
that still need to work on the day, not to replace the preparation guide.

The schedule is intentionally tight. If the core exercise runs over, remove the
optional video activity and shorten the stretch work before removing spec,
review, or guardrails.

### Optional video extension

If the core exercise and wrap-up are complete with time remaining, participants
can use the repository's installed `/brag-slim` skill to create a 15–25 second
demo of what they built. This is a lightweight showcase, not a fourth workshop
section.

- Participation is optional.
- Individuals can work alone; people may also collaborate in groups.
- The video should show the created product or flow, not the implementation
  process or private platform configuration.
- Keep the competition informal: facilitators select a few memorable entries or
  ask for a quick room vote rather than giving every participant stage time.
- Do not extend the workshop or delay the main learning outcomes to accommodate
  video rendering.
- Do not publish videos containing personal keys, internal URLs, private issue
  identifiers, or real operational data.

The facilitator should announce the video option only after the main task has
passed its checks. A useful prompt is:

> Make a short launch video of the safe, fictional product you created. Show the
> user problem, the result, and one distinctive detail. Use `/brag-slim` with a
> duration of about 20 seconds. Do not include credentials or internal URLs.

#### Competition recommendation

Keep the competition deliberately small. The point is to end on a fun note,
not to turn the workshop into a film festival.

- Give it a name such as **Best 20-Second Demo**.
- Ask for one video per person or group, submitted to a shared channel or folder
  before the room closes.
- Let facilitators pick three finalists using three simple criteria: clear,
  memorable, and safe to share.
- Play the finalists back-to-back and let the room choose one winner with a
  quick show of hands or poll.
- Use a small symbolic prize, such as first choice of snacks, a printed title,
  or the right to pick the next workshop demo.
- If rendering or submission becomes a problem, cancel the competition without
  changing the workshop outcome.

If the slot becomes shorter on the day, reduce optional implementation depth
rather than removing spec, review, or guardrails. Those are the parts that
distinguish the workshop from a coding-agent demo.

## Learning Outcomes

Participants should be able to:

1. Explain the boundary between the GenAI Platform Team and the GenAI Usecase
   Team: the platform team provides reusable capabilities, while usecase teams
   apply them to a specific product or problem.
2. Access the Enexis AI Gateway with the key available to them and choose an
   appropriate model for a task.
3. Use the relevant MCPs and skills to gather context instead of guessing.
4. Use OpenCode V1 as the guaranteed workshop path while keeping the repository
   as harness-agnostic as practical.
5. Turn an ambiguous request into a reviewable specification with explicit
   acceptance criteria.
6. Use TDD with an agent without outsourcing the definition of correct behavior.
7. Review an AI-assisted change for correctness, security, maintainability, and
   compliance with the specification.
8. Keep the resulting workflow repeatable through tests, local linting, and
   pre-commit checks.

## The Through-Line

The workshop should keep returning to three questions:

- **What do we know?** Gather repository, domain, platform, and external API
  context before asking for implementation.
- **What do we want?** Make behavior observable through a spec, examples, and
  acceptance criteria.
- **How do we know it is safe?** Use tests, review, security checks, and
  guardrails to challenge the generated change.

A fourth idea runs underneath all three: **trust is built, not bought.** Moving
out of the loop (towards an automated software factory) only works once you
trust your agents. That trust comes from watching them deliver in-the-loop, with
specs, skills, guards, and retros around them. Skipping
that climb produces AI slop and a large token bill, and switching to the most
expensive model does not fix a missing process.

This gives the audience a mental model for why each tool exists. The tools are
not the story; the controlled development loop is the story.

## Part 1: Intro (Tuur)

### Audience-facing goals

- Explain why the two teams are presenting together.
- Set the expectation that participants will work, not only watch.
- Show the end-to-end loop before introducing individual tools.
- Give participants the operational information they need immediately.

### Proposed slide/story beats

1. **Title: From prompt to pull request**
   - AI-assisted development as a team practice, not a magic trick.
2. **Why us, why together**
   - Jeffrey: platform capabilities.
   - Tuur: custom AI solutions and usecase delivery.
   - The workshop sits at the seam between both teams.
3. **The promise and the boundary**
   - Agents can accelerate work; developers remain accountable for intent and
     evidence.
4. **Trust ladder**
   - Chat, single agent, in-the-loop (today), on-the-loop, software factory.
     Autonomy is earned rung by rung.
5. **The software lifecycle**
   - Spec, implement, verify hands-on; ship is optional hands-on with the GitHub CLI; triage and monitor shown only.
     Guards across every step, review at spec, code and product, retro in the
     centre.
6. **Today’s agenda**
   - Introduce, onboard, then apply the loop to one mock use case.
7. **How to ask for help**
   - GTG channel and QR code placeholder.
   - State what belongs in the channel and what must not be shared there.
8. **Request access now**
   - Explain the access route that applies on the day. Depending on license
     availability and completed GitHub Copilot training, this may be a personal
     developer API key or a temporary workshop key.
   - Ask participants to submit the relevant request before Jeffrey starts.
   - Platform engineers can approve requests or distribute temporary keys while
     Jeffrey explains the platform.
   - Make clear that this is the only key-request window. Participants should
     put their laptops aside and listen during Jeffrey's section.

The final intro slide should say that the access request is done and hand over to
Jeffrey. The setup checkpoint after the break is where participants check their
approval and complete any remaining configuration.

## Part 2: AI Platform Onboarding (Jeffrey)

Jeffrey owns this section. He will decide the slide structure, examples, depth,
and exact product language. This brief should not prescribe his presentation.

The purpose of the section is to explain the AI platform and the tools the
platform team provides for AI-assisted development. Jeffrey will cover how the
tools are used in theory, while Tuur's later section has participants apply
those tools to the mock use case. Jeffrey will also explain the platform team's
roadmap.

### Supported harnesses

OpenCode V1 is the only harness the facilitators guarantee and the only one that
needs a fully scripted setup path. This is the tool the presenters use and
recommend within Enexis.

The trainee repository itself should remain ordinary, portable code and plain
Markdown wherever possible. Participants using another harness may be able to
complete the exercise, but their setup, MCP configuration, model routing, and
skill invocation are not part of the guaranteed workshop support path.

Do not make the exercise depend on OpenCode-specific state files or hidden
conversation history. The repository must contain the problem, context,
specification artifacts, tests, and checks needed to continue manually or with
another agent.

### Boundary with the hands-on section

Jeffrey's section should give participants enough conceptual context to follow
the hands-on work, but the detailed sequence belongs to Part 3. In particular,
the workshop brief does not prescribe which tools Jeffrey demonstrates, the
order he presents them in, or how much time he gives each topic.

The hands-on section currently expects to use Context7 during specification and
may demonstrate Atlassian MCP as an integration pattern. Jeffrey can decide how
to introduce those tools and any other platform capabilities. The repository
should continue to work when a participant cannot access a shared Jira board.

### Handover to Part 3

The only required handover is a known-good path into the exercise. This can be a
smoke test such as:

```text
Use the workshop repository to identify the current test command and explain
what the application does. Do not change any files.
```

The exact command and handover format are Jeffrey's choice. The important
property is that it proves access, repository visibility, and agent operation
without creating a change. Participants should not spend this section
requesting keys or troubleshooting their setup while Jeffrey is presenting.

The smoke test should use only public-safe repository content. Do not put the
Enexis AI Gateway URL, internal MCP URLs, key-management URLs, private model
configuration, or private screenshots in the public repository. Provide those
through Jeffrey's live onboarding slides or an environment-specific handout.

## Part 3: AI-Assisted Development (Tuur)

### Teaching format

Use a “pause and do” rhythm. Demonstrate one checkpoint, give participants a
short task, then regroup on the artifact they should now have. Each checkpoint
must produce something that can be inspected in the repository or issue
tracker.

| Checkpoint | Core question | Expected artifact |
| --- | --- | --- |
| Triage | What is the risk and what must be checked? | Demonstrated triage decision and route |
| Spec | What behavior is required, and what decisions are still open? | Inspected spec and tickets with acceptance criteria and boundaries |
| Implementation | What is the smallest tested change? | Agent implementation and tests, inspected by the participant |
| Review | Does the change deserve to merge? | Agent review output, fixes, and participant inspection |
| Guards (every step) | How do we keep this quality after today? | Passing local repository checks, inspected by the participant |
| Retro | What do we improve for the next cycle? | One deliberate improvement written into the repository |

### Tool mapping

| Development step | Tools/skills to demonstrate | Human responsibility |
| --- | --- | --- |
| Triage | Existing `/triage` skill; Atlassian MCP or local issue file | Follow the demonstrated decision and ask questions where needed |
| Spec | `/grill-with-docs`, `/to-spec`, `/to-tickets`, Context7 MCP, Grep MCP | Answer the questions, accept or change recommendations, inspect generated Markdown |
| Handoff | `/handoff` | Read the handoff and confirm that the next session has enough context |
| Implementation | Workshop `/devday-implement` skill and `/tdd` | Ask the agent to implement the small spec, then inspect its code and tests |
| Review | `/code-review` plus three review lenses, including workshop `/user-review` | Ask the agent to review and fix findings, then inspect the outcome |
| Guards | Local tests, pre-commit checks, Ruff, and repository-provided checks | Ask the agent to run checks, inspect failures, and direct fixes |
| Retro | `/retro` | Read the suggestions and choose one change yourself |
| Monitor (demo only) | Datadog alert -> triage agent | Confirm the triaged state before anything is implemented |
| Ship (optional hands-on) | `/pr`, `gh` (optional PR) | Tell the agent to create the PR, then inspect its body |

### Context and issue sources

Context7 should be part of the normal spec checkpoint. Participants can use it
to verify Python or testing-library behavior instead of relying on the model's
memory. The prompt should ask the agent to cite or summarize the relevant
current documentation before it chooses an API.

Atlassian should be demonstrated as an integration pattern, not as a hard
dependency. The public repository should contain a local mock issue with the
same kind of story information that the Atlassian MCP would provide. Jeffrey or
Tuur can show one of these options during the workshop:

- Load the local mock issue and explain that the MCP would provide the same
  context from a real story.
- If access is available, load a safe workshop story through Atlassian MCP and
  then continue with the local copy as the portable artifact.
- Have the agent draft a spec or ticket from the story, but do not require
  writing to a shared Jira board.

The local issue remains canonical. Participants should not get blocked by
different board permissions, projects, or issue content.

### Suggested live narrative

Do not ask the agent to implement the story immediately. First show the tempting
shortcut, then deliberately rewind:

1. Start with a prepared story and show how the Atlassian MCP can read it. Keep
   the local Markdown copy as the portable fallback.
2. Run the existing `/triage` skill as a demonstration. Explain how a future
   Jira transition could trigger triage and route the story to clarification,
   direct implementation, or specification.
3. Use `/grill-with-docs` within the spec checkpoint to resolve the remaining
   behavior and domain questions. Use Context7 to verify library assumptions.
4. Use `/to-spec` and `/to-tickets` to create a spec and one small implementation
   ticket.
5. Start a new session with `/handoff`, then use the workshop
   `/devday-implement` skill to implement the small spec. Let the agent write and
   run the tests while participants inspect the diff and behavior.
6. Ask the agent to run `/code-review` for Standards and Spec, then
   `/user-review` against the running Streamlit application. Ask it to fix findings
   where appropriate, then inspect the changed result.
7. Ask the agent to run the local repository guards: tests, Ruff, pre-commit, and
   any checks documented by the repository. Inspect the output and direct fixes.
8. Run `/retro`, read the suggestions, choose one improvement, and write it into
   the repository yourself.

The teaching point is that an agent can be useful at every step, but the
required input and the required review are different at every step.

## Mock Use Case

### Working title

**Grid Guardian**

### Product story

Glowtown is preparing for its fictional Night of Lights festival. The operations
team needs a tiny service that turns noisy, mock grid incidents into a short
briefing for one neighborhood. The briefing should tell the event coordinator
whether the neighborhood needs attention and which single incident matters most.
The service is fictional and uses fixtures only. It must not contain real Enexis
data, credentials, or operational details.

### Seeded repository state

The trainee repository should contain:

- A small Python application with a clear entry point.
- Incident fixture data and a clear place to add the briefing behavior during the
  exercise.
- A thin Streamlit interface that displays the current neighborhood status and a
  placeholder for the incident briefing.
- Fixture data for a few Glowtown neighborhoods and incidents.
- Existing tests for the current behavior.
- A deliberately incomplete or awkward implementation that is safe to change.
- A short README with the run and test commands.
- A mock issue in the local issue-tracker format. Atlassian should not be a
  prerequisite for the exercise because participants may not share a Jira board
  or have access to the same content.
- Local test, lint, and pre-commit checks documented in the README.

The live Atlassian MCP can still appear in the demonstration when access is
available. The local issue is the portable fallback and the canonical starting
point for the public repository.

### Initial request

Use a partly specified request such as:

> The Night of Lights is tonight. Give the event coordinator a quick power
> briefing for a neighborhood: its current status and the one active incident
> that needs attention most.

This is ready for triage but not for implementation. The spec checkpoint should
resolve the remaining behavior questions before code changes begin.

### Questions the group should uncover

- What counts as “current”?
- Which incident wins when several are active?
- How are severity and recency ordered?
- What should happen for an unknown neighborhood?
- What should happen when there are no active incidents?
- Can the digest expose internal or sensitive fields?
- Is the output for a human, an API consumer, or both?
- What is explicitly out of scope for this change?

### Recommended acceptance behavior after specification shaping

The final behavior should be simple enough to implement in the session. For
example:

- Return a briefing for a known Glowtown neighborhood.
- Consider only active incidents.
- Select the highest-severity active incident; break ties by most recent event.
- Return a clear “no active incidents” result when none are active.
- Return a safe, explicit result for an unknown neighborhood.
- Expose only the fields needed by the briefing; do not leak fixture metadata.
- Preserve existing behavior outside the new briefing behavior.

These are a proposal, not a hidden answer. The spec checkpoint should make the
final rules visible to participants.

### Retro: do not automate it

The retro is a hands-on step, but the participant stays in control. Do not
automate the retro: an agent that applies every suggestion by itself causes
drift (for example a huge `AGENTS.md` that nobody has read). Participants verify
the suggestions and choose which one change to keep. The result should be one
small, inspectable artifact such as an instruction, skill, or guard.

## Review Matrix

The review section should force more than “the tests pass.” Give participants a
small checklist:

| Lens | Review question |
| --- | --- |
| Behavior | Does the implementation match every acceptance criterion? |
| Tests | Do tests cover boundaries, ties, empty results, and unknown input? |
| Security | Does the output avoid exposing internal fixture or operational data? |
| Compatibility | Did unrelated behavior remain unchanged? |
| Maintainability | Is the code understandable without the original prompt? |
| Cost/context | Did the workflow use the smallest useful model and context? |
| User experience | Would an operations user understand the result and errors? |

## Trainee Repository Shape

The public repository should eventually make the exercise discoverable without
the presentation. A possible layout is:

```text
.
├── README.md
├── presentation/
│   └── ...
├── workshop/
│   ├── facilitator-guide.md
│   ├── participant-guide.md
│   └── checkpoints/
├── src/
├── tests/
├── fixtures/
├── .github/ or .gitlab/
└── .pre-commit-config.yaml
```

Do not publish real platform URLs, personal keys, QR destinations, internal
issue identifiers, screenshots containing credentials, or proprietary incident
data. Keep environment-specific onboarding in a separate facilitator/platform
note or replace it with public-safe placeholders before publishing.

## Presentation Plan

The deck should be one coherent story, with a visible boundary where Jeffrey's
slides are inserted. Tuur's authored sections can be built first:

1. Cover and workshop promise.
2. Two teams, one development loop.
3. Agenda and participation model.
4. The rule for using AI, and the trust ladder.
5. Jeffrey section divider: platform onboarding.
6. Jeffrey's onboarding slides.
7. Get ready: key request, setup gate, smoke test, break.
8. The software lifecycle (hands-on steps, demo-only steps, guards, retro).
9. Mock use case and Jira MCP introduction, then a credits slide: shout-out to Matt Pocock (github.com/mattpocock/skills) and Lauren Tan (github.com/poteto), with the message that the lessons are tool-agnostic.
10. Triage demonstration, plus the Monitor-to-triage automation example.
11. Specification shaping and context gathering (`/grill-me` stateless vs
    `/grill-with-docs` stateful).
12. TDD implementation.
13. Standards, Spec, and User reviews.
    Each hands-on step (spec, implement, review, guards, optional ship, retro) is followed by a dedicated Pause + Do slide with a goal, concrete steps, and a done-when line.
14. Guards at every step, a rails slide (spec and guards are the two rails that keep the agent on track), Ship (optional mock PR with `/pr` and `gh`), retro, and a follow-up slide on why not to automate the retro.
15. Closing: trust is built, not bought, with a mini trust-ladder reminder.
The final number of slides should follow the confirmed slot and live-demo pace.
The deck should include presenter notes for Tuur's slides. Jeffrey's section
should have a clear insertion point and not duplicate his own onboarding deck.

## Confirmed Constraints

- The total workshop slot is 150 minutes.
- The workshop language is English.
- OpenCode V1 is the only guaranteed harness. The repository should stay
  portable enough for other harnesses where that costs little.
- OpenCode V2 is not part of this workshop version.
- The exercise uses skills checked into this repository. SkillsHub is out of
  scope for now.
- The exercise does not depend on Atlassian access. A local issue file is the
  default source of truth.
- The optional video activity uses the installed `/brag-slim` skill.
- No private Enexis URLs, credentials, model configuration, issue identifiers,
  or screenshots belong in the public repository.

## Decisions Needed Before Implementation

1. Which platform URLs, model names, MCPs, and skills are available on the day?
2. Is Context7 approved and reachable in the workshop environment?
3. Is Grep MCP available, and what is its exact name/configuration?
4. What is the GTG channel and QR destination, and what content is safe to put
   there?
5. Which parts of the onboarding must remain private when this repository is
   made public?

The following choices are recommendations rather than blockers:

- Use a local mock issue as the default. Treat Atlassian MCP as a five-minute
  optional demonstration if access works for the presenters.
- Keep the core exercise Python plus a thin Streamlit surface. Do not add a
  second language or product feature before the first version has been tested
  end-to-end.
- Include the `/user-review` skill as a live review checkpoint.
- For the video competition, let facilitators select three finalists and use a
  quick room vote for the winner. Cancel it if rendering or sharing gets in the
  way.

## Success Criteria

The workshop is successful if most participants can:

- Complete the platform smoke test.
- Produce a meaningful spec artifact rather than jumping straight to code.
- Make at least one tested change to the mock use case.
- Identify at least one issue in an AI-generated implementation through review.
- Explain one guardrail they would keep in their own team.

The strongest outcome is not that everyone finishes identical code. It is that
participants leave with a repeatable way to use AI while retaining engineering
judgment.
