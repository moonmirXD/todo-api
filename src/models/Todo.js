import mongoose from 'mongoose';
const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true,
}

const defaultRequiredDate = { 
    type: Date, 
    default: Date.now,
}

const todoSchema = new Schema({
  title:  requiredString,
  author: requiredString,
  description:   String,
  created_at: defaultRequiredDate,
  updated_at:defaultRequiredDate,
});