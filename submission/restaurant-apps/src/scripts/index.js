import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './views/app'

// ? init component
const app = new App({
  hamburger: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', async () => {
  app.renderPage()
})
