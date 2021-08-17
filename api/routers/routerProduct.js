const express = require("express");
const productControllers = require("../controllers/productControllers");

const router = express.Router();


  //Agregar un producto
  router.post("/", 
  productControllers.uploadImage,
  productControllers.createNewProduct);
  //mostrar todos los productos
  router.get("/", productControllers.getAllProducts);
  //mostrar un producto
  router.get("/:id", productControllers.showProduct);
  //mostarr un producto por su nombre
  router.get("/search/:name", productControllers.searchProduct);//no esta terminada
  //actualizar un producto
  router.put("/:id", 
  productControllers.uploadImage,
  productControllers.updateProduct);
  //eliminar un producto
  router.delete("/:id", productControllers.deleteProduct);


module.exports = router;
