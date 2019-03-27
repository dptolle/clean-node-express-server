export {
    createRepository
} from './persistence/data-store/mongoose/mongoose.repository';
export {
    mapCollectionToRepository
} from './persistence/data-store/mongoose/mongoose';
export {
    createDataStore,
    DataStoreType,
    DataStore
} from './persistence/data-store/data-store.factory';

export {
    repository as issueRepository
} from './persistence/repositories/issue.repository';
