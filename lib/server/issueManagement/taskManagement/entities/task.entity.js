"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskEntity {
}
function createTask(title) {
    return {
        dueDate: new Date(),
        done: false,
        title: title,
        priority: 1
    };
}
exports.createTask = createTask;
//# sourceMappingURL=task.entity.js.map