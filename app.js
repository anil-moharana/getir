// Node Server Setup

// import library
const express = require('express');
// load env file
require('dotenv').config();
// initialize mongoose
require('./src/db/mongoose');

const { Constants } = require('./src/common/Constants');
const logger = require('./src/common/Logger');
const { AppConfig } = require('./src/configurations/AppConfig');
const NotFound = require('./src/middlewares/NotFound');
const ErrorHandler = require('./src/middlewares/ErrorHandler');

class Application {
  #APP_PORT;

  #APP_ENV;

  #IS_TEST_ENV;

  constructor() {
    this.class = Constants?.classNames?.app;
    this.method = Constants?.methodNames;
    this.logs = Constants?.logs;
    this.strings = Constants?.strings;
    this.#APP_PORT = AppConfig?.Port;
    this.#APP_ENV = AppConfig?.Env;
    this.#IS_TEST_ENV = AppConfig?.IsTestEnv;
    this.app = express();
    this._config();
    this._listen();
  }

  _config() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // config router
    this.app.use('/', require('./src/controllers').router);
    // handle 404 middleware
    this.app.use(NotFound());
    // handle all errors middleware
    this.app.use(ErrorHandler({ logger }));
  }

  _listen() {
    const method = this.method?.listen;
    this.app.listen(this.#APP_PORT, () => {
      logger.info(`${this.class} : ${method} : ${this.logs.listenSuccess} ${this.#APP_PORT}`);
    }).on('error', (err) => {
      // handle specific listen errors
      if (err.syscall != 'listen') {
        throw err;
      }
      switch (err.code) {
        case 'EACCES': {
          logger.error(`${this.class} : ${method} ${this.logs.eaccss}`);
          process.exit(1);
          break;
        }
        case 'EADDRINUSE': {
          logger.error(`${this.class} : ${method} ${this.logs.eaddrinuse}`);
          process.exit(1);
          break;
        }
        default:
          throw err;
      }
    });
  }
}

exports.Application = Application;
