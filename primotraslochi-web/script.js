/* ============================================================
   PRIMO TRASLOCHI — Main Script
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Navbar: transparent → solid on scroll ----- */
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('solid', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ----- Mobile menu toggle ----- */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle?.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle?.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle?.classList.remove('open');
    }
  });

  /* ----- Active nav link based on current page ----- */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const isHome = (currentFile === '' || currentFile === 'index.html') && href === 'index.html';
    link.classList.toggle('active', href === currentFile || isHome);
  });

  /* ----- Scroll reveal (IntersectionObserver) ----- */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealIO.observe(el));
  }

  /* ----- Counter animation on stats bar ----- */
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const start    = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };
    requestAnimationFrame(step);
  }

  /* ----- Gallery lightbox ----- */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ----- Cookie banner ----- */
  const cookieBar = document.getElementById('cookieBar');
  const cookieOk  = document.getElementById('cookieOk');
  const cookieNo  = document.getElementById('cookieNo');

  if (localStorage.getItem('cookieChoice')) {
    cookieBar?.classList.add('hidden');
  }

  cookieOk?.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'ok');
    cookieBar?.classList.add('hidden');
  });

  cookieNo?.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'no');
    cookieBar?.classList.add('hidden');
  });

});
