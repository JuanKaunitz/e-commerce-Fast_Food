const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true
    },
    name:{
        type: String,
        required: 'Add your Name'
    },
    password:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('User',UserSchema);