import { Router } from 'express';
import { getAllAreas } from '../controllers/area.controller';

const router = Router();

router.get('/', getAllAreas);

export default router;
