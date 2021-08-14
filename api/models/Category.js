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

    name:{type:String}   
  
}]
})

module.exports = mongoose.model("Category", CategorySchema);
