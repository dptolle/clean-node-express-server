import * as express from 'express';
import { taskRouter } from './../../issueManagement';

export const router = express.Router();

router.use('/task', taskRouter);
