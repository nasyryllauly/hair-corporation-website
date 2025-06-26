// Team Photos Carousel
class TeamCarousel {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 5;
        this.carousel = document.querySelector('.team-carousel-inner');
        this.dots = document.querySelectorAll('.dot');
        this.prevButton = document.querySelector('.team-carousel-button.prev');
        this.nextButton = document.querySelector('.team-carousel-button.next');
        
        this.init();
    }
    
    init() {
        if (!this.carousel) return;
        
        // Add event listeners
        this.prevButton?.addEventListener('click', () => this.prevSlide());
        this.nextButton?.addEventListener('click', () => this.nextSlide());
        
        // Add dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause on hover
        const container = document.querySelector('.team-carousel-container');
        container?.addEventListener('mouseenter', () => this.stopAutoPlay());
        container?.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    updateCarousel() {
        if (!this.carousel) return;
        
        const translateX = -this.currentSlide * 100;
        this.carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize team carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TeamCarousel();
});

