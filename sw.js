// sw.js — válido para GitHub Pages en /optipic-ultimate/
const CACHE = 'optipic-v1';
const BASE = self.registration.scope; // p.ej. https://sorteostec.github.io/optipic-ultimate/
const ASSETS = [
  'index.html',
  'assets/logo.svg',
  'assets/offline.html',
  'manifest.webmanifest'
].map(p => new URL(p, BASE).toString());

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE && caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.ok) cache.put(req, fresh.clone());
      return fresh;
    } catch {
      return cached || (await cache.match(new URL('assets/offline.html', BASE)));
    }
  })());
});
