
const mongoose = require('mongoose');

 
// Define the  user Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removes extra whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removes extra whitespace
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensures password has a minimum length
  },
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const User = mongoose.model('Student', userSchema);

module.exports=User;