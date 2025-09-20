/**
 * Wedding Website JavaScript
 * Handles animations, interactions, and enhanced user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Fade in animations on scroll
    initScrollAnimations();
    
    // RSVP form handling
    initRSVPForm();
    
    // Gallery lightbox
    initGalleryLightbox();
    
    // Countdown timer
    initCountdownTimer();
    
    // Lazy loading for images
    initLazyLoading();
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll-triggered animations
 */
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
    
    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

/**
 * Initialize RSVP form functionality
 */
function initRSVPForm() {
    const form = document.querySelector('.rsvp-form form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        // Don't prevent default - let the form submit to Formspree
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Đang gửi...';
        submitBtn.disabled = true;
        
        // Re-enable button after delay (in case there's an error)
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 5000);
    });
    
    // Dynamic guest number field based on attendance
    const attendanceSelect = document.querySelector('#attendance');
    const guestsGroup = document.querySelector('#guests').closest('.form-group');
    
    if (attendanceSelect && guestsGroup) {
        attendanceSelect.addEventListener('change', function() {
            if (this.value === 'no') {
                guestsGroup.style.display = 'none';
            } else {
                guestsGroup.style.display = 'block';
            }
        });
    }
}

/**
 * Initialize gallery lightbox functionality
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Create lightbox overlay
            const lightbox = createLightbox();
            const img = document.createElement('img');
            
            // Get background image URL
            const bgImage = window.getComputedStyle(this).backgroundImage;
            const imageUrl = bgImage.slice(4, -1).replace(/"/g, "");
            
            if (imageUrl && imageUrl !== 'none') {
                img.src = imageUrl;
                img.alt = `Gallery image ${index + 1}`;
                img.style.maxWidth = '90vw';
                img.style.maxHeight = '90vh';
                img.style.objectFit = 'contain';
                
                lightbox.appendChild(img);
                document.body.appendChild(lightbox);
                
                // Fade in
                setTimeout(() => lightbox.classList.add('visible'), 10);
            }
        });
    });
}

/**
 * Create lightbox overlay
 */
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        cursor: pointer;
    `;
    
    lightbox.addEventListener('click', function() {
        this.classList.remove('visible');
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 300);
    });
    
    // Add visible class for CSS transition
    lightbox.classList.add = function(className) {
        if (className === 'visible') {
            this.style.opacity = '1';
        }
        return Element.prototype.classList.add.call(this, className);
    };
    
    lightbox.classList.remove = function(className) {
        if (className === 'visible') {
            this.style.opacity = '0';
        }
        return Element.prototype.classList.remove.call(this, className);
    };
    
    return lightbox;
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#007bff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

/**
 * Initialize countdown timer for wedding date
 */
function initCountdownTimer() {
    const weddingDate = new Date('2025-11-01T16:00:00'); // November 1, 2025 at 4:00 PM
    const countdownDisplay = document.querySelector('#wedding-countdown');
    const countdownMessage = document.querySelector('#wedding-message');
    
    if (!countdownDisplay) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate.getTime() - now;
        
        if (distance < 0) {
            // Wedding day has passed
            countdownDisplay.style.display = 'none';
            countdownMessage.style.display = 'block';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update individual countdown elements
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        
        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;
        
        // Add animation class on update
        const units = document.querySelectorAll('.countdown-number');
        units.forEach(unit => {
            unit.style.transform = 'scale(1.1)';
            setTimeout(() => {
                unit.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Parallax scrolling effect for hero section
 */
function initParallax() {
    const hero = document.querySelector('.section-hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const speed = 0.5;
        hero.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

/**
 * Initialize all interactive features
 */
function initInteractiveFeatures() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Initialize lazy loading for background images
 */
function initLazyLoading() {
    const lazyBgElements = document.querySelectorAll('.lazy-bg');
    
    if (!lazyBgElements.length) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgUrl = entry.target.dataset.bg;
                const bgPosition = entry.target.dataset.bgPosition;
                if (bgUrl) {
                    entry.target.style.backgroundImage = bgUrl;
                    if (bgPosition) {
                        entry.target.style.backgroundPosition = bgPosition;
                    }
                    entry.target.classList.remove('lazy-bg');
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    lazyBgElements.forEach(el => {
        imageObserver.observe(el);
    });
}

// Initialize interactive features when DOM is ready
document.addEventListener('DOMContentLoaded', initInteractiveFeatures);