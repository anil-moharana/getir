// Entry Point  - Controller for All routes

const { Controller } = require('./Controller');
const { Constants } = require('../common/Constants');
const { RecordServiceConfig } = require('../configurations/RecordServiceConfig');
const logger = require('../common/Logger');

class BaseController extends Controller {
  constructor() {
    super();
    this.class = Constants?.classNames?.BaseController;
    this.method = Constants?.methodNames;
    this.logs = Constants?.logs;
    this.strings = Constants?.strings;
    this.recordServiceBaseUrl = RecordServiceConfig?.recordService?.baseUrl;
    this._initRouters();
  }

  _initRouters() {
    const method = this.method?._initRouters;
    logger.info(`${this.class} : ${method} : ${this.logs.initiateRoutes}`);
    this.router.use(this.recordServiceBaseUrl, require('./RecordController').router);
  }
}

const controller = new BaseController();
exports.BaseController = BaseController;
exports.router = controller.getRouter();
