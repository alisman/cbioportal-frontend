'use strict';
const CACHE = 'precache',
    broadcast = new BroadcastChannel('/api/drive.v1');
function onInstall(t) {
    self.skipWaiting(), t.waitUntil(cacheAll());
}
function onActivate(t) {
    t.waitUntil(self.clients.claim());
}
async function onFetch(t) {
    const { request: a } = t,
        n = new URL(t.request.url);
    let e = null;
    shouldBroadcast(n)
        ? (e = broadcastOne(a))
        : shouldDrop(a, n) || (e = maybeFromCache(t)),
        e && t.respondWith(e);
}
async function maybeFromCache(t) {
    const { request: a } = t;
    let n = await fromCache(a);
    return (
        n
            ? t.waitUntil(refetch(a))
            : ((n = await fetch(a)), t.waitUntil(updateCache(a, n.clone()))),
        n
    );
}
async function fromCache(t) {
    const a = await openCache(),
        n = await a.match(t);
    return n && 404 !== n.status ? n : null;
}
async function refetch(t) {
    const a = await fetch(t);
    return await updateCache(t, a), a;
}
function shouldBroadcast(t) {
    return t.origin === location.origin && t.pathname.includes('/api/drive');
}
function shouldDrop(t, a) {
    return (
        'GET' !== t.method ||
        null === a.origin.match(/^http/) ||
        a.pathname.includes('/api/')
    );
}
async function broadcastOne(t) {
    const a = new Promise(t => {
        broadcast.onmessage = a => {
            t(new Response(JSON.stringify(a.data)));
        };
    });
    return broadcast.postMessage(await t.json()), await a;
}
async function openCache() {
    return await caches.open(CACHE);
}
async function updateCache(t, a) {
    return (await openCache()).put(t, a);
}
async function cacheAll() {
    const t = await openCache();
    return await t.addAll([]);
}
self.addEventListener('install', onInstall),
    self.addEventListener('activate', onActivate),
    self.addEventListener('fetch', onFetch);
