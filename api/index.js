require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const { URL_CONNECTION, DB ,PORT} = process.env;

//conectar a mongoose

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
//rutas de la server
server.use('/',routers())

server.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto: ${PORT}`)
})


