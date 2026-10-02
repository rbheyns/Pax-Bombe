const revealTargets = document.querySelectorAll('.cap-card,.steps article,.video-card,.feature-photo,.feature-copy,.intro-title,.intro>p');
revealTargets.forEach((element) => element.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach((element) => observer.observe(element));
