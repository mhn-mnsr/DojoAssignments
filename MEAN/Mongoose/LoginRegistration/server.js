var express = require("express"), 
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = 8000;
    session = require("express-session");

app.use(bodyParser.urlencoded({extended: true})); //used
app.use(express.static(path.join(__dirname, './static')));
app.use(session({
    secret:'shssshhhhhh',
    resave: true,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, './views')); //used
app.set('view engine', 'ejs'); //used


require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

app.listen(port, function () {
    console.log("listening on port 8000");
})