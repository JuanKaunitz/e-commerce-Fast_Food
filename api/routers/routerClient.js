const express = require("express");
const clientControllers = require("../controllers/clientControllers");



const router = express.Router();

//add new client
router.post('/',clientControllers.createNewClient);
//get all clients
router.get('/',clientControllers.getAllClient);
// //client by id
router.get('/:id',clientControllers.showClientById);
// //update clients
router.put('/:id',clientControllers.updateClient);
// //detele client
router.delete('/:id',clientControllers.deleteClient);


module.exports = router;