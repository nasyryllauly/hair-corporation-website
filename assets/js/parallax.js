// Parallax effect for hero section

document.addEventListener('DOMContentLoaded', function() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;

        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed);
            const transformY = scrollPosition * speed;
            layer.style.transform = `translateY(${transformY}px)`;
        });
    });
});

