const express = require('express');
const categoryControllers = require('../controllers/categoryControllers');

const router = express.Router();
//create categories
router.post('/', categoryControllers.createNewCategory);


//get all categories
router.get('/', categoryControllers.getAllCategories);
//update category
router.put('/:id', categoryControllers.updateCategori);
//delete a category
router.delete('/:id',categoryControllers.deleteCategori);


module.exports = router;