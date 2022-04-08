const CORE_CACHE = ['/offline', 'style-v2.min.css', '/', '/camera', 'scripts/camera-v2.min.js']
const core_name = 'core-cache-v5'
const html_cache = 'html-cache-v1'

self.addEventListener('install', (e) => {
  console.log('installed')
  e.waitUntil(
    caches.open(core_name)
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
            .then((res) => {
              // stop de response in dynamic cache
              return caches.open(html_cache).then((cache) => {
                  cache.put(e.request.url, res.clone())
                  return res
              })
          })
            // Wanneer er geen response kan worden gefetched laat de offline pagina zien vanuit de cache 
            // breng verandering aan zodat me javascript en css kunnen worden geupdate 
            .catch((err) => {
              return caches.open(core_name)
                .then(cache => cache.match('/offline'))
            })
        }
      })
  )
})