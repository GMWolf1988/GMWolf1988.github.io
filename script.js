let isExpanded = false;

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');

    document.querySelector('.sun-icon').classList.toggle('hidden');
    document.querySelector('.moon-icon').classList.toggle('hidden');
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
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
        <div class="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Check out my videos on</span>
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