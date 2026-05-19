self.addEventListener("install", (event) => {
  console.log("Service Worker installé");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activé");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
