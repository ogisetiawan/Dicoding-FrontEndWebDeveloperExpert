const CONFIG = {
  KEY: 'a2df3d1a7611194432bbdf1fc80540f2',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  // CACHE_NAME: 'MovieCatalogue-V1'
  CACHE_NAME: new Date().toISOString(), // ? set secara dinamis untuk dev
  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev', // ? rcc live feed (insecure url)
  // ? vapip KEYS public
  PUSH_MSG_VAPID_PUBLIC_KEY: 'BN7-r0Svv7CsTi18-OPYtJLVW0bfuZ1x1UtrygczKjennA_qs7OWmgOewcuYSYF3Gc_mPbqsDh2YoGCDPL0RxDQ',
  PUSH_MSG_SUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe', // ? endpoint push service for subscribe
  PUSH_MSG_UNSUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe'
}

export default CONFIG
