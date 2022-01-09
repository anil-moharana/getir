// Application related Config
const { Constants } = require('../common/Constants');

exports.AppConfig = {
  Host: Constants?.strings?.protocol + process.env.HOST,
  Port: process.env.PORT,
  Env: process.env.NODE_ENV,
  IsTestEnv: ![Constants?.strings?.prod, Constants?.strings?.int].includes(process.env.NODE_ENV),
};
