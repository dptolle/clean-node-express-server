"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const issueManagement_1 = require("./../../issueManagement");
exports.router = express.Router();
exports.router.use('/task', issueManagement_1.taskRouter);
//# sourceMappingURL=index.js.map