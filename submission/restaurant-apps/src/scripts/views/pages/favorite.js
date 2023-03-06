const Favorite = {
  async render () {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore__label">Favorite Restaurant</h1>
      </div>
      <div class="restaurants" id="fav-restaurants">
      </div>
    </section>
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
  }
}

export default Favorite
