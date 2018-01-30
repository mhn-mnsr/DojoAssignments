var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var RegisterUser = mongoose.model('RegisterUser');
var user = require('express-session');

module.exports = {
    create: function(req, res) {
        console.log("In RegisterUser")
        var regUser = new RegisterUser
        ({
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.password,
            ConfirmPassword : req.body.confirm_password,
            Birthday: req.body.birthday
        });
        if(req.body.password === req.body.confirm_password){
            console.log("====inside if check=====")
            regUser.save(function (err, regUser) {
                if(err){
                    console.log(err);
                    console.log("Not all fields filled out")
                    res.redirect("/", {'errors' : err})
                } else {
                    console.log("successfull added a user");
                    req.session.user = regUser._id;
                    res.render("success", {'regUser': regUser});
                }
            })
        }
        else{
            console.log('=====skipped if check=====');
        }
    },

    login: function(req, res) {
        console.log("In Login")
        console.log(req.body.email)
        console.log(req.body.password)
        RegisterUser.findOne({ 'Email' : req.body.email }, function(err, regUser){
            if(regUser != null){
                console.log("======after if reguser!=null check======")
                console.log(regUser);
                bcrypt.compare(req.body.password, regUser.Password)
                .then(function (matchedPassword) {
                        console.log("Password match!");
                        req.session.user = regUser._id;
                        console.log(regUser)
                        res.redirect("/user/success")
                })
                    .catch(function (errors, notMatched) {
                        console.log("email doesnt exist");
                        console.log(errors);
                        res.redirect('/')
                    })
            }
        }
    )},

    success: function(req, res) {
        RegisterUser.findOne({_id: req.session.user }, function (errors, regUser) {
            console.log(regUser);
            if(errors) {
                console.log(errors);
            }
            else {
                console.log(regUser);
                res.render("success", {'regUser': regUser});
            }
        })
    },
}