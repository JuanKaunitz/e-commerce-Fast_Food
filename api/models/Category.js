const mongoose = require("mongoose");
const Product = require("./Product");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
name:{
  type:String
},
image:{
  type:String
},

types:[{
 types:{
  type: mongoose.Schema.Types.ObjectId,
  ref:'Types'
 }
    // name:{type:String}   
  
}]
})
CategorySchema.methods.toJSON = function() {
  const { __v, ...Category  } = this.toObject();
  return Category; //quitar una prop en especifico que no necesito
}


module.exports = mongoose.model("Category", CategorySchema);
