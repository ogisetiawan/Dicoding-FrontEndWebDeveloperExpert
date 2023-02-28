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
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev' // ? rcc live feed (insecure url)
}

export default CONFIG
