
var session = require("express-session")
var express = require("express");

var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var sess = req.session;
    if (!sess.counter) {
        sess.counter = 1
    }
    res.render('index', { 'counter' : sess.counter });
    console.log(sess.counter);
})

app.post('/counter', function(req, res) {
    var sess = req.session;
    sess.counter += 1;
    res.redirect('/');
})

app.post('/plusTwo', function(req, res) {
    var sess = req.session;
    sess.counter += 2
    res.redirect('/');
})

app.post('/reset', function(req, res) {
    var sess = req.session;
    sess.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
