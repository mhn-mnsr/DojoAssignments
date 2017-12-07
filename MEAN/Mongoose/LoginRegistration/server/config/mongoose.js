var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'), //used
    models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/loginregistration');

fs.readdirSync(models_path).forEach(function(file) {
if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
}
});