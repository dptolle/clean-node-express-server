import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';

// local
import { routes } from './api';
import { logger } from './../aspects';

export interface IServerConfig {
    port: number;
}

export interface IAppServer {
    start(): void;
}

class AppServer implements IAppServer {

    private server: express.Express;
    private publicDir = 'public';

    constructor(config: IServerConfig) {
        this.initialise(config);
    }

    start() {
        this.server.listen(this.server.get('port'), () => logger.info('API running', { 'port': this.server.get('port') }));
    }

    private initialise(config: IServerConfig) {
        this.server = express();
        this.server.set('port', config.port);

        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({
            extended: false
        }));

        this.server.use(express.static(path.join(__dirname, this.publicDir)));

        this.server.use(this.errorResponses.bind(this));

        routes.init(this.server);

        this.server.get('*', (req: express.Request, res: express.Response) => {
            logger.verbose('Returning HTML Root.');
            res.sendFile(path.join(__dirname, this.publicDir + '/index.html'));
        });
    }

    // tslint:disable-next-line
    private errorResponses(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        logger.verbose('Error Response for request.');
        if (err.status === 400) {
            return res
                .status(400)
                .end();
        }
    }
}

function createServer(config: IServerConfig): IAppServer {

    const server = new AppServer(config);

    return server;
}

export {
    createServer
};
