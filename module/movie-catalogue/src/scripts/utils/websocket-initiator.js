const WebSocketInitiator = {
  init (url) { // ? param url
    const webSocket = new WebSocket(url) // ? open instance class websocket
    webSocket.onmessage = this._onMessageHandler //  ? callback event
  },

  _onMessageHandler (message) { // ? selfMethod
    console.log(message.data)
    console.log(JSON.parse(message.data))
  }

}

export default WebSocketInitiator
