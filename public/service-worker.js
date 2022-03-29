const CORE_CACHE = ['/offline', 'style.css', '/', '/camera', 'scripts/camera.js']

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
  console.log(`fetching: ${e.request.url}`)

  e.respondWith(
    caches.match(e.request)
      .then(cache => {
        if (cache) {
          return cache
        }
        else{
          return fetch(e.request)
            .then((res) => res)
            .catch((err) => {
              console.log(err)
              return caches.open('core-cache')
                .then(cache => cache.match('/offline'))
            })
        }
      })
  )
})