// ===============================
// ===== SELECTORS =====
const faders = document.querySelectorAll('.fade-in');
const backToTopBtns = document.querySelectorAll('.back-to-top');
const projectCards = document.querySelectorAll('.project-card');
const skillCards = document.querySelectorAll('.skill-card');
const contactCards = document.querySelectorAll('.contact-card');
const heroSpan = document.querySelector('.hero h1 span');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// ===============================
// ===== FADE-IN ON SCROLL =====
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ===============================
// ===== BACK TO TOP BUTTON =====
backToTopBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ===============================
// ===== MICRO ANIMATIONS ON HOVER =====
function addHoverAnimation(cards, transformVal, shadowVal) {
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = transformVal;
      card.style.boxShadow = shadowVal;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

addHoverAnimation(projectCards, 'translateY(-8px) scale(1.03)', '0 25px 60px rgba(0,0,0,0.25)');
addHoverAnimation(skillCards, 'translateY(-5px)', '0 15px 40px rgba(0,0,0,0.2)');
addHoverAnimation(contactCards, 'translateY(-5px)', '0 15px 40px rgba(0,0,0,0.2)');

// ===============================
// ===== HERO SPARKLE EFFECT =====
if (heroSpan) {
  setInterval(() => {
    const glow = Math.random() * 15 + 5;
    const opacity = Math.random();
    heroSpan.style.textShadow = `0 0 ${glow}px rgba(212,175,55,${opacity})`;
  }, 400);
}

// ===============================
// ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});





