require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const cors = require('cors');
const { URL_CONNECTION, DB ,PORT} = process.env;

//conectar a mongoose
// let Mongoose =
//   process.env.NODE_ENV === "production"
//     ? new mongoose({
//         database: "fastfood",
//         dialect: "postgres",
//         host: "localhost",
//         port: 5432,
//         username: "duartes",
//         password: "24090512",
//         pool: {
//           max: 3,
//           min: 1,
//           idle: 10000,
//         },
//         dialectOptions: {
//           ssl: {
//             require: true,
//             // Ref.: https://github.com/brianc/node-postgres/issues/2009
//             rejectUnauthorized: false,
//           },
//           keepAlive: true,
//         },
//         ssl: true,
//       })
//     : new mongoose.connect(`${URL_CONNECTION}${DB}`, {
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//         useCreateIndex:true,
//         useFindAndModify:false
//     }, () => {
//         console.log('DataBase connected')
//     });


mongoose.Promise = global.Promise;
mongoose.connect(`${URL_CONNECTION}${DB}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}, () => {
    console.log('DataBase connected')
})
//
//CREAMOS EL SERVIDOR
//
const server = express();
//habilitar el parseo de los datos
server.use(express.json());
server.use(express.urlencoded({extended:true}));
//habilitar el cors
server.use(cors());
//rutas de la server
server.use('/',routers())

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

server.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto: ${PORT}`)
})


