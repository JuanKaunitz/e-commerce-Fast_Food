const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
  
});

// Autenticar Usuarios
UserSchema.methods = {
    compararPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

module.exports = mongoose.model('User',UserSchema);