/* ============================================
   LANGUAGE TOGGLE
   ============================================ */

const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    if (currentLang === 'en') {
        document.body.classList.add('lang-it');
        langToggle.textContent = 'EN';
        currentLang = 'it';
        document.documentElement.lang = 'it';
    } else {
        document.body.classList.remove('lang-it');
        langToggle.textContent = 'IT';
        currentLang = 'en';
        document.documentElement.lang = 'en';
    }
});


/* ============================================
   MOBILE NAVIGATION
   ============================================ */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});


/* ============================================
   NAVBAR SCROLL SHADOW
   ============================================ */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});


/* ============================================
   FADE-IN ON SCROLL (Intersection Observer)
   ============================================ */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - 70,
                behavior: 'smooth'
            });
        }
    });
});
