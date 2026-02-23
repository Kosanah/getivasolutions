/**
 * Getiva Solutions — Mobile menu (hamburger) toggle.
 * Closes on backdrop click, link click, and Escape key.
 */
(function () {
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('main-nav');
  var backdrop = document.getElementById('nav-backdrop');
  if (!hamburger || !nav) return;

  function isOpen() {
    return document.body.classList.contains('menu-open');
  }

  function openMenu() {
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
  }

  function toggle() {
    if (isOpen()) closeMenu();
    else openMenu();
  }

  hamburger.addEventListener('click', toggle);

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  // Close when a nav link is clicked (for same-page anchor or after navigation)
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });
})();
