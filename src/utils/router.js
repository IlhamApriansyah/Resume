import { renderAbout } from "../components/tentang.js";
import { renderEducation } from "../components/pendidikan.js";
import { renderPortfolio } from "../components/portofolio.js";

const routes = {
  tentang: renderAbout,
  pendidikan: renderEducation,
  portofolio: renderPortfolio,
};

export function navigate(page) {
  const app = document.getElementById("app");
  const render = routes[page] ?? routes["tentang"];

  // Update active link di navbar
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.classList.toggle("text-terminal-green", el.dataset.nav === page);
    el.classList.toggle("text-terminal-muted", el.dataset.nav !== page);
  });

  // Render halaman
  app.innerHTML = "";
  render(app);
}
