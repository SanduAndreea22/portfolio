// =======================
// ===== Fade-in Scroll ===
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// =======================
// ===== Back-to-top Button ===
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// =======================
// ===== Portfolio Cards Hover Effect ===
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  });
});

// =======================
// ===== Skill Cards Hover Effect ===
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.02)';
    card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  });
});

// =======================
// ===== Contact Cards Hover Effect ===
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.03)';
    card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.25)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
  });
});

// =======================
// ===== Hero Image Parallax / Subtle Animation ===
const heroImg = document.querySelector('.hero-img');

if(heroImg){
  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX*2)/100;
    const y = (window.innerHeight - e.pageY*2)/100;
    heroImg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// =======================
// ===== Smooth Anchor Links ===
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});





