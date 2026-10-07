# DevDay Workshop Presentation

Latest deck update: 42 slides. What we provide includes RTFM documentation
with tips & tricks and the GTG support channel. Current running PoCs follows
New hype, with eight locally stored logos; evaluations are not production
services or delivery commitments.

The platform quiz has three question/answer pairs. Click the visible button
or advance with Right/Space: question → answer → next question. Separate
slides preserve presenter mode and backward navigation; `quiz.js` connects
the buttons to the unchanged runtime. Answers distinguish MCP from an API
collection, explain incorrect success claims when context/checks are lost,
and reinforce that guardrails do not authorize personal-data entry.
MCP reference: https://modelcontextprotocol.org/docs/learn/architecture.

PoC logo sources (retrieved 5 October 2026, originals kept locally):
- Solo.io: https://cdn.prod.website-files.com/66dba20a96c0aa281999f399/66ec6aa5a7e9e8d8c1fd498f_logo.svg
- agentregistry: https://github.com/agentregistry-dev/website/blob/HEAD/static/img/agent-registry-logo.svg
- agentgateway: https://github.com/agentgateway/website/blob/HEAD/static/agw-light.svg
- kagent: https://github.com/kagent-dev/website/blob/HEAD/docs-site/static/images/kagent-logo-light.svg
- Coder: https://github.com/coder/coder/blob/HEAD/docs/images/logo-black.png
- agentdesktop: https://github.com/agentdesktop-dev/agentdesktop/blob/main/images/logo.svg
- enexis-code-harness (Enexis logo): local asset supplied for the workshop
- OpenChoreo: https://github.com/openchoreo/openchoreo/blob/main/logo/choreo-logo-black.svg

Agenda (`04 / today`) is immediately after the
Tuur and Jeffrey introductions. Removed Model selection, The model release race,
and Agentic software factory slides. Local models retains only local inference
and upcoming EU options; the OT question is removed. Image assets are preserved.
Earlier sections below record previous iterations and can mention removed slides.

Open `index.html` in a browser, or serve the repository root locally:

```bash
python3 -m http.server 8765
open http://127.0.0.1:8765/presentation/index.html
```

Keyboard controls come from the checked-in `html-ppt` runtime:

- `Left` / `Right` or `Space`: navigate
- `S`: open presenter mode with current, next, notes, and timer cards
- `N`: show the notes drawer
- `O`: show the slide overview
- `F`: fullscreen
- `T`: cycle the available themes

The deck is intentionally public-safe. The catalogue uses the presenter-confirmed
model aliases. The router slide is a model-selection snapshot checked on
5 October 2026; recheck it before presenting. Environment-specific
details remain placeholders where confirmation is needed.
Do not add private URLs, credentials, internal identifiers, or real operational
data here.

The introduction slide uses `tuur.jpeg` and `jeffrey.png`. The model comparison
slide uses `images/model-comparison.png` as a dated discussion snapshot, not as
the platform's availability list.

Two additional, unnumbered image slides keep the existing topic numbers stable:
`Model releases` precedes `Models offered` and uses
`images/model-release-timeline-dark.png`; `Agentic software factory` precedes
`Platform roadmap` and uses `images/agentic-software-factory-dark.png`.
Both images fill the slide without cropping or a duplicate heading. Their
embedded titles remain visible. The release timeline is presenter-provided,
not independently fact-checked here. The factory visual shows a conceptual
direction, not committed roadmap delivery dates.

