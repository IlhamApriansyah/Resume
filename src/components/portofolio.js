import { projectsData } from "../data/projek.js";

export function renderPortfolio(container) {
  container.innerHTML = `
    <h2 class="terminal-prompt text-xl font-bold mb-6 text-terminal-green">
      ls ~/projects
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      ${projectsData
        .map(
          (p) => `
        <div class="project-card">
          ${
            p.image
              ? `<img src="${p.image}" alt="${p.name}"
            class="w-full h-32 object-cover rounded mb-3 opacity-80"/>`
              : ""
          }
          <h3 class="text-terminal-cyan font-semibold mb-1">${p.name}</h3>
          <p class="text-terminal-muted text-sm mb-3">${p.description}</p>
          <div class="flex items-center justify-between">
            <span class="lang-badge ${p.langColor}">${p.lang}</span>
            <a href="${p.repo}" target="_blank"
               class="text-xs text-terminal-green hover:underline">
              [open repo] →
            </a>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>`;
}
