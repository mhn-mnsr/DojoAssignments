var mongoose = require ('mongoose');
var Task = mongoose.model('Task');
// var bcrypt = require ('bcrypt');
var path = require ('path');

module.exports = {

    index: (request, response) => {
  
      Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => console.log(error));
  
    },
    create: (request, response) => {
  
      Task.create(request.body)
        .then(task => response.json(task))
        .catch(error => console.log(error));
  
    }
  };