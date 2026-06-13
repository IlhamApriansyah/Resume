import { navigate } from "../utils/router.js";

const navLinks = [
  { id: "tentang", label: "./tentang" },
  { id: "pendidikan", label: "./pendidikan" },
  { id: "portofolio", label: "./portofolio" },
];

export function renderNavbar() {
  const nav = document.getElementById("navbar");

  nav.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-terminal-border bg-terminal-surface/90 backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-4">

        <!-- Desktop nav -->
        <div class="flex items-center justify-between h-14">
          <button
            data-nav-brand
            onclick="window.__navigate('tentang')"
            class="flex items-center gap-2 text-terminal-green font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span class="text-terminal-muted">┌─[</span>
            <span>IlhamApriansyah@portfolio</span>
            <span class="text-terminal-muted">]─[~]</span>
          </button>

          <!-- Desktop links -->
          <nav class="hidden md:flex items-center gap-1">
            ${navLinks
              .map(
                (link) => `
              <button
                data-nav="${link.id}"
                onclick="window.__navigate('${link.id}')"
                class="px-3 py-1.5 rounded text-sm text-terminal-muted
                       hover:text-terminal-green hover:bg-terminal-border/30
                       transition-all duration-150 font-mono"
              >
                ${link.label}
              </button>
            `,
              )
              .join("")}
          </nav>

          <!-- Mobile hamburger -->
          <button
            id="hamburger"
            aria-label="Toggle menu"
            class="md:hidden flex flex-col gap-1.5 p-2 text-terminal-muted hover:text-terminal-green transition-colors"
          >
            <span class="block w-5 h-0.5 bg-current" id="bar1"></span>
            <span class="block w-5 h-0.5 bg-current" id="bar2"></span>
            <span class="block w-5 h-0.5 bg-current" id="bar3"></span>
          </button>
        </div>

        <!-- Mobile dropdown -->
        <div id="mobile-menu" class="md:hidden hidden pb-3 border-t border-terminal-border/50">
          <div class="flex flex-col gap-1 pt-3">
            ${navLinks
              .map(
                (link) => `
              <button
                data-nav="${link.id}"
                onclick="window.__navigate('${link.id}'); window.closeMobileMenu()"
                class="text-left px-3 py-2 rounded text-sm text-terminal-muted
                       hover:text-terminal-green hover:bg-terminal-border/30
                       transition-all duration-150 font-mono"
              >
                <span class="text-terminal-green">$</span> cd ${link.id}
              </button>
            `,
              )
              .join("")}
          </div>
        </div>

      </div>
    </header>
  `;

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  window.closeMobileMenu = () => {
    mobileMenu.classList.add("hidden");
  };
}

export function setActiveNav(page) {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    const isActive = el.dataset.nav === page;
    el.classList.toggle("text-terminal-green", isActive);
    el.classList.toggle("bg-terminal-border/20", isActive);
    el.classList.toggle("text-terminal-muted", !isActive);
  });
}
