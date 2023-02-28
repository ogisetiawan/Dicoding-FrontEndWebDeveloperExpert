// ? entry point
import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register' // ? call service worker
import WebSocketInitiator from './utils/websocket-initiator'
import CONFIG from './globals/config'

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
  swRegister() // ? register sw ketika load pertama kali
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER) // ? init websocket
})
