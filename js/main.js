// ============================
// NAVBAR SCROLL EFFECT
// ============================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================
// MOBILE MENU TOGGLE
// ============================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// ============================
// SCROLL REVEAL ANIMATION
// ============================
const revealElements = document.querySelectorAll(
  '.project-card, .about-content, .about-image, .contact-content, .section-title, .gallery-item'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================
// AUTO YEAR IN FOOTER
// ============================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================
// SMOOTH SCROLL (fallback)
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ============================
// LIGHTBOX
// ============================
(function () {
  // Collect all gallery images on the page
  const galleryItems = document.querySelectorAll('.gallery-item img');

  if (galleryItems.length === 0) return; // No gallery on this page

  // Build lightbox HTML
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close"></button>
    <button class="lightbox-prev" aria-label="Previous image"></button>
    <button class="lightbox-next" aria-label="Next image"></button>
    <img src="" alt="Full size image">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  const imageSources = [];

  // Collect all image sources
  galleryItems.forEach((img, index) => {
    imageSources.push(img.src);

    img.addEventListener('click', () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    lightboxImg.src = imageSources[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    lightboxImg.src = imageSources[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    lightboxImg.src = imageSources[currentIndex];
  }

  // Close button
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  // Click background to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Prev / Next buttons
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
})();
