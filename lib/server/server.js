"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// local
const api_1 = require("./api");
const aspects_1 = require("./../aspects");
class AppServer {
    constructor(config) {
        this.publicDir = 'public';
        this.initialise(config);
    }
    start() {
        this.server.listen(this.server.get('port'), () => aspects_1.logger.info('API running', { 'port': this.server.get('port') }));
    }
    initialise(config) {
        this.server = express();
        this.server.set('port', config.port);
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({
            extended: false
        }));
        this.server.use(express.static(path.join(__dirname, this.publicDir)));
        this.server.use(this.errorResponses.bind(this));
        api_1.routes.init(this.server);
        this.server.get('*', (req, res) => {
            aspects_1.logger.verbose('Returning HTML Root.');
            res.sendFile(path.join(__dirname, this.publicDir + '/index.html'));
        });
    }
    // tslint:disable-next-line
    errorResponses(err, req, res, next) {
        aspects_1.logger.verbose('Error Response for request.');
        if (err.status === 400) {
            return res
                .status(400)
                .end();
        }
    }
}
function createServer(config) {
    const server = new AppServer(config);
    return server;
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map