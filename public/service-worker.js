const CORE_CACHE = ['/offline', 'style.css', '/', '/camera', 'scripts/camera.js']
const core_name = 'core-cache-v2'

self.addEventListener('install', (e) => {
  console.log('installed')
  e.waitUntil(
    caches.open(`${core_name}`)
      .then(cache => cache.addAll(CORE_CACHE))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (e) => {
  console.log('activated')
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    // Als de cache match met de request, stuur de cache.
    caches.match(e.request)
      .then(cache => {
        if (cache) {
          return cache
        }
        // Anders fetch de request en stuur dat als response 
        else{
          return fetch(e.request)
            .then((res) => res)
            // Wanneer er geen response kan worden gefetched laat de offline pagina zien vanuit de cache 
            // breng verandering aan zodat me javascript en css kunnen worden geupdate 
            .catch((err) => {
              return caches.open('core-cache')
                .then(cache => cache.match('/offline'))
            })
        }
      })
  )
})