// core
// npm
import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
// local
import { DataStore } from '../data-store.factory';
import { logger } from './../../../../aspects';

import { issueSchema, IssueModel } from './schemas/issue.schema';

import { createRepository, RepositoryBase } from './mongoose.repository';

// tslint:disable-next-line
(mongoose as any).Promise = Promise;

export class MongooseDataStore implements DataStore {
    initialize(connecionString: string) {
        mongoose.connect(connecionString).then(
            db => {
                logger.info('Connected to DB', {
                    connectionString: connecionString
                });
                return db;
            },
            err => {
                throw new Error(
                    `Unable to connect to DB. connectionString=${connecionString} error=${err}`
                );
            }
        );
        return this;
    }

    close() {
        mongoose.connection
            .close()
            .then(() => {
                logger.info('Successfully closed DB');
            })
            .catch(err => {
                throw new Error(`Unable to close DB. error=${err}`);
            });
    }

    drop(collection: string) {
        const drop = mongoose.connection.collection(collection).drop();
        if (drop) {
            drop.catch(err => {
                throw new Error(`Unable to close DB. error=${err}`);
            });
        }
    }
}

export const IssueSchema = mongoose.model<IssueModel>('Issue', issueSchema);

export function mapCollectionToRepository(
    collection: string
): RepositoryBase<mongoose.Document> {
    switch (collection) {
        case 'issues':
            return createRepository(IssueSchema);
        default:
            throw new Error(`Collection not found. collection=${collection}`);
    }
}
