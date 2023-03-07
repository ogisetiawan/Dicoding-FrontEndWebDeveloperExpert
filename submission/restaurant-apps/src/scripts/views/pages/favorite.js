const Favorite = {
  async render () {
    const hero = document.querySelector('.hero')
    hero.style.display = 'flex'
    return `
      <section class="content">
        <div class="explore">
         <h1 class="explore__label">Your Favorite Restaurant</h1>
          <input id="query" type="text" class="input-resto" aria-label="search restaurant here" placeholder="Search restaurant ..">
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      </section>
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
  }
}

export default Favorite
