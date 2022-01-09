// including mongoose module
const mongoose = require('mongoose');

// Declaring Schema for Record
const RecordSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
    required: true,
    trim: true,
  },
});

// Creating RecordModel
const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
