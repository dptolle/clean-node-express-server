"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.taskSchema = new mongoose_1.Schema({
    dueDate: {
        type: Date
    },
    done: {
        type: Boolean
    },
    title: {
        type: String,
        required: true
    },
    priority: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now,
        required: true
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
        let now = new Date();
        if (!doc.created) {
            doc.created = now;
        }
        doc.updated = now;
    }
    next();
    return this;
});
//# sourceMappingURL=task.schema.js.map