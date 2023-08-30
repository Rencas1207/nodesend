import { Router } from 'express';
import { uploadFile, deleteFile } from '../controllers/filesController.js';
import checkAuth from '../middleware/checkAuth.js'

const router = Router();

router.post('/', checkAuth, uploadFile);

export default router;