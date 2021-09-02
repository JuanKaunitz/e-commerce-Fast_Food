const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  order: {
    type: mongoose.Schema.Types.Mixed
  },
  total: {
    type: String,
  },
  status: {
    type: String,
  },
});

OrderSchema.methods.toJSON = function () {
  const { __v, ...Order } = this.toObject();
  return Order;
};

module.exports = mongoose.model("Order", OrderSchema);
