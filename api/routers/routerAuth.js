const express = require('express');
const { check } = require("express-validator");
const authControllers = require('../controllers/authControllers');
const { validateInputs } = require("../middlewares");


const router = express.Router();
//ruta verificada
router.post('/', [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateInputs,
  ], authControllers.authLogin);

  router.post(
    "/google",
    [
      // check("id_token", "El id_token de google es necesario").not().isEmpty(),
      validateInputs,
    ],
    authControllers.googleSignIn
  );
  //resetear password
  router.post('/reset-password',authControllers.resetPassword);
  // router.post('/newPassword', authControllers.saveNewPassword);
  router.post('/reset-password/:token', authControllers.saveNewPassword);


module.exports = router;