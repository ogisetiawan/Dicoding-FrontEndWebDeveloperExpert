/* eslint-disable no-tabs */
import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
  <a href="/#/detail/${restaurant.id}">
    <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" class="posts-item__thumbnail ls-is-cached lazyloaded" data-src="${restaurant.pictureId}" alt="${restaurant.name}">
  </a>
  <div class="city">
 			<span>${restaurant.city}</span>
 		</div>
 		<div class="posts-item__content">
 			<p class="posts-item__date">Rating <span class="posts-item__date__author">${restaurant.rating}</span></p>
 			<h2 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
 			<p class="posts-item__description">${restaurant.description}</p>
 		</div>
 	</article>
`
const createRestaurantDetailTemplate = (restaurant, categories, foods, drinks, reviews) => `
  <div class="explore">
    <h1 class="explore__label">${restaurant.restaurant.name}</h1>
  </div>
  <div class="restaurant__content">
    <div class="restaurant__thumbnail">
        <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
    </div>
    <div class="restaurant__detail">
        <h4>City</h4>
        ${restaurant.restaurant.city}
        <h4>Address</h4>
        <p>${restaurant.restaurant.address}</p>
        <h4>Category</h4>
        ${categories}
        <h4>Rating</h4>
        ${restaurant.restaurant.rating}
    </div>
  </div>
  <hr>  
  <div class="restaurant__overview">
      <h3 class="heading">Overview</h3>
      <p>${restaurant.restaurant.description}</p>
  </div>
  <hr>
  <h3 class="restaurant__menu heading">Menu in Restaurant</h3>
      <div class="restaurant__menus">
        <div class="restaurant__foods">
          <h4>Foods</h4>
          ${foods}
        </div>
        <div class="restaurant__drinks">
          <h4>Drinks</h4>
          ${drinks}
        </div>
    </div>
  <hr>
  <h3 class="reviews heading">Customer's Review</h3>
  <div class="reviews__content">
      ${reviews}
  </div>
  <div class="restaurant__reviews">
      <h3 class="restaurant__reviews">Add Review</h3>
      <div class="review__input">
        <div class="form-group">
          <label for="enterName">Enter your name :</label>
          <input id="enterName" type="text" class="input" aria-label="Enter your name here" placeholder="Enter your name here" required>
        </div>
        <div class="form-group">
          <label for="enterReview">Enter your review :</label>
          <textarea id="enterReview" class="text-area" aria-label="Enter your review here" placeholder="Enter your review here..." required></textarea>
        </div>
        <button id="btnSubmit" class="btnSubmit">Submit</button>
      </div>    
  </div>
`

// ? component like button
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
