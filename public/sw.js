/*
  Festival Travel Guide - Service Worker
  Strategy:
  - Precache core shell (HTML/CSS/JS and hero images)
  - Stale-while-revalidate for CSS/JS
  - Cache-first + background update for images (jpg/png/webp/avif/svg)
  - Network-first for navigation
*/

const CACHE_VERSION = 'v1';
const CACHE_PREFIX = 'ftg-cache-';
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;

// Adjust paths to be relative so it works on GitHub Pages (base='./')
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './main.js',
  // Hero images (largest visual above-the-fold)
  './images/Generated image 2.png',
  './images/Generated image 4.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // addAll will fail the whole install if any missing; add individually instead
    await Promise.allSettled(
      CORE_ASSETS.map(async (url) => {
        try {
          const res = await fetch(url, { cache: 'no-cache' });
          if (res.ok || res.type === 'opaque') {
            await cache.put(url, res);
          }
        } catch (_) { /* ignore */ }
      })
    );
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Cleanup old caches
    const keys = await caches.keys();
    await Promise.all(keys.map(k => {
      if (k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME) {
        return caches.delete(k);
      }
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return; // only cache GET

  const url = new URL(request.url);

  // Avoid interfering with dev server or non-http(s)
  if (!url.protocol.startsWith('http')) return;

  // Skip cross-origin requests entirely to prevent opaque caching issues
  if (url.origin !== self.location.origin) return;

  // Network-first for navigations (SPA-like)
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const netRes = await fetch(request);
        // Optionally cache index.html latest
        const cache = await caches.open(CACHE_NAME);
        cache.put('./index.html', netRes.clone()).catch(() => {});
        return netRes;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match('./index.html');
        if (cached) return cached;
        return new Response('<h1>오프라인</h1><p>네트워크 연결을 확인해주세요.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
      }
    })());
    return;
  }

  // Skip Google Maps and analytics-like hosts (let them hit network)
  const skipHosts = ['google.com', 'www.google.com', 'maps.googleapis.com', 'www.google-analytics.com'];
  if (skipHosts.some(h => url.hostname.endsWith(h))) return;

  // Images: cache-first, then background update (stale-while-revalidate)
  const isImage = /\.(?:png|jpg|jpeg|gif|webp|avif|svg)$/i.test(url.pathname);

  // CSS/JS: stale-while-revalidate
  const isStyleOrScript = /\.(?:css|js)$/i.test(url.pathname);

  if (isImage || isStyleOrScript) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: try cache, else network, then cache
  event.respondWith(cacheFirstThenNetwork(request));
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreVary: true });
  const fetchPromise = fetch(request).then((res) => {
    // Only cache successful same-origin responses
    if (res && res.ok) {
      cache.put(request, res.clone()).catch(() => {});
    }
    return res;
  }).catch(() => undefined);

  // Return cached immediately if present, else wait for network
  return cached || fetchPromise || new Response('', { status: 504 });
}

async function cacheFirstThenNetwork(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      cache.put(request, res.clone()).catch(() => {});
    }
    return res;
  } catch (e) {
    // If request is same-origin HTML fallback
    if (request.mode === 'navigate') {
      const fallback = await cache.match('./index.html');
      if (fallback) return fallback;
    }
    throw e;
  }
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
