const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {

  const users = await User.find({});
  res.json({
    msg: "GET users API",
    users,
  });
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, ...rest } = req.body;
  //validar contra la base de datos
  if (password) {
    //encriptar contraseña del
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, rest);
  res.json(user);
};
exports.createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  //encriptar contraseña del
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  //gardar en la BD
  await user.save();

  res.status(201).json({
    msg: "POST create user API",
    user,
  });
};
exports.deleteUsers = async (req, res) => {
  const { id } = req.params;
  const uid = req.uid;
  //borrar fisicamente de la BD,
  // const user = await User.findByIdAndDelete(id);
  //borrar de la respuesta pero no de la BD
  const user = await User.findByIdAndUpdate(id, { status: false });
  // const userAuthenticate = req.user;
  res.json({
    msg: "DELETE user API",
    user,
  });
};
