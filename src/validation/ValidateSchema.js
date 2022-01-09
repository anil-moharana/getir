// Schema for checking request body validations
const { isFirstBeforeSecondDate, isIntegerGtEZero, isFirstLtESecondNumber } = require('./utils.js');
const ErrorMessage = require('../common/Constants').Constants.errorMessage;

module.exports = {
  // schema to validate request
  validator: () => ({
    startDate: {
      isISO8601: {
        negated: false,
      },
      errorMessage: ErrorMessage?.dateIsNotIso8601,
      custom: {
        options: (value, { req }) => isFirstBeforeSecondDate(value, req.body.endDate),
        errorMessage: ErrorMessage.startDateGtEEndDate,
      },
    },

    endDate: {
      isISO8601: {
        negated: false,
      },
      errorMessage: ErrorMessage?.dateIsNotIso8601,
    },
    minCount: {
      custom: {
        options: (value) => isIntegerGtEZero(value),
        errorMessage: ErrorMessage.notPositiveInteger,
      },
    },
    maxCount: {
      custom: {
        options: (value) => isIntegerGtEZero(value),
        errorMessage: ErrorMessage.notPositiveInteger,
      },
    },

    maxCount: {
      custom: {
        options: (value, { req }) => isIntegerGtEZero(req.body.minCount)
                        && isIntegerGtEZero(value)
                        && isFirstLtESecondNumber(req.body.minCount, value),
        errorMessage: ErrorMessage.maxLtMin,
      },
    },
  }),
};
