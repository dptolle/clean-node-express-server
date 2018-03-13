
import { Request, Response, NextFunction } from 'express';
import { retrieveTasks } from './../interactors';
import { ITask } from '..';

export interface ITaskResponseDTO { }

export async function getTasks(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    const tasks: ITask[] = await retrieveTasks();

    const dto = fromTasksToDTO(tasks);
    return res
        .status(200)
        .json(dto)
        .end();
}

function fromTasksToDTO(tasks: ITask[]): ITaskResponseDTO {
    return {};
}
