const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "the name is required"],
      },
<<<<<<< HEAD
=======
      nickname:{
          type:String
      },
>>>>>>> d3fc5693f569c4781368ed950bc6b6485d7e87c4
      email: {
        type: String,
        required: [true, "the email is required"],
        unique: true,
      },
<<<<<<< HEAD
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
=======
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
>>>>>>> d3fc5693f569c4781368ed950bc6b6485d7e87c4
});

// Autenticar Usuarios
UserSchema.methods = {
    compararPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

module.exports = mongoose.model('User',UserSchema);