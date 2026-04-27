(() => {
  const nav = document.getElementById('nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.getElementById('nav-mobile');
  const tabs = Array.from(document.querySelectorAll('.solutions__tab'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky nav scroll state
  const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  burger?.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', String(open));
    if (open) mobile.removeAttribute('hidden'); else mobile.setAttribute('hidden', '');
  });
  mobile?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
    mobile.setAttribute('hidden', '');
  }));

  // Tab switcher
  const selectTab = (idx) => {
    tabs.forEach((t, i) => {
      const selected = i === idx;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.toggleAttribute('hidden', !selected);
    });
  };
  tabs.forEach((tab, i) => {
    tab.tabIndex = i === 0 ? 0 : -1;
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const next = e.key === 'ArrowRight'
        ? (i + 1) % tabs.length
        : (i - 1 + tabs.length) % tabs.length;
      selectTab(next);
      tabs[next].focus();
    });
  });

  // Scroll reveal
  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
  }
})();
