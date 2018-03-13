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
const aspects_1 = require("../../../../aspects");
function deleteTask() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return {};
        }
        catch (err) {
            aspects_1.logger.error('Unable to reset password. Reason: ', err);
            return {};
        }
    });
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=deleteTask.interactor.js.map