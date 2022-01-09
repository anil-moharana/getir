const BaseError = require('./BaseError');
const { Url_Not_Found } = require('../common/Constants').Constants.errorMessage;

class UrlNotFoundError extends BaseError {
}

UrlNotFoundError.prototype.msg = Url_Not_Found?.message;
UrlNotFoundError.prototype.code = Url_Not_Found?.status;
UrlNotFoundError.prototype.status = Url_Not_Found?.status;

module.exports = UrlNotFoundError;
