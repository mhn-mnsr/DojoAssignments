var express = require("express");
var session = require("express-session");

var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/QuotingDojo_1');
var QuoteSchema = new mongoose.Schema({
    Name: { type: String, required: true, minlength: 3},
    Quote: {type: String, required: true, maxlength: 200},
},
    {timestamps: true});
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(session({secret: 'shhhh'})); //string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/create', function (req, res){
    console.log("POST DATA", req.body);
    req.session.quote = req.body;
    // This is where we would add the user from req.body to the database.
    var quote = new Quote
    ({
        Name : req.body.name,
        Quote : req.body.quote,
    })
    // try to save that new quote to the db (this is the method that actually
    //inserts into the db) and run a callbacl function with an error from the operations
    quote.save(function(err){
         //if there is an error console.log that something went wrong!
         if(err){
             console.log("Not all fields are filled out correctly")
             res.render("index", {'errors' : err})
         } else {
             console.log('successfully added a quote!');
             res.redirect('result');
         }
    })
})

app.get('/result', function(req, res) {
    Quote.find({}, function(error, quote) {
        console.log(quote);
        res.render('result', {'quotes': quote})
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
});