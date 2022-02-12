var mongoose = require('mongoose');

var gadgetSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("t5gadgets",gadgetSchema)