importScripts('/static/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/static/117a46408db172691d5f.js",
    "revision": "a6dc6749d3fb4848100e6caac9401ad2"
  },
  {
    "url": "/static/1405723a4d1b8cf555fe.js",
    "revision": "c1eaabc836ace3056d339a797b174b4c"
  },
  {
    "url": "/static/1701db0b9877a383298d.js",
    "revision": "ada95ee5f22cf33c010504dea6ae7150"
  },
  {
    "url": "/static/2be89f537a428178c8ac.js",
    "revision": "ddae430557f93dda218cdacd20c1132d"
  },
  {
    "url": "/static/3d1258faa8c0c9f8b6aa.js",
    "revision": "5966fa6db910d30f889543e5486b57d8"
  },
  {
    "url": "/static/49043749a0c3c68390b2.js",
    "revision": "9273b1fbdc017867a997e0aa24c0920e"
  },
  {
    "url": "/static/500e901e438c33b75a64.js",
    "revision": "57a9940ff7c0c017d87518fde7faa155"
  },
  {
    "url": "/static/630f28ab9c39ecc4fcca.js",
    "revision": "9999e60a7efb4712cac3185949ac75d3"
  },
  {
    "url": "/static/63b6e72f509fff25a557.js",
    "revision": "fc7fd3b8eec64814e30acd637e487c51"
  },
  {
    "url": "/static/721efb947e69b1357c9a.js",
    "revision": "d8ee2fbc430a327156a51ccdf564f0f3"
  },
  {
    "url": "/static/918e19ddf2cc6b000ea9.js",
    "revision": "1986da5dcd3e03e354574a433ad176c6"
  },
  {
    "url": "/static/9f35b8ac676e8159d55e.js",
    "revision": "37686fd714f91d4a228886d08b97a93a"
  },
  {
    "url": "/static/d2eca20b8a2a4c08adc2.js",
    "revision": "c31254e22ecccd7b476d18bb6bb4c0e3"
  },
  {
    "url": "/static/f966f018cd6c3e04ccb2.js",
    "revision": "c5245508ea84f3727d4e3c30a43a41bf"
  }
], {
  "cacheId": "minervawikins_status",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/offline'])

workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/static/(?!content).*$'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('(/static/content)?/api/v0/.*'), workbox.strategies.networkFirst({"cacheName":"minervawikins_status_api","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":300}}), 'GET')



// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/offline'))
})


