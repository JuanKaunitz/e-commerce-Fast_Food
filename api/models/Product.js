const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    trim: true,
  },
  identifier: {
    type: Number,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
  },
  available: {
    type: Boolean
  },
  category: {
    type: String 
  },
});
ProductSchema.methods.toJSON = function() {
  const { __v, ...Product  } = this.toObject();
  return Product;
}

module.exports = mongoose.model("Product", ProductSchema);
