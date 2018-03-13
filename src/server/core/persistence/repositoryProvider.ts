import { taskRepository } from './../../../peripherals/persistence/repositories';
import { logger } from '../../../aspects';
import { ServerError } from '..';
import { IEntityRepository } from '../code.gateways';

export enum RepositoryType {
    TASK
}

// TODO: Fix this any: Proper use of Generics?
// tslint:disable-next-line
function getRepository<T extends IEntityRepository>(type: RepositoryType): any {
    switch (type) {
        case RepositoryType.TASK:
            return taskRepository;
        default:
            throw new ServerError(`Repository of type ${type} does not exist.`);
    }
}

export {
    getRepository
};
