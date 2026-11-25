// Penanda menu navigasi aktif + animasi muncul saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = [...links]
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  // Menu aktif sesuai bagian yang sedang dilihat
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navObserver.observe(s));

  // Animasi muncul untuk kartu dan kotak skill
  const items = document.querySelectorAll('.card, .skill, .social-card');
  items.forEach(el => el.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(el => revealObserver.observe(el));
});
