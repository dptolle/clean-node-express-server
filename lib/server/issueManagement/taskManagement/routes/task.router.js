"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("./../controllers");
exports.router = express.Router();
exports.router.route('/')
    .get(controllers_1.getTasks);
//# sourceMappingURL=task.router.js.map