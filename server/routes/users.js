import { Router } from 'express';
import { newUser } from '../controllers/userController.js';
import { check } from 'express-validator'

const router = Router();
router.post('/', [
   check('name', 'El nombre es obligatorio').not().isEmpty(),
   check('email', 'Agrega un email válido').isEmail(),
   check('password', 'El password debe ser de al menos 6 caracteres').isLength({ min: 6 }),

], newUser);

export default router;