An unnumbered `Local models?` slide follows `Model selection`. It references
[LM Studio](https://lmstudio.ai/), the presenter-provided upcoming EU options
(GLM-5.3, GLM-5.3-flash, Deepseek-4.1, Deepseek-4.1-flash), and local Enexis GPUs
for OT as an open question. EU refers to intended deployment, not model origin.
These items do not confirm availability, delivery dates, or approved OT use.

The recommended starting choices are `gpt-router` and `claude-router`.
Direct model selection remains an option for now. Family guidance is practical
starting advice, not a benchmark ranking. The router's Opus target is not an
addition to the direct-selection catalogue. The existing gateway film has an
older routing snapshot; use the router slide for current model choices.

## Public references

### Simplified model release race

`The model release race` replaces the full-frame release timeline with a
schematic line of increasingly close release markers: more models, less time
between releases. Markers are conceptual, not measured dates or counts. The
slide states AI Platform uses the same provider models through the gateway;
the next catalogue defines actual availability. The original timeline image
is preserved but no longer displayed.

### Film removed and quiz

The AI Gateway film slide has been removed at the presenter's request. The
original film asset is preserved; the older playback notes below are historical.
The guardrail replacement marker is now `[REDACTED]`. Current count: 38 slides.
The public copy omits the former request-log evidence material; those
operational screenshots remain only in the private source checkout.

Slide 13 now uses the presenter-provided gaps: Change roadmap is highlighted
above the lack of harness/AI traffic enforcement and an Enexis-hosted agent
runtime. Security collaboration is under investigation; agent-runtime PoCs
target production readiness in Q1 2027 as an expectation, not a guarantee.

The gateway integration slide now explicitly says that Enexis does not currently
offer a hosted agent platform: participants provide their application or harness.
`AI Gateway film` follows this slide and embeds
`platform/brag-output-litellm-2026-09-29-135243/brag.mp4` (30 seconds with audio).
Click the native play control; there is no autoplay or mute. Leaving the slide
pauses playback via `media.js`; returning keeps the paused position. Native
video controls retain their keyboard controls when focused. The dated film's
router labels are not the source of truth for current model mappings.
Individual film segments and their placement remain to be agreed; no cuts yet.

An unnumbered `Platform quiz` slide contains five True/False statement
placeholders immediately before `Access and help`. Questions, answers, and
interaction will be agreed later. Topic numbers remain unchanged; 39 slides.

The gateway overview and Guardrails, Tools, and Usage detail slides share a
fixed diagram: application and agent/harness circles → AI Gateway → capability
panel. Arrow keys advance through the slides, with the active capability
highlighted and expanded. No clickable navigation or individual Logs slide.
Guardrails uses the agreed fictitious masking example and separate provider
filter explanation. Tools uses presenter-provided `images/toolselection.png`,
not an official dashboard or approved tool catalogue. Controls apply only to
supported integrations, not every tool in a developer's own harness.

`Usage / official LiteLLM example` follows the Guardrails and Tools details.
It uses an unchanged official documentation screenshot, with spend, requests,
tokens, and daily spend only. No prompts, responses, or individual log examples
are shown. Vendor example figures are not Enexis usage data; the Admin UI view
does not imply identical end-user access in our environment.
Source (downloaded 5 October 2026):
[Customer Usage](https://docs.litellm.ai/docs/proxy/customer_usage),
[original 1280px image](https://docs.litellm.ai/assets/ideal-img/customer_usage_analytics.fb87d7f.1280.png).
Local asset: `images/litellm-official-usage.png`.

An unnumbered `AI Platform Team introduction` slide appears immediately before
the `05 / The AI platform` divider. Members appear in presenter-provided order:
Dennis van Dijk, Folkert Jansen, Jeffrey van der Linden, Jim Kroon, and
Joost Franssen (call him Frans, please).

### Harness support

The gateway capability overview now contains Guardrails, Tools, Logs, and Usage.
Two unnumbered harness slides follow Token minimisation: `What we provide for
your Harness` covers SkillsHub and team-approved MCPs; `Your harness. Your
responsibility.` separates today's developer-chosen harness from
`Future: Enexis-code-harness`, which the AI Platform Team will provide.
Mandatory use is an ambition, not an implemented enforcement policy. No delivery
date is stated. Lack of technical enforcement does not remove security rules.
MCP approval does not imply automatic connection via the model gateway.

### Platform hypes timeline (slide 14)

Research date: 5 October 2026. Selected industry topics across 2024–2026,
chronological but not to scale. Dates mark example announcements, not invention
dates or measured hype peaks. This replaces the roadmap placeholders and is
not an Enexis delivery plan. The QR access slide follows it, before Tools change.
Agenda: Intro 3, AI Platform Team Intro 47, Setup + break 25, Hands-on 60,
Wrap-up 10 minutes; planned total 145 minutes.

1. [Cloudflare AI Gateway general availability, 2024](https://blog.cloudflare.com/ai-gateway-is-generally-available).
   Its beta began in 2023.
2. [OpenAI Swarm coverage, October 2024](https://www.infoq.com/news/2024/10/openai-swarm-orchestration/)
   and [original repository](https://github.com/openai/swarm). Experimental and
   educational; later superseded by the Agents SDK.
3. [Anthropic introduces MCP, 25 November 2024](https://www.anthropic.com/news/model-context-protocol).
4. [Google announces A2A, 9 April 2025](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/).
5. [Operant MCP Gateway, 16 June 2025](https://www.globenewswire.com/news-release/2025/06/16/3099877/0/en/operant-ai-launches-mcp-gateway-enterprise-grade-runtime-defense-for-mcp-connected-ai-applications.html).
6. [AWS AgentCore preview, 16 July 2025](https://aws.amazon.com/about-aws/whats-new/2025/07/amazon-bedrock-agentcore-preview/).
7. [SwarmClaw self-hosted agent runtime](https://github.com/swarmclawai/swarmclaw):
   an example visible at the research date, not a verified 2026 launch.
8. [WSO2 Agent Manager, 15 September 2026](https://wso2.com/about/news/wso2-agent-manager-sovereign-ai-governance):
   self-hosted deployment, agent identity, sandboxing, observability, and evals.

### Model routing and token tools

- [LiteLLM automatic routing](https://docs.litellm.ai/docs/proxy/auto_routing):
  keyword rules and complexity classification. The slide reflects the checked
  platform policy, not necessarily the defaults in these docs.
- [RTK](https://github.com/rtk-ai/rtk): filter command output before model input.
- [Caveman](https://github.com/JuliusBrussee/caveman): terse response prose.
- [Ponytail](https://github.com/DietrichGebert/ponytail): minimum necessary code,
  reuse, and native features; preserve safety checks.
- [DCP](https://github.com/Opencode-DCP/opencode-dynamic-context-pruning):
  faithful compression of completed conversation ranges in outgoing context.
- OpenAI [GPT-5.6 Luna](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
  and [GPT-6 Luna](https://developers.openai.com/api/docs/models/gpt-6-luna):
  checked through the documentation index on 5 October 2026. Above 272,000
  **input** tokens, the full request uses 2× input/cache rates and 1.5× output
  rates. This is provider list pricing, not a verified gateway billing rule,
  and must not be generalized to every GPT model. Verify current prices.

Savings depend on the task. Less tool output, shorter prose, less code, and
compressed history do not guarantee the same reduction in the total bill.

For PNG validation, use the skill renderer from the repository root:

```bash
./.agents/skills/html-ppt/scripts/render.sh presentation/index.html all presentation/rendered
```
