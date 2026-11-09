// Sticky header scroll effect (for project pages)
function initStickyHeader() {
    const header = document.querySelector('.sticky-header');
    if (!header) return;

    if (window.scrollY > 0) header.classList.add('scrolled');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Lightbox functionality (for project pages)
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize sticky header (project pages)
    initStickyHeader();

    document.querySelectorAll('.gallery-item').forEach(element => {
        element.addEventListener('click', event => {
            const src = element.querySelector('img').src;
            openLightbox(src);
        });
    });

    document.querySelector('.lightbox').addEventListener('click', event => closeLightbox());
    document.querySelector('.lightbox-content').addEventListener('click', event => event.stopPropagation());
    document.querySelector('.lightbox-close').addEventListener('click', event => closeLightbox());
});
