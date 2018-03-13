"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./mongoose");
const aspects_1 = require("./../../../aspects");
const core_1 = require("../../../server/core");
var DataStoreType;
(function (DataStoreType) {
    DataStoreType["MONGO"] = "MongoDB";
})(DataStoreType = exports.DataStoreType || (exports.DataStoreType = {}));
function createDataStore(type) {
    aspects_1.logger.info('Creating datastore of type: ', type);
    switch (type) {
        case DataStoreType.MONGO:
            return new mongoose_1.MongooseDataStore();
        default:
            throw new core_1.ServerError('Unknown DataStore Type');
    }
}
exports.createDataStore = createDataStore;
//# sourceMappingURL=dataStoreFactory.js.map