const { UrlNotFoundError } = require('../error');

module.exports = () => ((req, res, next) => {
  next(new UrlNotFoundError());
});
