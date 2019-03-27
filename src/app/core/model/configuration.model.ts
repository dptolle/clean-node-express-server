export interface ServerConfiguration {
    port: number;
    jwtSecret: string;
    apiUrl: string;
}

export interface DataStoreConfiguration {
    connectionString: string;
}

export interface GeneralConfiguration {
    logLevel: string;
    contact: string;
}

export interface ApplicationConfiguration {
    login: LoginConfiguration;
}

export interface LoginConfiguration {
    threshold: number;
    secondsDelay: number;
}

export interface ConfigurationPort {
    getServerConfiguration(): ServerConfiguration;
    getDataStoreConfiguration(): DataStoreConfiguration;
    getApplicationConfiguration(): ApplicationConfiguration;
    getGeneralConfiguration(): GeneralConfiguration;
}

export interface ConfigurationService extends ConfigurationPort {}
