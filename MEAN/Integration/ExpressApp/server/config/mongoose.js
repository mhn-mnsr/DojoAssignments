var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/task-api');

console.log("In mongoose.js")
var models_path = path.join( __dirname , '/../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})