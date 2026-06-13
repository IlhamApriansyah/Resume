export function renderAbout(container) {
  container.innerHTML = `
    <section class="space-y-8 animate-fade-in">

      <!-- Terminal header -->
      <div class="flex items-center gap-2 text-terminal-muted text-sm mb-2">
        <span class="text-terminal-green">$</span>
        <span>cat tentang.txt</span>
        <span class="w-2 h-4 bg-terminal-green inline-block animate-blink ml-1"></span>
      </div>

      <!-- Profile block -->
      <div class="bg-terminal-surface border border-terminal-border rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-start">

        <!-- Avatar -->
        <div class="shrink-0">
          <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-lg border-2 border-terminal-green overflow-hidden bg-terminal-border">
            <img
              src="assets/img/profile.jpg"
              alt="Foto Profil"
              class="w-full h-full object-cover"
              onerror="this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center text-terminal-green text-3xl font-bold\'>U</div>'"
            />
          </div>
          <!-- Status dot -->
          <div class="flex items-center gap-1.5 mt-2">
            <span class="w-2 h-2 rounded-full bg-terminal-green inline-block"></span>
            <span class="text-xs text-terminal-muted">available</span>
          </div>
        </div>

        <!-- Info -->
        <div class="flex-1 space-y-3">
          <div>
            <h1 class="text-2xl font-bold text-terminal-text">Ilham Apriansyah</h1>
            <p class="text-terminal-cyan text-sm mt-0.5">Backend Developer</p>
          </div>

          <p class="text-terminal-muted text-sm leading-relaxed">
          Laki-laki, 25 Tahun, lajang
          <br>
          Saya sedang memperbaiki beberapa repository agar layak untuk dibagikan ke publik
          <br>
          Fokus saat ini : Javascript (NodeJS) dan Python (PyTinker)
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            ${["Node.js", "GitHub"]
              .map(
                (tag) => `
              <span class="text-xs font-mono px-2 py-0.5 rounded border border-terminal-border text-terminal-muted">
                #${tag}
              </span>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Info rows -->
      <div class="bg-terminal-surface border border-terminal-border rounded-lg divide-y divide-terminal-border">
        ${[
          { key: "lokasi", value: "Tangerang, Banten, Indonesia", icon: "📍" },
          { key: "email", value: "ilhamapriansyah471@gmail.com", icon: "✉️" },
          {
            key: "github",
            value: "https://github.com/IlhamApriansyah",
            icon: "⎇",
          },
          {
            key: "status",
            value: "Terbuka untuk kerja kantor / freelance",
            icon: "◉",
          },
        ]
          .map(
            (row) => `
          <div class="flex items-center gap-4 px-5 py-3 text-sm">
            <span class="text-base w-5 text-center">${row.icon}</span>
            <span class="text-terminal-muted w-20 font-mono shrink-0">${row.key}</span>
            <span class="text-terminal-border mx-1">→</span>
            <span class="text-terminal-text">${row.value}</span>
          </div>
        `,
          )
          .join("")}
      </div>

      <!-- Skills section -->
      <div>
        <p class="text-terminal-muted text-sm mb-3">
          <span class="text-terminal-green">$</span> ls ~/skills
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${[
            {
              category: "Frontend",
              color: "border-terminal-cyan",
              labelColor: "text-terminal-cyan",
              skills: ["HTML & CSS", "JavaScript (ES6+)", "Tailwind CSS"],
            },
            {
              category: "Backend",
              color: "border-terminal-green",
              labelColor: "text-terminal-green",
              skills: ["Node.js"],
            },
            {
              category: "Tools",
              color: "border-terminal-yellow",
              labelColor: "text-terminal-yellow",
              skills: ["Git & GitHub", "Zed Editor"],
            },
            {
              category: "Lainnya",
              color: "border-terminal-muted",
              labelColor: "text-terminal-muted",
              skills: [
                "Linux",
                "MVC (Move-View-Controller)",
                "OOP (Object-Oriented-Programming)",
              ],
            },
          ]
            .map(
              (group) => `
            <div class="bg-terminal-surface border ${group.color} rounded-lg p-4">
              <h3 class="text-xs font-bold ${group.labelColor} uppercase tracking-wider mb-3">${group.category}</h3>
              <ul class="space-y-1.5">
                ${group.skills
                  .map(
                    (skill) => `
                  <li class="flex items-center gap-2 text-sm text-terminal-muted">
                    <span class="text-terminal-green text-xs">▸</span>
                    ${skill}
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

    </section>
  `;
}
