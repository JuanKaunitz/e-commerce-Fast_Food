const jwt = require("jsonwebtoken");
const User = require("../models/User");

const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");
  // !token ? res.status(401).json({
  //     msg:'No hay token en la peticion'
  // }):null;
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la peticion",
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRETKEY);
    //leer usuario que corresponde al uid
    const user = await User.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: "Token no valido - usuarion no existe en BD",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token no valido" });
  }
};

module.exports = {
  validateJWT,
};