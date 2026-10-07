/* Native, click-to-play films; never keep playing after leaving a slide. */
(function () {
  'use strict';
  document.querySelectorAll('.deck > .slide video').forEach(function (video) {
    const slide = video.closest('.slide');
    new MutationObserver(function () {
      if (!slide.classList.contains('is-active')) video.pause();
    }).observe(slide, { attributes: true, attributeFilter: ['class'] });
    video.addEventListener('keydown', function (event) {
      // Keep native playback controls from also navigating the deck.
      if ([' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
        event.stopPropagation();
      }
    });
  });
})();
