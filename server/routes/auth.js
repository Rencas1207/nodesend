import { Router } from 'express';
import { authenticateUser, authenticatedUser } from '../controllers/authController.js';
import { check } from 'express-validator'
import checkAuth from '../middleware/checkAuth.js'

const router = Router();
router.post('/', [
   check('email', 'Agrega un email válido').isEmail(),
   check('password', 'El password no puede ir vacío').not().isEmpty(),
], authenticateUser);
router.get('/', checkAuth, authenticatedUser);

export default router;