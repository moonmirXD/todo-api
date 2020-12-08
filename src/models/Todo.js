const mongoose = require('mongoose');
const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true,
}

const todoSchema = new Schema({
  title:  requiredString,
  author: requiredString,
  description: String,
  isDone: {
      type: Boolean,
      default: false,
  }
},{
    timestamps: true,
});


const todo = mongoose.model('todo', todoSchema);

module.exports = todo