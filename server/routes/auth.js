import { Router } from 'express';
import { authenticateUser, authenticatedUser } from '../controllers/authController.js';
import { check } from 'express-validator'

const router = Router();
router.post('/', [
   check('email', 'Agrega un email válido').isEmail(),
   check('password', 'El password no puede ir vacío').not().isEmpty(),
], authenticateUser);
router.get('/', authenticatedUser);

export default router;