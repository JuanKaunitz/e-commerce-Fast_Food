const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  Hamburguesas: [{
   name: {
     type: String,
  },
  description: {
    type: String,
  },
}],
Bebidas:[{
  name:{
    type:String,

  },
  description: {
    type: String,
  },
}],
Sandwich:[{
  name:{
    type:String,

  },
  description: {
    type: String,
  },
}],
Combos:[{
  name:{
    type:String,

  },
  description: {
    type: String,
  },
}],
Guarnicion:[{
  name:{
    type:String,

  },
  description: {
    type: String,
  },
}],
 
});

module.exports = mongoose.model("Category", CategorySchema);
