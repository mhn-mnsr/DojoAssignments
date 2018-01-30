// - - - - = = = = Configurations = = = = - - - - 

//Http
var http = require ('http')
// Express
var express = require('express');
var app = express();

// Path
var path = require('path');

// CORS
var cors = require('cors');
app.use(cors());

//Favicon
var favicon = require('serve-favicon');

// Static Directory
app.use(express.static(__dirname + '/AngularApp/dist'));

// Body Parser 
var parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Morgan (optional)
let morgan = require("morgan");
app.use(morgan('dev'));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


// - - - - = = = = Model = = = = - - - - 
// var uniqueValidator = require('mongoose-unique-validator');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/task-api');
// mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
// mongoose.Promise = global.Promise;
// var { Schema } = mongoose;
// var taskSchema = new Schema({
//   title: {
//     type: String,
//     trim: true,
//     required: [true, 'Task title is required'],
//     minlength: [5, 'Task title length must be greater than 5'],
//     unique: true
//   },
//   description: {
//     type: String,
//     trim: true,
//     default: ''
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//     default: false
//   },
// }, {
//   timestamps: true
// });
// taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
// var Task = mongoose.model('Task', taskSchema);




// - - - - = = = = Controller = = = = - - - - 
// var taskController = {
//   index: (request, response) => {

//     Task.find({})
//       .then(tasks => response.json(tasks))
//       .catch(error => console.log(error));

//   },
//   create: (request, response) => {

//     Task.create(request.body)
//       .then(task => response.json(task))
//       .catch(error => console.log(error));

//   }
// };




// - - - - = = = = Routes = = = = - - - - 
// app 
// .get('/tasks', taskController.index)
// .post('/tasks', taskController.create)




// - - - - = = = = ALTERNATE FOR: Routes+Controllers = = = = - - - - (already cut out)
// app 
// .get('/tasks', (request, response) => {
  
//   Task.find({})
//     .then(tasks => response.json(tasks))
//     .catch(error => console.log(error));  

// })
// .post('/tasks', (request, response) => {
  
//   Task.create(request.body)
//     .then(task => response.json(task))
//     .catch(error => console.log(error));

// })



// - - - - = = = = Server Listener = = = = - - - - 
var port = 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));