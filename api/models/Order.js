const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client: {
    type: Schema.ObjectId,
    ref: "Client",
  },
  order: [
    {
      product: {
        type: Schema.ObjectId,
        ref: "Product",
      },
      amount: Number,
    },
  ],
  total: {
    type: Number,
  },
  status: {
    type: String,
    enum: {
      values: ["carrito", "creada", "procesando", "cancelado", "completada"],
    },
  },
});

module.exports = mongoose.model("Order", OrderSchema);
