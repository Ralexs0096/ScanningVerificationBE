import UserRoute from './users.route';
import AreaRoute from './areas.route';
import VerificationRoute from './verification.route';
import { Router } from 'express';

const routes: Array<{
  path: string;
  route: Router;
}> = [
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
];

export default routes;
