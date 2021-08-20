const User = require("../models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const shortid = require("shortid");
const { populate } = require("../models/User");

const configMulter = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname + "../public/uploads");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];

      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 200000 },
};
const upload = multer(configMulter).single("image");
exports.uploadImage = async (req, res, next) => {
  upload(req, res, next, function (error) {
    if (error instanceof multer.MulterError) {
      return next();
    }
  });
  next();
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).populate('order');
    res.json(users);
  } catch (error) {
    res.status(400).json({
      msg: "hubo un eror",
    });
    next();
  }
};
//por id
exports.getUserById = async (req, res, next) => {
  const user = await User.findById(req.params.id).populate('order');
  if (!user) {
    res.status(300).json({ msg: "Ese Usuario no existe" ,user:'not found'});
    return next();
  }
  res.json({ msg: "Usuario encontrado", user });
};
//actualizar usuario
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
  res.json({ msg: "User Updated", user });
};
//user por id

//crear usuario
exports.createUsers = async (req, res) => {
  if (req.file) {
    newUser.image = req.file.filename;
  }
  const newUser = req.body;
  const { password } = req.body;
  const user = new User(newUser);

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
  //borrar fisicamente de la BD,
  const user = await User.findByIdAndDelete(id);
  res.json({
    msg: "DELETE user API",
    user,
  });
};
