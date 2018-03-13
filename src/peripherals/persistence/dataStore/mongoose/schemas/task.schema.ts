import { Schema, Document } from 'mongoose';
import { ITask } from '../../../../../server/issueManagement/taskManagement';

export interface ITaskModel extends Document, ITask {
    created: Date;
    updated: Date;
}

export const taskSchema = new Schema({
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
        let doc = this._doc as ITaskModel;
        let now = new Date();
        if (!doc.created) {
            doc.created = now;
        }
        doc.updated = now;
    }
    next();
    return this;
});
