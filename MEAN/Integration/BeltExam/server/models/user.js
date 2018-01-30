var mongoose = require ('mongoose');

//Change example to table name

var userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    score: {type: Number},
});

//Change example here aswell
var User = mongoose.model('User', userSchema);