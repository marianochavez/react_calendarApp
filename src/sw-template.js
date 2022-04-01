importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
// se podria hacer utilizando dependencias, pero con el importScripts
// lo podemos hacer sin instalar nada

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheNetworkFirst = [
    '/api/auth/renew',
    '/api/event',
]

registerRoute(
    ({ request, url }) => {
        // console.log({request,url});
        if (cacheNetworkFirst.includes(url.pathname)) return true;

        return false;
    },
    new NetworkFirst()
)

const cacheFirstNetwork = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
]

registerRoute(
    ({request,url}) => {
        if (cacheFirstNetwork.includes(url.href)) return true;

        return false;
    },
    new CacheFirst()
)

// registerRoute(
//     new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'),
//     new CacheFirst()
// )

// registerRoute(
//     new RegExp('http://localhost:8000/api/auth/renew'),
//     new NetworkFirst()
// )


// Posteos offline
const bgSyncPlugin = new BackgroundSyncPlugin('posteos-offline', {
    maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
    new RegExp('http://localhost:8000/api/event'),
    new NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'POST'
)

registerRoute(
    new RegExp('http://localhost:8000/api/event'),
    new NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'DELETE'
)

registerRoute(
    new RegExp('http://localhost:8000/api/event'),
    new NetworkOnly({
        plugins: [bgSyncPlugin],
    }),
    'PUT'
)