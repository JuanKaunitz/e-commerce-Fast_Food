const Order = require('../models/Order');

//nueva orden
exports.newOrder = async(req,res,next) =>{
    try {
        const order = new Order(req.body);
        await order.save();
        res.json({msg:'Se agrego un nuevo pedido',order});
    } catch (error) {
        console.log(error);
        next();
    }
};
//todas las ordenes
exports.getAllOrder = async(req,res,next)=>{
    try {
        const order = await Order.find({}).populate('client');
        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
};
//orden por id
exports.getOrderById = async(req,res,next)=>{
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(400).json({ msg: "Esa orden no existe" });
      return next();
    }
    res.json( order );
  }
//actualizar una orden
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
//eliminaruna orden
exports.deleteOrder = async(req,res,next)=>{
    try {
        await Order.findOneAndDelete({_id: req.params.id});
        res.json({msg:'Orden  eliminada'});
    } catch (error) {
        console.log(error);
        return next();
    }
  };
  