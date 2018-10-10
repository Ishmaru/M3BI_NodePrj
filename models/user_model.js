const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {type: String, required: true, max: 10},
  updated: { type: Date, default: Date.now },
  name: {
    first: { type: String, required: true},
    last: { type: String, required: true}
  },
  email: {type: String, required: false, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']}
});

module.exports = mongoose.model('user',userSchema);
