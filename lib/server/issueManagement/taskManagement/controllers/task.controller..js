"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const interactors_1 = require("./../interactors");
function getTasks(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const tasks = yield interactors_1.retrieveTasks();
        const dto = fromTasksToDTO(tasks);
        return res
            .status(200)
            .json(dto)
            .end();
    });
}
exports.getTasks = getTasks;
function fromTasksToDTO(tasks) {
    return {};
}
//# sourceMappingURL=task.controller..js.map