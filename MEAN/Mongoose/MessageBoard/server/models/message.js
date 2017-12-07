var mongoose = require('mongoose'),
Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({
    Name: String,
    Message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

mongoose.model('Message', MessageSchema);