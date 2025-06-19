// Simple JavaScript for basic functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle could be added here
    console.log('St Andrews Park website loaded');
    
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Could add event calendar functionality here
});