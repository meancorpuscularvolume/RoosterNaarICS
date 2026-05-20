// Minimal service worker — no offline caching.
// Required by Chrome for PWA installability ("Add to Home Screen").
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
