'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "85769b1afa517cd44c26c4106a5f504f",
"version.json": "bfa905d9eda680a4e192aa83a0b2afe4",
"index.html": "8a46a955abd0497b6c5ed23ca7ba8600",
"/": "8a46a955abd0497b6c5ed23ca7ba8600",
"styles.css": "c14686255ebdc19587e6f66762ee981d",
"main.dart.js": "19f065b32e5ea60db8f18a8cd64801f2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"img/spinner.gif": "9038bbded4ba33f426f97611d31b2048",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6b0b9944ab1fc6180cabcf8ed261dcf",
"assets/AssetManifest.json": "46fec140051ab503dfa951e3865d44d9",
"assets/NOTICES": "d0e533aae3933bdb6da7cd1da31400d6",
"assets/FontManifest.json": "9f782107af32a79a2f456afd0161fbe8",
"assets/AssetManifest.bin.json": "ac3575ab630240c70e6c18cd37fe4de6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "55ae5eadff62d1c6d3757e6fe8f9c235",
"assets/fonts/Orbitron-Medium.ttf": "0641338569a6ec88d73870e57053196c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/nebula.png": "d854f5df1c74574d315f331b399e6217",
"assets/assets/laser.wav": "01d59581ac27443759816108922b9d1e",
"assets/assets/music_boss.mp3": "f74bbc4fe255b81ab1b2b037ed17fe67",
"assets/assets/starfield.png": "a73caf8ce765fb67108e5e2982d54fb0",
"assets/assets/sprites.json": "074262b9158c86c3b483d490fb8d499e",
"assets/assets/explosion_player.wav": "6f23f4d8cada6e2425b9266e0414197d",
"assets/assets/explosion_boss.wav": "c469300feaaafaa55b13b8538bf9935e",
"assets/assets/music_game.mp3": "99c3e913a23bed64c956d4309f18324a",
"assets/assets/explosion_1.wav": "e203141a6ee3fda0b5eb36f90f203287",
"assets/assets/explosion_0.wav": "8a141ce925bf415ad456c6dcd512f380",
"assets/assets/ui_popup.png": "6f3e5bd13549c709a8092870c64470b6",
"assets/assets/explosion_2.wav": "8a47fea0191cd9085c6cf7c663b8b97e",
"assets/assets/splash.png": "e0b9e658cd5f674787d6f627ea4a2381",
"assets/assets/buy_upgrade.wav": "040c8d469b41aaf9b3d3d98696d85717",
"assets/assets/click.wav": "d8d8ae1956b4426af2a4f1df576ccf53",
"assets/assets/pickup_powerup.wav": "29c62b4cd452439da4e9017d1c52c7bc",
"assets/assets/pickup_1.wav": "c89a946f747566b8bd3e272cc3e68117",
"assets/assets/hit.wav": "1081340fb31c5352e0910468b1bff131",
"assets/assets/pickup_0.wav": "d82b9a14bec1efe197bad7454b7a1592",
"assets/assets/music_intro.mp3": "57d8ffa2b55ae570ddcfb5b2e89c106a",
"assets/assets/pickup_2.wav": "c6e84b641cc56d4b3da22c992438a4b1",
"assets/assets/ui_bg_top.png": "b63d73bcd21ef2575351764911fa31fa",
"assets/assets/sprites.png": "ed573acfcce2ca75461a1939eba95665",
"assets/assets/levelup.wav": "8d34955202c9268370dd1212cabad49d",
"assets/assets/game_ui.png": "8dab050b0819fd1b35556c3330386099",
"assets/assets/game_ui.json": "50d792c7f3029a61182607433ab46db8",
"assets/assets/ui_bg_bottom.png": "42b33aeee9f53dfe7aad431d1e48c8d2",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
