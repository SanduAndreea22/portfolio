/* ==============================
   BACK TO TOP (multiple buttons)
================================ */
const backToTopBtns = Array.from(document.querySelectorAll('.back-to-top'));
const showAt = 300;

function updateBackBtns(){
  if(window.scrollY > showAt){
    backToTopBtns.forEach(b => b.classList.add('show'));
  } else {
    backToTopBtns.forEach(b => b.classList.remove('show'));
  }
}

backToTopBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', updateBackBtns);
updateBackBtns();

/* ==============================
   FADE IN ON SCROLL
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

/* Observe all fade-in elements */
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

/* ==============================
   MOBILE NAV (hamburger)
================================ */
const hamburger = document.querySelector('.hamburger');
const navList = document.getElementById('primary-navigation');
const navLinks = navList ? Array.from(navList.querySelectorAll('a')) : [];

if(hamburger){
  const toggleNav = (open) => {
    hamburger.setAttribute('aria-expanded', String(Boolean(open)));
    document.body.classList.toggle('nav-open', Boolean(open));
    if(open){
      if(navLinks.length) navLinks[0].focus();
    } else {
      hamburger.focus();
    }
  };

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    toggleNav(!expanded);
  });

  // Close nav on Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && document.body.classList.contains('nav-open')){
      toggleNav(false);
    }
  });

  // Close when clicking outside the nav
  document.addEventListener('click', (e) => {
    if(document.body.classList.contains('nav-open')){
      if(navList && !navList.contains(e.target) && !hamburger.contains(e.target)){
        toggleNav(false);
      }
    }
  });

  // Close when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  // Simple focus trap while nav is open
  document.addEventListener('keydown', (e) => {
    if(document.body.classList.contains('nav-open') && e.key === 'Tab' && navLinks.length){
      const first = navLinks[0];
      const last = navLinks[navLinks.length - 1];
      if(!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      } else if(e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      }
    }
  });
}
