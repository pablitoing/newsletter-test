const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
  email: {
    stype: String,
    default: 'email@default.it'
  }
});

module.exports = mongoose.model('customers', newsletterSchema);