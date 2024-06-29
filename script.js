
/*==== Scroll =====*/

function scrollToHome() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
window.addEventListener('load', scrollToHome);

/*==== Navbar =====*/

function setActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === currentSection) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavItem);

window.addEventListener('load', () => {
    setTimeout(setActiveNavItem, 100);
});

/*===== Text Animated =====*/
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
    });
});
