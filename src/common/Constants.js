// Constants Configurations for class,method,text,logs

exports.Constants = {
  classNames: {
    app: 'Application',
    BaseController: 'BaseController',
    RecordController: 'RecordController',
    RecordService: 'RecordService',
  },
  methodNames: {
    listen: 'listen',
    _initRouters: '_initRouters',
    listRecords: 'listRecords',

  },
  middleWares: {
    ErrorHandler: 'ErrorHandler',
  },
  logs: {
    eaccss: 'requires elevated priviledges',
    eaddrinuse: 'is already in use',
    listenSuccess: 'listening on',
    initiateRoutes: 'registering Routes',
    methodcall: 'methodcall',

  },
  strings: {
    protocol: 'https://',
    dev: 'dev',
    int: 'int',
    prod: 'prod',
    error: 'error',

  },
  errorMessage: {
    Bad_Request: {
      status: 400,
      message: 'Bad Request.',
    },
    Url_Not_Found: {
      status: 404,
      message: 'Url Not Found',
    },
    Internal_Server_Error: {
      status: 500,
      message: 'Internal Server Error',
    },
    dateIsNotIso8601: 'Date is not ISO 8601 date format (YYYY-MM-DD, e.g. 2017-05-16)',
    notPositiveInteger: 'It should be integer number which is greater than or equivalent to 0',
    maxLtMin: 'Max number should be greater than or equivalent to min number',
    startDateGtEEndDate: 'End date shoud be after start date',
  },

};
