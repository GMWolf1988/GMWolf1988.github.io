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
        description: "A 2D game I developed using C++ and SDL, showcasing power-ups, logging, and collision detection using the Separating Axis Theorem.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/Mighty-Putter-SDL-Cpp"
    },
    {
        title: "Pixl-Blitz",
        description: "A fast-paced browser-based shooting game I developed with HTML5 Canvas, JavaScript using GSAP and pythagorean maths.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/pixl-blitz"
    },
    {
        title: "Game Hub Website",
        description: "Game discovery app I built with React, TypeScript, Chakra UI and RAWG API. Featuring search, filtering, and detailed game information.",
        status: "Complete",
        statusColor: "green",
        link: "https://github.com/GMWolf1988/game-hub-website"
    },
    {
        title: "Game Of Kingdoms",
        description: "A 3D Tower Defense game I built within Unity (C#), using a grid and a A* pathfinding algorithm.",
        status: "Archived",
        statusColor: "blue",
        link: "https://github.com/GMWolf1988/Game_Of_Kingdoms"
    },
    {
        title: "The Last Paladin",
        description: "A 2D ARPG I built within Unity (C#). Players must traverse the level avoiding hazards and enemies.",
        status: "Archived",
        statusColor: "blue",
        link: "https://github.com/GMWolf1988/The-Last-Paladin"
    },
    {
        title: "Sigrid's Revenge",
        description: " A 2D pixel ARPG i developed in Unity (C#) utilising a robust state machine architecture to ensure clean, scalable, and predictable gameplay behavior.",
        status: "Archived",
        statusColor: "blue",
        link: "https://github.com/GMWolf1988/Sigrids-Revenge"
    },

      {
        title: "Portfolio Website",
        description: "My portfolio website i designed and developed using Html, JavaScript and Tailwind CSS. Full code here to be used as a template for other developers.",
        status: "Active",
        statusColor: "orange",
        link: "https://github.com/GMWolf1988/My-Portfolio"
    },
];

// Render projects into a container
const statusPriority = {
  green: 1,
  orange: 2,
  blue: 3
};

function renderProjects(container, projectsToShow) {
  const sorted = [...projectsToShow].sort(
    (a, b) => statusPriority[a.statusColor] - statusPriority[b.statusColor]
  );

  container.innerHTML = sorted.map(project => `
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
