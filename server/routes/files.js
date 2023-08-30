import { Router } from 'express';
import { uploadFile, deleteFile } from '../controllers/filesController.js';
import checkAuth from '../middleware/checkAuth.js'

const router = Router();

router.post('/', uploadFile);
router.get('/:id', deleteFile);
export default router;