import CONFIG from '../globals/config'

const CacheHelper = {
  // ? caching appshell (favicon, icon, index.html, bundle etc)
  async cachingAppShell (requests) {
    const cache = await this._openCache() // ? call open cache
    cache.addAll(requests) // ? insert many url
  },

  async deleteOldCache () {
    const cacheNames = await caches.keys() // ? search cache name
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName))
  },

  // ? set fetch request
  async revalidateCache (request) {
    const response = await caches.match(request) // ? matching ( cocokan request dgn cache)

    if (response) {
      this._fetchRequest(request)
      return response
    }
    return this._fetchRequest(request)
  },

  // ? open cache name
  async _openCache () {
    return caches.open(CONFIG.CACHE_NAME) // ? set cache name
  },

  async _fetchRequest (request) {
    const response = await fetch(request) // ? fetch request

    if (!response || response.status !== 200) {
      return response
    }

    await this._addCache(request) // ? add request to cache
    return response
  },

  async _addCache (request) {
    const cache = await this._openCache()
    cache.add(request)
  }
}

export default CacheHelper
