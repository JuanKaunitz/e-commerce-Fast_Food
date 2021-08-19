const express = require("express");
const typesControllers = require("../controllers/typesControllers");

const router = express.Router();
router.get('/',typesControllers.getAllTypes);
router.post('/',typesControllers.createNewType)

module.exports = router;