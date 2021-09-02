require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const cors = require('cors');
const { URL_CONNECTION, DB } = process.env;
const port = process.env.PORT || 3003
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
server.use(express.urlencoded({extended:true}));
server.use(express.json());
//habilitar el cors
server.use(cors());
//rutas de la server
server.use('/',routers())

server.listen(port ,()=>{
    console.log(`servidor corriendo en el puerto: ${port}`)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

})
