const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  
  types:[
    {name:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"TypeCategory"
    }}
  ]
});

module.exports = mongoose.model("Category", CategorySchema);
