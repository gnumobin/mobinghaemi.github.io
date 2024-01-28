const staticCacheName = 'static';
const assets = [
    '/',
    '/index.html',
    '/style/style.css',
    '/javascript/main.js',
    '/javascript/data.js',
    '/javascript/utils.js',
    '/javascript/elements.js',
    '/assets/font/Poppins-Regular.ttf',
    '/assets/img',
]

self.addEventListener('install', e => {
    console.log(e)
    e.waitUntil(caches.open(staticCacheName).then(cache => cache.addAll(assets)))
})

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(cacheRes => cacheRes || fetch(e.request)))
})