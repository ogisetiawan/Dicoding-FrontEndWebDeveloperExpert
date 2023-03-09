import Drawer from '../utils/drawer'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import '../component/main-content.js'
import '../component/footer.js'

class App {
  constructor ({ hamburger, drawer, hero, content }) {
    this._hamburger = hamburger
    this._drawer = drawer
    this._hero = hero
    this._content = content
    this._initialAppShell()
  }

  // ? init AppShell component
  _initialAppShell () {
    Drawer.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
    const skipLinkElement = document.querySelector('main-content') // ? get custom element
    const mainContent = document.querySelector('#mainContent')
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault()
      mainContent.scrollIntoView({ behavior: 'smooth' })
      skipLinkElement.blur()
    })
  }
}

export default App
