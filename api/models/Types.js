const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypesSchema = Schema({
    name:{
        type:String
    }
});
TypesSchema.methods.toJSON = function() {
    const { __v, ...Types  } = this.toObject();
    return Types;
  }
module.exports = mongoose.model("Types", TypesSchema);