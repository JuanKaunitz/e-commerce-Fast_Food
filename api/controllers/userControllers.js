const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createNewUser = async(req,res) =>{
//leer los datos 
const user = new User(req.body);
user.password = await bcrypt.hash(req.body.password, 10);
try {
    await user.save();
    res.json({
        msg:'Usuario Creado Correctamente',
        user
    });
} catch (error) {
    console.log(error);
    res.status(400).json({msg:'Hubo un error'});
}
};