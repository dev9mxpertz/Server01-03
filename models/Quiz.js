const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [{ type: String }], // Array of strings for multiple choice options
    answer: { type: String, required: true },
    tag: String,
    difficultyLevel: Number,
    
    // Additional fields as needed
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
