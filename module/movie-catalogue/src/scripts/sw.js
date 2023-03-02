import { precacheAndRoute } from 'workbox-precaching'

// ? semua asset yang akan dicaching ( appShell) akan automatis
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed')
})
