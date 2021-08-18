const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  status:{
    type:Boolean,
    default:true
  },
  image: {
    type: String,
  },
  google:{
    type:Boolean,
    default:false
  },
  role: {
    type:String,
    default:'CLIENT'
  },
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// Autenticar Usuarios
UserSchema.methods = {
  compararPassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
};

module.exports = mongoose.model("User", UserSchema);
