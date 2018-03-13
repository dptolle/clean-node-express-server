import { IRepositoryBase, ServerError } from './../../../server/core';
import { createTask, ITask } from './../../../server/issueManagement/taskManagement';
import { logger } from './../../../aspects';
import { TaskSchema, ITaskModel } from './../dataStore';
import { ITaskRepository } from './../../../server/issueManagement/taskManagement/taskManagement.gateways';
import { mapModelToTask } from './dataMappers';
import { createRepository } from './..';

class TaskRepository implements ITaskRepository {
    constructor(private baseRepo: IRepositoryBase<ITaskModel>) {
    }

    retrieve() {
        return this.baseRepo.retrieve().then(
            (models: ITaskModel[]) => {
                if (!models) {
                    logger.error('Task not found');
                    throw new ServerError('Task not found');
                }
                return models.map(m => mapModelToTask(m));
            }
        );
    }
}

export const repository: ITaskRepository = new TaskRepository(createRepository(TaskSchema));
