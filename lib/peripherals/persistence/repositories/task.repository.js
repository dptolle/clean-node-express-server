"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./../../../server/core");
const aspects_1 = require("./../../../aspects");
const dataStore_1 = require("./../dataStore");
const dataMappers_1 = require("./dataMappers");
const __1 = require("./..");
class TaskRepository {
    constructor(baseRepo) {
        this.baseRepo = baseRepo;
    }
    retrieve() {
        return this.baseRepo.retrieve().then((models) => {
            if (!models) {
                aspects_1.logger.error('Task not found');
                throw new core_1.ServerError('Task not found');
            }
            return models.map(m => dataMappers_1.mapModelToTask(m));
        });
    }
}
exports.repository = new TaskRepository(__1.createRepository(dataStore_1.TaskSchema));
//# sourceMappingURL=task.repository.js.map