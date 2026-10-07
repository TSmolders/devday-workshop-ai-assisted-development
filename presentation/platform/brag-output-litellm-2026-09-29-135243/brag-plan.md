# Brag plan — LiteLLM on PEX (v3, technical deep-dive)

All UI is a stand-in: no real hostnames, keys, or personal data. Example PII values are fictional.

## Rubric
1. **App**: LiteLLM, the central OpenAI-compatible AI gateway on the PEX EKS platform.
2. **Audience**: OpenCode users with deep technical knowledge.
3. **Angle**: "One prompt. Seven hops." Follow one OpenCode request from Enter to the streamed response.
4. **Hook**: an illustrative OpenCode provider config (`@ai-sdk/openai-compatible`, `{env:WORKSHOP_API_KEY}`, `gpt-router`/`claude-router`) and a prompt being sent.
5. **Key moments**: edge + identity (fail-closed budget check), pre_call guardrails that redact live, complexity router scoring, retry/fallback + traces + KEDA.
6. **Outro**: "LiteLLM on PEX" + `model: gpt-router | claude-router`.
7. **Tone**: polished, engineering-precise, confident. Nearest preset: `polished`.
8. **Format**: landscape 1920×1080, 30 s, music on, no voice.
9. **Visual identity**: ink `#07111f`, panel `#0e1d30`, line `#29425b`, text `#f3f0e8`, muted `#b4c2d1`, accent amber `#f2a65a`, success green `#7fd0b0`, error `#f09a84`; Inter/system sans for headlines, ui-monospace for technical labels. Ambient drift, scanline sweep, film progress bar.

## Seven hops
1. OpenCode client (virtual key, SSE)
2. Istio ingress gateway (TLS, VirtualService → litellm-proxy:4000)
3. Mesh AuthorizationPolicy (mTLS principal allow-list, NetworkPolicy egress)
4. LiteLLM key → team → budget (Postgres, `allow_requests_on_db_unavailable: false`)
5. pre_call guardrails, default_on: headroom-compression (fail_open), PII mask, detect_secrets, 4 GDPR EU packs
6. `auto_router/complexity_router`: 7 weighted dimensions, keyword rules, tier boundaries .30/.55/.75; gpt-router (gpt-6-luna-none classifier) vs claude-router (EU-only, haiku-4.5 classifier)
7. Provider + resilience: num_retries 3, cooldown 30 s (shared via Valkey), fallbacks; OTEL → Langfuse, Prometheus, spend/audit logs 365 d; KEDA 2–4 pods

## Storyboard (30.0 s)

Pacing revision: the total duration stays 30 seconds, but scene exits and card reveals are slower. Technical panels hold after they settle, and sequential events are spaced so a viewer can read them without pausing the video.
| # | Time | Scene | On screen |
|---|---|---|---|
| 1 | 0.00–3.70 | Hook | "One prompt. Seven hops." + opencode.json + prompt `refactor the code in auth/session.ts`; send chip at 1.60 |
| 2 | 3.70–8.96 | Edge & identity | 4 hop cards, packet travels on beats 5.80/6.34/6.86; fail-closed banner at 7.38 |
| 3 | 8.96–14.22 | Guardrails | Example payload; email/BSN/secret/phone redacted on 10.01/10.54/11.06/11.60 |
| 4 | 14.22–20.02 | Router | Dimension bars fill, keyword rule hit, score needle to 0.62 → COMPLEX; claude-router picks sonnet-4.6 (EU) |
| 5 | 20.02–25.28 | Resilience & telemetry | 429 → cooldown → retry served → fallback; trace spans; pods 3–4 scale on 22.65/23.17; `200 OK · stream` at 24.23 |
| 6 | 25.28–30.00 | Outro | "LiteLLM on PEX" lockup, held to end |

## Music cue guidance
Track `happy-beats-business-moves-vol-11` (114.84 BPM, beat ≈ 0.523 s). Strong cues used: 1.60, 3.70, 5.80, 8.96, 12.65, 17.91, 22.65, 24.23. Beyond the preset (24.23): extrapolated beat grid 25.28 … 29.46. Volume automation: fade in 0–0.6 s, bed 0.22, fade out 28.4–30 s.

## Share copy draft
See `share-copy.txt`.
