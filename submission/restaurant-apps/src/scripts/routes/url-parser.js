// ? parsing url segment each combiner
const UrlParser = {
  // ? with combiner #
  parseActiveUrlWithCombiner () {
    const url = window.location.hash.slice(1).toLowerCase()
    const splitedUrl = this._urlSplitter(url)
    this._activeLinks(url)
    return this._urlCombiner(splitedUrl)
  },

  parseActiveUrlWithoutCombiner () {
    const url = window.location.hash.slice(1).toLowerCase()
    return this._urlSplitter(url)
  },

  _activeLinks (url) {
    const links = document.querySelectorAll('#navigationDrawer li a')
    for (const link of links) {
      if (`#${url}` === link.getAttribute('href')) {
        link.classList.add('active')
      } else if (!url) {
        links[0].classList.add('active')
      } else {
        link.classList.remove('active')
      }
    }
  },

  _urlSplitter (url) {
    const urlsSplits = url.split('/')
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    }
  },

  _urlCombiner (splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
  }
}

export default UrlParser
