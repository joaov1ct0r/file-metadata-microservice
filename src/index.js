import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import userRouter from './routes/userRoutes.js';

const app = express();

app.use(cors());

app.use('/api', userRouter);
