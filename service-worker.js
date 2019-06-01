importScripts("/pwa_tuto/precache-manifest.e5074d022dc4b0c1bd3cf406f8fead12.js", "/pwa_tuto/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/pwa_tuto/workbox-v3.6.3"});
workbox.core.setCacheNameDetails({
    prefix: "pwa_push_arthur"
});
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute('/index.html');

self.addEventListener("message", event => {
    console.log(`[Service Worker] Message recieived: ${event.data}`)
    if (event.data === "skipWaiting") {
        self.skipWaiting();
    }
})
