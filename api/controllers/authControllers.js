const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authLogin = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    //verificar el email
    if (!user) {
      return res.status(401).json({
        msg: "Username and Password not Found - Email",
      });
    }
    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
        id: user._id,
      },
      "SECRETKEY",
      { expiresIn: "12h" }
    );
    res.json({
      msg: "POST login",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "contact the administrator",
    });
  }
};

module.exports = { authLogin };
