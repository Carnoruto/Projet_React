import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "icons/apple-touch-icon.png",
        "icons/icon-192.png",
        "icons/icon-512.png",
        "icons/icon-512-maskable.png",
      ],

      // ── Manifest ────────────────────────────────────────
      manifest: {
        name: "Avis et alertes – Ville de Montréal",
        short_name: "Alertes MTL",
        description:
          "Consultez les avis et alertes émis par la Ville de Montréal : travaux, fermetures, avis d'ébullition et plus.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#003DA5",
        background_color: "#ffffff",
        lang: "fr",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      // ── Workbox (service worker) ─────────────────────────
      workbox: {
        // Assets statiques précachés au premier chargement
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],

        runtimeCaching: [
          // Données API → StaleWhileRevalidate
          {
            urlPattern: /^https:\/\/donnees\.montreal\.ca\/api/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-alertes-mtl",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24, // 24 h
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          // Images externes → CacheFirst
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 jours
              },
            },
          },

          // Polices Google Fonts → StaleWhileRevalidate
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 an
              },
            },
          },
        ],

        // Page de repli hors-ligne
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/api/],
      },

      // Afficher dans la console les infos du SW en dev
      devOptions: {
        enabled: true,
      },
    }),
  ],
});