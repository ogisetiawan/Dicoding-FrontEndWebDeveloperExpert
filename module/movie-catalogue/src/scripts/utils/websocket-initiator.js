import NotificationHelper from './notification-helper'
import CONFIG from '../globals/config'

const WebSocketInitiator = {
  init (url) { // ? param url
    const webSocket = new WebSocket(url) // ? open instance class websocket
    webSocket.onmessage = this._onMessageHandler //  ? callback event
  },

  _onMessageHandler (message) { // ? selfMethod
    const movie = JSON.parse(message.data)
    // ? push notification with websocket
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`
      }
    })
  }
}

export default WebSocketInitiator
