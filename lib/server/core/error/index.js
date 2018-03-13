"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    // tslint:disable-next-line
    constructor(...args) {
        // Calling parent constructor of base Error class.
        super(...args);
        // Saving class name in the property of our custom error as a shortcut.
        this.name = this.constructor.name;
        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=index.js.map