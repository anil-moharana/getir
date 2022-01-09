const BaseError = require('./BaseError');
const { Bad_Request } = require('../common/Constants').Constants.errorMessage;

class BadRequestError extends BaseError {
}

BadRequestError.prototype.msg = Bad_Request?.message;
BadRequestError.prototype.code = Bad_Request?.status;
BadRequestError.prototype.status = Bad_Request?.status;

module.exports = BadRequestError;
