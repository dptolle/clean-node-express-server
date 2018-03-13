"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const v1_1 = require("./v1");
exports.apiRoute = express.Router();
exports.apiRoute.use('/v1', v1_1.router);
function init(server) {
    server.use('/api', exports.apiRoute);
}
exports.routes = {
    init
};
//# sourceMappingURL=index.js.map