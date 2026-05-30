document.addEventListener('DOMContentLoaded', () => {

    // Animações de entrada ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.anim').forEach(el => observer.observe(el));

    // Smooth scroll em links âncora
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Esteira de depoimentos — duplica os cards para loop infinito
    const track = document.querySelector('.test-track');
    if (track) track.innerHTML += track.innerHTML;

});
