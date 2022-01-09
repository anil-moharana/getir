const { Constants } = require('../common/Constants');

module.exports = ({ logger }) =>
	 ((err, req, res, next) => {
    if (!res.headersSent) {
      const status = err.status || Constants?.errorMessage.Internal_Server_Error?.status;
      const code = err.code || Constants?.errorMessage.Internal_Server_Error?.status;
      const msg = err.msg || err || Constants?.errorMessage.Internal_Server_Error?.message;
      logger.error(`${Constants?.middleWares?.ErrorHandler} : ${Constants?.strings?.error} : ${status} ${msg}`);
      res.status(status);
      res.json({
        error: {
          code, msg,
        },
      });
    }
  });
