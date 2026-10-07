/* Question/answer slides preserve presenter mode and backward navigation. */
(function () {
  'use strict';
  document.querySelectorAll('.deck > .platform-quiz-slide [data-quiz-next]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (!button.closest('.slide').classList.contains('is-active')) return;
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    });
    button.addEventListener('keydown', function (event) {
      // Space activates the button once, without also advancing the deck.
      if (event.key === ' ' || event.key === 'Enter') event.stopPropagation();
    });
  });
})();
