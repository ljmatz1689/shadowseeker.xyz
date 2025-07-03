document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            const targetUrl = this.getAttribute('data-url');
            window.location.href = targetUrl;
        });
    });
});

// Optional: Add a ripple effect or log section clicks
document.querySelectorAll('.interactive-section').forEach(section => {
    section.addEventListener('mousedown', function(e) {
        // Simple ripple effect
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});