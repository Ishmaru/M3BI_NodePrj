const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {type: String, required: true, max: [10, '10 character maximum']},
  updated: { type: Date, default: Date.now },
  name: {
    first: { type: String, required: [true, 'First Name required']},
    last: { type: String, required: [true, 'Last name required']}
  },
  email: {type: String, required: [true, 'Email Required'], match: [/@/g, 'A valid email is required']}
});

module.exports = mongoose.model('user',userSchema);
