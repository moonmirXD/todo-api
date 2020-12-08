import mongoose from 'mongoose';
const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true,
}

const requiredDefaultData = { 
    type: Date, 
    default: Date.now,
}

const todoSchema = new Schema({
  title:  requiredString,
  author: requiredString,
  description:   String,
  created_at: requiredDefaultData,
  updated_at:requiredDefaultData,
});