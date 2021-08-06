const express = require("express");
const routerProducts = require('./routerProduct');
const routerClients = require('./routerClient');
const routerUser = require('./routerUser');
const routerCategories = require('./routerCategories');
const router = express.Router();

module.exports = () => {
  //Users endpoints para crear un ausuario para el sistema
  router.use("/food/api/user", routerUser);
  //productos
  router.use("/food/api/products", routerProducts);
  //Client endpoints
  router.use("/food/api/client", routerClients);
  //categories
  router.use("/food/api/category", routerCategories);

  return router;
};
