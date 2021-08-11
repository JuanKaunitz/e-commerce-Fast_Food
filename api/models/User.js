const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
      },
      email: {
        type: String,
        required: [true, "the email is required"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "password is required"],
      },
      image: {
        type: String,
      },
      role: {
        type: String,
        required: true,
        emun: ["ADMIN", "CLIENT"],
      },
      status: {
        type: Boolean,
      }
});

module.exports = mongoose.model('User',UserSchema);