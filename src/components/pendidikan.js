import { pendidikan } from "../data/pendidikan.js";

export function renderEducation(container) {
  container.innerHTML = `
    <section class="space-y-6">

      <!-- Terminal header -->
      <div class="flex items-center gap-2 text-terminal-muted text-sm mb-2">
        <span class="text-terminal-green">$</span>
        <span>cat pendidikan.log</span>
        <span class="w-2 h-4 bg-terminal-green inline-block animate-blink ml-1"></span>
      </div>

      <!-- Timeline -->
      <div class="relative">

        <!-- Garis vertikal timeline -->
        <div class="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-terminal-border"></div>

        <div class="space-y-6">
          ${pendidikan
            .map(
              (pend, index) => `
            <div class="relative pl-12 sm:pl-16">

              <!-- Dot pada timeline -->
              <div class="absolute left-2.5 sm:left-4 top-5 w-3 h-3 rounded-full border-2
                          ${
                            index === 0
                              ? "border-terminal-green bg-terminal-green"
                              : "border-terminal-border bg-terminal-bg"
                          }">
              </div>

              <!-- Card -->
              <div class="bg-terminal-surface border border-terminal-border rounded-lg p-5
                          hover:border-terminal-green/50 transition-colors duration-200 group">

                <!-- Header card -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 class="font-bold text-terminal-text group-hover:text-terminal-green transition-colors">
                      ${pend.institusi}
                    </h3>
                    <p class="text-terminal-cyan text-sm mt-0.5">${pend.jurusan}</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <span class="text-xs font-mono px-2 py-0.5 rounded border border-terminal-border text-terminal-muted">
                      ${pend.tahun}
                    </span>
                    ${
                      pend.ipk
                        ? `
                      <span class="text-xs font-mono px-2 py-0.5 rounded border border-terminal-green/50 text-terminal-green">
                        IPK ${pend.ipk}
                      </span>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

    </section>
  `;
}
