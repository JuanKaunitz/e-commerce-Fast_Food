require('dotenv').config();
const express = require('express');
const routers = require('./routers');
const mongoose = require('mongoose');
const cors = require('cors');
const { URL_CONNECTION, DB ,PORT} = process.env;

//conectar a mongoose

mongoose.Promise = global.Promise;
mongoose.connect(`${URL_CONNECTION}`, {
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

server.listen(PORT ,()=>{
    console.log(`servidor corriendo en el puerto: `)
})

//MIDDLEWARES

server.use(multer({
dest: path.join(_dirname,"destino") //destino donde quiero que vuelvan las imagenes


}).singel("imput_delimage"))



server.post('/upload' , (req,res)=>{


req.file // objeto con prop de la imagen 
res.send("subida")

})