/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Initialize self.__WB_MANIFEST if not already defined
self.__WB_MANIFEST = self.__WB_MANIFEST || [];

// Precache routes using Workbox
precacheAndRoute(self.__WB_MANIFEST);

// Service worker install event
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

// Service worker fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
