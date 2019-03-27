import { ServiceFactory } from '../../../../app/ports';

import { Controller } from '../../model/controler.model';

import {
    createController as createIssueController,
    IssueController
} from '../../controllers/issue.controller';
import {
    createController as createSystemInfoController,
    SystemInfoController
} from '../../controllers/system-info.controller';

export interface ControllerFactory {
    // tslint:disable-next-line
    getController(controllerName: string): any;
}

class DefaultControllerFactory implements ControllerFactory {
    private issuesController: IssueController;
    private systemInfoController: SystemInfoController;

    constructor(private serviceFactory: ServiceFactory) {
        this.issuesController = createIssueController(
            this.serviceFactory.getService('ISSUE')
        );
        this.systemInfoController = createSystemInfoController();
    }

    getController(controller: string): Controller {
        switch (controller) {
            case 'ISSUE':
                return this.issuesController;
            case 'SYSTEM_INFO':
                return this.systemInfoController;
            default:
                throw new Error(`Unknown controller, controller=${controller}`);
        }
    }
}

function createFactory(serviceFactory: ServiceFactory): ControllerFactory {
    return new DefaultControllerFactory(serviceFactory);
}

export { createFactory };
