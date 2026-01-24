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
            
            // Update button text
            seeMoreBtn.innerHTML = 'See less ←';
        }, 300);
        
    } else {
        // Collapse view
        isExpanded = false;
        
        // Render only first 3 projects
        renderProjects(projectsContainer, projects.slice(0, 3));
        
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