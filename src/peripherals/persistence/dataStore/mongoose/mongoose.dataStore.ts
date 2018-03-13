// core
// npm
import * as mongoose from 'mongoose';

// local
import { IDataStore } from './../dataStoreFactory';
import { logger } from './../../../../aspects';

import { taskSchema, ITaskModel } from './schemas';

export class MongooseDataStore implements IDataStore {
    initialize(connecionString: string) {
        mongoose.connect(connecionString);

        const db = mongoose.connection;
        db.on('error', logger.error.bind(logger, 'mongo db error: could not connect to epilab database'));
        db.once('open', () => {
            logger.info('mongoose.js: mongo db: connected to epilab');
        });
    }
}

export const TaskSchema = mongoose.model<ITaskModel>('Task', taskSchema);
