import { renderNavbar } from "./components/navbar.js";
import { navigate } from "./utils/router.js";

// Expose navigate secara global untuk onclick di navbar
window.__navigate = navigate;

// Init
renderNavbar();
navigate("tentang"); // halaman default
