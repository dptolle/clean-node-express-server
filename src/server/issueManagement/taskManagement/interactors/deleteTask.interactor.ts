import { logger } from '../../../../aspects';
import { getRepository, RepositoryType } from '../../../core';

async function deleteTask(): Promise<{}> {

    try {
        return {};
    } catch (err) {
        logger.error('Unable to reset password. Reason: ', err);
        return {};
    }
}

export {
    deleteTask
};
