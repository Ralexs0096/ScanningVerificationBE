import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/users.controller';

const router = Router();

router.get('/', getAllUsers);
router.get('/:userId', getUserById);

export default router;
