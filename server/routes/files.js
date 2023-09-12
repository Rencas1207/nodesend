import { Router } from 'express';
import { uploadFile, deleteFile, download } from '../controllers/filesController.js';
import checkAuth from '../middleware/checkAuth.js'

const router = Router();

router.post('/', checkAuth, uploadFile);

router.get('/:file', download);

export default router;