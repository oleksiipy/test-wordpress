document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieDecline = document.getElementById('cookieDecline');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('active');
            nav.classList.toggle('open');
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    if (cookieBanner) {
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(function () {
                cookieBanner.classList.add('visible');
            }, 1000);
        }

        if (cookieAccept) {
            cookieAccept.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'all');
                cookieBanner.classList.remove('visible');
            });
        }

        if (cookieDecline) {
            cookieDecline.addEventListener('click', function () {
                localStorage.setItem('cookieConsent', 'necessary');
                cookieBanner.classList.remove('visible');
            });
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('name').value.trim();
            var phone = document.getElementById('phone').value.trim();

            if (!name || !phone) {
                return;
            }

            contactForm.style.display = 'none';
            if (formSuccess) {
                formSuccess.style.display = 'block';
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});