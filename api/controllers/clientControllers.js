// const Client = require('../models/Client');

// const bcrypt = require('bcrypt');

// exports.createNewClient = async(req,res) =>{

// const client = new Client(req.body);
// client.password = await bcrypt.hash(req.body.password, 10);
// try {
//     await client.save();
//     res.json({
//         msg:'Client created correctly ',
//         client
//     });
// } catch (error) {
//     console.log(error);
//     res.status(400).json({msg:'Error'});
// }
// };