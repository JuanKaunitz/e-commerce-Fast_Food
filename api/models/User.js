const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
      },
      nickname:{
          type:String
      },
      email: {
        type: String,
        required: [true, "the email is required"],
        unique: true,
      },
    //   password: {
    //     type: String,
    //     required: [true, "password is required"],
    //   },
      picture: {
        type: String,
      },
    //   role: {
    //     type: String,
    //     required: true,
    //     enun: ["CLIENT"],
    //   },
      status: {
        type: Boolean,
        default: true,
      },
      email_verified: {
        type: Boolean,
        default: false,
      },
});

// Autenticar Usuarios
UserSchema.methods = {
    compararPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

module.exports = mongoose.model('User',UserSchema);