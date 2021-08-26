const bcrypt = require("bcryptjs");
const crypto = require('crypto');
const { generateJWT } = require("../helpers/generate-jwt");
const User = require("../models/User");
const enviarEmail = require('../helpers/emails');

exports.authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    //verificar el email
    if (!user) {
      return res.status(400).json({
        msg: "Username and Password not Found - Email",
      });
    }
   
    //verificar la contraseña de
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Username and Password not Found - Password",
      });
    }
    //generar el JWT
    const token = await generateJWT(user.id);

    res.json({
      msg: "POST login",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "contact the administrator",
    });
  }
};

exports.googleSignIn = (req, res) => {
  res.json({
    msg: "Todo ok!",
  });
};

exports.resetPassword= async(req,res,next) =>{
  const user = await User.findOne({email:req.body.email});
  if(!user){
    res.status(401).json({
      msg:'Esa cuenta no existe'
    });
     next();
  }else{

    user.token = crypto.randomBytes(20).toString('hex');
    user.expireToken = Date.now() + 3600000;
    //guardar el user
    await user.save();
    const resetUrl = `http://localhost:3000/reset-password/${user.token}`;

    const contentHTML = `
        <h1>User Information</h1>
        <ul>
        <h2>Genere su nueva contraseña</h2>
        <p>Para continuar necesitaremos que se rediriga al siguiente link y nos indique su nueva contraseña</p>
            ${resetUrl}
        </ul>
    `;

await enviarEmail.enviar({
  email:user.email,
  name:user.name,
  contentHTML
})
.then(result => res.json('enviado'))
.catch(error => console.log(error.message))

    
  //   //TODO: Enviar notificacion
  //  return res.json({
  //     msg:'correcto Revisa su email para reestablecer su contraseña',
  //     resetUrl
  //   })
  }
};

exports.reestablecerPassword = async(req,res,next) =>{
  const user = await User.findOne({
    email:req.body.email,
    toke:req.params.token,
    expireToken:{
      $gt:Date.now()
    }
  });
  if(!user){
    res.status(401).json({
      msg:'El token ya Expiro por favor solicite uno nuevo'
    });
    next();
  }
  res.json('token ok')

};

exports.saveNewPassword = async(req,res,next) =>{
  const user = await User.findOne({
    token:req.params.token,
    expireToken:{
      $gt:Date.now()
    }
  });
  if(!user){
    res.status(401).json({
      msg:'Error: El token ya Expiro por favor solicite uno nuevo'
    });
    next();
  }
  user.password = req.body.password;
   //encriptar contraseña del
   const salt = bcrypt.genSaltSync();
   user.password = bcrypt.hashSync(user.password, salt);
  user.token = undefined;
  user.expireToken = undefined;
  console.log(user)
  await user.save();
  res.json({
    msg:'Password Modificado Correctamente Dirijase a la pagina principal',
    user
  })
}
