import { Router } from 'express';
import { authenticateUser, authenticatedUser } from '../controllers/authController.js';
import { check } from 'express-validator'

const router = Router();
router.post('/', authenticateUser);
router.get('/', authenticatedUser);

export default router;