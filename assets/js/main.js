// Jean-Jacques Soleil — main.js
// Scroll-triggered reveal for sections below the fold

document.addEventListener('DOMContentLoaded', () => {

  // Intersection Observer for fade-in-up on sections
  const revealTargets = document.querySelectorAll(
    '.statement, .origin, .mechanic, .puzzles, .newsletter, .puzzle-card, .color-state'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Substack form: redirect to real Substack page on submit
  // Replace the URL below with your actual Substack subscribe URL
  const SUBSTACK_URL = 'https://lacourtcreations.substack.com/subscribe';

  const btn = document.querySelector('.substack-card__btn');
  const input = document.querySelector('.substack-card__input');

  if (btn && input) {
    btn.addEventListener('click', () => {
      const email = input.value.trim();
      if (!email || !email.includes('@')) {
        input.style.borderColor = '#d62c2c';
        input.focus();
        return;
      }
      const url = `${SUBSTACK_URL}?email=${encodeURIComponent(email)}`;
      window.open(url, '_blank', 'noopener');
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') btn.click();
      input.style.borderColor = '';
    });
  }

});
