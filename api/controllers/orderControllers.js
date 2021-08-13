const Order = require('../models/Order');


exports.newOrder = async(req,res,next) =>{
    const order = new Order(req.body);
    try {
        await order.save();
        res.json({msg:'Se agrego un nuevo pedido',order});
    } catch (error) {
        console.log(error);
        next();
    }
};

exports.showOrder = async(req,res,next)=>{
    try {
        const order = await Order.find({});
        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
};