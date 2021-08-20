const Order = require('../models/Order');
const User = require('../models/User')

//nueva orden
exports.newOrder = async(req,res,next) =>{
    
        const {userId, order} = req.body;
        const user = await User.findById(userId);
        if(!order){
            return res.status(400).json({msg:'no hay una order para crear'})
        }
        const newOrder = new Order({
            order,
            user: user._id
        });
        try {
            const saveOrder = await newOrder.save()
            user.order = user.order.concat(saveOrder._id);
            await user.save()
            res.json(saveOrder)
        } catch (error) {
            next(error)
        }   
       
};
//todas las ordenes
exports.getAllOrder = async(req,res,next)=>{
    try {
        const order = await Order.find({}).populate('client',{
            product:1
        }).populate('order.product',{name:1,price:1});
        res.json(order);
    } catch (error) {
        next(error);
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
  