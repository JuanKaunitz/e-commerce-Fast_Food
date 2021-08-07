const User = require("../models/User");

const validateEmail = async (email = "") => {
  //verificar si elcorreo existe el
  const existeEmail = await User.findOne({ email });
  if (existeEmail) {
    throw new Error(`El correo: ${email}, ya esta registrado`);
  }
};
const validateId = async (id) => {
  //verificar si elcorreo existe el
  const existeUserId = await User.findById(id);
  if (!existeUserId) {
    throw new Error(`El ID no esta registrado: ${id}`);
  }
};
module.exports = {  validateEmail, validateId };