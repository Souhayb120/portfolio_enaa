 const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));

    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('open');
    }
    function closeMenu() {
      document.getElementById('nav-links').classList.remove('open');
    }