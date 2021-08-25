const Order = require("../models/Order");
const User = require("../models/User");

//nueva orden
exports.newOrder = async(req,res,next) =>{
   // console.log(req.body)
        const order = req.body;
        const {id,status} = req.body;
       //console.log("BODY", req.body)
        const user = await User.findById(id);
        //console.log("USER ID", user)
        if(!order){
            return res.status(400).json({msg:'no hay una order para crear'})
        }
        let newOrder = new Order(order);
        //console.log('nueva orden',newOrder)
        try {
             await newOrder.save()
            user.order = user.order.concat(newOrder);
             await user.save()
            //console.log(user)
            res.json(newOrder)
        } catch (error) {
            next(error)
        }
}   
       
//todas las ordenes
exports.getAllOrder = async(req,res,next)=>{
    try {
        const order = await Order.find({}).populate('client',{
            product:1
        }).populate('order.product');
        res.json(order);
    } catch (error) {
        next(error);
    }
};

//orden por id
exports.getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  //console.log("order id", order)
  if (!order) {
    res.status(400).json({ msg: "Esa orden no existe" });
    return next();
  }
  res.json(order);
};

//actualizar una orden
exports.updateOrder = async (req, res, next) => {
  try {
    let order = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
      );
      //console.log("ORDER ", order);
    res.json(order);
  } catch (error) {
    console.log(error);
    next();
  }
};
//eliminaruna orden
exports.deleteOrder = async (req, res, next) => {
  try {
    await Order.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Orden  eliminada" });
  } catch (error) {
    console.log(error);
    return next();
  }
};
