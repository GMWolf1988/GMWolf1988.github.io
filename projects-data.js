// All project data in one place
const projects = [
    {
        title: "QuestCraft",
        description: "A C# text-based game I designed and developed to explore the effectiveness of procedural content generation (PCG) in quest design.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/QuestCraft"
    },
    {
        title: "Mighty Putter",
        description: "A 2D game I developed using C++ and SDL. Showcasing power-ups, logging, and collision detection using the Separating Axis Theorem.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/mighty-putter"
    },
    {
        title: "Pixl-Blitz",
        description: "A fast-paced browser-based shooting game I developed with HTML5 Canvas and JavaScript. Using GSAP and pythagorean math.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/pixl-blitz"
    },
    {
        title: "Game Hub",
        description: "Game discovery app built with React and TypeScript, featuring search, filtering, and detailed game information.",
        status: "Complete",
        statusColor: "green",
        link: "#"
    },
    {
        title: "Dungeon Generator",
        description: "Procedural dungeon generation system built in Unity with custom algorithms for creating unique playable levels.",
        status: "In Progress",
        statusColor: "blue",
        link: "#"
    },
    {
        title: "Portfolio v2",
        description: "Modern responsive portfolio redesign with dark/light theme toggle and smooth animations.",
        status: "Complete",
        statusColor: "green",
        link: "#"
    },
    {
        title: "Data Dashboard",
        description: "React analytics dashboard for visualizing business data with interactive charts and real-time updates.",
        status: "Planning",
        statusColor: "yellow",
        link: "#"
    }
];

// Render projects into a container
function renderProjects(container, projectsToShow) {
    container.innerHTML = projectsToShow.map(project => `
        <a href="${project.link}" target="_blank" class="card block">
            <div class="flex justify-between items-start mb-3">
                <h3 class="text-base font-medium">${project.title}</h3>
                <span class="status-badge bg-${project.statusColor}-500/20 text-${project.statusColor}-300">${project.status}</span>
            </div>
            <p class="text-sm text-gray-400">
                ${project.description}
            </p>
        </a>
    `).join('');
}