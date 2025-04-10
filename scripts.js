// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

// Scroll to top button
window.addEventListener('scroll', () => {
  const scrollTop = document.querySelector('.scroll-top');
  window.scrollY > 500 
    ? scrollTop.classList.add('show') 
    : scrollTop.classList.remove('show');
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});
