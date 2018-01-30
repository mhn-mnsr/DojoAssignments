const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

var Schema  = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Task title is required'],
    minlength: [5, 'Task title length must be greater than 5'],
    unique: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timestamps: true
});
taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Task = mongoose.model('Task', taskSchema);
