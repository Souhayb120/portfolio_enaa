 const els = document.querySelectorAll('.fade-in');

 const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
 const form = document.getElementById('contactForm');
    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('open');
    }

    function closeMenu() {
      document.getElementById('nav-links').classList.remove('open');
    }


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successBanner = document.getElementById('successBanner');

  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';
  successBanner.style.display = 'none';
  let isValid = true;

  if (name === '') {
    nameError.style.display = 'block'; 
    isValid = false;                 
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = 'block';
    isValid = false;
  }

  if (message.length < 10) {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    successBanner.style.display = 'block';
    form.reset(); 
  }

});













// const e = document.getElementById('email');
// e.addEventListener('input', () => {
//     console.log(e.value);
// })

