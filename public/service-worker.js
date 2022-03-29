const CORE_CACHE = ['/offline', 'style.css', '/', '/camera']

self.addEventListener('install', (e) => {
  console.log('installed')
  e.waitUntil(
    caches.open('core-cache')
      .then(cache => cache.addAll(CORE_CACHE))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (e) => {
  console.log('activated')
})

self.addEventListener('fetch', (e) => {
  console.log(`fetching ${e.request.url}`)
})