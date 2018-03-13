import { logger } from '../../../../aspects';
import { getRepository, RepositoryType, ServerError } from '../../../core';
import { ITask, ITaskRepository } from '..';

async function retrieveTasks(): Promise<ITask[]> {

    try {
        const taskRepository: ITaskRepository = getRepository(RepositoryType.TASK);
        return [];
    } catch (err) {
        logger.error('Unable to recover password. Reason: ', err);
        throw new ServerError();
    }
}

export {
    retrieveTasks
};
