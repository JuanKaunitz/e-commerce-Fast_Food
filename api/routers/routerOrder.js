const express = require('express');
const orderControllers = require('../controllers/orderControllers');

const router = express.Router();

//crear una orden
router.post('/',orderControllers.newOrder);
//mostrar las ordenes
router.get('/',orderControllers.showOrder);


module.exports = router;