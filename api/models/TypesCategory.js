const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypesCategorySchema = Schema({
    nameCategory:{
        type:String
    }
});

module.exports = mongoose.model("TypeCategory", TypesCategorySchema);