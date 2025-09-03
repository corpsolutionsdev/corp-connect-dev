// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal toggles
    const modalTriggers = document.querySelectorAll('a[href="#cadastro-empresa"], a[href="#cadastro-dev"]');
    const closeButtons = document.querySelectorAll('button[class*="fa-times"]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('href');
            const modal = document.getElementById(targetId.substring(1));
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('[id^="cadastro-"]');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Enable scrolling
            }
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('bg-opacity-50')) {
            e.target.classList.add('hidden');
            document.body.style.overflow = ''; // Enable scrolling
        }
    });

    // Logo click to go to top - more specific selector
    const logoLinks = document.querySelectorAll('a[href="#"]');
    console.log('Found logo links:', logoLinks.length); // Debug log
    
    logoLinks.forEach(logo => {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Logo clicked!'); // Debug log
            
            // Check if mobile menu is open and close it
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Update URL to home
            history.pushState(null, null, '#');
        });
    });

    // Smooth scrolling for other anchor links (excluding #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href === '#') return; // Skip logo links
        
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (!targetElement) return;
            
            // Check if mobile menu is open and close it
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            history.pushState(null, null, href);
        });
    });
});