import { createTask } from './../../../server/issueManagement/taskManagement/entities';
import { logger } from './../../../aspects';
import { ITaskModel } from '../dataStore';
import { ITask } from '../../../server/issueManagement/taskManagement';

function mapModelToTask(model: ITaskModel): ITask {
    return createTask(model.title);
}

export {
    mapModelToTask
};
