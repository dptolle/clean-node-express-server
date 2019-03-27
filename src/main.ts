// local
import {
    createApplication,
    createFactory as createControllerFactory
} from './ui/server/ports';
import {
    DataStoreType,
    createDataStore,
    issueRepository
} from './infrastructure/ports';
import {
    createFactory as createServiceFactory,
    ServerConfiguration,
    getConfigurationService,
    GeneralConfiguration,
    ApplicationSystemError,
    DataStoreConfiguration
} from './app/ports';
import { logger } from './aspects';

async function init() {
    const configurationService = getConfigurationService();
    const serverConfig: ServerConfiguration = configurationService.getServerConfiguration();
    const generalConfig: GeneralConfiguration = configurationService.getGeneralConfiguration();
    const dataStoreConfig: DataStoreConfiguration = configurationService.getDataStoreConfiguration();

    const primaryDataStore = createDataStore(DataStoreType.MONGO);
    primaryDataStore.initialize(dataStoreConfig.connectionString);

    const serviceFactory = createServiceFactory({
        issueRepository
    });

    const application = createApplication(
        serverConfig,
        generalConfig,
        createControllerFactory(serviceFactory)
    );
    application.startServer();

    process.on('uncaughtException', err => {
        logger.error(`Uncaught Exception. error=${err}`);
        process.exit(1);
    });
}

init().catch(error => {
    throw new ApplicationSystemError(
        `Unable to initialise application. error=${error}`
    );
});
