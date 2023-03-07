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
      <div class="restaurant__left">
        <p><span class="font-weight"><i class="fa fa-building"></i> City :</span> ${restaurant.restaurant.city}</p>
        <p><span class="font-weight"><i class="fa fa-map"></i> Address : </span>${restaurant.restaurant.address}</p>
      </div>
      <div class="restaurant__right">
          <p><span class="font-weight"><i class="fa fa-tag"></i> Category : </span>${categories}</p>
          <p><span class="font-weight"><i class="fa fa-star"></i> Rating : </span>${restaurant.restaurant.rating}</p>
      </div>
    </div>
  </div>
  <hr>  
  <div class="restaurant__overview">
      <div class="explore">
        <h1 class="explore__label">Description</h1>
      </div>
      <p>${restaurant.restaurant.description}</p>
  </div>
  <hr>
      <div class="explore">
        <h1 class="explore__label">Menu</h1>
      </div>
      <div class="restaurant__menus">
        <div class="restaurant__foods">
          <h4><i class="fa fa-burger"></i> Foods</h4>
          ${foods}
        </div>
        <div class="restaurant__drinks">
          <h4><i class="fa fa-mug-hot"></i> Drinks</h4>
          ${drinks}
        </div>
    </div>
  <hr>
  <div class="explore">
    <h1 class="explore__label">Review</h1>
  </div>
  <div class="reviews__content">
      ${reviews}
  </div>
  <div class="restaurant__reviews">
      <div class="explore">
        <h1 class="explore__label">Add Review</h1>
      </div>
      <div class="review__input">
        <div class="form-group">
          <input id="enterName" type="text" class="input" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <textarea id="enterReview" class="text-area" placeholder="Your Review" required></textarea>
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
