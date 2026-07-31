// ==== NAV: scroll state + mobile toggle ====
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

const onScroll = () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
  });
});

// ==== TESTIMONIALS SLIDER (soporta 1 o varios testimonios) ====
const slides = Array.from(document.querySelectorAll('.t-slide'));
const dotsWrap = document.getElementById('tDots');
const tPrev = document.getElementById('tPrev');
const tNext = document.getElementById('tNext');
let current = 0;
let timer;

if (slides.length > 1) {
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 't-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Ver testimonio ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }
  const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

  function goTo(i) {
    slides[current].classList.remove('is-active');
    if (dots[current]) dots[current].classList.remove('is-active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    if (dots[current]) dots[current].classList.add('is-active');
    resetTimer();
  }

  if (tPrev) tPrev.addEventListener('click', () => goTo(current - 1));
  if (tNext) tNext.addEventListener('click', () => goTo(current + 1));

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 6000);
  }
  resetTimer();
}

// ==== CONTACT FORM (demo only — no backend connected) ====
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Gracias, ' + (document.getElementById('nombre').value.split(' ')[0] || '') + '. Tu consulta quedó registrada — te vamos a responder a la brevedad.';
  form.reset();
});

// ==== FOOTER YEAR ====
document.getElementById('year').textContent = new Date().getFullYear();
