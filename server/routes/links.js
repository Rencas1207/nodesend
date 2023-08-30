import express from 'express'
import { getLink, newLink } from '../controllers/linksController.js';
import { check } from 'express-validator'
import { deleteFile } from '../controllers/filesController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/', [
   check('name', 'Sube un archivo').not().isEmpty(),
   check('original_name', 'Sube un archivo').not().isEmpty()
], checkAuth, newLink);

router.get('/:url', getLink, deleteFile);

export default router;