import { logger } from '../../../../aspects';
import { getRepository, RepositoryType } from '../../../core';
import { ITaskRepository } from '..';

async function addNewTask(): Promise<{}> {

    try {
        const taskRepository: ITaskRepository = getRepository(RepositoryType.TASK);
        return {};
    } catch (err) {
        logger.error('Unable to recover password. Reason: ', err);
        return {};
    }
}

export {
    addNewTask
};
