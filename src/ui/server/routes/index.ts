import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { getRouter as getV1Router } from './v1';
import { logger } from '../../../aspects';
import { RequestHandler } from 'express-unless';

const API_VERSION = 'v1';

function init(server: express.Express, validationFunction: RequestHandler) {
    const apiRoute = express.Router();
    logger.verbose('Registering Route', { route: '/' + API_VERSION });
    apiRoute.use(validationFunction);
    apiRoute.use(
        '/' + API_VERSION,
        getV1Router(server.get('controllerFactory'))
    );
    logger.verbose('Registering Route', { route: '/api' });
    server.use('/api', apiRoute);

    try {
        logger.verbose('Registering Route', { route: '/api-docs' });
        const swaggerOptions = {
            swaggerUrl: '/api/' + API_VERSION
        };
        server.use(
            '/api-docs/' + API_VERSION,
            swaggerUi.serve,
            swaggerUi.setup(null, swaggerOptions)
        );
    } catch (error) {
        logger.warn(`Unable to load api-doc. error=${error}`);
    }
    // TODO: Also GET the definition file
    logger.info('Finished initalising server routes');
}

export const routes = {
    init
};
