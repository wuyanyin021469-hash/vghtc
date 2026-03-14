const CACHE_NAME = 'multiplication-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-512.png',
    'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
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
