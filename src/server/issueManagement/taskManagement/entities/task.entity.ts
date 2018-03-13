export interface ITask {
    dueDate: Date;
    done: boolean;
    title: string;
    priority: number;
}

class TaskEntity implements ITask {
    dueDate: Date;
    done: boolean;
    title: string;
    priority: number;
}

export function createTask(title: string): ITask {
    return {
        dueDate: new Date(),
        done: false,
        title: title,
        priority: 1
    }
}
