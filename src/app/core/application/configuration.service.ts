// npm
import * as config from 'config';
import {
    ServerConfiguration,
    DataStoreConfiguration,
    ApplicationConfiguration,
    GeneralConfiguration,
    LoginConfiguration,
    ConfigurationService
} from '../model/configuration.model';

class DefaultConfigurationService implements ConfigurationService {
    private loginConfigurationDefaults: LoginConfiguration = {
        threshold: 5,
        secondsDelay: 300
    };

    private generalConfigurationDefaults: GeneralConfiguration = {
        logLevel: 'info',
        contact: ''
    };

    getServerConfiguration(): ServerConfiguration {
        return config.get('server');
    }

    getDataStoreConfiguration(): DataStoreConfiguration {
        return config.get('dataStore');
    }

    getApplicationConfiguration(): ApplicationConfiguration {
        const appConfiguration: ApplicationConfiguration = config.get(
            'application'
        );

        if (!config.has('application.login')) {
            appConfiguration.login = {
                threshold: this.loginConfigurationDefaults.threshold,
                secondsDelay: this.loginConfigurationDefaults.secondsDelay
            };
        }

        if (!config.has('application.login.threshold')) {
            appConfiguration.login.threshold = this.loginConfigurationDefaults.threshold;
        }

        if (!config.has('application.login.secondsDelay')) {
            appConfiguration.login.secondsDelay = this.loginConfigurationDefaults.secondsDelay;
        }

        return appConfiguration;
    }

    getGeneralConfiguration(): GeneralConfiguration {
        let generalConfiguration: GeneralConfiguration = config.get('general');

        if (!config.has('general')) {
            generalConfiguration = {
                logLevel: this.generalConfigurationDefaults.logLevel,
                contact: this.generalConfigurationDefaults.contact
            };
        }

        if (!config.has('general.logLevel')) {
            generalConfiguration.logLevel = this.generalConfigurationDefaults.logLevel;
        }

        return generalConfiguration;
    }
}

const configurationService = new DefaultConfigurationService();

function getConfigurationService(): ConfigurationService {
    return configurationService;
}
export { getConfigurationService };
