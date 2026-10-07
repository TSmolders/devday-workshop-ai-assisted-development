# DevDay workshop: AI-assisted development

This repository contains the materials and example application for the Enexis
DevDay workshop on AI-assisted development.

The workshop follows one development loop:

```text
Triage -> Specify -> Implement -> Review -> Guard -> (Ship) -> Retro
```

Guards (tests, Ruff, pre-commit) apply at every step, and review happens at the
spec, the code, and the running product.

## Start here

- [Self-guided workshop guide](docs/workshop/self-guided-guide.md) walks through
  the exercise step by step, including setup, checkpoints, expected artifacts,
  and optional stretch work.
- [Workshop brief](docs/workshop/WORKSHOP.md) is the facilitator-facing plan
  with the audience, schedule, learning outcomes, tool mapping, and Grid
  Guardian story.
- [Presentation](presentation/index.html) is the workshop slide deck. See the
  [presentation README](presentation/README.md) for controls and local viewing
  instructions.

## Repository map

### Workshop materials

- [`docs/workshop/`](docs/workshop/) contains the self-guided guide and the
  facilitator brief.
- [`presentation/`](presentation/) contains the HTML slide deck, its styles, and
  presentation notes.
- [Grid Guardian briefing](.scratch/grid-guardian/issues/01-grid-guardian-briefing.md)
  is the portable fictional issue used by the exercise.

### Application

- [`src/devday_workshop_ai_assisted_development/`](src/devday_workshop_ai_assisted_development/)
  contains the Streamlit application and the small domain seams used in the
  exercise.
- [`tests/`](tests/) contains tests for the current application behavior.
- [`CODING_STANDARDS.md`](CODING_STANDARDS.md) documents the boundaries and
  conventions the implementation should follow.

### Agent workflow

- [Project skills](.agents/skills/) contain the reusable skills used during the
  workshop, including `/triage`, `/grill-with-docs`, `/to-spec`, `/to-tickets`,
  `/devday-implement`, `/code-review`, and `/user-review`.
- Many of these workflow skills come from [Matt Pocock's skills
  repository](https://github.com/mattpocock/skills). Thanks to Matt for making
  them available and for the ideas behind this way of working.
- [`opencode.json`](opencode.json) contains the project-level agent and MCP
  configuration. The self-guided guide explains the environment-specific setup
  that is intentionally not stored in this public repository.
- [`AGENTS.md`](AGENTS.md) gives agents the repository-specific instructions.

### Repository guidance

- [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md) explains the
  local Markdown issue tracker under `.scratch/`.
- [`docs/agents/triage-labels.md`](docs/agents/triage-labels.md) defines the
  canonical triage states.
- [`docs/agents/domain.md`](docs/agents/domain.md) explains how agents should
  use glossary and architecture decision records when they exist.

## Local setup

Install `uv` using the instructions for your operating system from the official
`uv` documentation. On macOS or WSL, the installation command is:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Then install the project dependencies and `prek` hooks:

```bash
uv sync --no-upgrade
uv run prek install -f
```

## Optional tools

The core exercise needs only `uv` and an agent harness. These tools are optional.
Install them if you want to try the extra steps.

### GitHub CLI (optional Ship step)

The Ship step lets the agent open a pull request with `/pr` and the GitHub CLI
(`gh`). Use a clone or fork you may push to.

```bash
# macOS
brew install gh

# Windows
winget install --id GitHub.cli
```

On Linux, follow the [GitHub CLI install instructions](https://github.com/cli/cli#installation).
Then authenticate and check that it works:

```bash
gh auth login
gh auth status
```

### Playwright (optional `/user-review` step)

`/user-review` drives the running Streamlit application in a browser through the
Playwright MCP that `opencode.json` already configures. It needs Node.js (for
`npx`) and a Chromium browser.

```bash
# macOS (Node.js)
brew install node

# Windows (Node.js)
winget install OpenJS.NodeJS.LTS

# Chromium for the Playwright MCP
npx playwright install chromium
```

Restart your agent harness after installing so it picks up the MCP. If your
harness cannot start the Playwright MCP, skip `/user-review`. The rest of the
workshop does not depend on it.

## Run the application

The application entry point is:

```text
src/devday_workshop_ai_assisted_development/app.py
```

Run the Streamlit application with:

```bash
uv run streamlit run src/devday_workshop_ai_assisted_development/app.py
```

Follow the [self-guided workshop guide](docs/workshop/self-guided-guide.md) for
the complete environment setup and exercise sequence.

## Public-safety boundary

The repository is intended to remain public-safe. Keep private platform routes,
credentials, tokens, internal identifiers, internal URLs, and real operational
data in the environment-specific onboarding material, not in this repository.
