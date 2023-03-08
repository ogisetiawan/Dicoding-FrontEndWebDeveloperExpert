import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import FavoriteRestaurantSearchView from './favorite/restaurant-search-view'
import FavoriteRestaurantShowPresenter from './favorite/restaurant-show-presenter'
import FavoriteRestaurantSearchPresenter from './favorite/restaurant-search-presenter'

const view = new FavoriteRestaurantSearchView()

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
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb })
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb })
  }
}

export default Favorite
