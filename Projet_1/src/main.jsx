import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.jsx";
import "./global.css";

// Enregistrement du service worker avec rechargement automatique
const updateSW = registerSW({
  onNeedRefresh() {
    // Une nouvelle version est disponible
    if (confirm("Une nouvelle version est disponible. Mettre à jour ?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("Application prête pour une utilisation hors ligne.");
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);