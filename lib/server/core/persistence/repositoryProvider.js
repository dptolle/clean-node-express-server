"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("./../../../peripherals/persistence/repositories");
const __1 = require("..");
var RepositoryType;
(function (RepositoryType) {
    RepositoryType[RepositoryType["TASK"] = 0] = "TASK";
})(RepositoryType = exports.RepositoryType || (exports.RepositoryType = {}));
// TODO: Fix this any: Proper use of Generics?
// tslint:disable-next-line
function getRepository(type) {
    switch (type) {
        case RepositoryType.TASK:
            return repositories_1.taskRepository;
        default:
            throw new __1.ServerError(`Repository of type ${type} does not exist.`);
    }
}
exports.getRepository = getRepository;
//# sourceMappingURL=repositoryProvider.js.map