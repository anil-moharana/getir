const { checkSchema } = require('express-validator');
const { Controller } = require('./Controller');
const { Constants } = require('../common/Constants');
const logger = require('../common/Logger');

// import validators
const { validateResult } = require('../validation/ValidateSchemaResult');
const { validator } = require('../validation/ValidateSchema');

const { RecordServiceConfig } = require('../configurations/RecordServiceConfig');
const recordService = require('../service').RecordService.getInstance();

class RecordController extends Controller {
  static getInstance(){
    return controller;
  }
  constructor() {
    super();
    this.class = Constants?.classNames?.RecordController;
    this.method = Constants?.methodNames;
    this.logs = Constants?.logs;
    this.strings = Constants?.strings;
    this.recordServiceEndpoints = RecordServiceConfig?.recordService?.endpoints;
    this._initRouters();
  }

  // list records
  async listRecords(req, res, next) {
    recordService.listRecords(req, res, next);
  }

  _initRouters() {
    const method = this.method?._initRouters;
    logger.info(`${this.class} : ${method} : ${this.logs.initiateRoutes}`);
    this.router.post(this.recordServiceEndpoints.list, [checkSchema(validator()), validateResult], (req, res, next) => this.listRecords(req, res, next));
  }
}

const controller = new RecordController();
exports.RecordController = RecordController;
exports.router = controller.getRouter();
