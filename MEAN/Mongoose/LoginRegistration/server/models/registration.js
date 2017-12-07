var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var RegistrationSchema = new mongoose.Schema ({
    Name: {
        type: String,
        required: [true, "this is for something else"],
        trim: true,
    },
    Email : {
        type: String,
        required: [true, "please add correct email"],
        minlength: 6,
        maxlength: 32,
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
        validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        },
        message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        },
    ConfirmPassword: {
        type: String,
        required: true
    }
        
    },
    Birthday: {
        type: Date,
        required: true
    }
}, {timestamps: true});

RegistrationSchema.pre('save', function(callback){
    // Hash before saving
    console.log("before hashing password")
    bcrypt.hash(this.Password,10)
        .then(hashed => {
            this.Password = hashed
            console.log("after hashing password")
            console.log(this.Password)
            callback();
            
        })
        
});

mongoose.model('RegisterUser', RegistrationSchema);
