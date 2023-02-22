import TheMovieDbSource from '../../data/themoviedb-source'
import { createMovieItemTemplate } from '../templates/template-creator' // ? component UI

const NowPlaying = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await TheMovieDbSource.nowPlayingMovies() // ? source from API
    const moviesContainer = document.querySelector('#movies') // ? init elem
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie) // ? passing to component UI
    })
  }
}

export default NowPlaying
