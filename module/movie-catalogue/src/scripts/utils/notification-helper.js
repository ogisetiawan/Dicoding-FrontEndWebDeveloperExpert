const NotificationHelper = {
  sendNotification ({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser')
      return
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission')
      this._requestPermission()
      return
    }

    this._showNotification({ title, options })
  },

  // ? check fitur notification is available
  _checkAvailability () {
    return 'Notification' in window
  },
  // ? check is already active permission
  _checkPermission () {
    return Notification.permission === 'granted'
  },
  // ? create requestPermsision to activated
  async _requestPermission () {
    const status = await Notification.requestPermission()

    if (status === 'denied') {
      console.log('Notification Denied')
    }

    if (status === 'default') {
      console.log('Permission closed')
    }
  },
  // ? show notif
  async _showNotification ({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready
    serviceWorkerRegistration.showNotification(title, options)
  }
}

export default NotificationHelper
