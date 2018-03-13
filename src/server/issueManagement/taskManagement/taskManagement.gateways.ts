import { ITask } from './entities';
import { IEntityRepository } from '../../core/code.gateways';

export interface ITaskRepository extends IEntityRepository {
    retrieve(): Promise<ITask[]>;
}
