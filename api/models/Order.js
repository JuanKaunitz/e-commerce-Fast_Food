const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  order: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
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

OrderSchema.methods.toJSON = function() {
  const { __v, ...Order  } = this.toObject();
  return Order;
}

module.exports = mongoose.model("Order", OrderSchema);
