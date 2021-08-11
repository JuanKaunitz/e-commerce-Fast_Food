const express = require('express');
const authControllers = require('../controllers/authControllers');


const router = express.Router();

router.post('/', authControllers.authLogin);

module.exports = router;
