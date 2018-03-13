
import { MongooseDataStore } from './mongoose';
import { logger } from './../../../aspects';
import { ServerError } from '../../../server/core';

export interface IDataStore {
    initialize(connectionString: string): void;
}

export enum DataStoreType {
    MONGO = 'MongoDB'
}

function createDataStore(type: DataStoreType): IDataStore {
    logger.info('Creating datastore of type: ', type);
    switch (type) {
        case DataStoreType.MONGO:
            return new MongooseDataStore();
        default:
            throw new ServerError('Unknown DataStore Type');
    }

}

export {
    createDataStore
};
