const { Internal_Server_Error } = require('../common/Constants').Constants.errorMessage;

class BaseError extends Error {

}

BaseError.prototype.msg = Internal_Server_Error?.message;
BaseError.prototype.code = Internal_Server_Error?.status;
BaseError.prototype.status = Internal_Server_Error?.status;

module.exports = BaseError;
