"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// npm
const config = require("config");
// local
const server_1 = require("./server");
const peripherals_1 = require("./peripherals");
const primaryDataStore = peripherals_1.createDataStore(peripherals_1.DataStoreType.MONGO);
primaryDataStore.initialize(config.get('dataStore.connectionString'));
const server = server_1.createServer(config.get('server'));
server.start();
//# sourceMappingURL=main.js.map