"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entities_1 = require("./../../../server/issueManagement/taskManagement/entities");
function mapModelToTask(model) {
    return entities_1.createTask(model.title);
}
exports.mapModelToTask = mapModelToTask;
//# sourceMappingURL=dataMappers.js.map