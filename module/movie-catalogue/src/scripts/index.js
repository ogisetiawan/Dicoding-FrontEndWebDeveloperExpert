// ? entry point
import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

// ? listener url has changed
window.addEventListener('hashchange', () => {
  app.renderPage()
})

// ? when load
window.addEventListener('load', () => {
  app.renderPage()
})
