import * as moment from 'moment';
import { createTask } from './../task.entity';

describe('Task', () => {

    it('should create Task with title', () => {
        const task = createTask('TEST');
        expect(task.title).toBe('TEST');
    });
});
