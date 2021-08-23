const express = require("express");
const routerProducts = require('./routerProduct');
const routerClients = require('./routerClient');
const routerUser = require('./routerUser');
const routerAuth = require('./routerAuth')
const routerCategories = require('./routerCategories');
const routerOrder = require('./routerOrder');
const routerCheckout = require('./routerCheckout');
const routerTypes = require('./routerTypes')
const router = express.Router();
const mercadopago= require('./mercadopago')
const routerEmails = require('./routerEmails');
module.exports = () => {
  //Users endpoints para crear un ausuario para el sistema
  router.use("/food/api/user", routerUser);
  //auth endpoints users
  router.use("/food/api/auth-sesion", routerAuth);
  //productos
  router.use("/food/api/products", routerProducts);
  //Client endpoints
  router.use("/food/api/client", routerClients);
  //categories
  router.use("/food/api/category", routerCategories);
  //pedidos
  router.use("/food/api/order", routerOrder);
  //compra 
  router.use('/food/api/checkout',routerCheckout);
  //tipos de categorias
  router.use('/food/api/types',routerTypes);
  //mercadopago
  // router.use('/mercadopago', mercadopago);
  router.use('/food/api/send-email', routerEmails);

  return router;
};
