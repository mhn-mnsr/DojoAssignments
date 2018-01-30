var mongoose = require('mongoose');
var Task = require('../controllers/taskController.js');
// var path = require('path');

console.log("In routes, can you read this?")

module.exports = function(app) {
    app.get('/', function(req,res){
        Task.index(req, res)
    });

    app.get('/tasks', function(req, res){
        Task.index(req, res)
    });

    app.post('/tasks', function(req, res){
        Task.create(req, res)
    });

    app.all("*", (request, response) => { response.sendFile(path.resolve("./public/dist/index.html")) });
}