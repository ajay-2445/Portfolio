<script>
  // Animate skill rings and bars on scroll
  const skills = document.querySelectorAll('.skill');
  const bars   = document.querySelectorAll('.bar__fill');

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;

      // ring animation: move --p from 0 to --pct
      const card = e.target;
      const pct  = getComputedStyle(card).getPropertyValue('--pct').trim();
      card.style.setProperty('--p', pct);

      // progress bars
      bars.forEach(b => {
        if (!b.dataset.done) {
          b.style.width = getComputedStyle(b).getPropertyValue('--w').trim();
          b.dataset.done = "1";
        }
      });

      obs.unobserve(card);
    });
  }, { threshold: 0.35 });

  skills.forEach(s => io.observe(s));
</script>
