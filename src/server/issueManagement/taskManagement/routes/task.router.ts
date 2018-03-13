import * as express from 'express';
import { getTasks } from './../controllers';

export const router = express.Router();

router.route('/')
    .get(getTasks);
