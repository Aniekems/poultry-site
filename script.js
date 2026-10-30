const subheadings = document.querySelectorAll('h2[id]');
const navLinks = document.querySelectorAll('aside ul li a');

let isClicking = false; // ← flag

// When any sidebar link is clicked, pause the observer briefly
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        isClicking = true;
        
        // Manually set active on the clicked link immediately
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');

        // After jump settles, re-enable observer
        setTimeout(() => {
            isClicking = false;
        }, 800); // 800ms is enough for scroll behaviour to finish
    });
});

const observer = new IntersectionObserver((entries) => {
    if (isClicking) return; // ← ignore while click is settling

    entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`aside a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, {
    root: null,
    rootMargin: '-60px 0% -85% 0%',
    threshold: 0
});

subheadings.forEach((subheading) => observer.observe(subheading));