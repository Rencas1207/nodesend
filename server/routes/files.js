import { Router } from 'express';
import { uploadFile, deleteFile } from '../controllers/filesController.js';
// import { check } from 'express-validator'
import checkAuth from '../middleware/checkAuth.js'

import multer from 'multer';

const router = Router();

// file upload
const upload = multer({ dest: './uploads/' });

router.post('/', upload.single('file'), uploadFile);
router.get('/:id', deleteFile);
export default router;