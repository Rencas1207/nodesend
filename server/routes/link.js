import { Router } from 'express';
import { newLink } from '../controllers/linksController.js';
import { check } from 'express-validator'
import { checkAuth } from '../middleware/auth.js'

const router = Router();

router.post('/', checkAuth, newLink)

export default router;