const CACHE_NAME = "v1";
const PRE_CACHE_ASSETS = [
    "/",
    "/index.html",
    "/manifest.json",

    "/images/fav.png",

    "/pictures/logo.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRE_CACHE_ASSETS);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return (
                response ||
                fetch(event.request).then(fetchResponse => {
                    // Spara endast bilder och videor i cache om de laddas första gången
                    if (event.request.destination === "image" || event.request.destination === "video") {
                        return caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, fetchResponse.clone()); // Lägg till i cache vid första laddning
                            return fetchResponse;
                        });
                    }
                    return fetchResponse;
                })
            );
        })
    );
});
