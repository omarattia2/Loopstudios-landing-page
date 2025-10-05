(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');
  const body = document.body;

  function setImagesForViewport() {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    document.querySelectorAll('.card-image').forEach(el => {
      const src = isDesktop ? el.getAttribute('data-desktop') : el.getAttribute('data-mobile');
      el.style.backgroundImage = `url('${src}')`;
    });
  }

  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
  }

  function openNav() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
  }

  toggle?.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });

  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  window.addEventListener('resize', setImagesForViewport);
  window.addEventListener('orientationchange', setImagesForViewport);
  window.addEventListener('DOMContentLoaded', setImagesForViewport);
})();


