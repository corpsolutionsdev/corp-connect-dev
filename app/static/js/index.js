// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Modal toggles
const modalTriggers = document.querySelectorAll('a[href="#cadastro-empresa"], a[href="#cadastro-dev"]');
const closeButtons = document.querySelectorAll('button[class*="fa-times"]');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute('href');
        document.getElementById(targetId.substring(1)).classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('[id^="cadastro-"]');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Enable scrolling
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('bg-opacity-50')) {
        e.target.classList.add('hidden');
        document.body.style.overflow = ''; // Enable scrolling
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        // Check if mobile menu is open and close it
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update URL without page jump
        history.pushState(null, null, targetId);
    });
});