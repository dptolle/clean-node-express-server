"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// core
// npm
const mongoose = require("mongoose");
const aspects_1 = require("./../../../../aspects");
const schemas_1 = require("./schemas");
class MongooseDataStore {
    initialize(connecionString) {
        mongoose.connect(connecionString);
        const db = mongoose.connection;
        db.on('error', aspects_1.logger.error.bind(aspects_1.logger, 'mongo db error: could not connect to epilab database'));
        db.once('open', () => {
            aspects_1.logger.info('mongoose.js: mongo db: connected to epilab');
        });
    }
}
exports.MongooseDataStore = MongooseDataStore;
exports.TaskSchema = mongoose.model('Task', schemas_1.taskSchema);
//# sourceMappingURL=mongoose.dataStore.js.map