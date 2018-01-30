var mongoose = require ('mongoose');

//Change example to table name

var playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String},
    g1: {type: String, required: true},
    g2: {type: String, required: true},
    g3: {type: String, required: true}
});

//Change example here aswell
var Player = mongoose.model('Player', playerSchema);