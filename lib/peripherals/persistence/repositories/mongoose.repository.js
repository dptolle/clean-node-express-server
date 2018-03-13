"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class MongooseRepositoryBase {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item) {
        return this._model.create(item);
    }
    retrieve() {
        return this._model.find({}).exec();
    }
    update(_id, attr) {
        return this._model.update({ _id: this.toObjectId(_id) }, Object.assign({}, attr, { updated: Date.now() })).exec();
    }
    delete(_id) {
        return this._model.remove({ _id: _id }).exec();
    }
    findById(_id) {
        return this._model.findById(_id).exec();
    }
    findOne(cond) {
        return this._model.findOne(cond).exec();
    }
    find(cond, fields, options) {
        return this._model.find(cond, options).exec();
    }
    toObjectId(_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    }
}
exports.MongooseRepositoryBase = MongooseRepositoryBase;
function createRepository(schema) {
    return new MongooseRepositoryBase(schema);
}
exports.createRepository = createRepository;
//# sourceMappingURL=mongoose.repository.js.map