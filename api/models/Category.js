const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  product: [
    {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Category", CategorySchema);
