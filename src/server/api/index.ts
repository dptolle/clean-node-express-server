import * as express from 'express';
import { router as v1 } from './v1';

export const apiRoute = express.Router();

apiRoute.use('/v1', v1);

function init(server: express.Express) {
    server.use('/api', apiRoute);
}

export const routes = {
    init
};
