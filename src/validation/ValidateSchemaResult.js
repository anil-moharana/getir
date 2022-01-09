/**
 *  validateResult is responsible for checking error in request and
 *  returns validation errors with 422 code and appropriate msg
 */
const { validationResult } = require('express-validator');

module.exports = {
  validateResult: (req, res, next) => {
    const errorFormatter = ({ msg, param, value }) => `[${param}:${value}]: ${msg}`;
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return res.status(422).json({ code: 422, msg: errors.array() });
    }

    return next();
  },
};
