// Main JavaScript for Hair Corporation Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initServiceFilters();
    initGallery();
    initBookingWidget();
    initAnalytics();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll('.usp-item, .team-member, .review-item, .contact-card, .value-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Service filters
function initServiceFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            serviceItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Gallery functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            openModal(imgSrc, imgAlt);
        });
    });
}

// Modal for gallery images
function openModal(imgSrc, imgAlt) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('gallery-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gallery-modal';
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <img class="modal-image" src="" alt="">
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add modal styles
        const modalStyles = `
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            .gallery-modal.active {
                opacity: 1;
                visibility: visible;
            }
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .modal-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 8px;
            }
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 30px;
                cursor: pointer;
                padding: 5px 10px;
                transition: color 0.3s ease;
            }
            .modal-close:hover {
                color: #FF2439;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);

        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Set image and show modal
    modal.querySelector('.modal-image').src = imgSrc;
    modal.querySelector('.modal-image').alt = imgAlt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Booking widget functionality
function initBookingWidget() {
    // Create booking widget placeholder
    const bookingWidget = document.querySelector('.booking-widget');
    if (bookingWidget) {
        bookingWidget.innerHTML = `
            <div class="booking-form">
                <h4>Онлайн запись</h4>
                <form id="booking-form">
                    <div class="form-group">
                        <label for="service">Выберите услугу:</label>
                        <select id="service" name="service" required>
                            <option value="">Выберите услугу</option>
                            <option value="haircut-women">Женская стрижка</option>
                            <option value="haircut-men">Мужская стрижка</option>
                            <option value="coloring-simple">Окрашивание простое</option>
                            <option value="coloring-complex">Сложное окрашивание</option>
                            <option value="total-blond">Total Blond</option>
                            <option value="styling">Укладка</option>
                            <option value="treatment">Уход и восстановление</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="master">Выберите мастера:</label>
                        <select id="master" name="master" required>
                            <option value="">Выберите мастера</option>
                            <option value="lada">Лада (Арт-директор)</option>
                            <option value="nursaule">Нурсауле (Топ-специалист)</option>
                            <option value="any">Любой доступный мастер</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="branch">Филиал:</label>
                        <select id="branch" name="branch" required>
                            <option value="">Выберите филиал</option>
                            <option value="hc">HC (ул. Шевченко 37)</option>
                            <option value="ht">ХТ (ЖК Хан-Тенгри)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="date">Дата:</label>
                        <input type="date" id="date" name="date" required min="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label for="time">Время:</label>
                        <select id="time" name="time" required>
                            <option value="">Выберите время</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="name">Ваше имя:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон:</label>
                        <input type="tel" id="phone" name="phone" required placeholder="+7 (___) ___-__-__">
                    </div>
                    <button type="submit" class="btn btn-primary btn-large">Записаться</button>
                </form>
            </div>
        `;

        // Add form styles
        const formStyles = `
            .booking-form {
                background-color: var(--color-black);
                padding: 40px;
                border-radius: var(--border-radius);
                border: 1px solid var(--color-dark-gray);
            }
            .booking-form h4 {
                color: var(--color-white);
                margin-bottom: 30px;
                text-align: center;
            }
            .form-group {
                margin-bottom: 20px;
            }
            .form-group label {
                display: block;
                color: var(--color-gray);
                margin-bottom: 8px;
                font-weight: 500;
            }
            .form-group input,
            .form-group select {
                width: 100%;
                padding: 12px 16px;
                background-color: var(--color-dark-gray);
                border: 1px solid var(--color-gray);
                border-radius: var(--border-radius);
                color: var(--color-white);
                font-size: 16px;
                transition: var(--transition);
            }
            .form-group input:focus,
            .form-group select:focus {
                outline: none;
                border-color: var(--color-accent);
                box-shadow: 0 0 0 2px rgba(255, 36, 57, 0.2);
            }
            .form-group option {
                background-color: var(--color-dark-gray);
                color: var(--color-white);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = formStyles;
        document.head.appendChild(styleSheet);

        // Handle form submission
        const bookingForm = document.getElementById('booking-form');
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmission(this);
        });

        // Phone number formatting
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('7')) {
                value = value.substring(1);
            }
            if (value.length > 0) {
                value = '+7 (' + value.substring(0, 3) + ') ' + 
                        value.substring(3, 6) + '-' + 
                        value.substring(6, 8) + '-' + 
                        value.substring(8, 10);
            }
            e.target.value = value;
        });
    }
}

// Handle booking form submission
function handleBookingSubmission(form) {
    const formData = new FormData(form);
    const bookingData = Object.fromEntries(formData);
    
    // Track booking event
    trackEvent('Запись_онлайн', {
        service: bookingData.service,
        master: bookingData.master,
        branch: bookingData.branch,
        date: bookingData.date,
        time: bookingData.time
    });

    // Show success message
    showNotification('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время для подтверждения записи.', 'success');
    
    // Reset form
    form.reset();
    
    // In a real implementation, you would send this data to your booking system
    console.log('Booking data:', bookingData);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: var(--color-accent);
            color: var(--color-white);
            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        }
        .notification-success {
            background-color: #28a745;
        }
        .notification-error {
            background-color: #dc3545;
        }
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Analytics initialization
function initAnalytics() {
    // Track page view
    trackEvent('PageView', {
        page: 'Landing',
        timestamp: new Date().toISOString()
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackEvent('CTA_Click', {
                button_text: buttonText,
                button_location: getButtonLocation(this)
            });
        });
    });

    // Track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Phone_Click', {
                phone_number: this.getAttribute('href').replace('tel:', ''),
                location: getButtonLocation(this)
            });
        });
    });

    // Track WhatsApp clicks
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('WhatsApp_Click', {
                phone_number: this.getAttribute('href').split('/').pop(),
                location: getButtonLocation(this)
            });
        });
    });
}

// Helper function to get button location
function getButtonLocation(element) {
    const section = element.closest('section');
    return section ? section.id || section.className : 'unknown';
}

// Generic event tracking function
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    // Yandex Metrica
    if (typeof ym !== 'undefined') {
        ym(YOUR_COUNTER_ID, 'reachGoal', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'assets/images/hero-bg.jpg',
        'assets/images/team/lada.jpg',
        'assets/images/team/nursaule.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadCriticalResources);

