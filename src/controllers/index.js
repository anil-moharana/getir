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
    this.appBaseUrl= RecordServiceConfig?.app?.baseUrl;
    this._initRouters();
  }

  _initRouters() {
    const method = this.method?._initRouters;
    logger.info(`${this.class} : ${method} : ${this.logs.initiateRoutes}`);
    //route handler for default route url
    this.router.get(this.appBaseUrl,(req,res)=>{
      res.setHeader('Content-Type','text/html')
      res.write(`
      <h3>${this.logs.defaultRoute}</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AtSFeINaYm6JQjHMJECuw8nSAqt2HM8DSw&usqp=CAU">
      `)
      res.end();
    })
    this.router.use(this.recordServiceBaseUrl, require('./RecordController').router);
  }
}

const controller = new BaseController();
exports.BaseController = BaseController;
exports.router = controller.getRouter();
