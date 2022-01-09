// including moongose module
const mongoose = require('mongoose');
const logger = require('../common/Logger');

// connecting to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('open', (ref) => {
  logger.info('Connected to mongo server.');
});

mongoose.connection.on('error', (err) => {
  logger.error('Could not connect to mongo server!', err);
});
