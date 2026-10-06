const revealItems = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-card, .project-card, .stats > div').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(14px)';
        el.style.transition = `opacity .55s ${i * .08}s ease, transform .55s ${i * .08}s ease`;
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
revealItems.forEach(item => observer.observe(item));
