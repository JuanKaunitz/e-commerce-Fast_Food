const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
    },
    type:{
        type: String,
    },
    identifier :{
        type:Number,        
    }, 
    image:{
        type: String,
            
    },
    price:{
        type: String,
             
    },
    description:{
        type: String,
    },
    stock:{
        type: Boolean               
    }

});

module.exports = mongoose.model('Product',ProductSchema);