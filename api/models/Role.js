const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  rol: {
    type: String,
    // required: [true, "Role is required"],
  },
});

module.exports = mongoose.model("Role", RoleSchema);