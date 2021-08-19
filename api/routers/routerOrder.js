const express = require('express');
const orderControllers = require('../controllers/orderControllers');

const router = express.Router();

//crear una orden
router.post('/',orderControllers.newOrder);
//mostrar las ordenes
router.get('/',orderControllers.getAllOrder);
//por id
router.get('/:id',orderControllers.getOrderById);
//update orden
router.put('/:id',orderControllers.updateOrder);
//delete order
router.delete('/:id',orderControllers.deleteOrder)


module.exports = router;