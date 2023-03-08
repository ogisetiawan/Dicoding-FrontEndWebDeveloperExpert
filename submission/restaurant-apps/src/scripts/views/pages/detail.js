import UrlParser from '../../routes/url-parser' // ? call url segment
import RestaurantSource from '../../data/restaurant-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
// import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    const hero = document.querySelector('.hero')
    hero.style.display = 'none'
    return `
      <section class="content">
        <div class="loader"></div>
        <div class="post"></div>
        <div class="explore">
          <h1 class="explore__label errorMessage">Internet connection appears to be offline</h1>
        </div>
      </section>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await RestaurantSource.restaurantDetail(url.id)
    if (detail.length === 0) {
      document.querySelector('.errorMessage').style.display = 'block'
    } else {
      document.querySelector('.errorMessage').style.display = 'none'
    }
    let categories = ''
    let foods = ''
    let drinks = ''
    let reviews = ''
    detail.restaurant.categories.forEach((category) => {
      categories += `
        ${category.name}
      `
    })
    detail.restaurant.menus.foods.forEach((food) => {
      foods += `
        <p class="restaurant__foods-item">${food.name}</p>
      `
    })
    detail.restaurant.menus.drinks.forEach((drink) => {
      drinks += `
        <p class="restaurant__drinks-item">${drink.name}</p>
      `
    })
    detail.restaurant.customerReviews.forEach((review) => {
      reviews += `
      <div class="reviews-item">
        <div class="reviews-item__content">
          <h4 class="reviewer__name">${review.name}</h4>
          <p class="review__text">"${review.review}"</p>
          <p class="reviews-item__date">${review.date}</p>
        </div>
      </div>
      `
    })
    const detailContainer = document.querySelector('.post')
    detailContainer.innerHTML = createRestaurantDetailTemplate(
      detail,
      categories,
      foods,
      drinks,
      reviews
    )
    const enterName = document.querySelector('#enterName')
    const enterReview = document.querySelector('#enterReview')
    const btnSubmit = document.querySelector('.btnSubmit')

    // ? review
    btnSubmit.addEventListener('click', () => {
      const reviewJson = {
        id: url.id,
        name: enterName.value,
        review: enterReview.value
      }
      if (reviewJson.name === '' || reviewJson.review === '') {
        return null
      } else {
        RestaurantSource.review(reviewJson)
        location.reload()
      }
    })

    // // ? buttonLike
    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restoerant: {
    //     id: detail.id,
    //     name: detail.name,
    //     description: detail.description,
    //     city: detail.city,
    //     address: detail.address,
    //     pictureId: detail.pictureId,
    //     rating: detail.rating
    //   }
    // })
  }
}

export default Detail
