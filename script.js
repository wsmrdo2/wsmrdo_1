document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (mobileToggle && mobileMenu && closeMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const hideMenu = () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeMenu.addEventListener('click', hideMenu);
        mobileLinks.forEach(link => link.addEventListener('click', hideMenu));
    }

    // Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Progress Bar Animation
    const progressFills = document.querySelectorAll('.progress-fill');
    const animateProgress = () => {
        progressFills.forEach(fill => {
            const windowHeight = window.innerHeight;
            const elementTop = fill.getBoundingClientRect().top;

            if (elementTop < windowHeight - 50) {
                const targetWidth = fill.getAttribute('data-width');
                fill.style.width = targetWidth + '%';
            }
        });
    };

    window.addEventListener('scroll', animateProgress);
    animateProgress();

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Lucide Icons Initialization
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
