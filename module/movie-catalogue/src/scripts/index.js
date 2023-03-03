// ? entry point
import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register' // ? call service worker
import WebSocketInitiator from './utils/websocket-initiator'
import FooterToolsInitiator from './utils/footer-tools-initiator'
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
// ? agar proses registrasi service worker selesai diproses sebelum menjalankan kode program berikutnya
window.addEventListener('load', async () => {
  app.renderPage()
  await swRegister() // ? register sw ketika load pertama kali
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER) // ? init websocket

  FooterToolsInitiator.init({
    subscribeButton: document.querySelector('#subscribePushNotification'),
    unsubscribeButton: document.querySelector('#unsubscribePushNotification')
  })
})
