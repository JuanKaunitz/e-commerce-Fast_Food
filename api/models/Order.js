const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    client:{
        type:Schema.ObjectId,
        ref:'Client'
    },
    order:[{
        product:{
            type:Schema.ObjectId,
            ref:'Product'
        },
        amount:Number
    }],
    total:{
        type:Number
    },
    state:{
        type:String,
		enum: {
			values: ['pagado', 'pendiente de pago','cancelado'],
    }
}

});

module.exports = mongoose.model('Order',OrderSchema);

