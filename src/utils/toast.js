/**
 * Toast notification ringan pengganti SweetAlert2
 * Konsisten dengan tema terminal, tanpa dependency eksternal.
 *
 * Penggunaan:
 *   import { toast } from './utils/toast.js';
 *   toast('Pesan berhasil disalin!');
 *   toast('Terjadi kesalahan', 'error');
 *   toast('Data tersimpan', 'success');
 */

const TYPES = {
  success: {
    icon: "✓",
    border: "border-terminal-green",
    text: "text-terminal-green",
  },
  error: {
    icon: "✗",
    border: "border-terminal-red",
    text: "text-terminal-red",
  },
  info: {
    icon: "i",
    border: "border-terminal-cyan",
    text: "text-terminal-cyan",
  },
};

export function toast(message, type = "success", duration = 3000) {
  const config = TYPES[type] ?? TYPES.info;

  // Pastikan container toast tersedia
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-[9999] flex flex-col gap-2";
    document.body.appendChild(container);
  }

  // Buat elemen toast
  const el = document.createElement("div");
  el.className = `
    flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm
    bg-terminal-surface border ${config.border}
    text-terminal-text shadow-lg
    translate-y-2 opacity-0
    transition-all duration-200
  `.trim();

  el.innerHTML = `
    <span class="${config.text} font-bold shrink-0">${config.icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(el);

  // Animasi masuk
  requestAnimationFrame(() => {
    el.classList.remove("translate-y-2", "opacity-0");
    el.classList.add("translate-y-0", "opacity-100");
  });

  // Auto dismiss
  setTimeout(() => {
    el.classList.add("opacity-0", "translate-y-2");
    el.addEventListener("transitionend", () => el.remove());
  }, duration);
}
