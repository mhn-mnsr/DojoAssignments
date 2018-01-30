var mongoose = require('mongoose');
var users = require('../controllers/players.js');

module.exports = function(app){

    app.get('/api/getUsers', function(req, res){
        users.getUsers(req,res);
    });

    app.post('/api/addUser', function(req,res){
        players.addUser(req,res)
    });
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    });
}