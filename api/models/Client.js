const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true //elimina espacio en blancos
    },
    name:{
        type: String,
        required: 'Add your name'
    },
    password:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Client',ClientSchema);