const User = require("../models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const shortid = require("shortid");

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
//user por id
exports.getUserById = async (req, res, next) => {
  //console.log(req.params.id)
  if(!req.params.id ){
   return res.status(400).json({msg:'id invalido'})
  }
  const user = await User.findById(req.params.id).populate('order');
  if (!user) {
    res.status(300).json({ msg: "Ese Usuario no existe" ,user:'not found'});
    return next();
  }
  res.json({ msg: "Usuario encontrado", user });
};
//actualizar usuario
exports.updateUser = async (req, res) => {
  // const { id } = req.params;
  // const {  ...rest } = req.body;
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json({ msg: "User Updated", user });
  } catch (error) {
    console.log(error);
    res.status(301).json({msg:'Nose puedo actualizar el usuario'});
    next()
  }
 
  //validar contra la base de datos
  // if (password) {
  //   //encriptar contraseña del
  //   const salt = bcrypt.genSaltSync();
  //   rest.password = bcrypt.hashSync(password, salt);
  // }
  
 
};

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
