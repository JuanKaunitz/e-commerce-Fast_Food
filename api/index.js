require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const cors = require('cors');
const { URL_CONNECTION, DB ,PORT} = process.env;

//conectar a mongoose

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://duartes:24090512@cluster0.21jwd.mongodb.net/fastfood`, {
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

server.listen(3001,()=>{
    console.log(`servidor corriendo en el puerto: `)
})


