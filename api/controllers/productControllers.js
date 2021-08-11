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
const query = {stock:true}
  try {
    const total = await Product.countDocuments(query)
    const products = await Product.find({}).populate('categories').populate({
      path:'categories.category',
      model:'Category'
    });
    res.json({
      msg:'GET products DB',
      total,
      products
    });
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

exports.searchProduct = async(req,res,next)=>{
  const {name}=req.params
  
   try {
    const includeName = await Product.find({name: new RegExp (name, "i")});
       includeName.length >0
       ?  res.json(includeName) 
       : res.json({msg:"Product not found"})         
     
   } catch (error) {
       console.log(error);
       return next();
   }
 };

// exports.searchProduct = async(req,res,next)=>{
//   // {name: new RegExp ('^'+name+'$', "i")}
//   try {
//     const namedb = req.params.name;
//     const nameSearch = await Product.find({},{name:namedb});
//       nameSearch 
//       ?  res.json(nameSearch) 
//       : res.json({msg:"Product not found"})         
    
//   } catch (error) {
//       console.log(error);
//       return next();
//   }
// };