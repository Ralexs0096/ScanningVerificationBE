import { Router } from 'express';
import { verifyCodesByArea } from '../controllers/verification.controller';

const router = Router();

router.post('/', verifyCodesByArea);

export default router;
