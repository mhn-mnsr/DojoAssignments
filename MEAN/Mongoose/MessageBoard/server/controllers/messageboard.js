var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
    index: function(req, res) {
        console.log("IN /")
        Message.find({})
        .populate('_comments')
        .exec(function(err, dbMessage) {
            console.log("this is the db message" , dbMessage);
            res.render("index", {'message': dbMessage});
        })
    },

    message: function(req, res) {
        console.log("POST DATA", req.body);
        var newMessage = new Message
        ({
            Name: req.body.name,
            Message: req.body.message,
        })
        newMessage.save(function (err){
            if(err){
                console.log("Not all fields filled out")
                res.render("index", {'errors' : err})
            } else {
                console.log("successfull added a message");
                res.redirect('/')
            }
        })
    },

    comment: function(req, res) {
        console.log("in create comment")
        console.log(req.body);
        var newComment = new Comment 
        ({
            Name: req.body.name,
            Comment: req.body.comment,
        });
        Message.findOne({_id: req.params.id}, function(errMess, dbMessage) {
            newComment._message = dbMessage._id;
            newComment.save(function(error) {
                dbMessage._comments.push(newComment);
                dbMessage.save(function(error) {
                    res.redirect('/');
                });
            });
        });
    }
}