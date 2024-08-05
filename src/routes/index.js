import UserRoute from './users.route.js'
import AreaRoute from './areas.route.js';

const routes = [
  {
    path: '/user',
    route: UserRoute
  },
  {
    path: '/area',
    route: AreaRoute
  },
]

export default routes
