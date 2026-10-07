# Composition brief — LiteLLM on PEX (v3)

- **Objective**: 30 s landscape film that follows one OpenCode request through the PEX LiteLLM gateway, for a technical audience.
- **Output**: `composition/index.html` → `../brag.mp4`, poster `../brag.jpg`.
- **Sources**: illustrative platform concepts only; no internal hostnames, configuration paths, or operational data are included.
- **Strongest claim**: "One prompt. Seven hops." and "zero client changes".
- **Key UI moments**: opencode.json provider block; live redaction of a payload; complexity score needle; retry → fallback chain; `200 OK · stream`.
- **Avoid**: real base URLs or internal hosts, real keys, real personal data, response-cache claims (`cache: false`; Valkey is used for router coordination only), generic SaaS copy.
- **HyperFrames**: one root composition, 6 timed `<section class="clip">` scenes (tracks 0–5), music on track 10 with `data-automation` volume lane, GSAP 3.14.2, one paused timeline `window.__timelines.main`, deterministic.
- **Beat locks**: see `brag-plan.md`.
- **Pacing revision**: keep the 30 s duration, use slower 0.55–0.85 s reveals, longer settled holds, and gentler scene exits. Prioritize readability over fitting every transition to a beat.
- **Assets**: `composition/assets/music/happy-beats-business-moves-vol-11-by-ende-dot-app.mp3` (bundled with brag).
