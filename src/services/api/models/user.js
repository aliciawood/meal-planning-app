var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  _id: { type: String, unique: true, index: true },
  name: String,
  email: String,
  passwordHash: String
});

module.exports = mongoose.model('User', userSchema);