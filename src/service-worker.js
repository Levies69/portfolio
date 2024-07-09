/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('static-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/logo192.png',
          '/logo512.png',
          // Add other static assets that need to be cached
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  