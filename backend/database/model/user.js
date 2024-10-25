
const mongoose = require('mongoose');

 
// Define the  Student Schema
const studentSchema = new mongoose.Schema({
  userID: {
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

const Student = mongoose.model('Student', studentSchema);

module.exports=Student;