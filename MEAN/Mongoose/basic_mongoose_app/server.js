var session = require("express-session")
var express = require("express");
var mongoose = require("mongoose");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/basic_mongoose_app');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong');
          } else {
            console.log('successfully added a user!');
            res.redirect('/');
          }
        })
      })

app.listen(8000, function() {
    console.log("listening on port 8000");
})