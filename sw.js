const staticCacheName = 'static';
const assets = [
    '/',
    '/images/me.png',
    '/index.html',
    '/style/style.css',
]

self.addEventListener('install', e => {
    e.waitUntil(caches.open(staticCacheName).then(cache => cache.addAll(assets)))
})

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(cacheRes => cacheRes || fetch(e.request)))
})