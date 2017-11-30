var session = require("express-session")
var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'sssssssssshhhhh'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
    res.render('index');
})

app.get('/resultPage', function(req, res) {
    var sess = req.session;
    res.render('result', {'info': sess.info})
})

app.post('/result', function(req, res) {
    req.session.info = req.body
    console.log(req.session.info)
    res.redirect('/resultPage')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});