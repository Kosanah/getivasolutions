/**
 * GETIVA — Motion: scroll-triggered reveals and count-up stats.
 * Subtle, corporate, one-time animations. Respects prefers-reduced-motion.
 */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  function addInView(entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }

  var observer = new IntersectionObserver(addInView, observerOptions);

  // Elements that get .in-view on scroll
  var scrollTargets = document.querySelectorAll(
    '.animate-on-scroll, .services-grid .service-card, .stats-grid .stat-item, ' +
    '.process-diagram .process-step, .process-diagram .process-connector, ' +
    '.audience-sections .audience-card, .testimonials-grid .testimonial-card, ' +
    '.industries-grid .industry-card-visual'
  );
  scrollTargets.forEach(function (el) { observer.observe(el); });

  // Count-up for numeric stats (run once when stats section is in view)
  var statsSection = document.querySelector('.stats-section');
  var statValues = document.querySelectorAll('.stat-value[data-count]');
  if (!statsSection || !statValues.length) return;

  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      countObserver.unobserve(entry.target);
      statValues.forEach(function (el) {
        var count = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        if (isNaN(count)) return;
        animateValue(el, 0, count, 1500, suffix);
      });
    });
  }, { threshold: 0.2 });

  countObserver.observe(statsSection);

  function animateValue(el, start, end, duration, suffix) {
    el.textContent = start + suffix;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      progress = 1 - Math.pow(1 - progress, 2); // ease-out
      var value = Math.floor(progress * (end - start) + start);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
})();
