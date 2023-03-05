import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Favorite from '../views/pages/favorite'

// ? list routes/url
const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite
}

export default routes
