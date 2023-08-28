import express from 'express'
import { newLink } from '../controllers/linksController.js';
import { check } from 'express-validator'
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', [
   check('name', 'Sube un archivo').not().isEmpty(),
   check('original_name', 'Sube un archivo').not().isEmpty()
], checkAuth, newLink);

export default router;