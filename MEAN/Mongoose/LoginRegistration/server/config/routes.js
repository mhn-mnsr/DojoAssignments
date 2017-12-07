var mongoose = require('mongoose');
var Registration = mongoose.model('RegisterUser');

var registrations = require('../controllers/loginregistration.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render("index");
    });

    app.post('/user/create', function (req, res) {
        registrations.create (req,res);
    });

    app.post('/user/login', function(req,res) {
        registrations.login (req,res);
    });

    app.get('/user/success', function(req, res) {
        registrations.success(req,res)
    });

}