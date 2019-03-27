import * as express from 'express';
import * as path from 'path';
import * as rootDir from 'app-root-dir';
import { getRouter as getInstitutionsRouter } from './institution.route';
import { getRouter as getUtilRouter } from './util';
import { ControllerFactory } from '../../core/factories/controllerFactory';
import { logger } from '../../../../aspects';

function getRouter(controllerFactory: ControllerFactory) {
    const router = express.Router();
    router.use(
        '/',
        express.static(
            path.join(rootDir.get(), 'lib/ui/server/doc/swagger_v1.json')
        )
    );
    logger.verbose('Registering Route', { route: '/institute' });
    router.use('/institute', getInstitutionsRouter(controllerFactory));
    logger.verbose('Registering Route', { route: '/util' });
    router.use('/util', getUtilRouter(controllerFactory));
    return router;
}

export { getRouter };
