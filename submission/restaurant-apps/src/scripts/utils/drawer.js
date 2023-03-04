const Drawer = {
  init ({ hamburger, drawer, hero, content }) {
    hamburger.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    // ? close drawer when outside click navbar
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  // ? event
  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  }
}

export default Drawer
