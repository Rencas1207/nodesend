import { Router } from 'express';
import { newUser } from '../controllers/userController.js';

const router = Router();
router.post('/', newUser);

export default router;