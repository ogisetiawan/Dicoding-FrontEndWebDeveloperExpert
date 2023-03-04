/* eslint-disable no-tabs */
import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Main from './views/main.js'

// ? init component
const main = new Main({
  hamburger: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent')
})

import('./data/DATA.json').then(({ default: data }) => {
  let restorantList = ''
  data.restaurants.forEach(function (restorant) {
    restorantList += `
        <article class="restaurant-item">
			<a href="#">
				<img src="${restorant.pictureId}" class="posts-item__thumbnail ls-is-cached lazyloaded" data-src="${restorant.pictureId}" alt="${restorant.name}">
			</a>
			<div class="city">
				<span>${restorant.city}</span>
			</div>
			<div class="posts-item__content">
				<p class="posts-item__date">Rating <span class="posts-item__date__author">${restorant.rating}</span></p>
				<h2 class="restaurant__name"><a href="#">${restorant.name}</a></h2>
				<p class="posts-item__description">${restorant.description}</p>
			</div>
		</article>`
  })
  document.querySelector('#restaurants').innerHTML = restorantList
})

document.addEventListener('DOMContentLoaded', main)
