"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_entity_1 = require("./../task.entity");
describe('Task', () => {
    it('should create Task with title', () => {
        const task = task_entity_1.createTask('TEST');
        expect(task.title).toBe('TEST');
    });
});
//# sourceMappingURL=task.spec.js.map