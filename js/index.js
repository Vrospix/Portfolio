// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active section in nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Assign arrow and dots function
document.querySelectorAll('.project-image-container').forEach(container => {
    const images = container.querySelectorAll('img');
    const dots = container.querySelectorAll('.dot');
    const left = container.querySelector('.arrow.left');
    const right = container.querySelector('.arrow.right');

    let index = 0;

    function updateSlider(newIndex) {
        images[index].classList.remove('active');
        dots[index].classList.remove('active');

        index = newIndex;

        images[index].classList.add('active');
        dots[index].classList.add('active');
    }

    right.addEventListener('click', () => {
        updateSlider((index + 1) % images.length);
    });

    left.addEventListener('click', () => {
        updateSlider((index - 1 + images.length) % images.length);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateSlider(i));
    });
});
