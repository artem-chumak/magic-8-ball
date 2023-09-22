self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-cache").then(function (cache) {
      return cache.addAll([
				"/",
				"/index.html",
				"/styles.css",
				"/images/android-chrome-192x192.png",
				"/images/android-chrome-256x256.png",
				"/images/android-chrome-512x512.png",
				"/images/apple-touch-icon.png",
				"/images/favicon-16x16.png",
				"/images/favicon-32x32.png",
				"/images/favicon.ico",
			]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
