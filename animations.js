(function () {
  'use strict';

  /* ── Scroll Reveal ─────────────────────────────────────────── */
  var revealSelectors = [
    '.value-card',
    '.service-card',
    '.section-header',
    '.certs-list li',
    '.case-study',
    '.service-block',
    '.cert-item',
    '.contact-detail',
    '.contact-form-wrap',
    '.expertise-tags li',
    '.outcome-box',
    '.engagement-card',
    '.about-intro-text',
    '.meet-photo',
    '.meet-content',
    '.portfolio-card',
  ];

  var revealEls = [];

  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      revealEls.push(el);
      el.classList.add('reveal');
    });
  });

  /* Stagger sibling items within grid/list containers.
     Multi-column grids use column-position stagger (resets per row)
     so the total spread stays short regardless of item count. */
  document.querySelectorAll(
    '.value-strip, .services-grid, .certs-list, .certs-grid, .engagement-grid, .expertise-tags, .portfolio-grid'
  ).forEach(function (group) {
    var cols = group.classList.contains('services-grid')  ? 3
             : group.classList.contains('certs-grid')     ? 2
             : group.classList.contains('engagement-grid') ? 3
             : 0; /* 0 = sequential list, use index */
    group.querySelectorAll('.reveal').forEach(function (el, i) {
      var delay = cols > 0 ? (i % cols) * 0.1 : Math.min(i * 0.08, 0.32);
      el.style.transitionDelay = delay + 's';
    });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    /* Fallback: show everything immediately */
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  /* ── Flip Card — touch / click support ──────────────────────── */
  document.querySelectorAll('.engagement-card').forEach(function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('is-flipped');
    });
  });

})();
