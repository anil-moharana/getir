/**
 * validation utils functions
 */
const moment = require('moment');

module.exports = {
  /**
    * @param first {Date}
    * @param second {Date}
    */
  isFirstBeforeSecondDate: (first, second) => {
    const result = moment(first, 'YYYY-MM-DD', true).isValid() && moment(second, 'YYYY-MM-DD', true).isValid() && moment(second).isSameOrAfter(first);
    // isFirstBeforeSecondDate returns true if first date is after second date
    return result;
  },
  /**
    * @param number {number}
    */
  isIntegerGtEZero: (number) =>
  // isIntegerGtEZero returns true if number >= 0
    (Number.isInteger(number) && number >= 0),
  /**
    * @param first {number}
    * @param second {number}
    */
  isFirstLtESecondNumber: (first, second) =>
  // isFirstLtESecondNumber returns true if first <= second
    first <= second,

};
