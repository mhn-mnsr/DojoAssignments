var mongoose = require('mongoose');
var players = require('../controllers/players.js');

module.exports = function(app){

    app.get('/api/getPlayers', function(req, res){
        players.getPlayers(req,res);
    });

    app.post('/api/addPlayer', function(req,res){
        players.addPlayer(req,res)
    });

    app.post('/api/deletePlayer', function(req,res){
        players.deletePlayer(req,res)
    });

    app.get('/api/changeStatus/:id/:game/:status', function(req, res){
        players.changeStatus(req, res)
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    });
}