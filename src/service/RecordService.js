const { Constants } = require('../common/Constants');
const Record = require('../models/record');
const logger = require('../common/Logger');

class RecordService {
  static getInstance() {
    return service;
  }

  constructor() {
    this.class = Constants?.classNames?.RecordService;
    this.method = Constants?.methodNames;
    this.logs = Constants?.logs;
    this.strings = Constants?.strings;
  }

  // list records
  async listRecords(req, res, next) {
    const method = this.method.listRecords;
    const {
      startDate, endDate, minCount, maxCount,
    } = req?.body;
    logger.info(`${this.class} : ${method} : ${this.logs.methodcall}`);
    try {
      const result = await Record.aggregate([
        { $match: { createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
        {
          $project: {
            key: 1, createdAt: { $dateToString: { date: '$createdAt' } }, _id: 0, totalCount: { $sum: '$counts' },
          },
        },
        { $match: { totalCount: { $gte: minCount, $lte: maxCount } } },
      ]).exec();
      return res.json({ code: 0, msg: 'Success', record: result });
    } catch (error) {
      next(error);
    }
  }
}

const service = new RecordService();
exports.RecordService = RecordService;
