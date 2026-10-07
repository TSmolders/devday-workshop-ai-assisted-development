(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  /* Keep the story self-contained: broken local logo files degrade to the
   * matching text label, without affecting the shared deck runtime. */
  ready(function () {
    document.querySelectorAll('.platform-story-slide [data-logo-img]').forEach(function (img) {
      img.addEventListener('error', function () {
        img.hidden = true;
        var fallback = img.parentElement && img.parentElement.querySelector('.logo-fallback');
        if (fallback) fallback.hidden = false;
      });
    });
  });
}());
