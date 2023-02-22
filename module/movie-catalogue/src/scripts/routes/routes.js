import NowPlaying from '../views/pages/now-playing'
import Upcoming from '../views/pages/upcoming'
import Detail from '../views/pages/detail'

// ? routes url
const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail
}

export default routes
