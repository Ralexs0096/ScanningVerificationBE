import UserRoute from './users.route.js'
import AreaRoute from './areas.route.js';
import VerificationRoute from './verification.route.js';

const routes = [
  {
    path: '/user',
    route: UserRoute
  },
  {
    path: '/area',
    route: AreaRoute
  },
  {
    path: '/verification',
    route: VerificationRoute
  }
]

export default routes
