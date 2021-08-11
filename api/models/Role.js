const { Schema, model } = require("mongoose");

const RolSchema = Schema({
  rol: {
    type: String,
    required: [true, "Role is required"],
  },
});

module.exports = model("Rol", RolSchema);