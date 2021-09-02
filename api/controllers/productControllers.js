const multer = require('multer');
const shortid = require('shortid');
const Product = require("../models/Product");

//enctype="multipart/form-data"
const configMulter = {
  storage: fileStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null, __dirname+'./uploads');
    },
    filename: (req,file,cb)=>{
      const extension = file.mimetype.split('/')[1];

      cb(null,`${shortid.generate()}.${extension}`);
    }
  }),
  fileFilter(req,file,cb){
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
      cb(null,true)
    }else{
      cb(null,false)
    }
  },
  limits:{fileSize:200000}
}
const upload = multer(configMulter).single('image');
//subir la imagen
exports.uploadImage = async(req,res,next)=>{
  upload(req,res, function(error){
    if(error){
      res.json({msg:error})
      return next();
    }
  });
  next();
};
//crear un nuevo producto
exports.createNewProduct = async (req, res, next) => {
  const product = new Product(req.body);
  const file = req.file
  try {
    if(file){
      product.image = req.file.filename;
    }
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
    // const total = await Product.countDocuments(query)//cuenta los productos 
    const products = await Product.find({})
    res.json(products);  
    
} catch (error) {
    console.log(error);
    return next();
}
};

exports.getProductById = async(req,res,next)=>{
  const {id} = req.params.id
  const product = await Product.findOne({_id:id})
  res.json(product)
}

//mostrar un producto 
exports.showProduct = async(req,res,next)=>{
  const product = await Product.findById(req.params.id);
  if(!product){
    return  res.status(400).json({msg:'Ese producto no existe'});
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