const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
    code: {
        type: Number,
        unique: true,

       // trim: true //elimina espacio en blancos
    },
    status: {
        type: Boolean,
        default: true,
    },
    value: {
        type: Number,
        required: true
    },

    date: {
        type: Date

    }
});

module.exports = mongoose.model("Coupon", CouponSchema);