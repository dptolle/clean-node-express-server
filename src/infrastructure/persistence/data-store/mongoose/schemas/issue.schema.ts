import { Schema, Document } from 'mongoose';

export interface IssueModel extends Document {
    created: Date;
    updated: Date;
    uniqueId: string;
    name: string;
}

export const issueSchema = new Schema({
    uniqueId: {
        type: String,
        required: true
    },
    name: {
        type: String
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
}).pre('save', function(next) {
    if (this) {
        let doc = this as IssueModel;
        let now = new Date();
        if (!doc.created) {
            doc.created = now;
        }
        doc.updated = now;
    }
    next();
});
