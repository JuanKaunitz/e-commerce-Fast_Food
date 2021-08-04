const Product = require("../models/Product");

//crear un nuevo producto
exports.createNewProduct = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.json({ msg: "Product created", product });
  } catch (error) {
    console.log(error);
    return next();
  }
};

//traer todos los productos
exports.getAllProducts = async(req,res,next)=>{
  try {
    const products = await Product.find({});
    res.json(products);
} catch (error) {
    console.log(error);
    return next();
}
};

//mostrar un producto 
exports.showProduct = async(req,res,next)=>{
  const product = await Product.findById(req.params.id);
  if(!product){
      res.status(400).json({msg:'Ese producto no existe'});
      return next();
  }
  res.json({msg:'Producto encontrado',product})
};

exports.updateProduct = async(req,res,next)=>{
  try {
      let product = await Product.findOneAndUpdate({_id:req.params.id},
          req.body,{
              new:true
          });
          res.json(product);
  } catch (error) {
      console.log(error);
      return next();
  }

};

exports.deleteProduct = async(req,res,next)=>{
  try {
      await Product.findOneAndDelete({_id: req.params.id});
      res.json({msg:'Producto eliminado'});
  } catch (error) {
      console.log(error);
      return next();
  }
};