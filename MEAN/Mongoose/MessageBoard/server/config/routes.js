var mongoose = require('mongoose');
var messages = require('../controllers/messageboard.js');

module.exports = function(app) {
    app.get('/', function (req, res) {
       messages.index(req,res);
    });

    app.post('/message', function (req, res){
        messages.message(req,res);
    });

    app.post('/comment/:id', function(req, res) {
        messages.comment(req,res);
    });
    
}