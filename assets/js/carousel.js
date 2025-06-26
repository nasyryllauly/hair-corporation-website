// Team member carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const images = member.getAttribute('data-images');
        if (!images) return;
        
        const imageList = images.split(',');
        if (imageList.length <= 1) return;
        
        const carouselContainer = member.querySelector('.carousel-container');
        const carouselInner = member.querySelector('.carousel-inner');
        const prevButton = member.querySelector('.carousel-button.prev');
        const nextButton = member.querySelector('.carousel-button.next');
        
        let currentIndex = 0;
        
        function updateCarousel() {
            const translateX = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${translateX}%)`;
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % imageList.length;
            updateCarousel();
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
            updateCarousel();
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', nextImage);
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', prevImage);
        }
        
        // Auto-rotate every 5 seconds
        setInterval(nextImage, 5000);
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        carouselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carouselContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextImage();
                } else {
                    prevImage();
                }
            }
        });
    });
});

