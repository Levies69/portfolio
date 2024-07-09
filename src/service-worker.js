/* eslint-disable no-restricted-globals */
// Import necessary Workbox modules
import { precacheAndRoute } from 'workbox-precaching';

// Initialize self.__WB_MANIFEST if not already defined
self.__WB_MANIFEST = [].concat(self.__WB_MANIFEST || []);

// Precache routes using Workbox
precacheAndRoute(self.__WB_MANIFEST);

// Other service worker configurations and caching strategies can follow here
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



