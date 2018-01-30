var mongoose = require ('mongoose');
var User = mongoose.model('User');

module.exports = {
    getUsers: function(req,res){
        User.find({}, function(err,users){
            res.json(users);
        })
    },

    addUser: function(req, res){
        var newUser = new User();
        newUser.name = req.body.name;
        newUser.score = '0'
        newUser.save(function(err){
            if (err){
                res.json({error:"Error Saving"});
            } else {
                res.json({good: "Everythin good"});
            }
        })
    }
}