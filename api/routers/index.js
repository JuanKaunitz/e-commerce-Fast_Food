const express = require("express");
const userControllers = require("../controllers/userControllers");
const productControllers = require("../controllers/productControllers");
const clientControllers = require("../controllers/clientControllers");

const router = express.Router();

module.exports = () => {
  //Users endpoints para crear un ausuario para el sistema
  router.post("/food/api/new-user", userControllers.createNewUser);

  //**Endpoints de productos */
  //Agregar un producto
  router.post("/food/api/products", productControllers.createNewProduct);
  //mostrar todos los productos
  router.get("/food/api/products", productControllers.getAllProducts);
  //mostrar un producto
  router.get("/food/api/products/:id", productControllers.showProduct);
  //actualizar un producto
  router.put("/food/api/products/:id", productControllers.updateProduct);
  //eliminar un producto
  router.delete("/food/api/products/:id", productControllers.deleteProduct);

  //**Endpoints de clientes */
  //Client endpoints , crear cliente
  router.post("/food/api/new-client", clientControllers.createNewClient);

  return router;
};
