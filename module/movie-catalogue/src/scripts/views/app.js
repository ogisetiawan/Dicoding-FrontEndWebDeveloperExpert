// ? dbuat untuk init App Shell (component UI)
import DrawerInitiator from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  // ? Constructor hanya bertugas untuk menginisiasikan nilai properti berdasarkan parameter yang dimasukan saja
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._initialAppShell()
  }

  // ? method untuk initialize component AppShell (drawer)
  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
    // kita bisa menginisiasikan komponen lain bila ada
  }

  // ? untuk me-render halaman berdasarkan URL yang aktif
  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render() // ? what changed?
    await page.afterRender() // ? request
  }
}

export default App
