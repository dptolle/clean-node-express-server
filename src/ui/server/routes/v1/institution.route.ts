import * as express from 'express';
import { ControllerFactory } from '../../core/factories/controllerFactory';

function getRouter(controllerFactory: ControllerFactory) {
    const router = express.Router();
    const controller = controllerFactory.getController('ISSUE');

    router.route('/').get(controller.listIssues.bind(controller));
    return router;
}

export { getRouter };
