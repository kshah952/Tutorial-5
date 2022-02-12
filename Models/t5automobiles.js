var mongoose = require('mongoose');

var automobileSchema = mongoose.Schema({
    name:String,
    brand:String
})

module.exports = mongoose.model("t5automobiles",automobileSchema)