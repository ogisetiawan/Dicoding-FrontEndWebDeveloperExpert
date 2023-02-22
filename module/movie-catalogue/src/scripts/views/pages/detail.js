import UrlParser from '../../routes/url-parser' // ? call url segment
import TheMovieDbSource from '../../data/themoviedb-source'
import { createMovieDetailTemplate } from '../templates/template-creator' // ? component UI

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movie = await TheMovieDbSource.detailMovie(url.id) // ? call source
    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML = createMovieDetailTemplate(movie)
  }
}

export default Detail
