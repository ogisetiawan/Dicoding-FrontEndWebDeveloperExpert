const CONFIG = {
  KEY: 'a2df3d1a7611194432bbdf1fc80540f2',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  // CACHE_NAME: 'MovieCatalogue-V1'
  CACHE_NAME: new Date().toISOString() // ? set secara dinamis untuk dev
}

export default CONFIG
