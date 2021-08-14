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

exports.updateOrder = async(req,res,next) =>{
    try{
        let order = await Order.findByIdAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            });
            res.json(order)
    }catch (error){
        console.log(error);
        next();
    }
};

exports.deleteOrder = async(req,res,next)=>{
    try {
        await Order.findOneAndDelete({_id: req.params.id});
        res.json({msg:'Orden  eliminada'});
    } catch (error) {
        console.log(error);
        return next();
    }
  };
  