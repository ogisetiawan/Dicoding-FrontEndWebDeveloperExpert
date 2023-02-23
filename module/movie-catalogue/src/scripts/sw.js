import 'regenerator-runtime' // ? Agar ketika babel men-transpile kode, fungsi asynchronous tetap berjalan
import CacheHelper from './utils/cache-helper' // ? call cache helper

// ? Daftar asset yang akan dicaching ( appShell)
const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js'
]

// ? event install service worker
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...')
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache])) // ? passing asset to open and add many asset
})

// ? 
self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...')
  event.waitUntil(CacheHelper.deleteOldCache()) // ? activate sw and delete oldcache if any
})

// ? proses caching dengan strategi stale while revalidate
self.addEventListener('fetch', (event) => {
  // ?  Add/get fetch request to/from caches
  // console.log(event.request)
  event.respondWith(CacheHelper.revalidateCache(event.request))
  // TODO:
})
