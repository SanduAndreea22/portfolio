// =======================
// Smooth Scroll pentru anchor links
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =======================
// Hover premium pe butoane
// =======================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.08) rotate(-1deg)';
    btn.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1) rotate(0deg)';
    btn.style.boxShadow = '';
  });
});

// =======================
// Fade-in & slide la scroll (testimonial, sections)
// =======================
const faders = document.querySelectorAll('.fade-in');
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

// =======================
// Skill bars animate
// =======================
const skillBars = document.querySelectorAll('.progress');
const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const barPos = bar.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (barPos < screenPos - 50) {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    }
  });
};
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// =======================
// Diplome popup premium
// =======================
const diplomaImages = document.querySelectorAll('.diploma-grid img');
diplomaImages.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const popup = document.createElement('div');
    popup.classList.add('diploma-popup');
    popup.innerHTML = `
      <div class="popup-overlay"></div>
      <div class="popup-content">
        <span class="close">&times;</span>
        <img src="${src}" alt="Diploma">
      </div>
    `;
    document.body.appendChild(popup);

    const overlay = popup.querySelector('.popup-overlay');
    const closeBtn = popup.querySelector('.close');

    const closePopup = () => popup.remove();

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
  });
});

// =======================
// Testimonial hover / premium animation
// =======================
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseenter', () => {
    testimonial.style.transform = 'scale(1.02)';
    testimonial.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
  });
  testimonial.addEventListener('mouseleave', () => {
    testimonial.style.transform = 'scale(1)';
    testimonial.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
  });
});

// =======================
// Optional: Animatie soft pe scroll pentru testimonials
// =======================
const testimonialObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transform = 'translateY(0) scale(1)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.3});

testimonials.forEach(t => {
  t.style.transform = 'translateY(20px) scale(0.98)';
  t.style.opacity = '0';
  t.style.transition = 'all 0.8s ease-out';
  testimonialObserver.observe(t);
});



