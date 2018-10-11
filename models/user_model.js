const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const Schema = mongoose.Schema;

//Custom Validations via mongoose-validator
const emailValidate = validate({
  validator: 'isEmail',
  message: 'Plese enter an email address'
});
const nameValidate = validate({
  validator: 'isAlphanumeric',
  message: 'Only letters and numbers please'
});

let userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: [10, '10 character maximum'],
    validate: nameValidate
  },
  updated: {
    type: Date,
    default: Date.now
  },
  name: {
    first: {
      type: String,
      required: [true, 'First Name required'],
      validate: nameValidate
    },
    last: {
      type: String,
      required: [true, 'Last name required'],
      validate: nameValidate
    }
  },
  email: {
    type: String,
    required: [true, 'Email Required'],
    validate: emailValidate
  }
});

module.exports = mongoose.model('user',userSchema);
