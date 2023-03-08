import { createRestaurantItemTemplate } from '../../templates/template-creator'

class FavoriteRestaurantSearchView {
  getTemplate () {
    return `
       <section class="content">
       <div class="explore">
       <input id="query" type="text">
         <h1 class="explore__label">Your Favorite Restaurant</h1>
          <input id="query" type="text" class="input-resto" aria-label="search restaurant here" placeholder="Search restaurant ..">
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      </section>
       `
  }

  runWhenUserIsSearching (callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value)
    })
  }

  showFavoriteRestaurants (restaurants = []) {
    let html
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '')
    } else {
      html = this._getEmptyRestaurantTemplate()
    }
    document.getElementById('restaurants').innerHTML = html

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'))
  }

  _getEmptyRestaurantTemplate () {
    return '<div class="restaurant-item__not__found">Restaurant not found</div>'
  }
}

export default FavoriteRestaurantSearchView
