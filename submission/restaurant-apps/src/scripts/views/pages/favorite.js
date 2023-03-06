const Favorite = {
  async render () {
    // return `
    // <section class="content">
    //   <div class="explore">
    //     <h1 class="explore__label">Favorite Restaurant</h1>
    //   </div>
    //   <div class="restaurants" id="fav-restaurants">
    //   </div>
    // </section>
    // `
    const hero = document.querySelector('.hero')
    hero.style.display = 'flex'
    return `
      <section class="content">
        <div class="explore">
         <h1 class="explore__label">Your Favoritef Restaurant</h1>
          <input id="query" type="text" class="input-resto" aria-label="search restaurant here" placeholder="Search Restaurant...">
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
