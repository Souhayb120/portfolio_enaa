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



    const form = document.getElementById('contactForm');

    function validateForm() {
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      [name, email, message].forEach(el => {
        el.classList.remove('error');
        document.getElementById(el.id + '-error').classList.remove('visible');
      });

      if (!name.value.trim()) {
        name.classList.add('error');
        document.getElementById('name-error').classList.add('visible');
        valid = false;
      }

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email.value.trim())) {
        email.classList.add('error');
        document.getElementById('email-error').classList.add('visible');
        valid = false;
      }

      if (message.value.trim().length < 10) {
        message.classList.add('error');
        document.getElementById('message-error').classList.add('visible');
        valid = false;
      }

      return valid;
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm()) {
        form.style.display = 'none';
        document.getElementById('successBanner').classList.add('visible');
      }
    });

    ['name', 'email', 'message'].forEach(id => {
      document.getElementById(id).addEventListener('input', () => {
        document.getElementById(id).classList.remove('error');
        document.getElementById(id + '-error').classList.remove('visible');
      });
    });