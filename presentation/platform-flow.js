(() => {
  const stepByTitle = [
    { match: 'LiteLLM: One entry point for AI', step: 'gateway' },
    { match: 'LiteLLM: Zoom in', step: 'model' },
    { match: 'LiteLLM: Capabilities', step: 'gateway' },
    { match: 'AI Gateway', step: 'gateway' },
    { match: 'AI Gateway functions', step: 'gateway' },
    { match: 'Guardrails', step: 'gateway' },
    { match: 'Tools', step: 'gateway' },
    { match: 'Logs', step: 'result' },
    { match: 'Usage', step: 'result' },
    { match: 'Models offered', step: 'model' },
    { match: 'Automatic model routing', step: 'model' },
    { match: 'Local models?', step: 'model' },
    { match: 'Tokens and context windows', step: 'client' },
    { match: 'Token minimisation', step: 'client' },
    { match: 'Your harness. Your responsibility.', step: 'client' },
  ];

  const steps = [
    ['client', '01 / Client'],
    ['gateway', '02 / Gateway'],
    ['model', '03 / Model'],
    ['result', '04 / Result'],
  ];

  document.querySelectorAll('.deck > .slide').forEach((slide) => {
    const title = slide.dataset.title || '';
    const match = stepByTitle.find((entry) => title.includes(entry.match));
    if (!match) return;

    const indicator = document.createElement('div');
    indicator.className = 'platform-flow-indicator';
    indicator.setAttribute('aria-label', `Platform flow: ${match.step}`);
    indicator.innerHTML = steps.map(([key, label], index) => {
      const active = key === match.step ? ' is-active' : '';
      const arrow = index < steps.length - 1 ? '<span class="platform-flow-arrow" aria-hidden="true">→</span>' : '';
      return `<span class="platform-flow-step${active}">${label}</span>${arrow}`;
    }).join('');
    slide.append(indicator);
  });
})();
