"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const config = require("config");
// tslint:disable-next-line
winston.level = mapLogLevels(config.get('server.logLevel'));
class Logger {
    // tslint:disable-next-line
    info(msg, meta) {
        winston.log('info', msg, meta);
    }
    // tslint:disable-next-line
    error(msg, meta) {
        winston.log('error', msg, meta);
    }
    // tslint:disable-next-line
    debug(msg, meta) {
        winston.log('debug', msg, meta);
    }
    // tslint:disable-next-line
    warn(msg, meta) {
        winston.log('warn', msg, meta);
    }
    // tslint:disable-next-line
    trace(msg, meta) {
        winston.log('silly', msg, meta);
    }
    // tslint:disable-next-line
    verbose(msg, meta) {
        winston.log('verbose', msg, meta);
    }
}
function mapLogLevels(level) {
    switch (level) {
        case 'trace':
            return 'silly';
        case 'info':
            return level;
        case 'error':
            return level;
        case 'verbose':
            return level;
        case 'warn':
            return level;
        case 'silly':
            return level;
        default:
            return 'info';
    }
}
const logger = new Logger();
exports.logger = logger;
//# sourceMappingURL=index.js.map