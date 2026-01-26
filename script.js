let isExpanded = false;

// Theme Management
const themeModal = document.getElementById('themeModal');
const themeSaveBtn = document.getElementById('themeSaveBtn');
const themeCancelBtn = document.getElementById('themeCancelBtn');
let currentThemeSetting = 'system'; // Track the current saved setting

function openThemeModal() {
    themeModal.classList.remove('hidden');
    // Set the radio to the current theme setting
    const radio = document.querySelector(`input[name="theme"][value="${currentThemeSetting}"]`);
    if (radio) radio.checked = true;
}

function closeThemeModal() {
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
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        body.classList.remove('light-theme');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
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

// Initialize projects and theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme preference
    loadSavedTheme();

    // Theme modal event listeners
    themeSaveBtn.addEventListener('click', saveTheme);
    themeCancelBtn.addEventListener('click', closeThemeModal);
    themeModal.addEventListener('click', (e) => {
        if (e.target === themeModal) closeThemeModal();
    });

    const projectsContainer = document.querySelector('.projects-grid');
    renderProjects(projectsContainer, projects.slice(0, 3));
});

// Handle "See more" button click
const seeMoreBtn = document.getElementById('openProjectsModal');
const proficienciesPanel = document.querySelector('.proficiencies-panel');
const projectsPanel = document.querySelector('.projects-panel');
const projectsContainer = document.querySelector('.projects-grid');

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
            
            // Render all projects
            renderProjects(projectsContainer, projects);
            
            // Add YouTube message
            addYouTubeMessage();
            
            // Update button text
            seeMoreBtn.innerHTML = 'See less ↑';
        }, 300);
        
    } else {
        // Collapse view
        isExpanded = false;
        
        // Render only first 3 projects
        renderProjects(projectsContainer, projects.slice(0, 3));
        
        // Remove YouTube message
        removeYouTubeMessage();
        
        // Show proficiencies panel
        proficienciesPanel.style.display = 'block';
        
        setTimeout(() => {
            proficienciesPanel.style.opacity = '1';
            proficienciesPanel.style.transform = 'translateY(0)';
        }, 50);
        
        // Update button text
        seeMoreBtn.innerHTML = 'See more →';
    }
});

function addYouTubeMessage() {
    if (document.getElementById('youtube-message')) return;
    
    const message = document.createElement('div');
    message.id = 'youtube-message';
    message.className = 'youtube-message';
    message.innerHTML = `
        <div class="text-center text-sm text-gray-400">
            <span>Check out my other projects on</span>
            <a href="https://youtube.com/@garethmason7920" target="_blank" class="video-link underline">
                Youtube
            </a>
            <span>and</span>
            <a href="https://linkedin.com/in/gareth-mason-08a070226/" target="_blank" class="video-link underline">
                LinkedIn
            </a>
        </div>
    `;
    
    projectsPanel.appendChild(message);
}

function removeYouTubeMessage() {
    const message = document.getElementById('youtube-message');
    if (message) {
        message.remove();
    }
}