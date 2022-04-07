import express from 'express';

import multer from 'multer';

import { handleFile } from '../controllers/userController.js';

const upload = multer();

const userRouter = express.Router();

userRouter.post('/fileanalyse', upload.single('file'), handleFile);

export default userRouter;
