import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore__label">Explore Restaurant</h1>
      </div>
      <div class="restaurants" id="restaurants">
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.restaurantList()
    const restaurantContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
