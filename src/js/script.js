let isExpanded = false;

// Theme Management
const themeModal = document.getElementById('themeModal');
const themeSaveBtn = document.getElementById('themeSaveBtn');
const themeCancelBtn = document.getElementById('themeCancelBtn');
let currentThemeSetting = 'system'; // Track the current saved setting

function openThemeModal() {
    if (!themeModal) return;
    themeModal.classList.remove('hidden');
    // Set the radio to the current theme setting
    const radio = document.querySelector(`input[name="theme"][value="${currentThemeSetting}"]`);
    if (radio) radio.checked = true;
}

function closeThemeModal() {
    if (!themeModal) return;
    themeModal.classList.add('hidden');
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
    const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (effectiveTheme === 'light') {
        body.classList.add('light-theme');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    } else {
        body.classList.remove('light-theme');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    }
}

function saveTheme() {
    const selectedTheme = document.querySelector('input[name="theme"]:checked')?.value || 'system';
    currentThemeSetting = selectedTheme;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
    closeThemeModal();
}

function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    currentThemeSetting = savedTheme;
    applyTheme(savedTheme);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (currentThemeSetting === 'system') {
        applyTheme('system');
    }
});

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
        closeThemeModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme preference
    loadSavedTheme();

    // Theme modal event listeners
    if (themeSaveBtn) themeSaveBtn.addEventListener('click', saveTheme);
    if (themeCancelBtn) themeCancelBtn.addEventListener('click', closeThemeModal);
    if (themeModal) {
        themeModal.addEventListener('click', (e) => {
            if (e.target === themeModal) closeThemeModal();
        });
    }

    // Initialize sticky header (project pages)
    initStickyHeader();

    document.querySelector('.theme-toggle').addEventListener('click', () => openThemeModal());

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

// Handle "See more" button click (index page only)
const seeMoreBtn = document.getElementById('openProjectsModal');
const proficienciesPanel = document.querySelector('.proficiencies-panel');
const projectsPanel = document.querySelector('.projects-panel');
const moreProjects = document.querySelector('.more-projects');
const projectsContainer = document.querySelector('.projects-grid');

if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
        if (!isExpanded) {
            // Expand view
            isExpanded = true;

            // Hide proficiencies panel with fade out
            proficienciesPanel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            proficienciesPanel.style.opacity = '0';
            proficienciesPanel.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                proficienciesPanel.style.display = 'none';

                // Expand projects panel
                projectsPanel.style.transition = 'all 0.4s ease';
                moreProjects.classList.remove('hidden');

                // Update button text
                seeMoreBtn.innerHTML = 'See less ↑';
            }, 300);
        } else {
            // Collapse view
            isExpanded = false;

            // Show proficiencies panel
            proficienciesPanel.style.display = 'block';

            moreProjects.classList.add('hidden');

            setTimeout(() => {
                proficienciesPanel.style.opacity = '1';
                proficienciesPanel.style.transform = 'translateY(0)';
            }, 50);

            // Update button text
            seeMoreBtn.innerHTML = 'See more ↓';
        }
    });
}
