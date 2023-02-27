import UrlParser from '../../routes/url-parser' // ? call url segment
import TheMovieDbSource from '../../data/themoviedb-source'
import { createMovieDetailTemplate } from '../templates/template-creator' // ? component UI
import LikeButtonInitiator from '../../utils/like-button-initiator' // ? event operation DB

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const movie = await TheMovieDbSource.detailMovie(url.id) // ? call source
    const movieContainer = document.querySelector('#movie')
    movieContainer.innerHTML = createMovieDetailTemplate(movie)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average
      }
    })
  }
}

export default Detail
