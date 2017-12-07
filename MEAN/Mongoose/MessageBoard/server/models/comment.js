var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var CommentSchema = new mongoose.Schema ({
    Name: String,
    Comment: String,
    _message: {type: Schema.Types.ObjectId, ref:'Message'}
}, {timestamps: true});

mongoose.model('Comment', CommentSchema)